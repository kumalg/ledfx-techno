/**
 * Type representing the configuration for a RealStrobe effect.
 */
export type RealStrobeEffect = {
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
   * Amount to shift the gradient.
   * @remarks Range: 0 to 10
   */
  gradient_roll?: number;

  /**
   * Gradient name or color scheme for bass strobe.
   */
  gradient?: string;

  /**
   * Amount of color change per bass strobe.
   * @remarks Range: 0 to 0.25
   */
  color_step?: number;

  /**
   * Decay rate for bass strobe.
   * @remarks Range: 0 to 1
   */
  bass_strobe_decay_rate?: number;

  /**
   * Hex color code for percussive strobes.
   */
  strobe_color?: string;

  /**
   * Width of the strobe in pixels.
   * @remarks Range: 0 to 1000
   */
  strobe_width?: number;

  /**
   * Decay rate for the strobe.
   * @remarks Range: 0 to 1
   */
  strobe_decay_rate?: number;

  /**
   * Delay for color shift in percussive strobes.
   * @remarks Range: 0 to 1
   */
  color_shift_delay?: number;
};
