/**
 * Frequency range for beat/audio-reactive effects.
 * Controls which part of the audio spectrum drives the effect.
 */
export enum FrequencyRange {
  Beat = "Beat",
  Bass = "Bass",
  LowsBeatBass = "Lows (beat+bass)",
  Mids = "Mids",
  High = "High",
}
