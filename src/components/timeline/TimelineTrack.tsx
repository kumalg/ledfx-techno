import { type DeviceKey } from "../../ledfx/devices";
import { useProjectStore } from "../../timeline/store";
import { TimelineClip } from "./TimelineClip";

interface TimelineTrackProps {
  deviceId: DeviceKey;
}

export function TimelineTrack({ deviceId }: TimelineTrackProps) {
  const currentProject = useProjectStore((state) => state.currentProject);
  const zoom = useProjectStore((state) => state.timelineState.zoom);
  const draggedEffect = useProjectStore((state) => state.timelineState.draggedEffect);
  const addClip = useProjectStore((state) => state.addClip);
  
  if (!currentProject) return null;
  
  const clips = currentProject.clips.filter((clip) => clip.deviceId === deviceId);
  const width = currentProject.duration * zoom;
  
  const deviceNames: Record<DeviceKey, string> = {
    rails: "Rails",
    rails2: "Rails 2",
    ceiling: "Ceiling",
  };
  
  const handleTrackDrop = (e: React.DragEvent) => {
    e.preventDefault();
    
    if (!draggedEffect) return;
    
    // Calculate drop position relative to track
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const startTime = offsetX / zoom;
    
    // Create a new clip with default 5 second duration
    addClip({
      deviceId,
      effect: draggedEffect,
      config: draggedEffect.config,
      startTime: Math.max(0, startTime),
      duration: 5,
    });
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };
  
  return (
    <div className="flex border-b border-border group">
      <div className="w-32 bg-card border-r border-border px-3 py-2 flex items-center justify-between flex-shrink-0">
        <span className="text-sm font-medium text-foreground">{deviceNames[deviceId]}</span>
        <button className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-opacity">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      <div 
        className="flex-1 relative h-12 bg-background/50"
        style={{ width: `${width}px` }}
        onDrop={handleTrackDrop}
        onDragOver={handleDragOver}
      >
        {clips.map((clip) => (
          <TimelineClip key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  );
}
