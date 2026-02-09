import { FrequencyRange } from "./frequencyRange";

/**
 * Base configuration properties shared by all effects
 */
export interface BaseEffectConfig {
  /**
   * Brightness of the LED strip
   * @default 1
   * @minimum 0
   * @maximum 1
   * Controls overall brightness of the effect
   */
  brightness: number;

  /**
   * Background color as hex string
   * @default "#000000"
   * @format color
   * Applied behind the main effect
   */
  background_color: string;

  /**
   * Brightness of the background color
   * @default 1
   * @minimum 0
   * @maximum 1
   */
  background_brightness: number;

  /**
   * Amount to blur the effect
   * @default 0
   * @minimum 0
   * @maximum 10
   * Higher values create a softer look
   */
  blur: number;

  /**
   * Whether to flip the effect horizontally
   * @default false
   * When true, reverses the display direction from left-to-right to right-to-left
   */
  flip: boolean;

  /**
   * Whether to mirror the effect
   * @default false
   * Creates symmetry from the center outward
   * Effectively duplicates half the pattern in reverse
   */
  mirror: boolean;
}

/**
 * Configuration for gradient-based effects
 */
export interface GradientEffectConfig extends BaseEffectConfig {
  /**
   * Color gradient to display
   * @default "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 120, 0) 14%, rgb(255, 200, 0) 28%, rgb(0, 255, 0) 42%, rgb(0, 199, 140) 56%, rgb(0, 0, 255) 70%, rgb(128, 0, 128) 84%, rgb(255, 0, 178) 98%)"
   * @format gradient
   * CSS linear-gradient format or named preset
   * Defines the color pattern displayed across the LEDs
   */
  gradient: string;

  /**
   * Amount to shift the gradient
   * @default 0
   * @minimum 0
   * @maximum 10
   * Creates movement in the gradient colors
   * Higher values result in faster color rotation
   */
  gradient_roll: number;
}

/**
 * Configuration for matrix-specific effects
 */
export interface MatrixEffectConfig extends GradientEffectConfig {
  /**
   * Enable diagnostic information display
   * @default false
   * When true, shows performance metrics and debug info on the matrix
   * Useful for troubleshooting but not for regular operation
   */
  diag?: boolean;

  /**
   * Enable advanced configuration options
   * @default false
   * Shows additional technical parameters in the UI when enabled
   */
  advanced?: boolean;

  /**
   * Flip the image horizontally (mirror left-to-right)
   * @default false
   * Useful for correcting orientation issues in matrix displays
   */
  flip_horizontal?: boolean;

  /**
   * Flip the image vertically (mirror top-to-bottom)
   * @default false
   * Useful for correcting orientation issues in matrix displays
   */
  flip_vertical?: boolean;

  /**
   * 90-degree rotation increments
   * @default 0
   * @minimum 0
   * @maximum 3
   * 0 = no rotation, 1 = 90°, 2 = 180°, 3 = 270°
   */
  rotate?: number;

  /**
   * Ignore audio input for testing purposes
   * @default false
   * When enabled, the effect will operate without audio reactivity
   */
  test?: boolean;

  /**
   * Dump image data for debugging
   * @default false
   * Outputs raw data to console for development purposes
   * High performance impact - only use when troubleshooting
   */
  dump?: boolean;
}

/**
 * Configuration for modulation capabilities
 */
export interface ModulationConfig {
  /**
   * Enable brightness modulation effect
   * @default false
   * When true, the effect's brightness will oscillate according to the chosen pattern
   * Creates a pulsing or breathing effect
   */
  modulate: boolean;

  /**
   * Type of modulation animation pattern
   * @default "sine"
   * "sine" - Smooth sinusoidal wave pattern
   * "breath" - Mimics natural breathing pattern with varying speeds
   */
  modulation_effect: "sine" | "breath";

  /**
   * Speed of modulation animation cycle
   * @default 0.5
   * @minimum 0.01
   * @maximum 1
   * Lower values create slower, more subtle transitions
   * Higher values create faster, more dramatic pulsing
   */
  modulation_speed: number;
}

/**
 * Configuration for audio reactivity
 */
export interface AudioReactiveConfig {
  /**
   * Frequency range to respond to
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum drives the effect
   */
  frequency_range?: FrequencyRange;

  /**
   * Audio response multiplier
   * @default 1
   * @minimum 0
   * @maximum 5
   * Amplifies audio input signal by this factor
   * Higher values make the effect more reactive to audio
   */
  multiplier?: number;
}

/**
 * Configuration for atmospheric effects
 */
export interface AtmosphericEffectConfig extends GradientEffectConfig {
  /**
   * Use perceptually even hue distribution
   * @default true
   * When enabled, ensures colors are distributed evenly across the perceptible spectrum
   * Makes gradients appear more balanced to the human eye
   */
  fix_hues: boolean;

  /**
   * Effect speed modifier
   * @default 0.5
   * @minimum 0.01
   * @maximum 2
   * Controls the rate of animation movement
   * Lower values produce slower, more subtle animations
   */
  speed: number;

  /**
   * Audio reactivity modifier
   * @default 0.25
   * @minimum 0
   * @maximum 1
   * Controls how strongly the effect responds to audio input
   * Higher values create more dramatic responses to sound
   */
  reactivity: number;
}

// Effect-specific configurations

/**
 * Gradient effect configuration
 */
export interface GradientConfig extends GradientEffectConfig, ModulationConfig {
  /**
   * Animation speed of the gradient effect
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how quickly the gradient colors move across the LEDs
   * Lower values create slower, subtle movements, higher values create rapid color transitions
   */
  speed: number;
}

/**
 * Bands effect configuration
 */
export interface BandsEffectConfig extends GradientEffectConfig {
  /**
   * Number of color bands to display
   * @default 6
   * @minimum 1
   * @maximum 16
   * Higher values create more distinct color sections
   * Lower values create broader color areas
   */
  band_count: number;

  /**
   * Alignment of bands across the LED strip
   * @default "left"
   * "left" - Bands start from the left side
   * "right" - Bands start from the right side
   * "invert" - Inverts the band direction
   * "center" - Bands emanate from center outward
   * Controls the orientation and positioning of color bands
   */
  align: "left" | "right" | "invert" | "center";
}

/**
 * Bands Matrix effect configuration
 */
export interface BandsMatrixEffectConfig extends GradientEffectConfig {
  /**
   * Number of color bands to display
   * @default 6
   * @minimum 1
   * @maximum 16
   * Higher values create more distinct color sections
   * Controls how many bands are displayed in the matrix
   */
  band_count: number;

  /**
   * Whether to invert the gradient colors
   * @default false
   * When enabled, reverses the color sequence of the gradient
   * Useful for creating different visual effects with the same gradient
   */
  flip_gradient: boolean;

  /**
   * Whether to flip the display horizontally
   * @default false
   * Mirrors the band pattern from left to right
   * Helps adjust the visual orientation for different matrix configurations
   */
  flip_horizontal: boolean;
}

/**
 * Bar effect configuration
 */
