/**
 * Default configuration values for effects, derived from base.2.1.5.json schemas.
 * Use these when creating or resetting effect configs to match LedFx defaults.
 */

import type { EffectConfigMap } from "./effectConfigs";
import { FrequencyRange } from "./enums";

const defaultGradient =
  "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 120, 0) 14%, rgb(255, 200, 0) 28%, rgb(0, 255, 0) 42%, rgb(0, 199, 140) 56%, rgb(0, 0, 255) 70%, rgb(128, 0, 128) 84%, rgb(255, 0, 178) 98%)";

/** Default config for gradient (base.2.1.5.json) */
export const gradientDefaults: EffectConfigMap["gradient"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  modulate: false,
  modulation_effect: "sine",
  modulation_speed: 0.5,
  gradient: defaultGradient,
  gradient_roll: 0,
  speed: 1,
};

/** Default config for bands (base.2.1.5.json) */
export const bandsDefaults: EffectConfigMap["bands"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  band_count: 6,
  align: "left",
};

/** Default config for bands_matrix (base.2.1.5.json) */
export const bandsMatrixDefaults: EffectConfigMap["bands_matrix"] = {
  blur: 0,
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  band_count: 6,
  mirror: false,
  flip_gradient: false,
  flip_horizontal: false,
};

/** Default config for bar (base.2.1.5.json) */
export const barDefaults: EffectConfigMap["bar"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  mode: "wipe",
  ease_method: "ease_out",
  color_step: 0.125,
  beat_skip: "none",
  beat_offset: 0,
  skip_every: 1,
};

/** Default config for blade_power_plus (base.2.1.5.json) */
export const bladePowerPlusDefaults: EffectConfigMap["blade_power_plus"] = {
  flip: false,
  brightness: 1,
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  mirror: false,
  blur: 2,
  decay: 0.7,
  multiplier: 0.5,
  background_color: "#000000",
  frequency_range: FrequencyRange.LowsBeatBass,
};

/** Default config for blender (base.2.1.5.json) */
export const blenderDefaults: EffectConfigMap["blender"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  mask_stretch: "2d full",
  background_stretch: "2d full",
  foreground_stretch: "2d full",
  mask: "",
  foreground: "",
  background: "",
  invert_mask: false,
  mask_cutoff: 1,
};

/** Default config for block_reflections (base.2.1.5.json) */
export const blockReflectionsDefaults: EffectConfigMap["block_reflections"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.5,
  reactivity: 0.5,
};

/** Default config for blocks (base.2.1.5.json) */
export const blocksDefaults: EffectConfigMap["blocks"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  block_count: 4,
  fix_hues: true,
};

/** Default config for clone (base.2.1.5.json) */
export const cloneDefaults: EffectConfigMap["clone"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  screen: 0,
  down: 0,
  across: 0,
  width: 128,
  height: 128,
};

/** Default config for crawler (base.2.1.5.json) */
export const crawlerDefaults: EffectConfigMap["crawler"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.5,
  reactivity: 0.25,
  sway: 20,
  chop: 30,
  stretch: 2.5,
};

/** Default config for digitalrain2d (base.2.1.5.json) */
export const digitalrain2dDefaults: EffectConfigMap["digitalrain2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  gradient: "linear-gradient(90deg, rgb(0, 199, 140) 0%, rgb(0, 255, 50) 100%)",
  count: 1.9,
  add_speed: 30,
  width: 1,
  run_seconds: 2,
  tail: 67,
  impulse_decay: 0.01,
  multiplier: 10,
};

/** Default config for energy (base.2.1.5.json) */
export const energyDefaults: EffectConfigMap["energy"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  blur: 4,
  mirror: true,
  color_cycler: false,
  color_lows: "#FF0000",
  color_mids: "#00FF00",
  color_high: "#0000FF",
  sensitivity: 0.6,
  mixing_mode: "additive",
};

/** Default config for energy2 (base.2.1.5.json) */
export const energy2Defaults: EffectConfigMap["energy2"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.1,
  reactivity: 0.2,
};

/** Default config for equalizer (base.2.1.5.json) */
export const equalizerDefaults: EffectConfigMap["equalizer"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  align: "left",
  gradient_repeat: 6,
};

/** Default config for equalizer2d (base.2.1.5.json) */
export const equalizer2dDefaults: EffectConfigMap["equalizer2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  peak_percent: 1,
  peak_decay: 0.03,
  peak_marks: false,
  center: false,
  max_vs_mean: false,
  ring: false,
  spin: false,
  bands: 16,
  frequency_range: FrequencyRange.LowsBeatBass,
  spin_multiplier: 1,
  spin_decay: 0.1,
};

/** Default config for fade (base.2.1.5.json) */
export const fadeDefaults: EffectConfigMap["fade"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  speed: 0.5,
};

