import { effect } from "./types/effect"
import { BladePowerPlusEffect } from "./types/effects/blade_power_plus"
import { GradientEffect } from "./types/effects/gradient"
import { RealStrobeEffect } from "./types/effects/real_strobe"

export const off = () => {
  return effect("singleColor", { color: "#000000", brightness: 0 })
}

export const gradient2Scan = (color: string, speed: number, gradient_roll: number, config: GradientEffect = {}) => {
  return effect("gradient", {
    brightness: 1,
    background_brightness: 1,
    blur: 2,
    flip: false,
    mirror: false,
    background_color: "#000000",
    speed,
    gradient_roll,
    gradient: `linear-gradient(90deg, #000000 0.00%, #000000 35.00%, ${color} 35.10%, ${color} 50.00%, #000000 50.10%, #000000 85.00%, ${color} 85.10%, ${color} 100.00%)`,
    modulation_speed: 0.5,
    modulate: false,
    modulation_effect: "sine",
    ...config
  })
}
export const gradient1Scan = (color: string, speed: number, gradient_roll: number, config: GradientEffect = {}) => {
  return effect("gradient", {
    brightness: 1,
    background_brightness: 1,
    blur: 2,
    flip: false,
    mirror: false,
    background_color: "#000000",
    speed,
    gradient_roll,
    gradient: `linear-gradient(90deg, #000000 0.00%, #000000 35.00%, ${color} 35.10%, ${color} 50.00%, #000000 50.10%, #000000 85.00%, ${color} 85.10%, ${color} 100.00%)`,
    modulation_speed: 0.5,
    modulate: false,
    modulation_effect: "sine",
    ...config
  })
}

export const strobeBass = (color: string, config: RealStrobeEffect = {}) => {
  return effect("real_strobe", {
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
    ...config
  })
}

export const bladeDefault = (color: string, config: BladePowerPlusEffect = {}) => {
  return effect("blade_power_plus", {
    background_brightness: 0.44,
    background_color: "#000000",
    blur: 2,
    brightness: 1,
    color: color,
    color_correction: true,
    decay: 0,
    flip: false,
    frequency_range: "Mids",
    gradient: color,
    gradient_name: "Ocean",
    solid_color: false,
    gradient_repeat: 1,
    gradient_roll: 0,
    mirror: true,
    multiplier: 0.5,
    fix_hues: true,
    ...config
  })
}