export interface BarEffectConfig extends GradientEffectConfig {
  /**
   * Animation mode for the bar effect
   * @default "wipe"
   * "bounce" - Bar moves back and forth across the strip
   * "wipe" - Bar moves in one direction then resets
   * "in-out" - Bar expands from center then contracts
   * Controls the movement pattern of the light bar
   */
  mode: "bounce" | "wipe" | "in-out";

  /**
   * Acceleration profile of bar movement
   * @default "ease_out"
   * "ease_in_out" - Slow start and end, fast middle
   * "ease_in" - Slow start, fast end
   * "ease_out" - Fast start, slow end
   * "linear" - Constant speed throughout
   * Controls how the bar accelerates and decelerates
   */
  ease_method: "ease_in_out" | "ease_in" | "ease_out" | "linear";

  /**
   * Amount of color change per beat
   * @default 0.125
   * @minimum 0
   * @maximum 1
   * Higher values result in more dramatic color shifts with each beat
   * Controls how much the color advances through the gradient per beat
   */
  color_step: number;

  /**
   * Skip odd or even beats for varied patterns
   * @default "none"
   * "none" - Respond to all beats
   * "odds" - Only respond to odd-numbered beats
   * "even" - Only respond to even-numbered beats
   * Creates different rhythmic patterns synchronized to music
   */
  beat_skip: "none" | "odds" | "even";

  /**
   * Offset the beat detection timing
   * @default 0
   * @minimum -1
   * @maximum 1
   * Shifts the beat detection forward or backward in time
   * Useful for fine-tuning synchronization with music
   */
  beat_offset: number;

  /**
   * Frequency of beat skipping when enabled
   * @default 1
   * 1 - Skip according to beat_skip setting
   * 2 - Skip every other specified beat
   * Only applies when beat_skip is not "none"
   */
  skip_every: 1 | 2;
}

/**
 * Blade Power+ effect configuration
 */
export interface BladePowerPlusEffectConfig extends GradientEffectConfig {
  /**
   * Use perceptually even hue distribution
   * @default true
   * When enabled, ensures colors are distributed evenly across the perceptible spectrum
   * Makes gradients appear more balanced to the human eye
   */
  fix_hues: boolean;

  /**
   * Rate of color decay
   * @default 0.7
   * @minimum 0.1
   * @maximum 1
   * Controls how quickly colors fade after audio triggers them
   * Higher values create longer-lasting effects
   */
  decay: number;

  /**
   * Audio reactivity multiplier
   * @default 0.5
   * @minimum 0.1
   * @maximum 2
   * Amplifies the effect's response to audio input
   * Higher values create more dramatic visual responses to sound
   */
  multiplier: number;

  /**
   * Frequency range for the beat detection
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum drives the effect
   */
  frequency_range: FrequencyRange;
}

/**
 * Blender effect configuration
 */
export interface BlenderEffectConfig extends MatrixEffectConfig {
  /**
   * How to stretch the mask source pixels
   * @default "2d full"
   * "2d full" - Stretches mask to fill the entire matrix
   * "2d tile" - Tiles the mask across the matrix
   * Controls how the mask image is displayed across the LED matrix
   */
  mask_stretch: "2d full" | "2d tile";

  /**
   * How to stretch the background source pixels
   * @default "2d full"
   * "2d full" - Stretches background to fill the entire matrix
   * "2d tile" - Tiles the background across the matrix
   * Controls how the background image is displayed across the LED matrix
   */
  background_stretch: "2d full" | "2d tile";

  /**
   * How to stretch the foreground source pixels
   * @default "2d full"
   * "2d full" - Stretches foreground to fill the entire matrix
   * "2d tile" - Tiles the foreground across the matrix
   * Controls how the foreground image is displayed across the LED matrix
   */
  foreground_stretch: "2d full" | "2d tile";

  /**
   * The virtual device from which to source the mask
   * @default ""
   * ID or name of the source virtual for the mask layer
   * When empty, no mask is applied
   */
  mask: string;

  /**
   * The virtual device from which to source the foreground
   * @default ""
   * ID or name of the source virtual for the foreground layer
   * When empty, no foreground content is displayed
   */
  foreground: string;

  /**
   * The virtual device from which to source the background
   * @default ""
   * ID or name of the source virtual for the background layer
   * When empty, no background content is displayed
   */
  background: string;

  /**
   * Switch Foreground and Background based on mask
   * @default false
   * When true, inverts the mask operation, swapping the foreground and background regions
   * Useful for creating negative space effects
   */
  invert_mask: boolean;

  /**
   * Mask cutoff value
   * @default 0.5
   * @minimum 0
   * @maximum 1
   * Threshold value for determining mask boundaries
   * Higher values require brighter mask pixels to show foreground
   * Lower values allow more of the foreground to show through
   */
  mask_cutoff: number;
}

/**
 * Block Reflections effect configuration
 */
export interface BlockReflectionsEffectConfig extends AtmosphericEffectConfig {}

/**
 * Blocks effect configuration
 */
/**
 * Configuration for the Blocks effect that extends the gradient effect configuration.
 * This effect creates a series of colorful blocks across the LED strip.
 * @category 2D
 * @extends {GradientEffectConfig}
 */
export interface BlocksEffectConfig extends GradientEffectConfig {
  /**
   * Number of color blocks to display across the LED strip
   * @minimum 1
   * @maximum 10
   */
  block_count: number;

  /**
   * When true, ensures that the hue distribution across blocks is perceptually even
   * @default true
   */
  fix_hues: boolean;
}

/**
 * Clone effect configuration
 */
export interface CloneEffectConfig extends MatrixEffectConfig {
  /**
   * Source screen for capture
   * @range 0 to 4
   * @default 0
   */
  screen: number;

  /**
   * Pixels down from top of screen
   * @range 0 to 1080
   * @default 0
   */
  down: number;

  /**
   * Pixels across from left of screen
   * @range 0 to 1920
   * @default 0
   */
  across: number;

  /**
   * Width of captured area in pixels
   * @range 1 to 1920
   * @default 128
   */
  width: number;

  /**
   * Height of captured area in pixels
   * @range 1 to 1080
   * @default 128
   */
  height: number;
}

/**
 * Crawler effect configuration
 */
export interface CrawlerEffectConfig extends AtmosphericEffectConfig {
  /**
   * Sway modifier for the crawler effect
   * @default 20
   * @minimum 0
   * @maximum 100
   * Controls how much the pattern moves side to side
   * Higher values create more dramatic lateral movement
   */
  sway: number;

  /**
   * Chop modifier for the crawler effect
   * @default 30
   * @minimum 0
   * @maximum 100
   * Controls the segmentation of the crawler pattern
   * Higher values create more distinct, separated segments
   */
  chop: number;

  /**
   * Stretch modifier for the crawler effect
   * @default 0.5
   * @minimum 0.1
   * @maximum 10
   * Controls how elongated the pattern appears
   * Higher values create longer, more stretched visual elements
   */
  stretch: number;
}

/**
 * Digital Rain effect configuration
 */
