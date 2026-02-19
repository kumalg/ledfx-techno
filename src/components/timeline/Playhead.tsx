import { useRef, useEffect } from "react";
import { useProjectStore } from "../../timeline/store";

interface PlayheadProps {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
}

export function Playhead({ scrollContainer }: PlayheadProps) {
  const playheadRef = useRef<HTMLDivElement>(null);
  const currentTime = useProjectStore((state) => state.timelineState.currentTime);
  const zoom = useProjectStore((state) => state.timelineState.zoom);
  const isPlaying = useProjectStore((state) => state.timelineState.isPlaying);
  
  const left = currentTime * zoom;
  
  // Auto-scroll to keep playhead in view when playing
  useEffect(() => {
    if (isPlaying && scrollContainer.current && playheadRef.current) {
      const container = scrollContainer.current;
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const playheadPosition = left;
      
      // Keep playhead in the center third of the visible area
      if (playheadPosition > scrollLeft + containerWidth * 0.66 ||
          playheadPosition < scrollLeft + containerWidth * 0.33) {
        container.scrollTo({
          left: playheadPosition - containerWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [left, isPlaying, scrollContainer]);
  
  return (
    <div
      ref={playheadRef}
      className="absolute top-0 bottom-0 w-0.5 bg-destructive pointer-events-none z-10"
      style={{ left: `${left}px` }}
    >
      <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-destructive" />
    </div>
  );
}
