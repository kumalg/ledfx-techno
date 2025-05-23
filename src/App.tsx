import { useCallback, useRef } from 'react'
import './App.css'
import ReactPlayer from 'react-player'
import { OnProgressProps } from 'react-player/base'
import { PLAYLIST, VIDEO_URL } from './playlists/restrictedGroupChat'
import { durationToMilliseconds } from './helpers'
import { api } from './ledfx/api'
import { ceiling, DeviceEffect, rails, rails2 } from './ledfx/devices'

const playlistWithMilliseconds = new Map<number, DeviceEffect[]>(
  [...PLAYLIST.entries()].map(([time, effects]) => [durationToMilliseconds(time), Object.entries(effects).map(([device, effect]) => {
    if (device === "rails") {
      return rails(effect)
    }
    if (device === "rails2") {
      return rails2(effect)
    }
    if (device === "ceiling") {
      return ceiling(effect)
    }
    throw new Error(`Unknown device: ${device}`)
  })])
);

console.log(playlistWithMilliseconds.size, "effects in playlist");

const pauseAtEndTime = durationToMilliseconds("01:17:28");

function App() {
  const playerRef = useRef<ReactPlayer>(null);

  const videoPlayed = useRef(false);
  const lastPlayerTime = useRef<{ videoTime: number, timestamp: number } | undefined>(undefined);
  const lastPlayedEffectTime = useRef<number | undefined>(undefined);
  const awaitedEffectTimes = useRef(new Set<number>());

  const pausedAtEnd = useRef(false);

  const handleProgress = useCallback((props: OnProgressProps) => {
    lastPlayerTime.current = { videoTime: props.playedSeconds, timestamp: Date.now() };
  }, []);

  const handlePlay = () => {
    videoPlayed.current = true;
    loop();
  }

  const handleEnded = () => {
    videoPlayed.current = false;
  }

  const handlePaused = () => {
    videoPlayed.current = false;
  }

  const loop = async () => {
    if (!videoPlayed.current) {
      return;
    }

    if (!lastPlayerTime.current) {
      setTimeout(loop, 100);
      return;
    }

    const now = Date.now();
    const timeDiff = now - lastPlayerTime.current.timestamp;
    const milliseconds = (lastPlayerTime.current.videoTime * 1000) + timeDiff;

    const allPreviousTimes = [...playlistWithMilliseconds.keys()].filter(time => time <= milliseconds);
    const lastTime = allPreviousTimes[allPreviousTimes.length - 1];

    if (lastTime && lastPlayedEffectTime.current !== lastTime && !awaitedEffectTimes.current.has(lastTime)) {
      awaitedEffectTimes.current.add(lastTime);

      const effects = playlistWithMilliseconds.get(lastTime)!

      const promises = await Promise.all(effects.map(effect => api.setEffect(effect.device, effect.data)));
      const parsed = await Promise.all(promises.map(result => result.json()))
      const results = parsed.map(({ status }) => status);
      const success = results.every(status => status === 'success');

      if (success) {
        console.log(`Successfully set effect on ${effects.map(effect => effect.device).join(', ')}`);
        lastPlayedEffectTime.current = lastTime;
      } else {
        console.error(`Failed to set effect on ${effects.map(effect => effect.device).join(', ')}`);
      }

      awaitedEffectTimes.current.delete(lastTime);
    }

    if (!pausedAtEnd.current && milliseconds >= pauseAtEndTime) {
      console.log("Pausing at end");
      pausedAtEnd.current = true;
      playerRef.current?.getInternalPlayer().pauseVideo();
      return;
    }

    setTimeout(loop, 100);
  }

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_URL}
        onProgress={handleProgress}
        controls
        onPlay={handlePlay}
        onEnded={handleEnded}
        onPause={handlePaused}
      />
    </div>
  )
}

export default App
