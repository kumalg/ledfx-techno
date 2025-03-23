/**
 * Base configuration properties shared by all effects
 */
export interface BaseEffectConfig {
  /** 
   * Brightness of the LED strip (0-1)
   * Controls overall brightness of the effect
   */
  brightness: number;
  
  /** 
   * Background color as hex string
   * Applied behind the main effect
   */
  background_color: string;
  
  /** 
   * Brightness of the background color (0-1)
   */
  background_brightness: number;
  
  /** 
   * Amount to blur the effect (0-10)
   * Higher values create a softer look
   */
  blur: number;
  
  /** 
   * Whether to flip the effect horizontally
   */
  flip: boolean;
  
  /** 
   * Whether to mirror the effect
   * Creates symmetry from the center outward
   */
  mirror: boolean;
}

/**
 * Configuration for gradient-based effects
 */
export interface GradientEffectConfig extends BaseEffectConfig {
  /**
   * Color gradient to display
   * CSS linear-gradient format or named preset
   */
  gradient: string;
  
  /**
   * Amount to shift the gradient (0-10)
   * Creates movement in the gradient colors
   */
  gradient_roll: number;
}

/**
 * Configuration for matrix-specific effects
 */
export interface MatrixEffectConfig extends GradientEffectConfig {
  /** Enable diagnostic information */
  diag?: boolean;
  
  /** Enable advanced options */
  advanced?: boolean;
  
  /** Flip the image horizontally */
  flip_horizontal?: boolean;
  
  /** Flip the image vertically */
  flip_vertical?: boolean;
  
  /** 90 Degree rotations (0-3) */
  rotate?: number;
  
  /** Ignore audio input for testing */
  test?: boolean;
  
  /** Dump image data for debugging */
  dump?: boolean;
}

/**
 * Configuration for modulation capabilities
 */
export interface ModulationConfig {
  /** Enable brightness modulation */
  modulate: boolean;
  
  /** Type of modulation animation */
  modulation_effect: "sine" | "breath";
  
  /** Speed of modulation (0.01-1) */
  modulation_speed: number;
}

/**
 * Configuration for audio reactivity
 */
export interface AudioReactiveConfig {
  /** Frequency range to respond to */
  frequency_range?: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Audio response multiplier */
  multiplier?: number;
}

/**
 * Configuration for atmospheric effects
 */
export interface AtmosphericEffectConfig extends GradientEffectConfig {
  /** Use perceptually even hue distribution */
  fix_hues: boolean;
  
  /** Effect speed modifier */
  speed: number;
  
  /** Audio reactivity modifier */
  reactivity: number;
}

// Effect-specific configurations

/**
 * Gradient effect configuration
 */
export interface GradientConfig extends GradientEffectConfig, ModulationConfig {
  /** Speed of the effect (0.1-10) */
  speed: number;
}

/**
 * Bands effect configuration 
 */
export interface BandsEffectConfig extends GradientEffectConfig {
  /** Number of bands (1-16) */
  band_count: number;
  
  /** Alignment of bands */
  align: "left" | "right" | "invert" | "center";
}

/**
 * Bands Matrix effect configuration
 */
export interface BandsMatrixEffectConfig extends GradientEffectConfig {
  /** Number of bands (1-16) */
  band_count: number;
  
  /** Flip gradient colors */
  flip_gradient: boolean;
  
  /** Flip horizontally */
  flip_horizontal: boolean;
}

/**
 * Bar effect configuration
 */
export interface BarEffectConfig extends GradientEffectConfig {
  /** Animation mode */
  mode: "bounce" | "wipe" | "in-out";
  
  /** Acceleration profile of bar */
  ease_method: "ease_in_out" | "ease_in" | "ease_out" | "linear";
  
  /** Amount of color change per beat */
  color_step: number;
  
  /** Skip odd or even beats */
  beat_skip: "none" | "odds" | "even";
  
  /** Offset the beat */
  beat_offset: number;
  
  /** If skipping beats, skip every */
  skip_every: 1 | 2;
}

/**
 * Blade Power+ effect configuration
 */
export interface BladePowerPlusEffectConfig extends GradientEffectConfig {
  /** Use perceptually even hue distribution */
  fix_hues: boolean;
  
  /** Rate of color decay */
  decay: number;
  
  /** Make the reactive bar bigger/smaller */
  multiplier: number;
  
  /** Frequency range for the beat detection */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
}

/**
 * Blender effect configuration
 */
export interface BlenderEffectConfig extends MatrixEffectConfig {
  /** How to stretch the mask source pixels */
  mask_stretch: "2d full" | "2d tile";
  
  /** How to stretch the background source pixels */
  background_stretch: "2d full" | "2d tile";
  
  /** How to stretch the foreground source pixels */
  foreground_stretch: "2d full" | "2d tile";
  
