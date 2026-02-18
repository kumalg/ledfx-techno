import { useProjectStore } from "../timeline/store";

export function TransportControls() {
  const currentTime = useProjectStore((state) => state.timelineState.currentTime);
  const isPlaying = useProjectStore((state) => state.timelineState.isPlaying);
  const currentProject = useProjectStore((state) => state.currentProject);
  const setCurrentTime = useProjectStore((state) => state.setCurrentTime);
  const setPlaying = useProjectStore((state) => state.setPlaying);
  
  if (!currentProject) return null;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };
  
  const handleStop = () => {
    setPlaying(false);
    setCurrentTime(0);
  };
  
  const handleSkipBack = () => {
    setCurrentTime(Math.max(0, currentTime - 5));
  };
  
  const handleSkipForward = () => {
    setCurrentTime(Math.min(currentProject.duration, currentTime + 5));
  };
  
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-card border-t border-border">
      <div className="flex items-center gap-2">
        <button
          onClick={handleStop}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          title="Stop"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        </button>
        
        <button
          onClick={handleSkipBack}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          title="Skip back 5s"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
          </svg>
        </button>
        
        <button
          onClick={handlePlayPause}
          className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        
        <button
          onClick={handleSkipForward}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          title="Skip forward 5s"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm font-mono text-foreground">
          {formatTime(currentTime)}
        </span>
        <span className="text-sm text-muted-foreground">/</span>
        <span className="text-sm font-mono text-muted-foreground">
          {formatTime(currentProject.duration)}
        </span>
      </div>
    </div>
  );
}
