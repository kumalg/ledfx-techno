import { useRef } from "react";
import { ALL_DEVICE_KEYS } from "../../ledfx/devices";
import { useProjectStore } from "../../timeline/store";
import { TimelineRuler } from "./TimelineRuler";
import { TimelineTrack } from "./TimelineTrack";
import { Playhead } from "./Playhead";

export function Timeline() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const zoom = useProjectStore((state) => state.timelineState.zoom);
  const setZoom = useProjectStore((state) => state.setZoom);
  
  const handleZoomIn = () => {
    setZoom(Math.min(zoom * 1.2, 200));
  };
  
  const handleZoomOut = () => {
    setZoom(Math.max(zoom / 1.2, 20));
  };
  
  return (
    <div className="flex flex-col h-full bg-card">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground">Timeline</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Zoom out"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>
          <span className="text-xs text-muted-foreground font-mono min-w-12 text-center">
            {Math.round(zoom)}px/s
          </span>
          <button
            onClick={handleZoomIn}
            className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
            title="Zoom in"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div ref={scrollContainerRef} className="flex-1 overflow-auto">
        <div className="flex">
          <div className="w-32 flex-shrink-0 border-r border-border bg-card" />
          <div className="flex-1 relative">
            <TimelineRuler />
            <Playhead scrollContainer={scrollContainerRef} />
          </div>
        </div>
        
        <div className="flex flex-col">
          {ALL_DEVICE_KEYS.map((deviceId) => (
            <TimelineTrack key={deviceId} deviceId={deviceId} />
          ))}
        </div>
      </div>
    </div>
  );
}
