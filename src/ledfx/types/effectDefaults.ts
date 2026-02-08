/**
 * Default configuration values for effects, derived from base.json schemas.
 * Use these when creating or resetting effect configs to match LedFx defaults.
 */

import type { BladePowerPlusEffect } from "./effects/blade_power_plus";
import type { GradientEffect } from "./effects/gradient";
import type { PowerEffect } from "./effects/power";
import type { RainEffect } from "./effects/rain";
import type { RandomFlashEffect } from "./effects/random_flash";
import type { RealStrobeEffect } from "./effects/real_strobe";
import type { ScanEffect } from "./effects/scan";
import type { SingleColorEffect } from "./effects/single_color";

const defaultGradient =
  "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 120, 0) 14%, rgb(255, 200, 0) 28%, rgb(0, 255, 0) 42%, rgb(0, 199, 140) 56%, rgb(0, 0, 255) 70%, rgb(128, 0, 128) 84%, rgb(255, 0, 178) 98%)";

/** Default config for gradient effect (base.json "gradient") */
export const gradientDefaults: GradientEffect = {
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

/** Default config for blade_power_plus effect (base.json "blade_power_plus") */
export const bladePowerPlusDefaults: BladePowerPlusEffect = {
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
  frequency_range: "Lows (beat+bass)",
};

/** Default config for power effect (base.json "power") */
export const powerDefaults: PowerEffect = {
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

/** Default config for rain effect (base.json "rain") */
export const rainDefaults: RainEffect = {
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

/** Default config for random_flash effect (base.json "random_flash") */
export const randomFlashDefaults: RandomFlashEffect = {
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

/** Default config for real_strobe effect (base.json "real_strobe") */
export const realStrobeDefaults: RealStrobeEffect = {
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

/** Default config for scan effect (base.json "scan") */
export const scanDefaults: ScanEffect = {
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
  frequency_range: "Lows (beat+bass)",
  multiplier: 3,
  color_intensity: true,
  use_grad: false,
  full_grad: false,
  advanced: false,
  count: 1,
};

/** Default config for single color effect (base.json "singleColor") */
export const singleColorDefaults: SingleColorEffect = {
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

/**
 * Default configs keyed by effect type (for effects defined in types/effects).
 * Use for lookup: effectDefaultsByType["gradient"], effectDefaultsByType["singleColor"], etc.
 */
export const effectDefaultsByType = {
  gradient: gradientDefaults,
  blade_power_plus: bladePowerPlusDefaults,
  power: powerDefaults,
  rain: rainDefaults,
  random_flash: randomFlashDefaults,
  real_strobe: realStrobeDefaults,
  scan: scanDefaults,
  singleColor: singleColorDefaults,
} as const;
