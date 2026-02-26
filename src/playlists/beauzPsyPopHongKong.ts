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
  "12:06": {
    ceiling: effect("singleColor", {
      color: "#5500ff",
      brightness: 0.05,
    }),
  },
};

export const PLAYLIST = new Map<TimeString, PlaylistEntry>(
  Object.entries(Playlist) as [TimeString, PlaylistEntry][],
);
