/**
 * Type representing the configuration for a Rain effect.
 */
export type RainEffect = {
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
   * Whether to mirror the effect.
   */
  mirror?: boolean;

  /**
   * Hex color code for low-frequency sounds (e.g., bass).
   */
  lows_color?: string;

  /**
   * Whether to pulse the entire strip to the beat.
   * @remarks Options: "Off", "Lows", "Mids", "Highs"
   */
  pulse_strip?: "Off" | "Lows" | "Mids" | "Highs";

  /**
   * Hex color code for mid-frequency sounds (e.g., vocals).
   */
  mids_color?: string;

  /**
   * Hex color code for high-frequency sounds (e.g., hi-hats).
   */
  high_color?: string;

  /**
   * Sensitivity to low-frequency sounds.
   * @remarks Range: 0.03 to 0.3
   */
  lows_sensitivity?: number;

  /**
   * Sensitivity to mid-frequency sounds.
   * @remarks Range: 0.03 to 0.3
   */
  mids_sensitivity?: number;

  /**
   * Sensitivity to high-frequency sounds.
   * @remarks Range: 0.03 to 0.3
   */
  high_sensitivity?: number;

  /**
   * Animation style for raindrops.
   * @remarks Options: "Blob", "Laser", "Ripple"
   */
  raindrop_animation?: "Blob" | "Laser" | "Ripple";
};
