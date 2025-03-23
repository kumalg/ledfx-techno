/**
 * Type representing the configuration for a Scan effect.
 */
export interface ScanEffect {
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
   * Gradient name or color scheme to display.
   */
  gradient?: string;

  /**
   * Amount to shift the gradient.
   * @remarks Range: 0 to 10
   */
  gradient_roll?: number;

  /**
   * Amount to blur the effect.
   * @remarks Range: 0 to 10
   */
  blur?: number;

  /**
   * Whether to mirror the effect.
   */
  mirror?: boolean;

  /**
   * Whether to bounce the scan.
   */
  bounce?: boolean;

  /**
   * Width of the scan eye in percentage.
   * @remarks Range: 1 to 100
   */
  scan_width?: number;

  /**
   * Speed of the scan in percentage per second.
   * @remarks Range: 0 to 100
   */
  speed?: number;

  /**
   * Hex color code for the scan.
   */
  color_scan?: string;

  /**
   * Frequency range for beat detection.
   * @remarks Options: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High"
   */
  frequency_range?: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";

  /**
   * Speed impact multiplier.
   * @remarks Range: 0 to 5
   */
  multiplier?: number;

  /**
   * Whether to adjust color intensity based on audio power.
   */
  color_intensity?: boolean;

  /**
   * Whether to use colors from the gradient selector.
   */
  use_grad?: boolean;

  /**
   * Whether to spread the gradient colors across the scan.
   */
  full_grad?: boolean;

  /**
   * Whether to enable advanced options.
   */
  advanced?: boolean;

  /**
   * Number of scans to render.
   * @remarks Range: 1 to 10
   */
  count?: number;
}
