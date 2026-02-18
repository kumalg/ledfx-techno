import {
  BladePowerPlusEffectConfig,
  EffectConfigMap,
  GradientConfig,
  RealStrobeEffectConfig,
} from "./effectConfigs";
import { FrequencyRange } from "./enums";

export type Effect = {
  type: keyof EffectConfigMap;
  config: Partial<EffectConfigMap[keyof EffectConfigMap]>;
  name?: string;
};

const gradient2ScanGradient = (color: string) =>
  `linear-gradient(90deg, #000000 0.00%, #000000 35.00%, ${color} 35.10%, ${color} 50.00%, #000000 50.10%, #000000 85.00%, ${color} 85.10%, ${color} 100.00%)`;

const gradient1ScanGradient = (color: string) =>
  `linear-gradient(90deg, #000000 0.00%, #000000 35.00%, ${color} 35.10%, ${color} 50.00%, #000000 50.10%, #000000 85.00%, ${color} 85.10%, ${color} 100.00%)`;

const gradient1ScanSmallGradient = (color: string) =>
  `linear-gradient(90deg, #000000 0.00%, #000000 49.00%, ${color} 49.10%, ${color} 50.00%, #000000 50.10%, #000000 99.00%, ${color} 99.10%, ${color} 100.00%)`;

function effectImpl<T extends keyof EffectConfigMap>(
  effectType: T,
  config: Partial<EffectConfigMap[T]>,
): Effect {
  return {
    type: effectType,
    config,
  };
}

/**
 * Creates an effect configuration object with the specified type and config.
 * Also provides preset methods: off, gradient2Scan, gradient1Scan, gradient1ScanSmall, strobeBass, bladeDefault.
 */
export const effect = Object.assign(effectImpl, {
  off: (): Effect =>
    effectImpl("singleColor", { color: "#000000", brightness: 0 }),

  gradient2Scan: (
    color: string,
    speed: number,
    gradient_roll: number,
    config: Partial<GradientConfig> = {},
  ): Effect =>
    effectImpl("gradient", {
      brightness: 1,
      background_brightness: 1,
      blur: 2,
      flip: false,
      mirror: false,
      background_color: "#000000",
      speed,
      gradient_roll,
      gradient: gradient2ScanGradient(color),
      modulation_speed: 0.5,
      modulate: false,
      modulation_effect: "sine",
      ...config,
    }),

  gradient1Scan: (
    color: string,
    speed: number,
    gradient_roll: number,
    config: Partial<GradientConfig> = {},
  ): Effect =>
    effectImpl("gradient", {
      brightness: 1,
      background_brightness: 1,
      blur: 2,
      flip: false,
      mirror: false,
      background_color: "#000000",
      speed,
      gradient_roll,
      gradient: gradient1ScanGradient(color),
      modulation_speed: 0.5,
      modulate: false,
      modulation_effect: "sine",
      ...config,
    }),

  gradient1ScanSmall: (
    color: string,
    speed: number,
    gradient_roll: number,
    config: Partial<GradientConfig> = {},
  ): Effect =>
    effectImpl("gradient", {
      brightness: 1,
      background_brightness: 1,
      blur: 2,
      flip: false,
      mirror: false,
      background_color: "#000000",
      speed,
      gradient_roll,
      gradient: gradient1ScanSmallGradient(color),
      modulation_speed: 0.5,
      modulate: false,
      modulation_effect: "sine",
      ...config,
    }),

  strobeBass: (
    color: string,
    config: Partial<RealStrobeEffectConfig> = {},
  ): Effect =>
    effectImpl("real_strobe", {
      background_brightness: 1,
      background_color: "#000000",
      bass_strobe_decay_rate: 0.7,
      blur: 0,
      brightness: 1,
      color_step: 0.0625,
      flip: false,
      gradient: color,
      gradient_roll: 0,
      mirror: false,
      strobe_color: "#000000",
      strobe_decay_rate: 0.85,
      strobe_width: 0,
      color_shift_delay: 1,
      ...config,
    }),

  bladeDefault: (
    color: string,
    config: Partial<BladePowerPlusEffectConfig> = {},
  ): Effect =>
    effectImpl("blade_power_plus", {
      background_brightness: 0.44,
      background_color: "#000000",
      blur: 2,
      brightness: 1,
      decay: 0,
      flip: false,
      frequency_range: FrequencyRange.Mids,
      gradient: color,
      gradient_roll: 0,
      mirror: true,
      multiplier: 0.5,
      fix_hues: true,
      ...config,
    }),
});
