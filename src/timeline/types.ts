import type { DeviceKey } from '../ledfx/devices'
import type { Effect } from '../ledfx/types/effect'

export interface TimelineClip {
  id: string
  deviceId: DeviceKey
  effect: Effect
  config: Record<string, unknown>
  startTime: number // in seconds
  duration: number // in seconds
}

export interface TimelineProject {
  id: string
  name: string
  videoUrl: string
  thumbnailUrl?: string
  duration: number // video duration in seconds
  clips: TimelineClip[]
  createdAt: number
  updatedAt: number
}

export interface TimelineState {
  currentTime: number // playhead position in seconds
  isPlaying: boolean
  zoom: number // pixels per second
  selectedClipId: string | null
  draggedEffect: Effect | null
}
