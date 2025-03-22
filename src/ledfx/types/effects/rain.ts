export type RainEffect = {
    background_brightness?: number,
    background_color?: string,
    blur?: number,
    brightness?: number,
    flip?: boolean,
    high_color?: string,
    high_sensitivity?: number,
    lows_color?: string,
    lows_sensitivity?: number,
    mids_color?: string,
    mids_sensitivity?: number,
    mirror?: true,
    pulse_strip?: "Off" | "Lows" | "Mids" | "Highs",
    raindrop_animation?: "Blob" | "Laser" | "Ripple"
}