export interface DigitalRainEffectConfig extends MatrixEffectConfig {
  /**
   * Number of code lines as multiplier of matrix width
   * @default 1.9
   * @minimum 0.1
   * @maximum 10
   * Higher values create denser rain patterns with more code lines
   * Controls the overall density of the digital rain effect
   */
  count: number;

  /**
   * Number of code lines to add per second
   * @default 30
   * @minimum 1
   * @maximum 100
   * Controls how quickly new code lines appear
   * Higher values create a more intense, rapidly changing effect
   */
  add_speed: number;

  /**
   * Width of code lines as % of matrix
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls thickness of individual rain lines
   * Higher values create thicker, more visible code streams
   */
  width: number;

  /**
   * Seconds for a code line to run from top to bottom
   * @default 2
   * @minimum 0.1
   * @maximum 10
   * Controls the vertical speed of the rain effect
   * Higher values create slower-falling code
   */
  run_seconds: number;

  /**
   * Code line tail length as % of the matrix
   * @default 67
   * @minimum 10
   * @maximum 200
   * Controls how long the fading tail appears behind each code line
   * Higher values create longer, more dramatic trailing effects
   */
  tail: number;

  /**
   * Decay filter for audio impulse
   * @default 0.01
   * @minimum 0.001
   * @maximum 0.1
   * Controls how quickly the audio reactivity fades
   * Lower values create longer-lasting responses to audio
   */
  impulse_decay: number;

  /**
   * Audio injection multiplier
   * @default 1
   * @minimum 0
   * @maximum 5
   * Amplifies the effect's response to audio input
   * Higher values create more dramatic reactions to sound
   */
  multiplier: number;
}

/**
 * Energy effect configuration
 */
export interface EnergyEffectConfig extends BaseEffectConfig {
  /**
   * Toggle automatic color cycling with beat
   * @default false
   * When enabled, colors will change automatically based on audio beats
   * Creates a dynamic color show synchronized to music
   */
  color_cycler: boolean;

  /**
   * Color displayed for low frequency sounds
   * @default "#FF0000"
   * @format color
   * Represents bass and beat elements in the audio
   * Typically red for visual impact of bass drops
   */
  color_lows: string;

  /**
   * Color displayed for mid-range frequency sounds
   * @default "#00FF00"
   * @format color
   * Represents vocals and melodic elements in the audio
   * Provides visual distinction between frequency ranges
   */
  color_mids: string;

  /**
   * Color displayed for high frequency sounds
   * @default "#0000FF"
   * @format color
   * Represents cymbals, high-hats and treble elements
   * Completes the frequency visualization spectrum
   */
  color_high: string;

  /**
   * Responsiveness to changes in sound intensity
   * @default 0.6
   * @minimum 0.1
   * @maximum 1.0
   * Controls how quickly the effect responds to audio input
   * Higher values create more immediate, dramatic reactions
   */
  sensitivity: number;

  /**
   * Method for combining frequency colors
   * @default "additive"
   * "additive" - Colors blend and add together, creating brighter combined areas
   * "overlap" - Colors replace each other based on intensity, with strongest frequency dominant
   * Controls how different frequency colors interact when played simultaneously
   */
  mixing_mode: "additive" | "overlap";
}

/**
 * Energy 2 effect configuration
 */
export interface Energy2EffectConfig extends AtmosphericEffectConfig {}

/**
 * Equalizer effect configuration
 */
export interface EqualizerEffectConfig extends GradientEffectConfig {
  /**
   * Alignment of bands across the LED strip
   * @default "left"
   * "left" - Bands start from the left side
   * "right" - Bands start from the right side
   * "invert" - Inverts the band direction
   * "center" - Bands emanate from center outward
   * Controls the orientation and positioning of frequency bands
   */
  align: "left" | "right" | "invert" | "center";

  /**
   * Number of times to repeat the gradient across the display
   * @default 1
   * @minimum 1
   * @maximum 10
   * Higher values create multiple copies of the gradient pattern
   * Creates a more segmented, multi-colored visualization
   */
  gradient_repeat: number;
}

/**
 * Equalizer 2D effect configuration
 */
export interface Equalizer2dEffectConfig extends MatrixEffectConfig {
  /**
   * Size of the tracer bar that follows a filtered value
   * @default 1
   * @minimum 0
   * @maximum 10
   * Controls the height of the peak indicator line
   * Higher values make the peak tracers more prominent
   */
  peak_percent: number;

  /**
   * Decay filter applied to the peak value
   * @default 0.03
   * @minimum 0.001
   * @maximum 0.5
   * Controls how quickly the peak markers fall back down
   * Lower values make peaks persist longer on screen
   */
  peak_decay: number;

  /**
   * Enable peak markers
   * @default false
   * When enabled, draws a line at the highest recent level for each band
   * Helps visualize audio level transitions
   */
  peak_marks: boolean;

  /**
   * Center the equalizer bar
   * @default false
   * When true, bars extend from the center outward
   * When false, bars extend from the bottom up
   */
  center: boolean;

  /**
   * Use max or mean value for bar size
   * @default false
   * When true, uses maximum frequency value for more dynamic visualization
   * When false, uses mean value for smoother display
   */
  max_vs_mean: boolean;

  /**
   * Make equalizer circular
   * @default false
   * When enabled, transforms the standard bar layout into a circular pattern
   * Creates a radial equalizer visualization
   */
  ring: boolean;

  /**
   * Enable spinning
   * @default false
   * When true, rotates the entire visualization according to audio impulse
   * Creates a dynamic rotation effect synchronized with audio
   */
  spin: boolean;

  /**
   * Number of frequency bands
   * @default 16
   * @minimum 1
   * @maximum 64
   * Controls how many separate frequency bars are displayed
   * Higher values show more detailed frequency visualization
   */
  bands: number;

  /**
   * Frequency range for spin impulse
   * @default "Lows (beat+bass)"
   * Determines which frequency range controls rotation when spin is enabled
   * Different ranges create different rotation patterns based on music content
   */
  frequency_range: FrequencyRange;

  /**
   * Spin impulse multiplier
   * @default 1
   * @minimum 0
   * @maximum 10
   * Amplifies the rotation effect from audio
   * Higher values create more dramatic spinning with audio peaks
   */
  spin_multiplier: number;

  /**
   * Decay filter for spin impulse
   * @default 0.01
   * @minimum 0.001
   * @maximum 0.5
   * Controls how quickly the spinning effect fades out
   * Lower values create longer, smoother rotation transitions
   */
  spin_decay: number;
}

/**
 * Fade effect configuration
 */
export interface FadeEffectConfig extends GradientEffectConfig {
  /**
   * Rate of color change
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how quickly colors transition across the LEDs
   * Lower values create slower, more gradual changes
   * Higher values create faster, more rapid transitions
   */
  speed: number;
}

/**
 * Fire effect configuration
 */
export interface FireEffectConfig extends AtmosphericEffectConfig {
  /**
   * Fire color shift amount
   * @default 0.15
   * @minimum 0
   * @maximum 1
   * Controls how quickly colors shift through the gradient
   * Higher values create more rapid color transitions in the flame effect
   */
  color_shift: number;