/** Default config for fire (base.2.1.5.json) */
export const fireDefaults: EffectConfigMap["fire"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.04,
  reactivity: 0.5,
  color_shift: 0.15,
  intensity: 8,
};

/** Default config for game_of_life (base.2.1.5.json) */
export const gameOfLifeDefaults: EffectConfigMap["game_of_life"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  health_checks: "All",
  base_game_speed: 30,
  health_check_interval: 5,
  frequency_range: FrequencyRange.LowsBeatBass,
  beat_inject: true,
  impulse_decay: 0.05,
};

/** Default config for gifplayer (base.2.1.5.json) */
export const gifplayerDefaults: EffectConfigMap["gifplayer"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  resize_method: "Slow",
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  image_location: "",
  bounce: false,
  gif_fps: 10,
};

/** Default config for glitch (base.2.1.5.json) */
export const glitchDefaults: EffectConfigMap["glitch"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.5,
  reactivity: 0.2,
  saturation_threshold: 1,
};

/** Default config for imagespin (base.2.1.5.json) */
export const imagespinDefaults: EffectConfigMap["imagespin"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  pattern: false,
  frequency_range: FrequencyRange.LowsBeatBass,
  multiplier: 0.5,
  min_size: 0.3,
  bilinear: false,
  spin: false,
  clip: false,
  image_source: "",
};

/** Default config for keybeat2d (base.2.1.5.json) */
export const keybeat2dDefaults: EffectConfigMap["keybeat2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  resize_method: "Slow",
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  stretch_horizontal: 100,
  stretch_vertical: 100,
  center_horizontal: 0,
  center_vertical: 0,
  image_location: "",
  beat_frames: "",
  skip_frames: "",
  deep_diag: false,
  fake_beat: false,
  keep_aspect_ratio: false,
  force_fit: false,
  ping_pong_skip: false,
  ping_pong: false,
  half_beat: false,
  image_brightness: 1,
};

/** Default config for lava_lamp (base.2.1.5.json) */
export const lavaLampDefaults: EffectConfigMap["lava_lamp"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 7,
  contrast: 0.6,
  reactivity: 0.3,
};

/** Default config for magnitude (base.2.1.5.json) */
export const magnitudeDefaults: EffectConfigMap["magnitude"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  frequency_range: FrequencyRange.LowsBeatBass,
};

/** Default config for marching (base.2.1.5.json) */
export const marchingDefaults: EffectConfigMap["marching"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.1,
  reactivity: 0.2,
};

/** Default config for melt (base.2.1.5.json) */
export const meltDefaults: EffectConfigMap["melt"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.5,
  reactivity: 0.5,
};

/** Default config for melt_and_sparkle (base.2.1.5.json) */
export const meltAndSparkleDefaults: EffectConfigMap["melt_and_sparkle"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 0.5,
  reactivity: 0.5,
  bg_bright: 0.4,
  lava_width: 0.5,
  strobe_threshold: 0.75,
  strobe_rate: 0.75,
  strobe_width: 0.3,
  strobe_decay_rate: 0.25,
  strobe_blur: 3.5,
};

/** Default config for metro (base.2.1.5.json) */
export const metroDefaults: EffectConfigMap["metro"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_brightness: 1,
  pulse_period: 1,
  pulse_ratio: 0.3,
  steps: 4,
  background_color: "#000000",
  flash_color: "#FFFFFF",
  capture: true,
  cpu_secs: 1,
};

/** Default config for multiBar (base.2.1.5.json) */
export const multiBarDefaults: EffectConfigMap["multiBar"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  mode: "wipe",
  ease_method: "linear",
  color_step: 0.125,
};

/** Default config for noise2d (base.2.1.5.json) */
export const noise2dDefaults: EffectConfigMap["noise2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  speed: 1,
  intensity: 128,
  stretch: 1.5,
  zoom: 2,
  impulse_decay: 0.06,
  multiplier: 2,
  soap: false,
};

/** Default config for pitchSpectrum (base.2.1.5.json) */
export const pitchSpectrumDefaults: EffectConfigMap["pitchSpectrum"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  blur: 1,
  mirror: true,
  fade_rate: 0.15,
  responsiveness: 0.15,
};

/** Default config for pixels (base.2.1.5.json) */
export const pixelsDefaults: EffectConfigMap["pixels"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_brightness: 1,
  speed: 20,
  step_period: 1,
  pixels: 1,
  background_color: "#000000",
  pixel_color: "#FFFFFF",
  build_up: false,
};

/** Default config for plasma2d (base.2.1.5.json) */
export const plasma2dDefaults: EffectConfigMap["plasma2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  frequency_range: FrequencyRange.LowsBeatBass,
  density_vertical: 0.1,
  twist: 0.07,
  radius: 0.2,
  density: 0.5,
  lower: 0.01,
};

