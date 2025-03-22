type ModulationEffect = "sine" | "breath";

export interface GradientEffect {
  blur?: number;
  flip?: boolean;
  mirror?: boolean;
  brightness?: number;
  background_color?: string;
  background_brightness?: number;
  modulate?: boolean;
  modulation_effect?: ModulationEffect;
  modulation_speed?: number;
  gradient?: string;
  gradient_roll?: number;
  speed?: number;
}