  /**
   * Fire intensity modifier
   * @default 0.04
   * @minimum 0.01
   * @maximum 1
   * Controls the strength and height of the flames
   * Higher values create larger, more intense flames
   * Lower values create smaller, more subtle fire effects
   */
  intensity: number;
}

/**
 * Game of Life effect configuration
 */
export interface GameOfLifeEffectConfig extends MatrixEffectConfig {
  /**
   * Health check settings for unstable patterns
   * @default "All"
   * "All" - Apply all health checks
   * "Dead" - Reset when the grid is empty
   * "Oscillating" - Reset when pattern oscillates
   * "None" - No health checks, let patterns run freely
   * Controls when the pattern will be automatically reset
   */
  health_checks: "All" | "Dead" | "Oscillating" | "None";

  /**
   * Base steps per second for simulation
   * @default 30
   * @minimum 1
   * @maximum 100
   * Controls the speed of the Game of Life simulation
   * Higher values make the patterns evolve more quickly
   */
  base_game_speed: number;

  /**
   * Seconds between health checks
   * @default 5
   * @minimum 1
   * @maximum 30
   * How often to check for unstable patterns
   * Lower values detect problems faster but may interfere with interesting evolutions
   */
  health_check_interval: number;

  /**
   * Frequency range for life generation
   * @default "Lows (beat+bass)"
   * "Beat" - Creates cells with rhythmic percussion
   * "Bass" - Responds to low frequencies
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high frequencies
   * Controls which audio frequencies trigger new cell generation
   */
  frequency_range: FrequencyRange;

  /**
   * Generate entities on beat
   * @default true
   * When enabled, audio beats will spawn new living cells
   * Creates a music-synchronized pattern generation
   */
  beat_inject: boolean;

  /**
   * Decay filter for life generation
   * @default 0.01
   * @minimum 0.001
   * @maximum 0.1
   * Controls how quickly audio impulse fades
   * Lower values create longer-lasting effects from audio
   */
  impulse_decay: number;
}

/**
 * GIF Player effect configuration
 */
export interface GifPlayerEffectConfig extends MatrixEffectConfig {
  /**
   * Quality level for image resizing operations
   * @default "Slow"
   * "Fastest" - Lowest quality, highest performance
   * "Fast" - Balanced quality and performance
   * "Slow" - Higher quality, lower performance
   * "Slowest" - Highest quality, lowest performance
   * Controls the algorithm used when scaling GIFs to fit the display
   */
  resize_method: "Fastest" | "Fast" | "Slow" | "Slowest";

  /**
   * Path or URL to the GIF file
   * @default ""
   * Can be a local file path or remote URL
   * Supported formats include standard GIF files
   * Empty string will result in a blank display
   */
  image_location: string;

  /**
   * Enable ping-pong animation effect
   * @default false
   * When true, GIF plays forward then backward instead of looping
   * Creates a smoother transition between animation cycles
   */
  bounce: boolean;

  /**
   * Frames per second for GIF playback
   * @default 15
   * @minimum 1
   * @maximum 60
   * Controls animation speed independent of the GIF's embedded timing
   * Higher values create faster animations, lower values create slower ones
   */
  gif_fps: number;
}

/**
 * Glitch effect configuration
 */
export interface GlitchEffectConfig extends AtmosphericEffectConfig {
  /**
   * Minimum color saturation to trigger glitch effect
   * @default 0.5
   * @minimum 0
   * @maximum 1
   * Controls the color vibrancy threshold required to activate glitches
   * Lower values make more colors trigger the effect
   * Higher values restrict glitching to only highly saturated areas
   */
  saturation_threshold: number;
}

/**
 * Image effect configuration
 */
export interface ImageSpinEffectConfig extends MatrixEffectConfig {
  /**
   * Use a test pattern instead of loading an image
   * @default false
   * When enabled, displays a built-in test pattern grid
   * Useful for testing when no image is available
   */
  pattern: boolean;

  /**
   * Frequency range that controls the image effects
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum affects the image size and rotation
   */
  frequency_range: FrequencyRange;

  /**
   * Audio input amplification factor
   * @default 0.5
   * @minimum 0
   * @maximum 5
   * Increases the effect of audio on image transformations
   * Higher values create more dramatic responses to sound
   */
  multiplier: number;

  /**
   * Minimum size multiplier for the image
   * @default 0.3
   * @minimum 0.1
   * @maximum 1
   * Sets the smallest size the image will shrink to when reacting to audio
   * Lower values allow more dramatic size changes with audio
   */
  min_size: number;

  /**
   * Use bilinear interpolation for smoother scaling
   * @default false
   * When enabled, provides higher quality image scaling
   * May reduce performance on larger matrices
   */
  bilinear: boolean;

  /**
   * Spin image according to audio impulse
   * @default false
   * When enabled, rotates the image based on audio intensity
   * Creates a dynamic spinning effect synchronized with music
   */
  spin: boolean;

  /**
   * When spinning, clip image to frame boundaries
   * @default false
   * When enabled, prevents the image from extending outside the display area
   * When disabled, allows corners of the image to extend beyond visible area during rotation
   */
  clip: boolean;

  /**
   * Image source path or URL
   * @default ""
   * Can be a local file path or remote URL
   * Supported formats include JPG, PNG, and most common image formats
   * Empty string will result in a blank display or test pattern if enabled
   */
  image_source: string;
}

/**
 * Keybeat 2D effect configuration
 */
export interface Keybeat2dEffectConfig extends MatrixEffectConfig {
  /**
   * Quality level for image resizing operations
   * @default "Slow"
   * "Fastest" - Lowest quality, highest performance
   * "Fast" - Balanced quality and performance
   * "Slow" - Higher quality, lower performance
   * "Slowest" - Highest quality, lowest performance
   * Controls the algorithm used when scaling images to fit the display
   */
  resize_method: "Fastest" | "Fast" | "Slow" | "Slowest";

  /**
   * Horizontal stretch percentage
   * @default 100
   * @minimum 10
   * @maximum 200
   * Controls the width of the image relative to its original size
   * Values above 100 expand the width, below 100 compress it
   */
  stretch_horizontal: number;

  /**
   * Vertical stretch percentage
   * @default 100
   * @minimum 10
   * @maximum 200
   * Controls the height of the image relative to its original size
   * Values above 100 expand the height, below 100 compress it
   */
  stretch_vertical: number;

  /**
   * Horizontal center offset
   * @default 0
   * @minimum -100
   * @maximum 100
   * Shifts the horizontal position of the image
   * Negative values move left, positive values move right
   */
  center_horizontal: number;

  /**
   * Vertical center offset
   * @default 0
   * @minimum -100
   * @maximum 100
   * Shifts the vertical position of the image
   * Negative values move up, positive values move down
   */
  center_vertical: number;

  /**
   * Path or URL to image sequence
   * @default ""
   * Can be a local file path or remote URL
   * Supports standard image formats (PNG, JPG, etc.)
   * For sequences, use format like "path/to/images/{}.png"
   */
  image_location: string;

