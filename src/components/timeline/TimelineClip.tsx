import { useState, useRef } from "react";
import { type TimelineClip as TimelineClipType } from "../../timeline/types";
import { useProjectStore } from "../../timeline/store";

interface TimelineClipProps {
  clip: TimelineClipType;
}

export function TimelineClip({ clip }: TimelineClipProps) {
  const zoom = useProjectStore((state) => state.timelineState.zoom);
  const selectedClipId = useProjectStore((state) => state.timelineState.selectedClipId);
  const setSelectedClip = useProjectStore((state) => state.setSelectedClip);
  const updateClip = useProjectStore((state) => state.updateClip);
  const deleteClip = useProjectStore((state) => state.deleteClip);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState<'left' | 'right' | null>(null);
  const dragStartRef = useRef({ x: 0, startTime: 0, duration: 0 });
  
  const isSelected = selectedClipId === clip.id;
  const left = clip.startTime * zoom;
  const width = clip.duration * zoom;
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedClip(clip.id);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    e.stopPropagation();
    
    setIsDragging(true);
    setSelectedClip(clip.id);
    dragStartRef.current = {
      x: e.clientX,
      startTime: clip.startTime,
      duration: clip.duration,
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleResizeStart = (e: React.MouseEvent, edge: 'left' | 'right') => {
    e.stopPropagation();
    
    setIsResizing(edge);
    setSelectedClip(clip.id);
    dragStartRef.current = {
      x: e.clientX,
      startTime: clip.startTime,
      duration: clip.duration,
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaTime = deltaX / zoom;
    
    if (isDragging) {
      const newStartTime = Math.max(0, dragStartRef.current.startTime + deltaTime);
      updateClip(clip.id, { startTime: newStartTime });
    } else if (isResizing === 'left') {
      const newStartTime = Math.max(0, dragStartRef.current.startTime + deltaTime);
      const newDuration = Math.max(0.5, dragStartRef.current.duration - deltaTime);
      updateClip(clip.id, { startTime: newStartTime, duration: newDuration });
    } else if (isResizing === 'right') {
      const newDuration = Math.max(0.5, dragStartRef.current.duration + deltaTime);
      updateClip(clip.id, { duration: newDuration });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(null);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteClip(clip.id);
  };
  
  return (
    <div
      className={`absolute top-1 bottom-1 rounded px-2 py-1 cursor-move transition-colors group select-none
        ${isSelected 
          ? 'bg-primary ring-2 ring-primary ring-offset-1 ring-offset-background' 
          : 'bg-primary/80 hover:bg-primary/90'
        }
        ${isDragging || isResizing ? 'opacity-80' : ''}`}
      style={{
        left: `${left}px`,
        width: `${width}px`,
      }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {/* Left resize handle */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-primary-foreground/30"
        onMouseDown={(e) => handleResizeStart(e, 'left')}
      />
      
      {/* Content */}
      <div className="flex items-center justify-between h-full pointer-events-none">
        <div className="text-xs text-primary-foreground font-medium truncate flex-1">
          {clip.effect.name || clip.effect.type}
        </div>
        {isSelected && (
          <button
            className="pointer-events-auto ml-2 opacity-0 group-hover:opacity-100 text-primary-foreground hover:text-primary-foreground/70 transition-opacity"
            onClick={handleDelete}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Right resize handle */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-primary-foreground/30"
        onMouseDown={(e) => handleResizeStart(e, 'right')}
      />
    </div>
  );
}
