import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import type { OnProgressProps } from "react-player/base";
import { useProjectStore } from "../timeline/store";

export function VideoPlayer() {
  const playerRef = useRef<ReactPlayer>(null);
  const currentProject = useProjectStore((state) => state.currentProject);
  const currentTime = useProjectStore((state) => state.timelineState.currentTime);
  const isPlaying = useProjectStore((state) => state.timelineState.isPlaying);
  const setCurrentTime = useProjectStore((state) => state.setCurrentTime);
  const setPlaying = useProjectStore((state) => state.setPlaying);
  
  const lastUpdateRef = useRef(0);
  
  // Sync player state with timeline state
  useEffect(() => {
    if (playerRef.current) {
      const currentPlayerTime = playerRef.current.getCurrentTime();
      
      // Only seek if the difference is significant (more than 0.5 seconds)
      // This prevents feedback loops
      if (Math.abs(currentPlayerTime - currentTime) > 0.5) {
        playerRef.current.seekTo(currentTime, 'seconds');
      }
    }
  }, [currentTime]);
  
  const handleProgress = (state: OnProgressProps) => {
    const now = Date.now();
    // Throttle updates to every 100ms
    if (now - lastUpdateRef.current > 100) {
      setCurrentTime(state.playedSeconds);
      lastUpdateRef.current = now;
    }
  };
  
  const handlePlay = () => {
    setPlaying(true);
  };
  
  const handlePause = () => {
    setPlaying(false);
  };
  
  const handleEnded = () => {
    setPlaying(false);
  };
  
  if (!currentProject) return null;
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        ref={playerRef}
        url={currentProject.videoUrl}
        playing={isPlaying}
        onProgress={handleProgress}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        controls
        width="100%"
        height="100%"
        progressInterval={100}
      />
    </div>
  );
}