/** Default config for plasmawled (base.2.1.5.json) */
export const plasmawledDefaults: EffectConfigMap["plasmawled"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  frequency_range: FrequencyRange.LowsBeatBass,
  speed: 128,
  stretch_horizontal: 128,
  stretch_vertical: 128,
  size_multiplication: 0.4,
  speed_multiplication: 0.4,
};

/** Default config for power (base.2.1.5.json) */
export const powerDefaults: EffectConfigMap["power"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  mirror: true,
  blur: 0,
  sparks_color: "#ffffff",
  bass_decay_rate: 0.05,
  sparks_decay_rate: 0.15,
};

/** Default config for rain (base.2.1.5.json) */
export const rainDefaults: EffectConfigMap["rain"] = {
  blur: 0,
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  mirror: true,
  lows_color: "white",
  pulse_strip: "Off",
  mids_color: "red",
  high_color: "blue",
  lows_sensitivity: 0.1,
  mids_sensitivity: 0.05,
  high_sensitivity: 0.1,
  raindrop_animation: "Blob",
};

/** Default config for rainbow (base.2.1.5.json) */
export const rainbowDefaults: EffectConfigMap["rainbow"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  speed: 1,
  frequency: 1,
};

/** Default config for random_flash (base.2.1.5.json) */
export const randomFlashDefaults: EffectConfigMap["random_flash"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  speed: 1,
  hit_color: "#FFFFFF",
  hit_duration: 0.5,
  hit_probability_per_sec: 0.1,
  hit_relative_size: 10,
};

/** Default config for real_strobe (base.2.1.5.json) */
export const realStrobeDefaults: EffectConfigMap["real_strobe"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient_roll: 0,
  gradient: "Dancefloor",
  color_step: 0.0625,
  bass_strobe_decay_rate: 0.5,
  strobe_color: "#FFFFFF",
  strobe_width: 10,
  strobe_decay_rate: 0.5,
  color_shift_delay: 1,
};

/** Default config for scan (base.2.1.5.json) */
export const scanDefaults: EffectConfigMap["scan"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  modulate: false,
  modulation_effect: "sine",
  modulation_speed: 0.5,
  gradient: defaultGradient,
  gradient_roll: 0,
  blur: 3,
  mirror: false,
  bounce: true,
  scan_width: 30,
  speed: 50,
  color_scan: "#FF0000",
  frequency_range: FrequencyRange.LowsBeatBass,
  multiplier: 3,
  color_intensity: true,
  use_grad: false,
  full_grad: false,
  advanced: false,
  count: 1,
};

/** Default config for scan_and_flare (base.2.1.5.json) */
export const scanAndFlareDefaults: EffectConfigMap["scan_and_flare"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  blur: 3,
  mirror: false,
  bounce: true,
  scan_width: 30,
  speed: 50,
  sparkles_max: 10,
  sparkles_size: 0.1,
  sparkles_time: 1,
  sparkles_threshold: 0.6,
  color_scan: "#FF0000",
  frequency_range: FrequencyRange.LowsBeatBass,
  multiplier: 3,
  color_intensity: true,
  use_grad: false,
  modulate: false,
  modulation_effect: "sine",
  modulation_speed: 0.5,
};

/** Default config for scan_multi (base.2.1.5.json) */
export const scanMultiDefaults: EffectConfigMap["scan_multi"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  blur: 3,
  mirror: false,
  bounce: true,
  scan_width: 30,
  speed: 50,
  color_low: "#FF0000",
  color_mid: "#00FF00",
  color_high: "#0000FF",
  frequency_range: FrequencyRange.LowsBeatBass,
  multiplier: 3,
  color_intensity: true,
  use_grad: false,
  advanced: false,
  modulate: false,
  modulation_effect: "sine",
  modulation_speed: 0.5,
  input_source: "Power",
  attack: 0.9,
  decay: 0.7,
  filter: false,
};

/** Default config for scroll (base.2.1.5.json) */
export const scrollDefaults: EffectConfigMap["scroll"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  blur: 3,
  mirror: true,
  speed: 3,
  decay: 0.97,
  threshold: 0,
  color_lows: "#FF0000",
  color_mids: "#00FF00",
  color_high: "#0000FF",
};

/** Default config for scroll_plus (base.2.1.5.json) */
export const scrollPlusDefaults: EffectConfigMap["scroll_plus"] = {
  flip: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  blur: 3,
  mirror: true,
  decay: 0.97,
  scroll_per_sec: 0.7,
  decay_per_sec: 0.5,
  threshold: 0,
  color_lows: "#FF0000",
  color_mids: "#00FF00",
  color_high: "#0000FF",
};