  /** The virtual from which to source the mask */
  mask: string;
  
  /** The virtual from which to source the foreground */
  foreground: string;
  
  /** The virtual from which to source the background */
  background: string;
  
  /** Switch Foreground and Background */
  invert_mask: boolean;
  
  /** Mask cutoff value */
  mask_cutoff: number;
}

/**
 * Block Reflections effect configuration
 */
export interface BlockReflectionsEffectConfig extends AtmosphericEffectConfig {}

/**
 * Blocks effect configuration
 */
export interface BlocksEffectConfig extends GradientEffectConfig {
  /** Number of color blocks (1-10) */
  block_count: number;
  
  /** Use perceptually even hue distribution */
  fix_hues: boolean;
}

/**
 * Clone effect configuration
 */
export interface CloneEffectConfig extends MatrixEffectConfig {
  /** Source screen for grab */
  screen: number;
  
  /** Pixels down offset of grab */
  down: number;
  
  /** Pixels across offset of grab */
  across: number;
  
  /** Width of grab */
  width: number;
  
  /** Height of grab */
  height: number;
}

/**
 * Crawler effect configuration
 */
export interface CrawlerEffectConfig extends AtmosphericEffectConfig {
  /** Sway modifier */
  sway: number;
  
  /** Chop modifier */
  chop: number;
  
  /** Stretch modifier */
  stretch: number;
}

/**
 * Digital Rain effect configuration
 */
export interface DigitalRainEffectConfig extends MatrixEffectConfig {
  /** Number of code lines as multiplier of matrix width */
  count: number;
  
  /** Number of code lines to add per second */
  add_speed: number;
  
  /** Width of code lines as % of matrix */
  width: number;
  
  /** Seconds for a code line to run from top to bottom */
  run_seconds: number;
  
  /** Code line tail length as % of the matrix */
  tail: number;
  
  /** Decay filter for audio impulse */
  impulse_decay: number;
  
  /** Audio injection multiplier */
  multiplier: number;
}

/**
 * Energy effect configuration
 */
export interface EnergyEffectConfig extends BaseEffectConfig {
  /** Change colors in time with the beat */
  color_cycler: boolean;
  
  /** Color of low, bassy sounds */
  color_lows: string;
  
  /** Color of midrange sounds */
  color_mids: string;
  
  /** Color of high sounds */
  color_high: string;
  
  /** Responsiveness to changes in sound */
  sensitivity: number;
  
  /** Mode of combining each frequencies' colors */
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
  /** Alignment of bands */
  align: "left" | "right" | "invert" | "center";
  
  /** Repeat the gradient into segments */
  gradient_repeat: number;
}

/**
 * Equalizer 2D effect configuration
 */
export interface Equalizer2dEffectConfig extends MatrixEffectConfig {
  /** Size of the tracer bar that follows a filtered value */
  peak_percent: number;
  
  /** Decay filter applied to the peak value */
  peak_decay: number;
  
  /** Enable peak markers */
  peak_marks: boolean;
  
  /** Center the equalizer bar */
  center: boolean;
  
  /** Use max or mean value for bar size */
  max_vs_mean: boolean;
  
  /** Make equalizer circular */
  ring: boolean;
  
  /** Enable spinning */
  spin: boolean;
  
  /** Number of frequency bands */
  bands: number;
  
  /** Frequency range for spin impulse */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Spin impulse multiplier */
  spin_multiplier: number;
  
  /** Decay filter for spin impulse */
  spin_decay: number;
}

/**
 * Fade effect configuration
 */
export interface FadeEffectConfig extends GradientEffectConfig {
  /** Rate of color change */
  speed: number;
}

/**
 * Fire effect configuration
 */
export interface FireEffectConfig extends AtmosphericEffectConfig {
  /** Fire color shift */
  color_shift: number;
  
  /** Fire intensity */
  intensity: number;
}

/**
 * Game of Life effect configuration
 */
export interface GameOfLifeEffectConfig extends MatrixEffectConfig {
  /** Health check settings */
  health_checks: "All" | "Dead" | "Oscillating" | "None";
  
  /** Base steps per second */
  base_game_speed: number;
  
  /** Seconds between health checks */
  health_check_interval: number;
  
  /** Frequency for life generation */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Generate entities on beat */
  beat_inject: boolean;
  
  /** Decay filter for life generation */
  impulse_decay: number;
}

/**
 * GIF Player effect configuration
 */
export interface GifPlayerEffectConfig extends MatrixEffectConfig {
  /** Resize method quality */
  resize_method: "Fastest" | "Fast" | "Slow" | "Slowest";
  
  /** URL or path to GIF file */
  image_location: string;
  
  /** Bounce the GIF instead of looping */
  bounce: boolean;
  