  /**
   * Frame indices to display on beat detection
   * @default ""
   * Comma-separated list of frame numbers (e.g., "1,5,10")
   * These frames will be triggered when a beat is detected
   */
  beat_frames: string;

  /**
   * Frame indices to exclude from animation
   * @default ""
   * Comma-separated list of frame numbers to skip
   * These frames will be excluded from the normal sequence
   */
  skip_frames: string;

  /**
   * Show detailed diagnostic information overlay
   * @default false
   * When enabled, displays performance metrics and debug data
   * Useful for troubleshooting animation issues
   */
  deep_diag: boolean;

  /**
   * Generate test beats for animation testing
   * @default false
   * When enabled, simulates beat detection events
   * Useful for previewing beat-reactive animations without audio
   */
  fake_beat: boolean;

  /**
   * Maintain original image proportions
   * @default false
   * When enabled, prevents distortion when resizing
   * May result in letterboxing or pillarboxing
   */
  keep_aspect_ratio: boolean;

  /**
   * Scale image to fill entire matrix
   * @default false
   * When enabled, ensures image completely fills the display
   * May crop portions of the image that don't fit
   */
  force_fit: boolean;

  /**
   * Skip first and last keyframes during ping-pong
   * @default false
   * When enabled, prevents showing the same frame twice at direction change
   * Creates smoother transitions when animation reverses
   */
  ping_pong_skip: boolean;

  /**
   * Play animation forward then backward
   * @default false
   * When enabled, sequence plays forward then reverses instead of looping
   * Creates a more fluid continuous animation pattern
   */
  ping_pong: boolean;

  /**
   * Reduce beat detection sensitivity
   * @default false
   * When enabled, only responds to stronger/clearer beats
   * Useful for preventing unwanted triggers from quieter sounds
   */
  half_beat: boolean;

  /**
   * Brightness multiplier for displayed images
   * @default 1
   * @minimum 0
   * @maximum 5
   * Adjusts the luminance of the displayed content
   * Values below 1 darken, above 1 brighten the images
   */
  image_brightness: number;
}

/**
 * Lava Lamp effect configuration
 */
export interface LavaLampEffectConfig extends AtmosphericEffectConfig {
  /**
   * Difference between lighter and darker spots
   * @default 0.6
   * @minimum 0.1
   * @maximum 1
   * Controls the visual distinction between light and dark areas
   * Higher values create more pronounced, defined patterns
   * Lower values create softer, more subtle transitions
   */
  contrast: number;
}

/**
 * Magnitude effect configuration
 */
export interface MagnitudeEffectConfig extends GradientEffectConfig {
  /**
   * Frequency range to detect for audio reactivity
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum drives the magnitude effect
   */
  frequency_range: FrequencyRange;
}

/**
 * Marching effect configuration
 */
export interface MarchingEffectConfig extends AtmosphericEffectConfig {}

/**
 * Melt effect configuration
 */
export interface MeltEffectConfig extends AtmosphericEffectConfig {}

/**
 * Melt and Sparkle effect configuration
 */
export interface MeltAndSparkleEffectConfig extends AtmosphericEffectConfig {
  /**
   * Brightness of the melt effect background
   * @default 0.4
   * @minimum 0
   * @maximum 1
   * Controls the visibility of the underlying melt animation
   * Lower values create a darker, more subtle background effect
   */
  bg_bright: number;

  /**
   * Size of the melting lava sections
   * @default 0.5
   * @minimum 0.1
   * @maximum 1
   * Controls the width of fluid elements in the effect
   * Higher values create larger, more flowing patterns
   */
  lava_width: number;

  /**
   * Audio threshold for triggering strobes
   * @default 0.75
   * @minimum 0
   * @maximum 1
   * Minimum audio level required to activate sparkle effects
   * Higher values make strobes trigger only on louder sounds
   */
  strobe_threshold: number;

  /**
   * Strobe flash frequency
   * @default 0.75
   * @minimum 0.1
   * @maximum 1
   * Controls how rapidly the sparkle effects appear
   * Higher values create more frequent, intense flashing
   */
  strobe_rate: number;

  /**
   * Strobe flash size
   * @default 0.3
   * @minimum 0.1
   * @maximum 1
   * Controls the size of each sparkle/flash element
   * Higher values create larger, more prominent flashes
   */
  strobe_width: number;

  /**
   * Strobe fade-out speed
   * @default 0.25
   * @minimum 0.01
   * @maximum 1
   * Controls how quickly sparkles fade after appearing
   * Lower values create longer-lasting sparkle effects
   */
  strobe_decay_rate: number;

  /**
   * Strobe blur amount
   * @default 3
   * @minimum 0
   * @maximum 10
   * Controls the softness of sparkle edges
   * Higher values create softer, more diffused flashes
   */
  strobe_blur: number;
}

/**
 * Metro effect configuration
 */
export interface MetroEffectConfig extends BaseEffectConfig {
  /**
   * Time between flashes in seconds
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls the frequency of the metro flash pattern
   * Lower values create faster flashing sequences
   */
  pulse_period: number;

  /**
   * Flash to blank ratio
   * @default 0.3
   * @minimum 0.1
   * @maximum 0.9
   * Controls the duty cycle of flashes (proportion of on vs off time)
   * Lower values create shorter flashes with longer pauses
   */
  pulse_ratio: number;

  /**
   * Steps of pattern division
   * @default 4
   * @minimum 1
   * @maximum 16
   * Divides the strip into equal sections for sequential flashing
   * Higher values create more complex patterns with smaller segments
   */
  steps: number;

  /**
   * Flash color
   * @default "#FFFFFF"
   * @format color
   * Color used for the metro flash effect
   * Typically white for maximum visibility and timing reference
   */
  flash_color: string;

  /**
   * Enable graph capture
   * @default true
   * When enabled, records performance metrics for visualization
   * Useful for monitoring system performance during operation
   */
  capture: boolean;

  /**
   * CPU measurement window in seconds
   * @default 10
   * @minimum 1
   * @maximum 60
   * Duration of the performance measurement period
   * Longer windows provide more averaged, stable measurements
   */
  cpu_secs: number;
}

/**
 * Multicolor Bar effect configuration
 */
export interface MultiBarEffectConfig extends GradientEffectConfig {
  /**
   * Animation mode for the multicolor bar effect
   * @default "wipe"
   * "cascade" - Colors move in sequence one after another
   * "wipe" - Full color sweep across the LED strip
   * Controls the movement pattern of the multicolor bar
   */
  mode: "cascade" | "wipe";

  /**
   * Acceleration profile of bar movement
   * @default "linear"
   * "ease_in_out" - Slow start and end, fast middle
   * "ease_in" - Slow start, fast end
   * "ease_out" - Fast start, slow end
   * "linear" - Constant speed throughout
   * Controls how the bar accelerates and decelerates
   */
  ease_method: "ease_in_out" | "ease_in" | "ease_out" | "linear";

