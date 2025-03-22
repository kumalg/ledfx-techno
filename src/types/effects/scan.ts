type ModulationEffect = "sine" | "breath";
type FrequencyRange = "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";

export type ScanEffect = {
  flip?: boolean;
  brightness?: number;
  background_color?: string;
  background_brightness?: number;
  modulate?: boolean;
  modulation_effect?: ModulationEffect;
  modulation_speed?: number;
  gradient?: string;
  gradient_roll?: number;
  blur?: number;
  mirror?: boolean;
  bounce?: boolean;
  scan_width?: number;
  speed?: number;
  color_scan?: string;
  frequency_range?: FrequencyRange;
  multiplier?: number;
  color_intensity?: boolean;
  use_grad?: boolean;
  full_grad?: boolean;
  advanced?: boolean;
  count?: number;
}
