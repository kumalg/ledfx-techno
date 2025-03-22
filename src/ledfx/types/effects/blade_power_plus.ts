export type BladePowerPlusEffect = {
  background_brightness?: number,
  background_color?: string,
  blur?: number,
  brightness?: number,
  color?: string,
  color_correction?: boolean,
  decay?: number,
  flip?: boolean,
  frequency_range?: "Beat" | "Bass"| "Lows (beat+bass)"|  "Mids" | "High",
  gradient?: string,
  gradient_name?: string,
  solid_color?: boolean,
  gradient_repeat?: number,
  gradient_roll?: number,
  mirror?: boolean,
  multiplier?: number,
  fix_hues?: boolean
}
