import { useRef, useState, useCallback } from "react";
import { ALL_DEVICE_KEYS } from "../../ledfx/devices";
import { useProjectStore } from "../../timeline/store";

const PIXELS_PER_SECOND = 50;

export function Timeline() {
  const currentProject = useProjectStore((state) => state.currentProject);
  const updateClip = useProjectStore((state) => state.updateClip);
  const deleteClip = useProjectStore((state) => state.deleteClip);
  const setSelectedClip = useProjectStore((state) => state.setSelectedClip);
  const selectedClipId = useProjectStore((state) => state.timelineState.selectedClipId);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [draggingClip, setDraggingClip] = useState<{
    id: string;
    startX: number;
    startTime: number;
    mode: 'move' | 'resize-start' | 'resize-end';
  } | null>(null);

  const handleMouseDown = useCallback((
    e: React.MouseEvent,
    clipId: string,
    mode: 'move' | 'resize-start' | 'resize-end'
  ) => {
    e.preventDefault();
    setSelectedClip(clipId);
    
    const clip = currentProject?.clips.find(c => c.id === clipId);
    if (!clip) return;

    setDraggingClip({
      id: clipId,
      startX: e.clientX,
      startTime: clip.startTime,
      mode,
    });
  }, [currentProject, setSelectedClip]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!draggingClip || !currentProject) return;

    const deltaX = e.clientX - draggingClip.startX;
    const deltaSeconds = deltaX / PIXELS_PER_SECOND;
    
    const clip = currentProject.clips.find(c => c.id === draggingClip.id);
    if (!clip) return;

    if (draggingClip.mode === 'move') {
      const newStartTime = Math.max(0, draggingClip.startTime + deltaSeconds);
      updateClip(draggingClip.id, { startTime: newStartTime });
    } else if (draggingClip.mode === 'resize-start') {
      const newStartTime = Math.max(0, draggingClip.startTime + deltaSeconds);
      const newDuration = Math.max(0.5, clip.duration - deltaSeconds);
      updateClip(draggingClip.id, { startTime: newStartTime, duration: newDuration });
    } else if (draggingClip.mode === 'resize-end') {
      const newDuration = Math.max(0.5, clip.duration + deltaSeconds);
      updateClip(draggingClip.id, { duration: newDuration });
    }
  }, [draggingClip, currentProject, updateClip]);

  const handleMouseUp = useCallback(() => {
    setDraggingClip(null);
  }, []);

  // Add event listeners when dragging
  if (draggingClip) {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }

  if (!currentProject) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-card text-muted-foreground">
        <p>No project selected</p>
      </div>
    );
  }

  const duration = currentProject.duration;
  const totalWidth = duration * PIXELS_PER_SECOND;

  return (
    <div className="flex flex-col h-full bg-card">
      {/* Header with ruler */}
      <div className="flex border-b border-border">
        {/* Track label area */}
        <div className="w-32 flex-shrink-0 border-r border-border bg-muted" />
        {/* Ruler */}
        <div className="flex-1 overflow-hidden">
          <div className="h-8 border-b border-border flex relative" style={{ width: `${totalWidth}px` }}>
            {Array.from({ length: Math.ceil(duration) + 1 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center flex-shrink-0 border-l border-muted-foreground/30"
                style={{ width: `${PIXELS_PER_SECOND}px` }}
              >
                <div className="text-xs text-muted-foreground h-full flex items-center justify-center">
                  {i}s
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracks container */}
      <div ref={scrollContainerRef} className="flex-1 overflow-auto">
        <div className="flex">
          {/* Track labels */}
          <div className="w-32 flex-shrink-0 border-r border-border bg-muted">
            {ALL_DEVICE_KEYS.map((deviceId) => (
              <div
                key={deviceId}
                className="h-20 border-b border-border flex items-center px-3 text-sm font-medium text-foreground"
              >
                {{
                  rails: "Rails",
                  rails2: "Rails 2",
                  ceiling: "Ceiling",
                }[deviceId] || deviceId}
              </div>
            ))}
          </div>

          {/* Tracks with clips */}
          <div className="flex-1" style={{ width: `${totalWidth}px` }}>
            {ALL_DEVICE_KEYS.map((deviceId) => {
              const clips = currentProject.clips.filter((c) => c.deviceId === deviceId);
              return (
                <div
                  key={deviceId}
                  className="h-20 border-b border-border relative bg-background/30"
                >
                  {clips.map((clip) => (
                    <div
                      key={clip.id}
                      className={`absolute top-1 bottom-1 rounded px-2 py-1 cursor-move transition-all group flex items-center gap-1 ${
                        selectedClipId === clip.id
                          ? 'bg-primary ring-2 ring-primary/50'
                          : 'bg-primary/70 hover:bg-primary/80'
                      }`}
                      style={{
                        left: `${clip.startTime * PIXELS_PER_SECOND}px`,
                        width: `${clip.duration * PIXELS_PER_SECOND}px`,
                        minWidth: '40px',
                      }}
                      onMouseDown={(e) => handleMouseDown(e, clip.id, 'move')}
                    >
                      {/* Resize handle - left */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-primary-foreground/50"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, clip.id, 'resize-start');
                        }}
                      />

                      {/* Clip content */}
                      <div className="flex-1 truncate text-xs font-medium text-primary-foreground pointer-events-none">
                        {clip.effect.name || clip.effect.type}
                      </div>

                      {/* Delete button */}
                      {selectedClipId === clip.id && (
                        <button
                          className="opacity-0 group-hover:opacity-100 text-primary-foreground hover:text-red-400 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteClip(clip.id);
                          }}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}

                      {/* Resize handle - right */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-primary-foreground/50"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, clip.id, 'resize-end');
                        }}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
