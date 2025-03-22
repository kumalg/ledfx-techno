export type RandomFlashEffect = {
  background_brightness: number; // Range: 0 to 1
  background_color: string; // Hex color code
  blur: number; // Range: 0 to 10
  brightness: number; // Range: 0 to 1
  flip: boolean;
  hit_color: string; // Hex color code
  hit_duration: number; // Range: 0.1 to 5
  hit_probability_per_sec: number; // Range: 0.01 to 1
  hit_relative_size: number; // Range: 1 to 100
  mirror: boolean;
  speed: number; // Range: 0.1 to 10
}
