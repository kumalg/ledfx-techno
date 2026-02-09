import { durationToMilliseconds } from "../helpers";
import {
  ALL_DEVICE_KEYS,
  ceiling,
  type DeviceEffect,
  type DeviceKey,
  rails,
  rails2,
} from "./devices";
import type { PlaylistEntry, TimeString } from "../playlists/types";

/** Resolved effect per device at a playlist timestamp (after applying device mappers). */
export type ResolvedPlaylistEntry = Partial<Record<DeviceKey, DeviceEffect>>;

/** Per-device effect and the playlist time it came from (so we can detect changes). */
export type DeviceEffectAtTime = { sourceTime: number; effect: DeviceEffect };

function resolveEntry(effects: PlaylistEntry): ResolvedPlaylistEntry {
  const entry: ResolvedPlaylistEntry = {};
  for (const [deviceKey, effect] of Object.entries(effects)) {
    if (deviceKey === "rails" && effect) entry.rails = rails(effect);
    else if (deviceKey === "rails2" && effect) entry.rails2 = rails2(effect);
    else if (deviceKey === "ceiling" && effect) entry.ceiling = ceiling(effect);
  }
  return entry;
}

/**
 * Builds effect selection for a playlist. Returns a function that, given a time in
 * milliseconds, returns the active effect per device and its source playlist time.
 */
export function createEffectSelector(playlist: Map<TimeString, PlaylistEntry>) {
  const playlistWithMilliseconds = new Map<number, ResolvedPlaylistEntry>(
    [...playlist.entries()].map(([time, effects]) => [
      durationToMilliseconds(time),
      resolveEntry(effects),
    ]),
  );

  const playlistTimes = [...playlistWithMilliseconds.keys()];
  const sortedPlaylistTimes = [...playlistTimes].sort((a, b) => a - b);
  const isSorted =
    playlistTimes.length === sortedPlaylistTimes.length &&
    playlistTimes.every((t, i) => t === sortedPlaylistTimes[i]);

  if (!isSorted) {
    console.warn(
      "Effect selection: playlist times were not sorted by default; order has been normalized.",
    );
  }

  /**
   * For each device key, get the effect that should be active at `milliseconds`
   * and its source playlist time.
   */
  function getEffectsPerDeviceAtTime(
    milliseconds: number,
  ): Map<DeviceKey, DeviceEffectAtTime> {
    const result = new Map<DeviceKey, DeviceEffectAtTime>();

    for (const key of ALL_DEVICE_KEYS) {
      const timesWithKey = sortedPlaylistTimes.filter(
        (t) => t <= milliseconds && playlistWithMilliseconds.get(t)?.[key],
      );
      const latestTime = timesWithKey.at(-1);

      if (latestTime !== undefined) {
        const entry = playlistWithMilliseconds.get(latestTime)!;

        result.set(key, { sourceTime: latestTime, effect: entry[key]! });
      }
    }

    return result;
  }

  return {
    getEffectsPerDeviceAtTime,
    playlistSize: playlistWithMilliseconds.size,
  };
}