  /** GIF playback speed */
  gif_fps: number;
}

/**
 * Glitch effect configuration
 */
export interface GlitchEffectConfig extends AtmosphericEffectConfig {
  /** Ensure the saturation is above this value */
  saturation_threshold: number;
}

/**
 * Image effect configuration
 */
export interface ImageSpinEffectConfig extends MatrixEffectConfig {
  /** Use a test pattern */
  pattern: boolean;
  
  /** Frequency range for detection */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Audio input amplifier */
  multiplier: number;
  
  /** Minimum size multiplier for the image */
  min_size: number;
  
  /** Use bilinear interpolation for smoother scaling */
  bilinear: boolean;
  
  /** Spin image according to audio impulse */
  spin: boolean;
  
  /** When spinning, clip image to frame */
  clip: boolean;
  
  /** Image source path or URL */
  image_source: string;
}

/**
 * Keybeat 2D effect configuration
 */
export interface Keybeat2dEffectConfig extends MatrixEffectConfig {
  /** Resize method quality */
  resize_method: "Fastest" | "Fast" | "Slow" | "Slowest";
  
  /** Horizontal stretch percentage */
  stretch_horizontal: number;
  
  /** Vertical stretch percentage */
  stretch_vertical: number;
  
  /** Horizontal center offset */
  center_horizontal: number;
  
  /** Vertical center offset */
  center_vertical: number;
  
  /** GIF location */
  image_location: string;
  
  /** Frame indices for beat effects */
  beat_frames: string;
  
  /** Frames to skip */
  skip_frames: string;
  
  /** Show diagnostic overlay */
  deep_diag: boolean;
  
  /** Test beats */
  fake_beat: boolean;
  
  /** Preserve aspect ratio */
  keep_aspect_ratio: boolean;
  
  /** Force fit to matrix */
  force_fit: boolean;
  
  /** Skip first beat key frame on both ends */
  ping_pong_skip: boolean;
  
  /** Play forward and reverse */
  ping_pong: boolean;
  
  /** Slow down beat response */
  half_beat: boolean;
  
  /** Image brightness multiplier */
  image_brightness: number;
}

/**
 * Lava Lamp effect configuration
 */
export interface LavaLampEffectConfig extends AtmosphericEffectConfig {
  /** Difference between lighter and darker spots */
  contrast: number;
}

/**
 * Magnitude effect configuration
 */
export interface MagnitudeEffectConfig extends GradientEffectConfig {
  /** Frequency range to detect */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
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
  /** Brightness of the melt effect */
  bg_bright: number;
  
  /** Size of the melting lava sections */
  lava_width: number;
  
  /** Audio threshold for strobes */
  strobe_threshold: number;
  
  /** Strobe frequency */
  strobe_rate: number;
  
  /** Strobe width */
  strobe_width: number;
  
  /** Strobe decay rate */
  strobe_decay_rate: number;
  
  /** Strobe blur amount */
  strobe_blur: number;
}

/**
 * Metro effect configuration
 */
export interface MetroEffectConfig extends BaseEffectConfig {
  /** Time between flashes in seconds */
  pulse_period: number;
  
  /** Flash to blank ratio */
  pulse_ratio: number;
  
  /** Steps of pattern division */
  steps: number;
  
  /** Flash color */
  flash_color: string;
  
  /** Enable graph capture */
  capture: boolean;
  
  /** CPU measurement window */
  cpu_secs: number;
}

/**
 * Multicolor Bar effect configuration
 */
export interface MultiBarEffectConfig extends GradientEffectConfig {
  /** Animation mode */
  mode: "cascade" | "wipe";
  
  /** Acceleration profile */
  ease_method: "ease_in_out" | "ease_in" | "ease_out" | "linear";
  
  /** Color change per beat */
  color_step: number;
}

/**
 * Noise effect configuration
 */
export interface NoiseEffectConfig extends MatrixEffectConfig {
  /** Effect speed */
  speed: number;
  
  /** Effect intensity */
  intensity: number;
  
  /** Stretch factor */
  stretch: number;
  
  /** Zoom density */
  zoom: number;
  
  /** Decay filter for audio impulse */
  impulse_decay: number;
  
  /** Audio injection multiplier */
  multiplier: number;
  
  /** Add soap smear effect */
  soap: boolean;
}

/**
 * Pitch Spectrum effect configuration
 */
export interface PitchSpectrumEffectConfig extends GradientEffectConfig {
  /** Rate at which notes fade */
  fade_rate: number;
  
  /** Responsiveness to note changes */
  responsiveness: number;
}

/**
 * Pixels effect configuration
 */
export interface PixelsEffectConfig extends BaseEffectConfig {
  /** Fixed frame rate */
  speed: number;
  
  /** Time between pixel steps */
  step_period: number;
  