  /**
   * Amount of color change per beat
   * @default 0.125
   * @minimum 0
   * @maximum 1
   * Higher values result in more dramatic color shifts with each beat
   * Controls how much the color advances through the gradient per beat
   */
  color_step: number;
}

/**
 * Noise effect configuration
 */
export interface NoiseEffectConfig extends MatrixEffectConfig {
  /**
   * Animation speed of the noise effect
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how quickly the noise pattern changes
   * Higher values create more rapid, energetic animations
   */
  speed: number;

  /**
   * Intensity of the noise pattern
   * @default 128
   * @minimum 1
   * @maximum 255
   * Controls the strength and visibility of the noise
   * Higher values create more pronounced, vivid patterns
   */
  intensity: number;

  /**
   * Stretch factor for the noise effect
   * @default 1.5
   * @minimum 0.1
   * @maximum 10
   * Controls how the noise pattern is elongated
   * Higher values create more stretched, flowing patterns
   */
  stretch: number;

  /**
   * Zoom level for the noise pattern
   * @default 2
   * @minimum 0.1
   * @maximum 10
   * Controls the scale/density of the noise
   * Higher values create more detailed, fine-grained patterns
   */
  zoom: number;

  /**
   * Decay filter for audio impulse
   * @default 0.06
   * @minimum 0.001
   * @maximum 0.5
   * Controls how quickly audio reactivity fades
   * Lower values create longer-lasting responses to audio
   */
  impulse_decay: number;

  /**
   * Audio reaction multiplier
   * @default 2
   * @minimum 0
   * @maximum 10
   * Amplifies the effect's response to audio input
   * Higher values create more dramatic visual responses to sound
   */
  multiplier: number;

  /**
   * Enable soap smear effect
   * @default false
   * When enabled, adds a fluid, smeared quality to the noise
   * Creates a more liquid, flowing visual appearance
   */
  soap: boolean;
}

/**
 * Pitch Spectrum effect configuration
 */
export interface PitchSpectrumEffectConfig extends GradientEffectConfig {
  /**
   * Rate at which notes fade after being triggered
   * @default 0.15
   * @minimum 0.01
   * @maximum 1.0
   * Controls how quickly visualized notes disappear from the display
   * Lower values create longer-lasting note trails
   * Higher values create shorter, more responsive visualization
   */
  fade_rate: number;

  /**
   * Responsiveness to note changes in the audio
   * @default 1.0
   * @minimum 0.1
   * @maximum 2.0
   * Controls how quickly the effect responds to changes in pitch
   * Lower values create smoother transitions between notes
   * Higher values create more immediate, precise pitch tracking
   */
  responsiveness: number;
}

/**
 * Pixels effect configuration
 */
export interface PixelsEffectConfig extends BaseEffectConfig {
  /**
   * Fixed frame rate
   * @default 20
   * @minimum 1
   * @maximum 100
   * Controls the animation speed in frames per second
   * Higher values create faster visual updates
   */
  speed: number;

  /**
   * Time between pixel steps in seconds
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how frequently pixels move/appear
   * Lower values create more rapid pixel movements
   */
  step_period: number;

  /**
   * Number of pixels per step
   * @default 1
   * @minimum 1
   * @maximum 10
   * Controls how many pixels are drawn in each step
   * Higher values create larger pixel groups
   */
  pixels: number;

  /**
   * Pixel color
   * @default "#FFFFFF"
   * @format color
   * Color of the pixels being displayed
   * Used for diagnostics or creating simple patterns
   */
  pixel_color: string;

  /**
   * Accumulate pixels instead of moving a single group
   * @default false
   * When true, pixels remain visible as they're drawn
   * When false, only the current pixel group is visible
   * Creates different visual patterns for testing or diagnostics
   */
  build_up: boolean;
}

/**
 * Plasma2D effect configuration
 */
export interface Plasma2dEffectConfig extends MatrixEffectConfig {
  /**
   * Frequency range for beat detection
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum drives the plasma effect
   */
  frequency_range: FrequencyRange;

  /**
   * Vertical density parameter
   * @default 0.1
   * @minimum 0.01
   * @maximum 1.0
   * Controls the vertical spacing of plasma waves
   * Lower values create broader, more spaced patterns
   * Higher values create tighter, more compressed patterns
   */
  density_vertical: number;

  /**
   * Twist parameter
   * @default 0.07
   * @minimum 0.01
   * @maximum 1.0
   * Controls the amount of rotation and distortion in the plasma pattern
   * Higher values create more twisted, swirling effects
   */
  twist: number;

  /**
   * Radius parameter
   * @default 0.2
   * @minimum 0.1
   * @maximum 2.0
   * Controls the size of plasma elements
   * Higher values create larger, more blooming patterns
   */
  radius: number;

  /**
   * Density parameter
   * @default 0.5
   * @minimum 0.1
   * @maximum 2.0
   * Controls the overall density and complexity of the plasma pattern
   * Higher values create more detailed, intricate effects
   */
  density: number;

  /**
   * Lower density band
   * @default 0.5
   * @minimum 0
   * @maximum 1.0
   * Controls the lower threshold for pattern visibility
   * Higher values create more contrast between dense and sparse areas
   */
  lower: number;
}

/**
 * PlasmaWLED effect configuration
 */
export interface PlasmaWLEDEffectConfig extends MatrixEffectConfig {
  /**
   * Frequency range for audio reactivity
   * @default "Lows (beat+bass)"
   * "Beat" - Responds to rhythmic percussion elements
   * "Bass" - Responds to low frequency sounds
   * "Lows (beat+bass)" - Combines beat and bass responses
   * "Mids" - Responds to mid-range frequencies
   * "High" - Responds to high-frequency sounds
   * Controls which part of the audio spectrum drives the plasma effect
   */
  frequency_range: FrequencyRange;

  /**
   * Base animation speed of the plasma effect
   * @default 128
   * @minimum 1
   * @maximum 255
   * Controls how quickly the plasma pattern changes
   * Higher values create faster, more dynamic animations
   */
  speed: number;

  /**
   * Horizontal stretch factor for the plasma pattern
   * @default 128
   * @minimum 1
   * @maximum 255
   * Controls how the pattern is elongated horizontally
   * Higher values create wider, more stretched patterns
   */
  stretch_horizontal: number;

  /**
   * Vertical stretch factor for the plasma pattern
   * @default 128
   * @minimum 1
   * @maximum 255
   * Controls how the pattern is elongated vertically
   * Higher values create taller, more stretched patterns
   */
  stretch_vertical: number;

  /**
   * Audio to pattern size multiplier
   * @default 0.4
   * @minimum 0
   * @maximum 2
   * Controls how audio intensity affects the size of plasma elements
   * Higher values make audio create more dramatic size changes
   */
  size_multiplication: number;

  /**
   * Audio to animation speed multiplier
   * @default 0.5
   * @minimum 0
   * @maximum 2
   * Controls how audio intensity affects animation speed
   * Higher values make audio create more dramatic speed changes
   */
  speed_multiplication: number;
}

/**
 * Power effect configuration
 */
