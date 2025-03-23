/**
 * Type representing the configuration for a Single Color effect.
 */
export interface SingleColorEffect {
  /**
   * Amount to blur the effect.
   * @remarks Range: 0 to 10
   */
  blur?: number;

  /**
   * Whether to flip the effect.
   */
  flip?: boolean;

  /**
   * Whether to mirror the effect.
   */
  mirror?: boolean;

  /**
   * Brightness of the strip.
   * @remarks Range: 0 to 1
   */
  brightness?: number;

  /**
   * Hex color code for the background.
   */
  background_color?: string;

  /**
   * Brightness of the background.
   * @remarks Range: 0 to 1
   */
  background_brightness?: number;

  /**
   * Whether to enable brightness modulation.
   */
  modulate?: boolean;

  /**
   * Type of modulation effect.
   * @remarks Options: "sine" | "breath"
   */
  modulation_effect?: "sine" | "breath";

  /**
   * Speed of modulation.
   * @remarks Range: 0.01 to 1
   */
  modulation_speed?: number;

  /**
   * Speed of the effect.
   * @remarks Range: 0.1 to 10
   */
  speed?: number;

  /**
   * Hex color code or name for the single color.
   */
  color?: string;
}