  /** Number of pixels per step */
  pixels: number;
  
  /** Pixel color */
  pixel_color: string;
  
  /** Accumulate pixels instead of moving a single group */
  build_up: boolean;
}

/**
 * Plasma2D effect configuration
 */
export interface Plasma2dEffectConfig extends MatrixEffectConfig {
  /** Frequency range for beat detection */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Vertical density parameter */
  density_vertical: number;
  
  /** Twist parameter */
  twist: number;
  
  /** Radius parameter */
  radius: number;
  
  /** Density parameter */
  density: number;
  
  /** Lower density band */
  lower: number;
}

/**
 * PlasmaWLED effect configuration
 */
export interface PlasmaWLEDEffectConfig extends MatrixEffectConfig {
  /** Frequency range for detection */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
  /** Speed multiplier */
  speed: number;
  
  /** Horizontal stretch factor */
  stretch_horizontal: number;
  
  /** Vertical stretch factor */
  stretch_vertical: number;
  
  /** Sound to size multiplier */
  size_multiplication: number;
  
  /** Sound to speed multiplier */
  speed_multiplication: number;
}

/**
 * Power effect configuration
 */
export interface PowerEffectConfig extends GradientEffectConfig {
  /** Flash color for percussive hits */
  sparks_color: string;
  
  /** Bass decay rate */
  bass_decay_rate: number;
  
  /** Sparks decay rate */
  sparks_decay_rate: number;
}

/**
 * Rain effect configuration
 */
export interface RainEffectConfig extends BaseEffectConfig {
  /** Color for low frequency sounds */
  lows_color: string;
  
  /** Frequency to pulse the entire strip */
  pulse_strip: "Off" | "Lows" | "Mids" | "Highs";
  
  /** Color for mid-range sounds */
  mids_color: string;
  
  /** Color for high frequency sounds */
  high_color: string;
  
  /** Sensitivity to low sounds */
  lows_sensitivity: number;
  
  /** Sensitivity to mid sounds */
  mids_sensitivity: number;
  
  /** Sensitivity to high sounds */
  high_sensitivity: number;
  
  /** Droplet animation style */
  raindrop_animation: "Blob" | "Laser" | "Ripple";
}

/**
 * Rainbow effect configuration
 */
export interface RainbowEffectConfig extends BaseEffectConfig {
  /** Speed of the effect */
  speed: number;
  
  /** Frequency of the effect curve */
  frequency: number;
}

/**
 * Random Flash effect configuration
 */
export interface RandomFlashEffectConfig extends BaseEffectConfig {
  /** Effect speed */
  speed: number;
  
  /** Flash color */
  hit_color: string;
  
  /** Duration of each flash */
  hit_duration: number;
  
  /** Probability of flash per second */
  hit_probability_per_sec: number;
  
  /** Flash size relative to strip */
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
export interface ScanEffectConfig extends GradientEffectConfig, ModulationConfig {
  /** Whether to bounce at edges */
  bounce: boolean;
  
  /** Width of scan eye as percentage */
  scan_width: number;
  
  /** Scan base speed */
  speed: number;
  
  /** Scan color */
  color_scan: string;
  
  /** Frequency range for beat detection */
  frequency_range: "Beat" | "Bass" | "Lows (beat+bass)" | "Mids" | "High";
  
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
export interface ScanAndFlareEffectConfig extends Omit<ScanEffectConfig, 'advanced' | 'count'> {
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
export interface ScanMultiEffectConfig extends Omit<ScanEffectConfig, 'color_scan'> {
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
export interface ScrollPlusEffectConfig extends Omit<ScrollEffectConfig, 'speed'> {
  /** Device width scrolled per second */
  scroll_per_sec: number;
  
  /** Decay rate per second */
  decay_per_sec: number;
}

/**
 * Single Color effect configuration
 */
export interface SingleColorEffectConfig extends BaseEffectConfig, ModulationConfig {
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
  strobe_frequency: "1/1 (.,. )" | "1/2 (.-. )" | "1/4 (.o. )" | "1/8 (◉◡◉ )" | "1/16 (◉﹏◉ )" | "1/32 (⊙▃⊙ )";
  
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
  font: "Roboto Regular" | "Roboto Bold" | "Roboto Black" | "Stop" | "Technique" | "8bitOperatorPlus8" | "Press Start 2P" | "Blade-5x8";
  
  /** Text to display */
  text: string;
  
  /** Font size percentage */
  height_percent: number;
  
  /** Text color */
  text_color: string;
  
  /** Resize quality */
  resize_method: "Fastest" | "Fast" | "Slow";
  
  /** Text animation type */
  text_effect: "Side Scroll" | "Spokes" | "Carousel" | "Wave" | "Pulse" | "Fade";
  
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