export interface PowerEffectConfig extends GradientEffectConfig {
  /**
   * Flash color for percussive hits
   * @default "#ffffff"
   * @format color
   * Color used for bright flashes that respond to percussive elements in audio
   * Creates sharp, impactful highlights synchronized with beats
   */
  sparks_color: string;

  /**
   * Bass decay rate
   * @default 0.05
   * @minimum 0.01
   * @maximum 1.0
   * Controls how quickly bass elements fade after being triggered
   * Lower values create longer-lasting bass visualizations
   */
  bass_decay_rate: number;

  /**
   * Sparks decay rate
   * @default 0.05
   * @minimum 0.01
   * @maximum 1.0
   * Controls how quickly percussive flashes fade out
   * Lower values create longer-lasting spark effects
   */
  sparks_decay_rate: number;
}

/**
 * Rain effect configuration
 */
export interface RainEffectConfig extends BaseEffectConfig {
  /**
   * Color for low frequency sounds
   * @default "white"
   * @format color
   * Controls the color of visual elements representing bass and low frequencies
   * Typically used for the main raindrop color
   */
  lows_color: string;

  /**
   * Frequency to pulse the entire strip
   * @default "Off"
   * "Off" - No full strip pulsing
   * "Lows" - Full strip pulses with bass/low frequencies
   * "Mids" - Full strip pulses with mid-range frequencies
   * "Highs" - Full strip pulses with high frequencies
   * Controls which frequency range causes the entire strip to pulse in brightness
   */
  pulse_strip: "Off" | "Lows" | "Mids" | "Highs";

  /**
   * Color for mid-range sounds
   * @default "red"
   * @format color
   * Controls the color of visual elements representing mid-range frequencies
   * Typically used for secondary raindrop effects
   */
  mids_color: string;

  /**
   * Color for high frequency sounds
   * @default "blue"
   * @format color
   * Controls the color of visual elements representing high frequencies
   * Typically used for tertiary raindrop effects
   */
  high_color: string;

  /**
   * Sensitivity to low sounds
   * @default 0.1
   * @minimum 0
   * @maximum 1
   * Controls how responsive the effect is to bass and low frequencies
   * Higher values create more raindrops from lower sound levels
   */
  lows_sensitivity: number;

  /**
   * Sensitivity to mid sounds
   * @default 0.05
   * @minimum 0
   * @maximum 1
   * Controls how responsive the effect is to mid-range frequencies
   * Higher values create more raindrops from lower sound levels
   */
  mids_sensitivity: number;

  /**
   * Sensitivity to high sounds
   * @default 0.1
   * @minimum 0
   * @maximum 1
   * Controls how responsive the effect is to high frequencies
   * Higher values create more raindrops from lower sound levels
   */
  high_sensitivity: number;

  /**
   * Droplet animation style
   * @default "Blob"
   * "Blob" - Rounded, organic droplet animation
   * "Laser" - Sharp, linear beam animation
   * "Ripple" - Expanding circular wave animation
   * Controls the visual appearance of rainfall elements
   */
  raindrop_animation: "Blob" | "Laser" | "Ripple";
}

/**
 * Rainbow effect configuration
 */
export interface RainbowEffectConfig extends BaseEffectConfig {
  /**
   * Speed of the rainbow animation
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how quickly the rainbow colors move across the LEDs
   * Higher values create faster color transitions
   */
  speed: number;

  /**
   * Frequency of the rainbow pattern
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how many complete rainbow cycles appear across the LED strip
   * Higher values create more compressed rainbows with more color repetition
   * Lower values create broader, more gradual color transitions
   */
  frequency: number;
}

/**
 * Random Flash effect configuration
 */
export interface RandomFlashEffectConfig extends BaseEffectConfig {
  /**
   * Animation speed of the random flash effect
   * @default 1
   * @minimum 0.1
   * @maximum 10
   * Controls how quickly flashes appear and disappear
   * Higher values create faster, more energetic patterns
   */
  speed: number;

  /**
   * Color of the random flashes
   * @default "#FFFFFF"
   * @format color
   * Sets the color of individual flash points
   * Default white creates bright, stark highlights
   */
  hit_color: string;

  /**
   * Duration of each flash in seconds
   * @default 0.1
   * @minimum 0.01
   * @maximum 1
   * Controls how long each random flash remains visible
   * Lower values create brief, strobing effects
   * Higher values create longer-lasting glows
   */
  hit_duration: number;

  /**
   * Frequency of random flashes per second
   * @default 2
   * @minimum 0.1
   * @maximum 10
   * Controls how often new random flashes appear
   * Higher values create more frequent, dense flashing patterns
   */
  hit_probability_per_sec: number;

  /**
   * Size of each flash relative to strip length
   * @default 0.1
   * @minimum 0.01
   * @maximum 1
   * Controls the width of each flash relative to the total strip
   * Lower values create small sparkle points
   * Higher values create larger flash areas
   */
  hit_relative_size: number;
}

/**
 * Real Strobe effect configuration
 */
export interface RealStrobeEffectConfig extends BaseEffectConfig {
  /** Color gradient for bass strobes */
  gradient: string;

  /** Gradient roll amount */
  gradient_roll: number;

  /** Color change per bass hit */
  color_step: number;

  /** Bass strobe decay rate */
  bass_strobe_decay_rate: number;

  /** Percussive strobe color */
  strobe_color: string;

  /** Percussive strobe width */
  strobe_width: number;

  /** Percussive strobe decay rate */
  strobe_decay_rate: number;

  /** Color shift delay */
  color_shift_delay: number;
}

/**
 * Scan effect configuration
 */
export interface ScanEffectConfig
  extends GradientEffectConfig, ModulationConfig {
  /** Whether to bounce at edges */
  bounce: boolean;

  /** Width of scan eye as percentage */
  scan_width: number;

  /** Scan base speed */
  speed: number;

  /** Scan color */
  color_scan: string;

  /** Frequency range for beat detection */
  frequency_range: FrequencyRange;

  /** Speed impact multiplier */
  multiplier: number;

  /** Adjust color intensity with audio */
  color_intensity: boolean;

  /** Use gradient for colors */
  use_grad: boolean;

  /** Spread gradient across scan */
  full_grad?: boolean;

  /** Enable advanced options */
  advanced: boolean;

  /** Number of scan elements */
  count?: number;
}

/**
 * Scan and Flare effect configuration
 */
export interface ScanAndFlareEffectConfig extends Omit<
  ScanEffectConfig,
  "advanced" | "count"
> {
  /** Maximum sparkles */
  sparkles_max: number;

  /** Sparkle size relative to scan */
  sparkles_size: number;

  /** Sparkle fade time */
  sparkles_time: number;

  /** Audio threshold for sparkles */
  sparkles_threshold: number;
}

/**
 * Scan Multi effect configuration
 */
export interface ScanMultiEffectConfig extends Omit<
  ScanEffectConfig,
  "color_scan"
