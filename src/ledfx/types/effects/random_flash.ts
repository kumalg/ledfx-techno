/**
 * Type representing the configuration for a Random Flash effect.
 */
export type RandomFlashEffect = {
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
   * Speed of the effect.
   * @remarks Range: 0.1 to 10
   */
  speed?: number;

  /**
   * Hex color code for the hit effect.
   */
  hit_color?: string;

  /**
   * Duration of the hit effect.
   * @remarks Range: 0.1 to 5 seconds
   */
  hit_duration?: number;

  /**
   * Probability of a hit occurring per second.
   * @remarks Range: 0.01 to 1
   */
  hit_probability_per_sec?: number;

  /**
   * Size of the hit relative to the LED strip.
   * @remarks Range: 1 to 100
   */
  hit_relative_size?: number;
};
