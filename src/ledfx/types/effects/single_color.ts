type ModulationEffect = "sine" | "breath";

export type SingleColorEffect = {
  blur?: number;
  flip?: boolean;
  mirror?: boolean;
  brightness?: number;
  background_color?: string;
  background_brightness?: number;
  modulate?: boolean;
  modulation_effect?: ModulationEffect;
  modulation_speed?: number;
  speed?: number;
  color?: string;
}