/** Default config for singleColor (base.2.1.5.json) */
export const singleColorDefaults: EffectConfigMap["singleColor"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  modulate: false,
  modulation_effect: "sine",
  modulation_speed: 0.5,
  speed: 1,
  color: "#FF0000",
};

/** Default config for spectrum (base.2.1.5.json) */
export const spectrumDefaults: EffectConfigMap["spectrum"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  rgb_mix: 0,
};

/** Default config for strobe (base.2.1.5.json) */
export const strobeDefaults: EffectConfigMap["strobe"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  strobe_frequency: "1/2 (.-. )",
  strobe_decay: 1.5,
  beat_decay: 2,
  strobe_pattern: "****",
};

/** Default config for texter2d (base.2.1.5.json) */
export const texter2dDefaults: EffectConfigMap["texter2d"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  flip_horizontal: false,
  flip_vertical: false,
  rotate: 0,
  test: false,
  dump: false,
  alpha: false,
  option_1: false,
  option_2: false,
  value_option_1: 0.5,
  font: "Press Start 2P",
  text: "Your text here",
  height_percent: 100,
  text_color: "#FFFFFF",
  resize_method: "Fast",
  text_effect: "Side Scroll",
  deep_diag: false,
  use_gradient: false,
  impulse_decay: 0.1,
  multiplier: 1,
  speed_option_1: 1,
};

/** Default config for vumeter (base.2.1.5.json) */
export const vumeterDefaults: EffectConfigMap["vumeter"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  peak_decay: 0.1,
  color_min: "#0000FF",
  color_max: "#FF0000",
  color_mid: "#00FF00",
  color_peak: "#FFFFFF",
  peak_percent: 1,
  max_volume: 0.8,
};

/** Default config for water (base.2.1.5.json) */
export const waterDefaults: EffectConfigMap["water"] = {
  blur: 0,
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  fix_hues: true,
  speed: 1,
  reactivity: 0.5,
  vertical_shift: 0.12,
  bass_size: 8,
  mids_size: 6,
  high_size: 3,
  viscosity: 6,
};

/** Default config for wavelength (base.2.1.5.json) */
export const wavelengthDefaults: EffectConfigMap["wavelength"] = {
  flip: false,
  mirror: false,
  brightness: 1,
  background_color: "#000000",
  background_brightness: 1,
  gradient: defaultGradient,
  gradient_roll: 0,
  blur: 3,
};

/**
 * Default configs keyed by effect type (EffectConfigMap).
 * Use for lookup: effectDefaultsByType["gradient"], effectDefaultsByType["singleColor"], etc.
 */
export const effectDefaultsByType: EffectConfigMap = {
  gradient: gradientDefaults,
  bands: bandsDefaults,
  bands_matrix: bandsMatrixDefaults,
  bar: barDefaults,
  blade_power_plus: bladePowerPlusDefaults,
  blender: blenderDefaults,
  block_reflections: blockReflectionsDefaults,
  blocks: blocksDefaults,
  clone: cloneDefaults,
  crawler: crawlerDefaults,
  digitalrain2d: digitalrain2dDefaults,
  energy: energyDefaults,
  energy2: energy2Defaults,
  equalizer: equalizerDefaults,
  equalizer2d: equalizer2dDefaults,
  fade: fadeDefaults,
  fire: fireDefaults,
  game_of_life: gameOfLifeDefaults,
  gifplayer: gifplayerDefaults,
  glitch: glitchDefaults,
  imagespin: imagespinDefaults,
  keybeat2d: keybeat2dDefaults,
  lava_lamp: lavaLampDefaults,
  magnitude: magnitudeDefaults,
  marching: marchingDefaults,
  melt: meltDefaults,
  melt_and_sparkle: meltAndSparkleDefaults,
  metro: metroDefaults,
  multiBar: multiBarDefaults,
  noise2d: noise2dDefaults,
  pitchSpectrum: pitchSpectrumDefaults,
  pixels: pixelsDefaults,
  plasma2d: plasma2dDefaults,
  plasmawled: plasmawledDefaults,
  power: powerDefaults,
  rain: rainDefaults,
  rainbow: rainbowDefaults,
  random_flash: randomFlashDefaults,
  real_strobe: realStrobeDefaults,
  scan: scanDefaults,
  scan_and_flare: scanAndFlareDefaults,
  scan_multi: scanMultiDefaults,
  scroll: scrollDefaults,
  scroll_plus: scrollPlusDefaults,
  singleColor: singleColorDefaults,
  spectrum: spectrumDefaults,
  strobe: strobeDefaults,
  texter2d: texter2dDefaults,
  vumeter: vumeterDefaults,
  water: waterDefaults,
  wavelength: wavelengthDefaults,
};
