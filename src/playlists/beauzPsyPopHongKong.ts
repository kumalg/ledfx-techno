import { effect } from "../ledfx/types/effect";
import { FrequencyRange } from "../ledfx/types/enums";
import type { Playlist, PlaylistEntry, TimeString } from "./types";

export const VIDEO_URL = "https://www.youtube.com/watch?v=RW0bSUMa1AY";

const Playlist: Playlist = {
  "00:00.000": {
    ceiling: effect.off(),
    rails: effect.off(),
  },
  "00:00.100": {
    ceiling: effect("singleColor", {
      color: "blue",
      brightness: 0.5,
    }),
    rails: effect.off(),
  },
  "00:03.000": {
    ceiling: effect.off(),
    rails: effect("rain", {
      mids_color: "blue",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "00:06.500": {
    ceiling: effect("singleColor", {
      color: "blue",
      brightness: 0.5,
    }),
    rails: effect.off(),
  },
  "00:09.500": {
    ceiling: effect.off(),
    rails: effect("rain", {
      mids_color: "blue",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "00:12.000": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "00:19.000": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "00:22.000": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "00:25.000": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
    }),
  },
  "00:31.000": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 1,
      decay_per_sec: 0,
      threshold: 1,
      mirror: false,
    }),
  },
  "00:34.000": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "00:37.500": {
    rails: effect.bladeDefault("blue", { frequency_range: FrequencyRange.Mids }),
    ceiling: effect.strobeBass("white"),
  },
  "00:43.500": {
    rails: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
    }),
  },
  "00:49.500": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
    }),
    rails: effect.gradient1Scan("white", 4, 4),
  },
  "01:00.500": {
    rails: effect.bladeDefault("blue", { frequency_range: FrequencyRange.Mids }),
    ceiling: effect.strobeBass("white"),
  },
  "01:02.000": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
    }),
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 10,
    }),
  },
  "01:06.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:08.500": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 10,
    }),
  },
  "01:11.500": {
    rails: effect.bladeDefault("blue", { frequency_range: FrequencyRange.Mids, flip: true }),
    ceiling: effect.strobeBass("white"),
  },
  "01:14.500": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
    ceiling: effect.off(),
  },
  "01:21": {
    rails: effect.bladeDefault("lime", { frequency_range: FrequencyRange.Mids }),
    ceiling: effect.strobeBass("white"),
  },
  "01:24.000": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:25.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "01:27": {
    rails: effect.bladeDefault("green", { frequency_range: FrequencyRange.Mids, flip: true }),
  },
  "01:36": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "green",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
      flip: true,
    }),
  },
  "01:45.000": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:47": {
    rails: effect("singleColor", {
      color: "green",
      brightness: 0.5,
    }),
  },
  "01:48.7": {
    rails: effect.bladeDefault("green", { frequency_range: FrequencyRange.Mids }),
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
  },
  "02:01": {
    rails: effect("scroll", {
      background_color: "black",
      blur: 0,
      color_high: "black",
      color_lows: "orange",
      color_mids: "black",
      decay: 0.8,
      speed: 10,
      threshold: 1,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "white",
    }),
  },
  "02:10": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "02:11.500": {
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "02:13.000": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Blob",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "02:25": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 20,
      bounce: true,
      speed: 100,
    }),
  },
  "02:37.8": {
    rails2: effect.off(),
  },
  "02:38.5": {
    rails2: effect("scan_multi", {
      color_high: "red",
      color_low: "black",
      color_mid: "orange",
      scan_width: 10,
      speed: 25,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),
  },
  "02:49.5": {
    rails2: effect.off(),
  },
  "02:49.9": {
    rails: effect.off(),
  },
  "02:50": {
    ceiling: effect.off(),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "02:59": {
    rails: effect.bladeDefault("red"),
  },
  "03:02.500": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect.gradient2Scan("red", 5, 1),
  },
  "03:11": {
    rails: effect.bladeDefault("red", {
      flip: true,
    }),
  },
  "03:12.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "03:14": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("red"),
  },
  "03:16": {
    rails: effect.off(),
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "03:17.500": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 5,
      count: 2,
      blur: 0,
      bounce: true,
      speed: 100,
    }),
  },
  "03:26": {
    ceiling: effect.strobeBass("red"),
    rails: effect.bladeDefault("white", {
      flip: true,
    }),
  },
  "03:29": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 5,
      count: 2,
      blur: 0,
      bounce: true,
      speed: 100,
    }),
  },
  "03:38": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("red"),
  },
  "03:40": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "03:41.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      count: 2,
      blur: 0,
      bounce: true,
      speed: 100,
    }),
  },
  "03:44.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "03:46": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "03:50.500": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.05,
      lows_sensitivity: 0.05,
      high_sensitivity: 0.05,
    }),
  },
  "03:52": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
    rails: effect.off(),
  },
  "03:53.500": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("red", {
      flip: true,
    }),
  },
  "04:03": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.1,
    }),
    rails: effect.bladeDefault("red"),
  },
  "04:06": {
    rails: effect.gradient1ScanSmall("#3e00ff", 3, 5, {
      mirror: true,
    }),
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.05,
    }),
  },
  "04:16.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "04:18": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect.gradient1ScanSmall("#3e00ff", 3, 5, {
      mirror: true,
      flip: true,
    }),
  },
  "04:28.500": {
    rails: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.5,
    }),
  },
  "04:30": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.15,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
  },
  "04:42.500": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails2: effect("scan_and_flare", {
      color_scan: "#3e00ff",
      scan_width: 10,
      blur: 5,
      bounce: true,
      speed: 100,
    }),
  },
  "04:55": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#3e00ff",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
    }),
  },
  "05:04": {
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.05,
    }),
    rails: effect.off(),
  },
  "05:05.500": {
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#3e00ff",
      hit_duration: 0.15,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "05:16.500": {
    rails: effect.bladeDefault("#3e00ff"),
    // rails: effect("melt_and_sparkle", {
    //   background_color: "black",
    //   gradient: "#3e00ff",
    //   speed: 0.39,
    //   lava_width: 0.67,
    // }),
  },
  "05:18.200": {
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.05,
    }),
    rails: effect("melt", {
      background_color: "black",
      gradient: "#3e00ff",
      reactivity: 1,
      speed: 1,
      brightness: 0.5,
    }),
  },
  "05:24": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.5,
    }),
  },
  "05:31": {
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#3e00ff",
      hit_duration: 0.15,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "05:37": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "05:40": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "05:43": {
    ceiling: effect.off(),
    rails: effect("melt_and_sparkle", {
      gradient: "#3e00ff",
      strobe_width: 0.7,
      reactivity: 1,
      speed: 1,
    }),
  },
  "06:01": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.1,
    }),
    rails: effect("scan_multi", {
      color_high: "#3e00ff",
      color_low: "black",
      color_mid: "#3e00ff",
      scan_width: 10,
      speed: 25,
      count: 2,
    }),
  },
  "06:14": {
    rails: effect.bladeDefault("#3e00ff", {
      flip: true,
    }),
  },
  "06:15.500": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      count: 2,
      blur: 0,
      bounce: true,
      speed: 100,
    }),
  },
  "06:21": {
    rails: effect.bladeDefault("#3e00ff"),
  },
  "06:21.500": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      count: 2,
      blur: 0,
      mirror: true,
      speed: 100,
    }),
  },
  "06:28": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.5,
    }),
    rails: effect("melt", {
      gradient: "#ff2800",
      reactivity: 1,
      speed: 1,
    }),
    // rails: effect("melt", {
    //   background_color: "black",
    //   gradient: "#ff2800",
    //   reactivity: 1,
    //   speed: 1,
    //   brightness: 0.5,
    // }),
  },
  "06:46": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#ff2800",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "06:49.500": {
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
    rails: effect.bladeDefault("#ff2800", {
      flip: true,
    }),
  },
  "06:53": {
    ceiling: effect("power", {
      gradient: "#ff2800",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.5,
    }),
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      count: 2,
      blur: 0,
      mirror: true,
      bounce: false,
      speed: 100,
    }),
  },
  "06:58.500": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "07:00": {
    rails: effect.bladeDefault("#3e00ff"),
  },
  "07:00.500": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 10,
      count: 2,
      blur: 0,
      mirror: false,
      bounce: false,
      speed: 100,
    }),
  },
  "07:03.500": {
    rails: effect.bladeDefault("#3e00ff", {
      flip: true,
    }),
  },

  "07:04.800": {
    rails2: effect.off(),
  },
  "07:05": {
    rails2: effect("scan_multi", {
      color_high: "#3e00ff",
      color_low: "black",
      color_mid: "#ff2800",
      scan_width: 10,
      speed: 25,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),
  },
  "07:15.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "07:17.500": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "#3e00ff",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "07:26.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "07:28": {
    rails: effect.gradient2Scan("#3e00ff", 5, 1),
  },
  "07:29.500": {
    rails: effect.off(),
  },
  "07:42": {
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "#ff2800",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "07:54.500": {
    rails: effect.gradient2Scan("#ff2800", 5, 1),
  },
  "08:04": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#ff2800",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "08:07": {
    rails: effect.bladeDefault("#ff2800", {
      flip: true,
    }),
  },
  "08:10": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#ff2800",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "08:16.500": {
    rails: effect.bladeDefault("#ff2800"),
  },
  "08:28.500": {
    ceiling: effect("power", {
      gradient: "#ff2800",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#ff2800",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "08:30.000": {
    rails: effect.bladeDefault("#ff2800"),
  },
  "08:35.000": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#ff2800",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "08:36.500": {
    rails: effect.bladeDefault("#ff2800"),
  },
  "08:39.500": {
    rails: effect.bladeDefault("#ff2800", {
      flip: true,
    }),
  },
  "08:41": {
    rails: effect("scan_multi", {
      color_high: "#ff2800",
      color_low: "black",
      color_mid: "#ff2800",
      scan_width: 10,
      speed: 25,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "08:53.500": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect.gradient2Scan("blue", 5, 1),
  },
  "09:06": {
    ceiling: effect("singleColor", {
      color: "green",
      brightness: 0.05,
    }),
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, blue 45.00%,#000000 57.00%)",
      speed: 1,
    }),
    // rails: effect("singleColor", {
    //   color: "blue",
    //   brightness: 0.5,
    // }),
  },
  "09:18": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("scan_multi", {
      color_high: "blue",
      color_low: "black",
      color_mid: "blue",
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "09:31": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("scan_multi", {
      color_high: "green",
      color_low: "black",
      color_mid: "blue",
      scan_width: 5,
      speed: 50,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "09:43": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "green",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
      flip: true,
    }),
  },
  "09:55": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "10:07.500": {
    ceiling: effect("singleColor", {
      color: "blue",
      brightness: 0.05,
    }),
    rails: effect("melt", {
      gradient: "green",
      reactivity: 1,
      speed: 1,
    }),
  },
  "10:14": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, green 45.00%,#000000 57.00%)",
      speed: 1,
    }),
  },
  "10:23": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "10:26.500": {
    ceiling: effect("singleColor", {
      color: "blue",
      brightness: 0.05,
    }),
    rails: effect("melt", {
      gradient: "green",
      reactivity: 1,
      speed: 1,
    }),
  },
  "10:32.500": {
    ceiling: effect.strobeBass("white", {
      bass_strobe_decay_rate: 0.4,
    }),
  },
  "10:44.700": {
    rails: effect.off(),
    rails2: effect.off(),
  },
  "10:45": {
    rails2: effect("scan_multi", {
      color_high: "blue",
      color_low: "black",
      color_mid: "green",
      scan_width: 10,
      speed: 25,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),
  },
  "10:57.500": {
    ceiling: effect("power", {
      gradient: "#5500ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#c800ff",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "11:10": {
    ceiling: effect("singleColor", {
      color: "#5500ff",
      brightness: 0.05,
    }),
    rails: effect.off(),
  },
  "11:13": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#c800ff",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
      flip: true,
    }),
  },
  "11:22": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "11:25": {
    ceiling: effect("singleColor", {
      color: "#5500ff",
      brightness: 0.05,
    }),
    rails: effect.off(),
  },
  "11:28.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "11:30": {
    ceiling: effect.off(),
    rails: effect("singleColor", {
      color: "#c800ff",
      brightness: 0.05,
    }),
  },
  "11:31.500": {
    ceiling: effect("power", {
      gradient: "#5500ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#c800ff",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "11:42.500": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("#c800ff"),
  },
  "11:44": {
    ceiling: effect("power", {
      gradient: "#5500ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "#c800ff",
      scan_width: 5,
      count: 2,
      blur: 0,
      bounce: false,
      speed: 100,
    }),
  },
  "11:56.500": {
    rails: effect.off(),
  },
  "12:03": {
    rails: effect.bladeDefault("#c800ff ", {
      flip: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "12:09": {
    ceiling: effect("singleColor", {
      color: "#5500ff",
      brightness: 0.05,
    }),
    rails: effect("melt", {
      gradient: "#c800ff",
      reactivity: 1,
      speed: 1,
    }),
  },
  "12:21.500": {
    ceiling: effect("power", {
      gradient: "#5500ff",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "#c800ff",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "12:31": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "12:33": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "12:34": {
    ceiling: effect("singleColor", {
      color: "#5500ff",
      brightness: 0.05,
    }),
    rails: effect.off(),
  },
  "12:37.500": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "12:39": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#c800ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "12:40.500": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 10,
      count: 2,
      blur: 2,
      bounce: false,
      speed: 100,
      flip: true,
    }),
  },
  "12:51": {
    rails: effect.bladeDefault("blue"),
  },
  "12:53": {
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, blue 45.00%,#000000 57.00%)",
      speed: 1,
    }),
  },
  "12:59.500": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "13:04": {
    rails: effect.bladeDefault("blue", {
      flip: true,
    }),
  },
  "13:06": {
    rails: effect.gradient1ScanSmall("blue", 2, 3, {
      flip: true,
    }),
  },
  "13:15": {
    rails: effect.bladeDefault("blue", {
      flip: true,
      brightness: 0.5,
    }),
  },
  "13:18": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "13:28": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "13:31": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.05,
    }),
    rails: effect.bladeDefault("white", {
      brightness: 0.5,
    }),
  },
  "13:37.500": {
    rails: effect.gradient1ScanSmall("white", 5, 5, {
      mirror: true,
    }),
  },
  "13:41": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "13:44": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.15,
    }),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "13:54.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "13:56.500": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.15,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      count: 2,
    }),
  },
  "14:07.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "14:09": {
    rails: effect("fire", {
      mirror: true,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "14:28": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "red",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "14:31.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "14:33.300": {
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "14:38": {
    ceiling: effect("singleColor", {
      color: "#008cff",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "14:41": {
    ceiling: effect.off(),
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "14:44": {
    ceiling: effect("singleColor", {
      color: "#e600ff",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "14:47": {
    ceiling: effect.off(),
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "14:50": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.1,
    }),
    rails: effect("melt", {
      gradient: "red",
      reactivity: 1,
      speed: 1,
    }),
  },
  "14:56": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.15,
    }),
  },
  "15:07": {
    rails: effect.bladeDefault("red"),
  },
  "15:09": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.15,
    }),
    rails2: effect("scan_multi", {
      color_high: "red",
      color_low: "black",
      color_mid: "gray",
      scan_width: 10,
      speed: 25,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "15:21": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.1,
    }),
    rails: effect("melt", {
      gradient: "red",
      reactivity: 1,
      speed: 1,
    }),
  },
  "15:24": {
    ceiling: effect.strobeBass("white"),
  },
  "15:47.500": {
    rails: effect.bladeDefault("red"),
  },
  "15:49": {
    rails: effect("fire", {
      mirror: true,
    }),
  },
  "15:55": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "red",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
      flip: true,
    }),
  },
  "16:00": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "16:01.500": {
    ceiling: effect.off(),
    rails: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
  },
  "16:04.500": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.15,
    }),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "16:17": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.5,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      speed: 100,
      count: 3,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "16:23": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "16:26": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 3,
      hit_probability_per_sec: 1,
    }),
  },
  "16:27.500": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.5,
    }),
    rails: effect.off(),
  },
  "16:29": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("red", {
      flip: true,
    }),
  },
  "16:34": {
    rails: effect.bladeDefault("red"),
  },
  "16:35.500": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect.bladeDefault("red", {
      flip: true,
    }),
  },
  "16:41.500": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "16:46": {
    rails: effect.bladeDefault("red", {
      flip: true,
    }),
  },
  "16:48": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "16:51": {
    rails: effect.bladeDefault("red"),
  },
  "16:54.500": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "yellow",
      scan_width: 5,
      speed: 100,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "17:05": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "17:06.500": {
    ceiling: effect.strobeBass("green"),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "17:19": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "yellow",
      brightness: 0.25,
    }),
    rails: effect("scan_multi", {
      color_high: "yellow",
      color_low: "black",
      color_mid: "green",
      scan_width: 10,
      speed: 50,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "17:28": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "17:29.500": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "yellow",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 2,
      threshold: 1,
    }),
  },
  "17:31": {
    ceiling: effect("singleColor", {
      color: "green",
      brightness: 0.1,
    }),
  },
  "17:50": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "yellow",
      brightness: 0.15,
    }),
  },
  "18:00.500": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "18:02": {
    rails: effect("scan", {
      color_scan: "yellow",
      scan_width: 15,
      speed: 100,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "18:11.500": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "yellow",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "18:14.500": {
    ceiling: effect("singleColor", {
      color: "yellow",
      brightness: 0.05,
    }),
    rails: effect("melt", {
      gradient: "green",
      reactivity: 1,
      speed: 1,
      brightness: 0.5,
    }),
  },
  "18:26": {
    ceiling: effect.strobeBass("yellow"),
  },
  "18:36": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "18:37.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "18:38.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "18:45.500": {
    ceiling: effect("power", {
      gradient: "yellow",
      background_color: "black",
      sparks_color: "yellow",
      brightness: 0.25,
    }),
    rails: effect.gradient2Scan("green", 5, 5),
  },
  "18:54.500": {
    rails: effect.bladeDefault("green"),
  },
  "18:56.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "18:58": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 5,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "19:07": {
    rails: effect.bladeDefault("green", {
      flip: true,
    }),
  },
  "19:09": {
    rails: effect.bladeDefault("green"),
  },
  "19:10": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "blue",
      brightness: 0.25,
    }),
    rails: effect.gradient2Scan("blue", 2, 5, {
      brightness: 0.5,
    }),
  },
  "19:21": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "19:22.700": {
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, blue 45.00%,#000000 57.00%)",
      speed: 1,
    }),
  },
  "19:29": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "blue",
      high_color: "black",
      raindrop_animation: "Blob",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "19:54": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 3,
      hit_probability_per_sec: 1,
    }),
  },
  "20:07": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      scroll_per_sec: 2,
    }),
  },
  "20:19.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 2,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "20:32": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "blue",
      brightness: 0.15,
    }),
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "blue",
      color_high: "black",
      brightness: 1,
      blur: 0,
      flip: true,
      scroll_per_sec: 2,
    }),
  },
  "20:51": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 3,
      hit_probability_per_sec: 1,
    }),
  },
  "20:55.800": {
    ceiling: effect("singleColor", {
      color: "#ff4d00",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "20:57.500": {
    ceiling: effect.off(),
    rails: effect.gradient1ScanSmall("#ff4d00", 2, 1),
  },
  "21:03.500": {
    ceiling: effect("power", {
      gradient: "#ff4d00",
      background_color: "black",
      sparks_color: "#ff4d00",
      brightness: 0.25,
    }),
  },
  "21:10": {
    rails: effect.gradient2Scan("#ff4d00", 3, 5, {
      mirror: true,
      brightness: 0.5,
    }),
  },
  "21:16": {
    rails: effect.gradient2Scan("#ff4d00", 5, 5, {
      mirror: true,
      brightness: 0.5,
    }),
  },
  "21:19": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:20.500": {
    rails: effect("melt", {
      gradient: "#ff4d00",
      reactivity: 1,
      speed: 1,
    }),
  },
  "21:23.500": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:25": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "21:28.500": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("#ff4d00", {
      flip: true,
    }),
  },
  "21:39": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:41": {
    rails: effect("scan", {
      color_scan: "#ff4d00",
      scan_width: 5,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "21:46": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:47": {
    rails: effect("scan", {
      color_scan: "#ff4d00",
      scan_width: 5,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "21:51.500": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:53": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "#ff4d00",
      color_high: "black",
      brightness: 0.5,
      blur: 0,
      scroll_per_sec: 2,
    }),
  },
  "21:59": {
    rails: effect.bladeDefault("#ff4d00", {
      brightness: 0.5,
    }),
  },
  "22:04": {
    rails: effect.bladeDefault("#ff4d00", {
      brightness: 0.5,
      flip: true,
    }),
  },
  "22:05.500": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "22:11.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#ff4d00",
      hit_duration: 0.1,
      hit_relative_size: 3,
      hit_probability_per_sec: 1,
    }),
  },
  "22:16.500": {
    rails: effect("singleColor", {
      color: "#ff4d00",
      brightness: 0.5,
    }),
  },
  "22:18": {
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.15,
    }),
    rails: effect.gradient1ScanSmall("green", 1, 1),
  },
  "22:24": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "green",
      high_color: "black",
      raindrop_animation: "Blob",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "22:37": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
    }),
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "green",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.13,
      high_sensitivity: 0.03,
    }),
  },
  "22:49": {
    rails: effect.gradient1ScanSmall("green", 2, 2, {
      flip: true,
    }),
  },
  "22:55": {
    rails: effect.gradient1ScanSmall("green", 4, 4, {
      flip: true,
    }),
  },
  "22:58": {
    rails: effect.gradient1ScanSmall("green", 5, 5, {
      flip: true,
    }),
  },
  "22:59.500": {
    rails: effect.bladeDefault("green", {
      brightness: 0.5,
    }),
  },
  "23:01.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "23:02.500": {
    rails: effect.bladeDefault("green", {
      flip: true,
    }),
  },
  "23:09": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "23:21.600": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "23:32.500": {
    rails: effect.bladeDefault("green", {
      flip: true,
    }),
  },
  "23:34": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
      bounce: false,
    }),
  },
  "23:46.500": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "#ffffff",
      scan_width: 10,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 3,
      bounce: false,
      flip: true,
    }),
  },
  "23:59": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.15,
    }),
    rails: effect.off(),
  },
  "24:05": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "white",
      high_color: "black",
      raindrop_animation: "Blob",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.1,
      high_sensitivity: 0.03,
      brightness: 0.5,
    }),
  },
  "24:21": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails2: effect("scan_multi", {
      color_high: "red",
      color_low: "red",
      color_mid: "grey",
      scan_width: 10,
      speed: 25,
      count: 1,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "24:46.500": {
    rails: effect("melt", {
      gradient: "red",
      reactivity: 1,
      speed: 1,
      brightness: 0.05,
    }),
  },
  "24:59": {
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, red 45.00%,#000000 57.00%)",
      speed: 1,
    }),
  },
  "25:08.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 4,
      hit_probability_per_sec: 1,
    }),
  },
  "25:10": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.15,
    }),
    rails: effect.off(),
  },
  "25:11.500": {
    ceiling: effect.off(),
    rails: effect("melt", {
      gradient: "red",
      reactivity: 1,
    }),
  },
  "25:18": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.15,
    }),
  },
  "25:29": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 4,
      hit_probability_per_sec: 1,
    }),
  },
  "25:31": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      speed: 50,
      count: 4,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
      bounce: false,
    }),
  },
  "25:40": {
    ceiling: effect.off(),
    rails: effect.gradient1ScanSmall("red", 2, 2),
  },
  "25:43.500": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect("block_reflections", {
      gradient: "linear-gradient(90deg, red 45.00%,#000000 57.00%)",
      speed: 1,
    }),
  },
  "25:56": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.15,
    }),
    rails: effect.off(),
  },
  "25:58.500": {
    rails: effect("rain", {
      mids_color: "white",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Blob",
      mids_sensitivity: 0.15,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
      brightness: 0.15,
    }),
  },
  "26:02": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
  },
  "26:06.500": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "white",
      hit_duration: 0.15,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "26:10": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "26:11": {
    rails: effect.gradient2Scan("gray", 2, 1),
  },
  "26:20": {
    rails: effect("random_flash", {
      blur: 5,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "26:30": {
    rails: effect("singleColor", {
      color: "white",
      brightness: 0.5,
    }),
  },
  "26:32": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 5,
      speed: 50,
      count: 4,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "26:44": {
    rails: effect("scroll_plus", {
      color_lows: "black",
      color_mids: "white",
      color_high: "black",
      brightness: 0.15,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
    }),
  },
  "26:56": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "red",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
      brightness: 0.25,
    }),
  },
  "27:02": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 4,
      hit_probability_per_sec: 1,
    }),
  },
  "27:05": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "27:08": {
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
      bass_strobe_decay_rate: 0.95,
      strobe_decay_rate: 0.95,
    }),
    rails: effect("scroll_plus", {
      color_lows: "red",
      color_mids: "black",
      color_high: "black",
      brightness: 0.5,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
    }),
  },
  "27:30.500": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.15,
    }),
  },
  "27:32": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
  },
  "27:43": {
    ceiling: effect("singleColor", {
      color: "red",
      brightness: 0.05,
    }),
  },
  "27:44": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 5,
      speed: 50,
      count: 4,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
      bounce: false,
    }),
  },
  "27:56": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 5,
      speed: 100,
      count: 4,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
      bounce: false,
    }),
  },
  "28:08": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "28:10": {
    rails: effect("rain", {
      mids_color: "black",
      lows_color: "green",
      high_color: "black",
      raindrop_animation: "Ripple",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
      brightness: 0.25,
    }),
  },
  "28:16": {
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "green",
      hit_duration: 0.15,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "28:19": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "28:20.500": {
    ceiling: effect.off(),
    rails: effect("singleColor", {
      color: "green",
      brightness: 0.15,
    }),
  },
  "28:22.200": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.15,
    }),
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 10,
      speed: 100,
      count: 2,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
      bounce: false,
    }),
  },
  "28:34": {
    rails: effect.gradient2Scan("blue", 5, 5),
  },
  "28:45": {
    ceiling: effect("singleColor", {
      color: "green",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "28:47": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
  },
  "28:57.500": {
    rails: effect.bladeDefault("blue", {
      flip: true,
    }),
  },
  "28:59": {
    ceiling: effect.off(),
    rails: effect("melt_and_sparkle", {
      gradient: "blue",
      strobe_width: 0.7,
      reactivity: 1,
      speed: 1,
    }),
  },
  "29:20": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
    rails: effect("scan_multi", {
      color_high: "green",
      color_low: "black",
      color_mid: "blue",
      scan_width: 10,
      speed: 50,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "29:39": {
    ceiling: effect.strobeBass("white"),
    rails: effect.bladeDefault("blue", {
      flip: true,
    }),
  },
  "29:49.700": {
    rails: effect.bladeDefault("blue", {
      flip: false,
    }),
  },
  "29:51.500": {
    rails: effect.bladeDefault("blue", {
      flip: true,
    }),
  },
  "30:04": {
    rails2: effect("scan_multi", {
      color_high: "blue",
      color_low: "black",
      color_mid: "green",
      scan_width: 10,
      speed: 50,
      count: 3,
      // bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "30:16.500": {
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "30:22.500": {
    rails: effect("melt_and_sparkle", {
      background_color: "black",
      gradient: "#3e00ff",
      speed: 0.39,
      lava_width: 0.67,
    }),
  },
  "30:29": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "#3e00ff",
      hit_duration: 0.15,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "30:32": {
    ceiling: effect("singleColor", {
      color: "#3e00ff",
      brightness: 0.1,
    }),
    rails: effect.off(),
  },
  "30:35": {
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "#3e00ff",
      hit_duration: 0.15,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "30:47.500": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
  },
  "31:00": {
    rails: effect.off(),
  },
  "31:13": {
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "31:22": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "31:30.500": {
    ceiling: effect.strobeBass("white"),
    rails: effect.off(),
  },
  "31:44": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.15,
    }),
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#3e00ff",
      brightness: 0.25,
    }),
  },
  "31:56": {
    ceiling: effect("power", {
      gradient: "#00ff66",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.15,
    }),
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#ff4400",
      brightness: 0.25,
    }),
  },
  "32:08.500": {
    ceiling: effect("singleColor", {
      color: "#00ff66",
      brightness: 0.05,
    }),
  },
  "32:21": {
    ceiling: effect.off(),
    rails: effect("melt_and_sparkle", {
      background_color: "black",
      gradient: "#00ff66",
      speed: 0.39,
      lava_width: 0.67,
    }),
  },
  "32:27": {
    rails: effect.gradient1ScanSmall("#00ff66", 2, 2),
  },
  "32:33.500": {
    rails: effect.gradient1ScanSmall("#00ff66", 4, 4),
  },
  "32:37": {
    ceiling: effect.strobeBass("#00ff66", {
      background_color: "black",
      gradient: "#00ff66",
      bass_strobe_decay_rate: 0.95,
      strobe_decay_rate: 0.95,
    }),
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#00ff66",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "32:43": {
    ceiling: effect("power", {
      gradient: "#ff4400",
      background_color: "black",
      sparks_color: "#00ff66",
      brightness: 0.25,
    }),
    rails: effect.gradient1ScanSmall("#00ff66", 5, 5),
  },
  "32:49.500": {
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#00ff66",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "32:51": {
    rails: effect.gradient1ScanSmall("#00ff66", 5, 5),
  },
  "32:54": {
    rails: effect.bladeDefault("#00ff66", {
      flip: true,
    }),
  },
  "32:55.500": {
    rails: effect.gradient2Scan("#00ff66", 5, 5, {
      brightness: 0.25,
    }),
    // rails: effect("scan_and_flare", {
    //   color_scan: "#00ff66",
    //   scan_width: 10,
    //   bounce: false,
    //   speed: 100,
    //   frequency_range: FrequencyRange.Mids,
    // }),
  },
  "33:02.000": {
    rails: effect("random_flash", {
      blur: 2,
      hit_color: "#00ff66",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "33:03.500": {
    rails: effect.gradient2Scan("#00ff66", 5, 5, {
      brightness: 0.25,
    }),
  },
  "33:06.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#00ff66",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "33:10": {
    rails: effect("scroll_plus", {
      color_lows: "#00ff66",
      color_mids: "black",
      color_high: "black",
      brightness: 0.5,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
    }),
  },
  "33:19": {
    ceiling: effect("singleColor", {
      color: "#ff4400",
      background_color: "black",
      brightness: 0.05,
    }),
  },
  "33:22": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#00ff66",
      brightness: 0.25,
    }),
  },
  "33:28.500": {
    ceiling: effect.strobeBass("#ff4400", {
      brightness: 0.5,
    }),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#00ff66",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "33:41.500": {
    rails: effect("scroll_plus", {
      color_lows: "#00ff66",
      color_mids: "black",
      color_high: "black",
      brightness: 0.5,
      blur: 0,
      scroll_per_sec: 2,
      decay_per_sec: 0,
      threshold: 1,
      flip: true,
    }),
  },
  "33:51.500": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#00ff66",
      brightness: 0.25,
    }),
  },
  "33:54": {
    ceiling: effect("singleColor", {
      color: "#ff4400",
      background_color: "black",
      brightness: 0.05,
    }),
    rails: effect.off(),
  },
};

export const PLAYLIST = new Map<TimeString, PlaylistEntry>(
  Object.entries(Playlist) as [TimeString, PlaylistEntry][],
);
