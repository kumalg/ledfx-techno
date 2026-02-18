import { useProjectStore } from "../../timeline/store";

export function TimelineRuler() {
  const zoom = useProjectStore((state) => state.timelineState.zoom);
  const currentProject = useProjectStore((state) => state.currentProject);
  
  if (!currentProject) return null;
  
  const duration = currentProject.duration;
  const width = duration * zoom;
  
  // Generate time markers every second, minute, etc depending on zoom
  const getMarkers = () => {
    const markers: { time: number; label: string; type: 'major' | 'minor' }[] = [];
    
    // Determine marker interval based on zoom level
    let interval = 1; // seconds
    if (zoom < 50) {
      interval = 10;
    } else if (zoom < 20) {
      interval = 30;
    }
    
    for (let time = 0; time <= duration; time += interval) {
      const isMajor = time % (interval * 5) === 0 || time === 0;
      markers.push({
        time,
        label: formatTime(time),
        type: isMajor ? 'major' : 'minor',
      });
    }
    
    return markers;
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const markers = getMarkers();
  
  return (
    <div className="h-8 bg-muted border-b border-border relative" style={{ width: `${width}px` }}>
      {markers.map((marker) => (
        <div
          key={marker.time}
          className="absolute top-0 bottom-0"
          style={{ left: `${marker.time * zoom}px` }}
        >
          <div className={`h-full border-l ${marker.type === 'major' ? 'border-border' : 'border-border/50'}`}>
            {marker.type === 'major' && (
              <span className="absolute top-1 left-1 text-xs text-muted-foreground font-mono">
                {marker.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
