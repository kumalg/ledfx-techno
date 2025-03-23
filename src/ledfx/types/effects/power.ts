/**
 * Type representing the configuration for a Power effect.
 */
export type PowerEffect = {
  /**
   * Whether to flip the effect.
   */
  flip?: boolean;

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
   * Gradient name or color scheme to display.
   */
  gradient?: string;

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
   * Amount to blur the effect.
   * @remarks Range: 0 to 10
   */
  blur?: number;

  /**
   * Hex color code for sparks.
   */
  sparks_color?: string;

  /**
   * Decay rate for bass strobe.
   * @remarks Range: 0 to 1
   */
  bass_decay_rate?: number;

  /**
   * Decay rate for sparks.
   * @remarks Range: 0 to 1
   */
  sparks_decay_rate?: number;
};
