/**
 * Type representing the configuration for a BladePowerPlus effect.
 */
export type BladePowerPlusEffect = {
  /**
   * Brightness of the background.
   * @remarks Range: 0 to 1
   */
  background_brightness?: number;

  /**
   * Hex color code for the background.
   */
  background_color?: string;

  /**
   * Amount to blur the effect.
   * @remarks Range: 0 to 10
   */
  blur?: number;

  /**
   * Brightness of the strip.
   * @remarks Range: 0 to 1
   */
  brightness?: number;

  /**
   * Color of the effect.
   * @remarks Can be a color name or hex color code.
   */
  color?: string;

  /**
   * Whether to apply color correction.
   */
  color_correction?: boolean;

  /**
   * Decay rate of the effect.
   * @remarks Range: 0 to 1
   */
  decay?: number;

  /**
   * Whether to flip the effect.
   */
  flip?: boolean;

  /**
   * Frequency range for the effect.
   * @remarks Options: "Beat", "Bass", "Lows (beat+bass)", "Mids", "High"
   */
  frequency_range?: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";

  /**
   * Gradient name or color for the effect.
   */
  gradient?: string;

  /**
   * Name of the gradient.
   */
  gradient_name?: string;

  /**
   * Whether to use a solid color instead of a gradient.
   */
  solid_color?: boolean;

  /**
   * Number of times the gradient is repeated.
   */
  gradient_repeat?: number;

  /**
   * Amount to shift the gradient.
   * @remarks Range: 0 to 10
   */
  gradient_roll?: number;

  /**
   * Whether to mirror the effect.
   */
  mirror?: boolean;

  /**
   * Multiplier for the effect's intensity.
   * @remarks Range: 0 to 1
   */
  multiplier?: number;

  /**
   * Whether to fix hues for perceptual evenness.
   */
  fix_hues?: boolean;
};
