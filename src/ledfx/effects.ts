import { SingleColorEffect } from "./types/effects/single_color";
import { GradientEffect } from "./types/effects/gradient";
import { PowerEffect } from "./types/effects/power";
import { RealStrobeEffect } from "./types/effects/real_strobe";
import { ScanEffect } from "./types/effects/scan";
import { RandomFlashEffect } from "./types/effects/random_flash";
import { RainEffect } from "./types/effects/rain";
import { BladePowerPlusEffect } from "./types/effects/blade_power_plus";

export const singleColor = (config?: SingleColorEffect) => {
  return {
    type: "singleColor",
    ...(config ? { config } : {})
  }
}

export const gradient = (config?: GradientEffect) => {
  return {
    type: "gradient",
    ...(config ? { config } : {})
  }
}

export const randomFlash = (config: RandomFlashEffect = {}) => {
  return {
    type: "random_flash",
    config: {
      background_brightness: 1,
      background_color: "#000000",
      blur: 4,
      brightness: 1,
      flip: false,
      hit_color: "#6200ff",
      hit_duration: 0.1,
      hit_probability_per_sec: 1,
      hit_relative_size: 30,
      mirror: false,
      speed: 5,
      ...config
    }
  }
}

export const scan = (config?: ScanEffect) => {
  return {
    type: "scan",
    ...(config ? { config } : {})
  }
}

export const strobe = (config?: RealStrobeEffect) => {
  return {
    type: "real_strobe",
    ...(config ? { config } : {})
  }
}

export const power = (config?: PowerEffect) => {
  return {
    type: "power",
    ...(config ? { config } : {})
  }
}

export const rain = (config?: RainEffect) => {
  return {
    type: "rain",
    ...(config ? { config } : {})
  }
}

export const bladePowerPlus = (config?: BladePowerPlusEffect) => {
  return {
    type: "blade_power_plus",
    ...(config ? { config } : {})
  }
}

export type Effect =
  | ReturnType<typeof gradient>
  | ReturnType<typeof power>
  | ReturnType<typeof strobe>
  | ReturnType<typeof scan>;