> {
  /** Color for low power scan */
  color_low: string;

  /** Color for mid power scan */
  color_mid: string;

  /** Color for high power scan */
  color_high: string;

  /** Audio processing source */
  input_source?: "Power" | "Melbank";

  /** Attack filter damping */
  attack?: number;

  /** Decay filter damping */
  decay?: number;

  /** Enable audio filters */
  filter?: boolean;
}

/**
 * Scroll effect configuration
 */
export interface ScrollEffectConfig extends BaseEffectConfig {
  /** Blur amount */
  blur: number;

  /** Scroll speed */
  speed: number;

  /** Color decay rate */
  decay: number;

  /** Audio threshold */
  threshold: number;

  /** Color for low sounds */
  color_lows: string;

  /** Color for mid sounds */
  color_mids: string;

  /** Color for high sounds */
  color_high: string;
}

/**
 * Scroll+ effect configuration
 */
export interface ScrollPlusEffectConfig extends Omit<
  ScrollEffectConfig,
  "speed"
> {
  /** Device width scrolled per second */
  scroll_per_sec: number;

  /** Decay rate per second */
  decay_per_sec: number;
}

/**
 * Single Color effect configuration
 */
export interface SingleColorEffectConfig
  extends BaseEffectConfig, ModulationConfig {
  /** Animation speed */
  speed: number;

  /** Color of the strip */
  color: string;
}

/**
 * Spectrum effect configuration
 */
export interface SpectrumEffectConfig extends BaseEffectConfig {
  /** RGB mix method */
  rgb_mix: number;
}

/**
 * BPM Strobe effect configuration
 */
export interface StrobeEffectConfig extends GradientEffectConfig {
  /** Strobes per beat */
  strobe_frequency:
    | "1/1 (.,. )"
    | "1/2 (.-. )"
    | "1/4 (.o. )"
    | "1/8 (◉◡◉ )"
    | "1/16 (◉﹏◉ )"
    | "1/32 (⊙▃⊙ )";

  /** Single strobe fade rate */
  strobe_decay: number;

  /** Strobe brightness decay across beat */
  beat_decay: number;

  /** Strobe firing pattern */
  strobe_pattern: "****" | "*.*." | ".*.*" | "*..." | "...*";
}

/**
 * Texter 2D effect configuration
 */
export interface Texter2dEffectConfig extends MatrixEffectConfig {
  /** Apply alpha effect to text */
  alpha: boolean;

  /** Text effect option switch 1 */
  option_1: boolean;

  /** Text effect option switch 2 */
  option_2: boolean;

  /** General value for text effects */
  value_option_1: number;

  /** Font selection */
  font:
    | "Roboto Regular"
    | "Roboto Bold"
    | "Roboto Black"
    | "Stop"
    | "Technique"
    | "8bitOperatorPlus8"
    | "Press Start 2P"
    | "Blade-5x8";

  /** Text to display */
  text: string;

  /** Font size percentage */
  height_percent: number;

  /** Text color */
  text_color: string;

  /** Resize quality */
  resize_method: "Fastest" | "Fast" | "Slow";

  /** Text animation type */
  text_effect:
    | "Side Scroll"
    | "Spokes"
    | "Carousel"
    | "Wave"
    | "Pulse"
    | "Fade";

  /** Diagnostic overlay */
  deep_diag: boolean;

  /** Use gradient for text */
  use_gradient: boolean;

  /** Impulse decay filter */
  impulse_decay: number;

  /** Audio effect multiplier */
  multiplier: number;

  /** General speed for text effects */
  speed_option_1: number;
}

/**
 * VU Meter effect configuration
 */
export interface VumeterEffectConfig extends BaseEffectConfig {
  /** Volume peak decay filter */
  peak_decay: number;

  /** Minimum volume color */
  color_min: string;

  /** Maximum volume warning color */
  color_max: string;

  /** Normal volume range color */
  color_mid: string;

  /** Peak indicator color */
  color_peak: string;

  /** Peak indicator size */
  peak_percent: number;

  /** Maximum volume cutoff */
  max_volume: number;
}

/**
 * Water effect configuration
 */
export interface WaterEffectConfig extends AtmosphericEffectConfig {
  /** Vertical position shift */
  vertical_shift: number;

  /** Bass ripple size */
  bass_size: number;

  /** Mid frequency ripple size */
  mids_size: number;

  /** High frequency ripple size */
  high_size: number;

  /** Ripple viscosity */
  viscosity: number;
}

/**
 * Wavelength effect configuration
 */
export interface WavelengthEffectConfig extends GradientEffectConfig {}

/**
 * Map of effect IDs to their configuration types
 */
export interface EffectConfigMap {
  gradient: GradientConfig;
  bands: BandsEffectConfig;
  bands_matrix: BandsMatrixEffectConfig;
  bar: BarEffectConfig;
  blade_power_plus: BladePowerPlusEffectConfig;
  blender: BlenderEffectConfig;
  block_reflections: BlockReflectionsEffectConfig;
  blocks: BlocksEffectConfig;
  clone: CloneEffectConfig;
  crawler: CrawlerEffectConfig;
  digitalrain2d: DigitalRainEffectConfig;
  energy: EnergyEffectConfig;
  energy2: Energy2EffectConfig;
  equalizer: EqualizerEffectConfig;
  equalizer2d: Equalizer2dEffectConfig;
  fade: FadeEffectConfig;
  fire: FireEffectConfig;
  game_of_life: GameOfLifeEffectConfig;
  gifplayer: GifPlayerEffectConfig;
  glitch: GlitchEffectConfig;
  imagespin: ImageSpinEffectConfig;
  keybeat2d: Keybeat2dEffectConfig;
  lava_lamp: LavaLampEffectConfig;
  magnitude: MagnitudeEffectConfig;
  marching: MarchingEffectConfig;
  melt: MeltEffectConfig;
  melt_and_sparkle: MeltAndSparkleEffectConfig;
  metro: MetroEffectConfig;
  multiBar: MultiBarEffectConfig;
  noise2d: NoiseEffectConfig;
  pitchSpectrum: PitchSpectrumEffectConfig;
  pixels: PixelsEffectConfig;
  plasma2d: Plasma2dEffectConfig;
  plasmawled: PlasmaWLEDEffectConfig;
  power: PowerEffectConfig;
  rain: RainEffectConfig;
  rainbow: RainbowEffectConfig;
  random_flash: RandomFlashEffectConfig;
  real_strobe: RealStrobeEffectConfig;
  scan: ScanEffectConfig;
  scan_and_flare: ScanAndFlareEffectConfig;
  scan_multi: ScanMultiEffectConfig;
  scroll: ScrollEffectConfig;
  scroll_plus: ScrollPlusEffectConfig;
  singleColor: SingleColorEffectConfig;
  spectrum: SpectrumEffectConfig;
  strobe: StrobeEffectConfig;
  texter2d: Texter2dEffectConfig;
  vumeter: VumeterEffectConfig;
  water: WaterEffectConfig;
  wavelength: WavelengthEffectConfig;
}

/**
 * Utility type for any effect configuration
 */
export type AnyEffectConfig = EffectConfigMap[keyof EffectConfigMap];
