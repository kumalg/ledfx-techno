import { useCallback, useEffect, useRef } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import { PLAYLIST, VIDEO_URL } from "./playlists/beauzPsyPopHongKong";
import { QLC_PLAYLIST } from "./playlists/qlc";
// import { PLAYLIST, VIDEO_URL } from "./playlists/restrictedGroupChat";
import { durationToMilliseconds } from "./helpers";
import { api } from "./ledfx/api";
import { type DeviceEffect, type DeviceKey } from "./ledfx/devices";
import { createEffectSelector } from "./ledfx/effectSelection";
import { createQlcPlaylistSelector } from "./qlc/playlistSelection";
import { QlcWsClient } from "./qlc/wsClient";

const { getEffectsPerDeviceAtTime, playlistSize } = createEffectSelector(PLAYLIST);
const { getMessagesAtTime: getQlcMessagesAtTime, playlistSize: qlcPlaylistSize } =
  createQlcPlaylistSelector(QLC_PLAYLIST);

console.log(playlistSize, "effects in playlist");
console.log(qlcPlaylistSize, "QLC+ events in playlist");

const pauseAtEndTime = durationToMilliseconds("01:17:28");

function App() {
  const playerRef = useRef<ReactPlayer>(null);

  const videoPlayed = useRef(false);
  const lastPlayerTime = useRef<{ videoTime: number; timestamp: number } | undefined>(undefined);
  /** Last applied playlist time per device; only that device is updated when its effect changes. */
  const lastAppliedSourceTimePerDevice = useRef<Partial<Record<DeviceKey, number>>>({});
  const applyingEffects = useRef(false);
  const qlcClient = useRef(new QlcWsClient());
  const lastAppliedQlcSourceTime = useRef<number | undefined>(undefined);

  const pausedAtEnd = useRef(false);

  useEffect(() => {
    qlcClient.current.connect();

    return () => {
      qlcClient.current.disconnect();
    };
  }, []);

  const handleProgress = useCallback((props: OnProgressProps) => {
    lastPlayerTime.current = {
      videoTime: props.playedSeconds,
      timestamp: Date.now(),
    };
  }, []);

  const handlePlay = () => {
    videoPlayed.current = true;
    loop();
  };

  const handleEnded = () => {
    videoPlayed.current = false;
  };

  const handlePaused = () => {
    videoPlayed.current = false;
  };

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
    const milliseconds = lastPlayerTime.current.videoTime * 1000 + timeDiff;

    const effectsPerDevice = getEffectsPerDeviceAtTime(milliseconds);
    const toApply: { deviceKey: DeviceKey; effect: DeviceEffect }[] = [];

    for (const [deviceKey, { sourceTime, effect }] of effectsPerDevice) {
      if (lastAppliedSourceTimePerDevice.current[deviceKey] !== sourceTime) {
        toApply.push({ deviceKey, effect });
      }
    }

    if (toApply.length > 0 && !applyingEffects.current) {
      applyingEffects.current = true;

      const effects = toApply.map(({ effect }) => effect);
      const promises = await Promise.all(
        effects.map(({ device, data }) => api.setEffect(device, data)),
      );
      const parsed = await Promise.all(promises.map((result) => result.json()));
      const results = parsed.map(({ status }) => status);
      const success = results.every((status) => status === "success");

      if (success) {
        for (const { deviceKey } of toApply) {
          const { sourceTime } = effectsPerDevice.get(deviceKey)!;
          lastAppliedSourceTimePerDevice.current[deviceKey] = sourceTime;
        }
        console.log(`Successfully set effect on ${effects.map(({ device }) => device).join(", ")}`);
      } else {
        console.error(`Failed to set effect on ${effects.map(({ device }) => device).join(", ")}`);
      }

      applyingEffects.current = false;
    }

    const qlcMessagesAtTime = getQlcMessagesAtTime(milliseconds);

    if (qlcMessagesAtTime && lastAppliedQlcSourceTime.current !== qlcMessagesAtTime.sourceTime) {
      qlcClient.current.sendMessages(qlcMessagesAtTime.messages);
      lastAppliedQlcSourceTime.current = qlcMessagesAtTime.sourceTime;
      console.log(`Sent QLC+ messages: ${qlcMessagesAtTime.messages.join(", ")}`);
    }

    if (!pausedAtEnd.current && milliseconds >= pauseAtEndTime) {
      console.log("Pausing at end");
      pausedAtEnd.current = true;
      playerRef.current?.getInternalPlayer().pauseVideo();
      return;
    }

    setTimeout(loop, 100);
  };

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
  );
}

export default App;
