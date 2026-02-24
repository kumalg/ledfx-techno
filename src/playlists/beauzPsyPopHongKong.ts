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
};

export const PLAYLIST = new Map<TimeString, PlaylistEntry>(
  Object.entries(Playlist) as [TimeString, PlaylistEntry][],
);
