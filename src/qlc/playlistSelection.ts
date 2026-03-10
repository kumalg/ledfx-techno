import { durationToMilliseconds } from "../helpers";
import type { QlcPlaylistEntry, TimeString } from "../playlists/types";

export type QlcMessagesAtTime = {
  sourceTime: number;
  messages: QlcPlaylistEntry;
};

export function createQlcPlaylistSelector(playlist: Map<TimeString, QlcPlaylistEntry>) {
  const playlistWithMilliseconds = new Map<number, QlcPlaylistEntry>(
    [...playlist.entries()].map(([time, messages]) => [durationToMilliseconds(time), messages]),
  );

  const sortedPlaylistTimes = [...playlistWithMilliseconds.keys()].sort((a, b) => a - b);

  function getMessagesAtTime(milliseconds: number): QlcMessagesAtTime | undefined {
    const validTimes = sortedPlaylistTimes.filter((time) => time <= milliseconds);
    const latestTime = validTimes.at(-1);

    if (latestTime === undefined) {
      return undefined;
    }

    return {
      sourceTime: latestTime,
      messages: playlistWithMilliseconds.get(latestTime) ?? [],
    };
  }

  return {
    getMessagesAtTime,
    playlistSize: playlistWithMilliseconds.size,
  };
}
