import { useCallback, useRef } from 'react'
import './App.css'
import ReactPlayer from 'react-player'
import { OnProgressProps } from 'react-player/base'
import { PLAYLIST } from './playlist'
import { durationToMilliseconds } from './helpers'
import { api } from './api'
import { DeviceEffect } from './devices'

const playlistWithMilliseconds = new Map<number, DeviceEffect[]>(
  [...PLAYLIST.entries()].map(([time, effects]) => [durationToMilliseconds(time), effects])
);

function App() {
  const videoPlayed = useRef(false);
  const lastPlayerTime = useRef<{ videoTime: number, timestamp: number } | undefined>(undefined);
  const lastPlayedEffectTime = useRef<number | undefined>(undefined);
  const awaitedEffectTimes = useRef(new Set<number>());

  // const [currentEffects, setCurrentEffects] = useState<DeviceEffect[]>([]);

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

      const effects = playlistWithMilliseconds.get(lastTime)!;

      const promises = await Promise.all(effects.map(effect => api.setEffect(effect.device, effect.data)));
      const parsed = await Promise.all(promises.map(result => result.json()))
      const results = parsed.map(({ status }) => status);
      const success = results.every(status => status === 'success');

      if (success) {
        console.log(`Successfully set effect on ${effects.map(effect => effect.device).join(', ')}`);
        lastPlayedEffectTime.current = lastTime;
        // setCurrentEffects(effects);
      } else {
        console.error(`Failed to set effect on ${effects.map(effect => effect.device).join(', ')}`);
      }

      awaitedEffectTimes.current.delete(lastTime);
    }

    setTimeout(loop, 100);
  }

  return (
    <div>
      {/* {currentEffects.map((effect, index) => (
        <div key={index}>
          <p>{effect.device}</p>
          <pre>{JSON.stringify(effect.data, null, 2)}</pre>
        </div>
      ))} */}
      <ReactPlayer
        url='https://www.youtube.com/watch?v=shFiitpKUSo'
        onProgress={handleProgress}
        controls
        onPlay={handlePlay}
        onEnded={handleEnded}
        onPause={handlePaused}
      />
    </div>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
