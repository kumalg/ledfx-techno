/**
 * Type representing the configuration for a Gradient effect.
 */
export type GradientEffect = {
  /**
   * Brightness of the strip.
   * @remarks Range: 0 to 1
   */
  brightness?: number;

  /**
   * Brightness of the background.
   * @remarks Range: 0 to 1
   */
  background_brightness?: number;

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
   * Hex color code for the background.
   */
  background_color?: string;

  /**
   * Speed of the effect.
   * @remarks Range: 0.1 to 10
   */
  speed?: number;

  /**
   * Amount to shift the gradient.
   * @remarks Range: 0 to 10
   */
  gradient_roll?: number;

  /**
   * Gradient name or color scheme.
   */
  gradient?: string;

  /**
   * Speed of modulation.
   * @remarks Range: 0.01 to 1
   */
  modulation_speed?: number;

  /**
   * Whether to enable brightness modulation.
   */
  modulate?: boolean;

  /**
   * Type of modulation effect.
   * @remarks Options: "sine" | "breath"
   */
  modulation_effect?: "sine" | "breath";
};
