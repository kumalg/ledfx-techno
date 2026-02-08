import { DeviceKey } from "../ledfx/devices"
import { Effect } from "../ledfx/types/effect"

/**
 * Time string in format MM:SS, MM:SS.mmm, HH:MM:SS, or HH:MM:SS.mmm
 * (e.g. "00:00", "01:30.500", "01:00:04.900").
 * Only strings matching these patterns are valid playlist keys.
 */
export type TimeString =
  | `${number}:${number}`
  | `${number}:${number}.${number}`
  | `${number}:${number}:${number}`
  | `${number}:${number}:${number}.${number}`

/**
 * Effect configuration per device at a single playlist timestamp.
 */
export type PlaylistEntry = { [key in DeviceKey]?: Effect }

/**
 * Playlist as a record of time strings to device effects.
 * Keys must be valid TimeStrings (MM:SS or MM:SS.mmm).
 */
export type Playlist = Record<TimeString, PlaylistEntry>

const TIME_STRING_REGEX = /^\d{1,2}:\d{2}(\.\d+)?$|^\d{1,2}:\d{2}:\d{2}(\.\d+)?$/

/**
 * Asserts that a string is a valid TimeString at runtime.
 * Use when building playlists from dynamic data.
 */
export function assertTimeString(s: string): asserts s is TimeString {
  if (!TIME_STRING_REGEX.test(s)) {
    throw new Error(`Invalid time string: "${s}". Expected MM:SS, MM:SS.mmm, HH:MM:SS, or HH:MM:SS.mmm`)
  }
}
