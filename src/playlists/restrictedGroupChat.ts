// Made with LedFX 2.0.109

import { effect } from "../ledfx/types/effect";
import { FrequencyRange } from "../ledfx/types/frequencyRange";
import type { Playlist, PlaylistEntry, TimeString } from "./types";

export const VIDEO_URL = "https://www.youtube.com/watch?v=shFiitpKUSo";

const Playlist: Playlist = {
  "00:00.100": {
    ceiling: effect("singleColor", { color: "white", brightness: 0.5 }),
    rails: effect.off(),
  },
  "00:20": {
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "white",
      brightness: 1,
    }),
  },
  "00:25": {
    ceiling: effect("random_flash", {
      blur: 4,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 100,
      hit_probability_per_sec: 1,
    }),
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "00:43": {
    ceiling: effect.off(),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 50,
      speed: 50,
      count: 1,
      bounce: true,
    }),
  },
  "00:49": {
    ceiling: effect("singleColor", { color: "red", brightness: 1 }),
    rails: effect.off(),
  },
  "00:57.500": {
    ceiling: effect.off(),
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "01:00": {
    ceiling: effect.strobeBass("red"),
  },
  "01:01.500": {
    ceiling: effect.off(),
  },
  "01:06.700": {
    ceiling: effect.strobeBass("red"),
  },
  "01:08": {
    ceiling: effect.off(),
  },
  "01:10": {
    rails: effect.gradient1Scan("red", 10, 1),
  },
  "01:16.300": {
    rails: effect.gradient1Scan("red", 10, 5),
  },
  "01:19.700": {
    rails: effect.gradient1Scan("red", 10, 9),
  },
  "01:21": {
    rails: effect("singleColor", { color: "red", brightness: 1 }),
  },
  "01:22.500": {
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "white",
      brightness: 1,
    }),
    rails: effect.off(),
  },
  "01:25.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "01:27": {
    rails: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "red",
      brightness: 1,
    }),
    ceiling: effect.off(),
  },
  "01:28.800": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "white",
      brightness: 1,
    }),
  },
  "01:41": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.LowsBeatBass,
    }),
  },
  "01:53": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 50,
      speed: 50,
      count: 1,
      bounce: false,
    }),
    ceiling: effect.off(),
  },
  "02:31": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 30,
      speed: 100,
      count: 1,
      bounce: true,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "02:43.700": {
    rails: effect.gradient1Scan("blue", 10, 7),
  },
  "03:10.000": {
    rails: effect.gradient1Scan("#6200ff", 10, 7),
  },
  "03:19.000": {
    rails: effect.gradient1Scan("#6200ff", 10, 9),
  },
  "03:20": {
    rails: effect("singleColor", { color: "#6200ff", brightness: 1 }),
  },
  "03:21.500": {
    rails: effect("real_strobe", {
      strobe_color: "#6200ff",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "#6200ff",
      brightness: 1,
    }),
  },
  "03:34": {
    rails: effect("scan", {
      color_scan: "#6200ff",
      blur: 5,
      scan_width: 25,
      speed: 100,
      count: 2,
      bounce: true,
    }),
  },
  "04:24": {
    rails: effect.gradient1Scan("#6200ff", 10, 6),
  },
  "04:36": {
    rails: effect("scan", {
      color_scan: "#6200ff",
      blur: 5,
      scan_width: 25,
      speed: 100,
      count: 1,
      bounce: true,
    }),
  },
  "04:45": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#6200ff",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "04:48": {
    rails: effect("real_strobe", {
      strobe_color: "#6200ff",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect.off(),
  },
  "04:55": {
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "#6200ff",
      brightness: 1,
    }),
  },
  "04:58": {
    ceiling: effect.off(),
  },
  "05:01": {
    ceiling: effect("real_strobe", {
      gradient: "#000000",
      strobe_color: "#6200ff",
      brightness: 1,
    }),
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#6200ff",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "05:13": {
    rails: effect("scan", {
      color_scan: "#6200ff",
      scan_width: 30,
      speed: 50,
      count: 3,
      bounce: false,
    }),
  },
  "05:26": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 30,
      speed: 50,
      count: 3,
      bounce: false,
    }),
  },
  "05:38": {
    rails: effect.gradient2Scan("red", 8, 1),
  },
  "05:50": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
    }),
  },
  "05:57": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "06:00": {
    rails: effect("singleColor", { color: "red" }),
  },
  "06:03": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "06:15.500": {
    rails: effect("scan", {
      scan_width: 25,
      color_scan: "red",
      speed: 75,
      bounce: true,
    }),
    ceiling: effect.off(),
  },
  "06:25": {
    rails: effect.gradient2Scan("red", 10, 3),
  },
  "06:28": {
    rails: effect("power", {
      sparks_color: "red",
      background_color: "black",
      gradient: "black",
    }),
  },
  "06:40": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "06:52.500": {
    rails: effect.off(),
  },
  "07:06": {
    rails: effect.bladeDefault("red"),
  },
  "07:11.500": {
    rails: effect.gradient1Scan("white", 10, 3),
  },
  "07:16": {
    rails: effect.off(),
  },
  "07:18": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Bass }),
  },
  "07:20": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Bass,
      flip: true,
    }),
  },
  "07:25": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "07:37": {
    rails: effect("scan", { color_scan: "red", bounce: true, scan_width: 20 }),
  },
  "07:49": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "08:14": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 30,
    }),
  },
  "08:51": {
    rails: effect.gradient1Scan("red", 5, 5, { mirror: true }),
  },
  "08:57": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "09:03.500": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.25 }),
  },
  "09:07": {
    ceiling: effect.off(),
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "red",
      hit_duration: 0.5,
      hit_relative_size: 15,
      hit_probability_per_sec: 1,
    }),
  },
  "09:09.500": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 50,
    }),
    ceiling: effect("real_strobe", {
      gradient: "black",
      strobe_color: "white",
      brightness: 0.25,
    }),
  },
  "09:35": {
    rails: effect("scan", {
      scan_width: 20,
      color_scan: "red",
      bounce: true,
      speed: 100,
      blur: 1,
      count: 3,
    }),
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "10:24": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "10:40": {
    rails: effect("power", {
      sparks_color: "green",
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "11:05": {
    rails: effect.off(),
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "11:17": {
    rails: effect.gradient1Scan("green", 5, 5, { mirror: true }),
  },
  "11:23": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "11:26": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "green", brightness: 0.25 }),
  },
  "11:31": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "11:35.500": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
      mirror: true,
    }),
  },
  "12:00": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
    }),
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "12:25": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
    }),
  },
  "12:31": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 25,
      hit_probability_per_sec: 1,
    }),
  },
  "12:36": {
    rails: effect("singleColor", { color: "green" }),
  },
  "12:39": {
    rails: effect.off(),
  },
  "12:53": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "12:54.200": {
    rails: effect.off(),
  },
  "13:05": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "13:19": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "blue", brightness: 0.25 }),
  },
  "13:25": {
    ceiling: effect.off(),
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "13:51": {
    rails: effect("power", {
      sparks_color: "blue",
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "14:04": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "14:13.500": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "14:16.500": {
    rails: effect.off(),
  },
  "14:20": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "14:24": {
    rails: effect("random_flash", {
      blur: 1,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 35,
      hit_probability_per_sec: 1,
    }),
  },
  "14:48.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "15:01": {
    rails: effect("scan", {
      color_scan: "pink",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "pink",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "15:14": {
    rails: effect.off(),
  },
  "15:25": {
    rails: effect.bladeDefault("pink", {
      frequency_range: FrequencyRange.LowsBeatBass,
    }),
  },
  "15:26.500": {
    rails: effect.off(),
  },
  "15:28": {
    rails: effect.bladeDefault("pink", {
      frequency_range: FrequencyRange.LowsBeatBass,
      flip: true,
    }),
  },
  "15:29.300": {
    rails: effect.off(),
  },
  "15:31": {
    rails: effect("real_strobe", {
      strobe_color: "pink",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "15:34": {
    rails: effect.off(),
    ceiling: effect("real_strobe", {
      gradient: "black",
      strobe_color: "pink",
      brightness: 0.5,
    }),
  },
  "15:37": {
    rails: effect("power", {
      sparks_color: "pink",
      background_color: "black",
      gradient: "black",
    }),
  },
  "15:50": {
    rails: effect("scan", {
      color_scan: "pink",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "16:14": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "16:35": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.off(),
  },
  "16:38.500": {
    ceiling: effect("singleColor", { color: "white", brightness: 0.15 }),
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "16:42": {
    rails: effect.off(),
  },
  "16:44": {
    ceiling: effect("singleColor", { color: "green", brightness: 0.15 }),
  },
  "16:46": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "16:47.500": {
    rails: effect.off(),
  },
  "16:49": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "16:50.300": {
    rails: effect.off(),
  },
  "16:52": {
    rails: effect("real_strobe", {
      strobe_color: "green",
      gradient: "black",
      strobe_width: 50,
    }),
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "16:57": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "17:21": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "17:27": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "17:40": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "17:52": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "18:03": {
    ceiling: effect.off(),
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "18:10": {
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "18:25": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 25,
      hit_probability_per_sec: 1,
    }),
  },
  "18:26": {
    rails: effect.off(),
  },
  "18:28": {
    rails: effect("real_strobe", {
      strobe_color: "green",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "18:52": {
    rails: effect("power", {
      brightness: 0.27,
      blur: 0,
      flip: false,
      background_color: "#000000",
      background_brightness: 1,
      mirror: true,
      gradient: "#003b00",
      gradient_roll: 10,
      sparks_decay_rate: 0.15,
      sparks_color: "#ff0000",
      bass_decay_rate: 0.05,
    }),
  },
  "19:15": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "19:19": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "green",
      brightness: 0.25,
    }),
  },
  "19:37": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.LowsBeatBass,
    }),
  },
  "19:43": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "20:07": {
    rails: effect("rain", {
      mids_color: "orange",
      lows_color: "black",
      high_color: "black",
    }),
    ceiling: effect.off(),
  },
  "20:19": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.5,
    }),
  },
  "20:31": {
    rails: effect.gradient2Scan("orange", 5, 5, { mirror: true }),
  },
  "20:37": {
    rails: effect.gradient2Scan("orange", 7, 5, { mirror: true }),
  },
  "20:41": {
    rails: effect.gradient2Scan("orange", 10, 5, { mirror: true }),
  },
  "20:45": {
    rails: effect.gradient2Scan("orange", 10, 7, { mirror: true }),
  },
  "20:52": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "orange",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "20:55": {
    rails: effect("real_strobe", {
      strobe_color: "orange",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "21:01": {
    ceiling: effect("power", {
      gradient: "orange",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.5,
    }),
  },
  "21:13": {
    rails2: effect("random_flash", {
      blur: 0,
      hit_color: "orange",
      hit_duration: 0.4,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "21:19": {
    rails: effect.bladeDefault("orange", {
      frequency_range: FrequencyRange.LowsBeatBass,
    }),
  },
  "21:25": {
    rails: effect.off(),
  },
  "21:37.500": {
    rails2: effect("random_flash", {
      blur: 0,
      hit_color: "orange",
      hit_duration: 0.4,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "21:49": {
    rails: effect.gradient1Scan("orange", 3, 1),
  },
  "22:01": {
    rails2: effect("scan_multi", {
      color_high: "red",
      color_low: "yellow",
      scan_width: 10,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),
    ceiling: effect("power", {
      gradient: "green",
      background_color: "black",
      sparks_color: "black",
    }),
  },
  "23:07": {
    rails2: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.4,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "23:18": {
    rails2: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "23:26": {
    rails: effect.off(),
  },
  "23:43": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "24:31": {
    rails: effect("real_strobe", {
      strobe_color: "green",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "24:55": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "green",
    }),
  },
  "25:19": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
      pulse_strip: "Lows",
    }),
  },
  "25:50": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.LowsBeatBass,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "26:02.500": {
    rails2: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.4,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "26:14.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "26:27": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "26:39": {
    // rails: effect.off(),
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Ripple",
    }),
  },
  "27:03": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
  },
  "27:11.500": {
    ceiling: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 100,
      hit_probability_per_sec: 1,
    }),
  },
  "27:14.500": {
    ceiling: effect.off(),
    rails: effect.off(),
  },
  "27:17.500": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 20,
    }),
  },
  "27:20.500": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "27:23.500": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "27:26.800": {
    rails: effect.gradient2Scan("red", 10, 7, { mirror: true }),
  },
  "27:28": {
    rails: effect.off(),
  },
  "27:30": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "27:34": {
    rails: effect.off(),
  },
  "27:35.500": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "27:47.700": {
    rails: effect.gradient2Scan("red", 10, 7),
  },
  "27:59.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.4,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "28:06": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.2,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "28:09": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "28:12": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "28:14": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.05 }),
  },
  "28:15": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "28:16": {
    rails: effect.off(),
  },
  "28:18": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 1,
      hit_probability_per_sec: 1,
    }),
  },
  "28:23": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "28:47.700": {
    rails: effect("power", {
      sparks_color: "red",
      background_color: "black",
      gradient: "black",
    }),
  },
  "28:59.600": {
    ceiling: effect("real_strobe", {
      gradient: "white",
      strobe_color: "black",
      brightness: 0.5,
    }),
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "29:17.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 20,
      speed: 100,
      count: 3,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "29:35.500": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.2,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "29:38.500": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "29:41": {
    rails: effect("scan_and_flare", {
      color_scan: "red",
      scan_width: 20,
      speed: 100,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "30:17.500": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "30:36": {
    ceiling: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 100,
      hit_probability_per_sec: 1,
    }),
  },
  "30:41.500": {
    ceiling: effect.off(),
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 50,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "30:47.700": {
    ceiling: effect("real_strobe", {
      gradient: "black",
      strobe_color: "white",
      brightness: 0.5,
    }),
    // ceiling: effect("strobe", { background_color: "black", gradient: "white" }),
  },
  "30:51": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "31:09": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "31:11.600": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.4,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "31:20.500": {
    rails: effect("rain", {
      mids_color: "blue",
      lows_color: "black",
      high_color: "black",
    }),
  },
  "31:24": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "31:36": {
    rails: effect.gradient2Scan("blue", 10, 1),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "31:56.500": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 25,
      blur: 1,
    }),
  },
  "32:11.800": {
    rails: effect.gradient2Scan("blue", 10, 5),
  },
  "32:21": {
    rails: effect("power", {
      sparks_color: "white",
      background_color: "black",
      gradient: "black",
    }),
  },
  "32:24": {
    rails: effect.gradient2Scan("blue", 10, 7),
  },
  "32:32.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "32:35.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "32:56.500": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.off(),
  },
  "32:59.800": {
    rails: effect("singleColor", { color: "blue", brightness: 0.25 }),
  },
  "33:08.500": {
    rails: effect("singleColor", { color: "white", brightness: 0.1 }),
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "33:12": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#0000ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 0.5,
    }),
    ceiling: effect("real_strobe", {
      gradient: "black",
      strobe_color: "white",
      brightness: 0.5,
    }),
    // rails: effect("real_strobe", { gradient: "white", strobe_color: "black", brightness: 0.5 }),
  },
  "33:24": {
    rails: effect.gradient2Scan("blue", 5, 1),
  },
  "33:29.700": {
    rails: effect.gradient2Scan("blue", 10, 1),
  },
  "33:32.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "33:36": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "33:42": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "33:48": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 50,
    }),
  },
  "33:57": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "34:00": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "34:12": {
    rails: effect("rain", {
      mids_color: "white",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
    }),
  },
  "34:24": {
    ceiling: effect.off(),
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  //
  //
  //
  // "22:20": {
  //   ceiling: effect("power", { gradient: "green", background_color: "black", sparks_color: "black" }),
  // },
  // "34:30": {
  //   rails: effect.gradient1Scan("red", 10, 1),
  // },
  // "34:33": {
  //   rails: effect.gradient1Scan("red", 10, 2),
  // },
  "34:35.500": {
    rails: effect.gradient1Scan("red", 5, 1),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "34:48": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.25 }),
  },
  "34:53": {
    rails: effect.gradient1Scan("red", 5, 1),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "35:04": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
  },
  "35:06": {
    rails: effect.gradient1Scan("red", 5, 1),
  },
  "35:18": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
  },
  "35:22": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "35:23.500": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
  },
  "35:30": {
    rails: effect.gradient1Scan("red", 5, 2),
  },
  "35:36": {
    rails: effect.gradient1Scan("red", 7, 4),
  },
  "35:39": {
    rails: effect.gradient1Scan("red", 10, 4),
  },
  "35:40": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      strobe_width: 50,
      background_color: "black",
      gradient: "black",
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "35:48": {
    rails: effect.gradient1Scan("red", 10, 6),
  },
  "36:00": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "36:11.600": {
    rails: effect.gradient1Scan("red", 7, 4),
  },
  "36:23.500": {
    rails: effect.gradient1Scan("red", 10, 5),
  },
  "36:36": {
    rails: effect("singleColor", { color: "red", brightness: 0.25 }),
  },
  "36:40": {
    rails: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    ceiling: effect.off(),
  },
  "36:43": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.25 }),
  },
  "36:46": {
    ceiling: effect.off(),
    rails: effect("power", {
      gradient: "orange",
      background_color: "black",
      sparks_color: "white",
      brightness: 0.25,
    }),
  },
  "36:52": {
    ceiling: effect("real_strobe", {
      gradient: "black",
      strobe_color: "blue",
      brightness: 0.5,
    }),
  },
  "36:58": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "orange",
      hit_duration: 0.3,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "37:00.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "orange",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "37:02": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "orange", brightness: 0.25 }),
  },
  "37:04": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 2,
    }),
  },
  "37:06.500": {
    ceiling: effect.strobeBass("orange", {
      background_color: "black",
      gradient: "orange",
    }),
  },
  "37:34": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 1,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "37:45.700": {
    rails: effect("power", {
      gradient: "#050505",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
    ceiling: effect.off(),
  },
  "38:33": {
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "38:46": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.03,
      lows_sensitivity: 0.15,
      high_sensitivity: 0.03,
    }),
  },
  "38:58": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "39:10": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "39:51": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "39:52": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.3,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "40:04": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    rails: effect("power", {
      gradient: "#040000",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
  },
  "40:17": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "40:29.500": {
    rails: effect.gradient1Scan("red", 5, 1),
  },
  "40:54": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "41:06.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "41:13": {
    rails: effect.gradient2Scan("white", 10, 7),
  },
  "41:16": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 1,
      hit_probability_per_sec: 1,
    }),
  },
  "41:19": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "41:22": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "41:23": {
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "41:25": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 50,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "41:37.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "41:49.800": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "red",
      brightness: 0.25,
    }),
  },
  "42:14.500": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "blue",
      brightness: 0.25,
    }),
  },
  "42:27": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "blue",
      hit_duration: 0.3,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "42:39.200": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "blue", brightness: 0.1 }),
  },
  "42:50.500": {
    rails: effect("power", {
      gradient: "#000020",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "43:02": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 50,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "43:08": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 20,
    }),
  },
  "43:10.500": {
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "43:20": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "43:26": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "43:28.800": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "blue",
      hit_duration: 0.2,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "43:30.500": {
    rails: effect("singleColor", { color: "blue", brightness: 0.25 }),
  },
  "43:32": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 20,
    }),
  },
  "43:44": {
    ceiling: effect.strobeBass("blue", {
      background_color: "black",
      gradient: "blue",
    }),
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 20,
    }),
  },
  "43:56": {
    rails: effect("scroll", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 1,
      color_high: "black",
      color_lows: "orange",
      color_mids: "black",
      decay: 0.8,
      flip: false,
      mirror: true,
      speed: 10,
      threshold: 1,
    }),
    ceiling: effect.strobeBass("blue", {
      background_color: "black",
      gradient: "blue",
    }),
  },
  "44:20": {
    ceiling: effect("singleColor", { color: "blue", brightness: 0.05 }),
    rails: effect("power", {
      gradient: "#000010",
      background_color: "black",
      sparks_color: "orange",
      brightness: 1,
    }),
  },
  "44:44": {
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "44:54.500": {
    ceiling: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.1,
      hit_relative_size: 100,
      hit_probability_per_sec: 1,
    }),
  },
  "44:56": {
    rails: effect("power", {
      gradient: "#000010",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "45:02": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 20,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("white", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "45:26": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.5,
    }),
  },
  "45:50": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.35,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "46:02": {
    rails: effect("power", {
      gradient: "#030303",
      background_color: "black",
      sparks_color: "green",
      brightness: 1,
    }),
  },
  "46:14": {
    ceiling: effect.off(),
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "green",
      brightness: 1,
    }),
  },
  "46:26": {
    rails: effect("rain", {
      mids_color: "green",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Blob",
    }),
  },
  "46:35": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "green", brightness: 0.1 }),
  },
  "46:38": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.35,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "46:41": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.15,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "46:42.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "46:47": {
    rails: effect("scan_and_flare", {
      color_scan: "green",
      scan_width: 20,
      speed: 100,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "47:08": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.35,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "47:13": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "47:19": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.3,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "47:21": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.5,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "47:25.500": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#5000ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
  },
  "47:37": {
    rails: effect.off(),
  },
  "47:38": {
    ceiling: effect("power", {
      gradient: "#5000ff",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    rails: effect("scan", {
      color_scan: "#5000ff",
      blur: 0,
      scan_width: 20,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "47:50": {
    rails: effect("scan", {
      color_scan: "#5000ff",
      blur: 0,
      scan_width: 20,
      speed: 100,
      count: 2,
      bounce: false,
      flip: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "48:02.300": {
    rails: effect.off(),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "48:15": {
    rails: effect("rain", {
      mids_color: "#5000ff",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "48:26": {
    rails: effect("random_flash", {
      blur: 4,
      hit_color: "#5000ff",
      hit_duration: 0.1,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "48:35": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#5000ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "48:41": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#5000ff",
      hit_duration: 0.2,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "48:43": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#5000ff",
      hit_duration: 0.3,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "48:45": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#5000ff",
      hit_duration: 0.5,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "48:48.500": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "#5000ff", brightness: 0.1 }),
  },
  "48:55": {
    rails: effect("power", {
      gradient: "#050505",
      background_color: "black",
      sparks_color: "#5000ff",
      brightness: 1,
    }),
  },
  "49:01": {
    ceiling: effect("real_strobe", {
      strobe_color: "#5000ff",
      gradient: "black",
      strobe_width: 50,
    }),
    // ceiling: effect("power", { gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "49:13.500": {
    rails: effect("scan", {
      color_scan: "#5000ff",
      blur: 0,
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: true,
      mirror: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "49:25": {
    rails: effect("rain", {
      mids_color: "#5000ff",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.2,
      high_sensitivity: 0.1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "49:38": {
    rails: effect("power", {
      gradient: "#050505",
      background_color: "black",
      sparks_color: "#5000ff",
      brightness: 1,
    }),
  },
  "49:50.800": {
    rails: effect.gradient2Scan("pink", 7, 1),
    ceiling: effect("singleColor", { color: "pink", brightness: 0.1 }),
  },
  "50:03.500": {
    ceiling: effect("power", {
      gradient: "pink",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
    rails: effect.gradient2Scan("blue", 5, 1),
  },
  "50:15.500": {
    rails: effect.gradient2Scan("blue", 10, 3),
  },
  "50:22": {
    rails: effect.gradient2Scan("blue", 10, 5),
  },
  "50:24.600": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "50:27.500": {
    rails: effect("singleColor", { color: "blue", brightness: 1 }),
    ceiling: effect("singleColor", { color: "pink", brightness: 0.25 }),
  },
  "50:31": {
    ceiling: effect.strobeBass("pink", {
      background_color: "black",
      gradient: "pink",
    }),
  },
  "50:34": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "50:35.500": {
    rails: effect("rain", {
      mids_color: "blue",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "50:37": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "pink",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "50:49.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.36,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "51:01.500": {
    rails: effect.off(),
  },
  "51:08": {
    rails: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "51:14": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "51:24.500": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "51:26.500": {
    rails: effect("scroll", {
      color_lows: "red",
      color_mids: "green",
      color_high: "blue",
      background_color: "black",
      background_brightness: 1,
      brightness: 1,
      speed: 3,
      decay: 0.97,
      flip: false,
      mirror: true,
      threshold: 0,
    }),
  },
  "51:39": {
    rails: effect("power", {
      gradient: "#050505",
      background_color: "black",
      sparks_color: "green",
      brightness: 1,
    }),
    ceiling: effect.off(),
  },
  "52:00.700": {
    ceiling: effect("random_flash", {
      blur: 0,
      hit_color: "green",
      hit_duration: 0.3,
      hit_relative_size: 100,
      hit_probability_per_sec: 1,
      brightness: 0.1,
    }),
  },
  "52:03.600": {
    ceiling: effect("singleColor", { color: "green", brightness: 0.1 }),
  },
  "52:07": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "52:10": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
    ceiling: effect.strobeBass("white", {
      background_color: "black",
      gradient: "white",
    }),
    // ceiling: effect("power", { gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "52:22": {
    ceiling: effect.off(),
  },
  "52:35": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "52:47": {
    ceiling: effect.off(),
    rails: effect("power", {
      gradient: "#030303",
      background_color: "black",
      sparks_color: "green",
      brightness: 1,
    }),
  },
  "52:59.500": {
    ceiling: effect.off(),
    rails: effect("power", {
      gradient: "#030303",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
  },
  "53:11.700": {
    rails: effect.gradient2Scan("red", 10, 1),
    ceiling: effect("singleColor", { color: "white", brightness: 0.05 }),
  },
  "53:23.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.5,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "53:26": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.3,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "53:28": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.2,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "53:29.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "53:35.300": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "53:41.500": {
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "53:51": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "white",
      brightness: 1,
    }),
  },
  "54:08.500": {
    ceiling: effect.off(),
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "54:21": {
    rails: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "54:32.700": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "red",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
    // rails: effect("power", { gradient: "red", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "54:44": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "54:56.500": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
  },
  "55:08.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 50,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "55:14.500": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "55:17.200": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "55:20.500": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 5,
      blur: 3,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "55:41.700": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "55:44.300": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 10,
      blur: 3,
    }),
  },
  "55:56.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "56:08.500": {
    rails: effect("singleColor", { color: "#ff2800", brightness: 0.1 }),
    ceiling: effect.off(),
  },
  "56:15": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#ff2800",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
  },
  "56:26.500": {
    ceiling: effect("power", {
      gradient: "#ff2800",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "56:39": {
    rails: effect("rain", {
      mids_color: "#ff2800",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Ripple",
    }),
  },
  "56:50.500": {
    rails: effect("scan", {
      color_scan: "#ff2800",
      scan_width: 10,
      speed: 50,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "57:02.500": {
    rails: effect("scan", {
      color_scan: "#ff2800",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 0,
    }),
  },
  "57:14.700": {
    rails: effect.bladeDefault("#ff2800", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "57:20.400": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#ff2800",
      hit_duration: 0.35,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "57:23.400": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#ff2800",
      hit_duration: 0.25,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "57:26": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#ff2800",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "57:26.700": {
    rails: effect("singleColor", { color: "#ff2800", brightness: 0.1 }),
  },
  "57:29": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#ff2800",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
    ceiling: effect.strobeBass("white", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "57:32": {
    rails: effect("melt_and_sparkle", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#ff2800",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
  },
  "57:38.500": {
    rails: effect("scan_multi", {
      color_high: "#ff2800",
      color_low: "red",
      color_mid: "white",
      scan_width: 10,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),

    // rails: effect("scan_multi", { color_scan: "#ff2800", scan_width: 10, speed: 100, count: 2, bounce: true, frequency_range: FrequencyRange.Mids }),
    // rails: effect("rain", { mids_color: "#ff2800", lows_color: "black", high_color: "black", raindrop_animation: "Laser", mids_sensitivity: 0.3, lows_sensitivity: 0.03, high_sensitivity: 0.03 }),
    // rails: effect("power", { gradient: "#050505", background_color: "black", sparks_color: "#ff2800", brightness: 1 }),
  },
  "58:02": {
    rails: effect("fire", { mirror: true }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "58:26.500": {
    rails: effect("block_reflections", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "linear-gradient(90deg, #ff2800 45.00%,#000000 57.00%)",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "58:32.500": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#ff2800",
      brightness: 1,
    }),
  },
  "58:39": {
    rails: effect("block_reflections", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "linear-gradient(90deg, #ff2800 45.00%,#000000 57.00%)",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 1,
    }),
  },
  "58:44": {
    rails: effect("real_strobe", {
      strobe_color: "#ff2800",
      gradient: "black",
      strobe_width: 15,
      blur: 3,
    }),
  },
  "59:04": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 15,
      blur: 0,
    }),
    ceiling: effect.strobeBass("#ff2800", {
      background_color: "black",
      gradient: "#ff2800",
    }),
  },
  "59:16.500": {
    rails: effect("scan", {
      color_scan: "#ff2800",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "59:28.500": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      speed: 100,
      count: 3,
      bounce: false,
      mirror: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "59:40": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "#000000",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "red",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
  },
  "59:52.500": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
    }),
  },
  "01:00:04.900": {
    rails: effect("scan_and_flare", {
      color_scan: "red",
      scan_width: 10,
      speed: 50,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:00:17": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.5,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "01:00:23": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.2,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "01:00:26.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "01:00:30": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:00:35.700": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("gray", {
      background_color: "black",
      gradient: "gray",
    }),
  },
  "01:00:47.500": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
      flip: false,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "01:00:59.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 10,
      speed: 100,
      count: 3,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("blue", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "01:01:11.500": {
    rails: effect("scan", {
      color_scan: "blue",
      scan_width: 5,
      blur: 0,
      speed: 30,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:01:23.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.2,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:01:26.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "blue",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:01:30": {
    rails: effect("real_strobe", {
      strobe_color: "blue",
      gradient: "black",
      strobe_width: 40,
      blur: 3,
    }),
    ceiling: effect("power", {
      gradient: "#7400ff",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
    // rails: effect("random_flash", { blur: 3, hit_color: "blue", hit_duration: 0.1, hit_relative_size: 30, hit_probability_per_sec: 1 }),
  },
  "01:01:41": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 20,
      blur: 3,
    }),
    ceiling: effect("power", {
      gradient: "blue",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:02:00": {
    rails: effect.bladeDefault("blue", {
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("blue", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "01:02:11.500": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:02:15": {
    rails: effect.bladeDefault("green", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:02:23.700": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 5,
      blur: 0,
      speed: 20,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("blue", {
      background_color: "black",
      gradient: "#ff2800",
    }),
  },
  "01:02:35": {
    rails: effect("scan", {
      color_scan: "green",
      scan_width: 5,
      blur: 0,
      speed: 50,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:02:48": {
    rails: effect("power", {
      gradient: "#020202",
      background_color: "black",
      sparks_color: "#ff2800",
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "#ff7200",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "01:02:59.500": {
    rails: effect("scan", {
      color_scan: "#ff2800",
      scan_width: 10,
      blur: 0,
      speed: 50,
      count: 1,
      bounce: true,
      mirror: true,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.25,
    }),
  },
  "01:03:11.500": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "#ff2800", brightness: 0.1 }),
  },
  "01:03:17.800": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "01:03:20.300": {
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "01:03:42.500": {
    rails: effect.gradient2Scan("red", 10, 1),
  },
  "01:03:55": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "01:04:01": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:04:02.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 25,
      hit_probability_per_sec: 1,
    }),
  },
  "01:04:05.600": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "01:04:07": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 40,
      blur: 0,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:04:25.700": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 20,
      blur: 0,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:04:38": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:04:51": {
    rails: effect("power", {
      gradient: "#050000",
      background_color: "black",
      sparks_color: "white",
      brightness: 1,
    }),
  },
  "01:05:03": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "01:05:06": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 5,
      speed: 50,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:05:09.500": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "01:05:12.200": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 5,
      speed: 20,
      count: 2,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:05:15": {
    rails: effect("scan_multi", {
      color_high: "red",
      color_low: "red",
      color_mid: "white",
      scan_width: 10,
      speed: 100,
      count: 1,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
      blur: 1,
    }),
  },
  "01:05:21.500": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "#050505",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "01:05:27.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.15,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "01:05:34.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "01:05:38.500": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:05:40": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "red",
    }),
  },
  "01:05:41.800": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:05:43": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "#050505",
      high_color: "black",
      raindrop_animation: "Ripple",
    }),
  },
  "01:05:44.500": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.3,
      hit_relative_size: 30,
      hit_probability_per_sec: 1,
    }),
  },
  "01:05:45.500": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:05:46.400": {
    rails: effect.off(),
  },
  "01:05:48": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 2,
      blur: 0,
    }),
  },
  "01:05:49": {
    rails: effect.off(),
  },
  "01:05:51": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 2,
      blur: 0,
    }),
  },
  "01:05:52": {
    rails: effect.off(),
  },
  "01:05:54": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 2,
      blur: 0,
    }),
  },
  "01:05:55": {
    rails: effect.off(),
  },
  "01:05:57": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 2,
      blur: 0,
    }),
  },
  "01:05:58": {
    rails: effect.off(),
  },
  "01:06:00": {
    rails: effect("scan", {
      color_scan: "white",
      scan_width: 10,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:06:11": {
    rails: effect.gradient2Scan("red", 10, 5),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:06:23": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.38,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "01:06:48.500": {
    rails: effect.gradient1ScanSmall("red", 10, 5),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "01:07:10": {
    rails: effect("power", {
      gradient: "#020202",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
  },
  "01:07:13.300": {
    rails: effect.gradient1ScanSmall("red", 10, 5, { mirror: true }),
  },
  "01:07:25.500": {
    rails: effect.gradient1ScanSmall("red", 10, 5, {
      mirror: true,
      flip: true,
    }),
  },
  "01:07:32": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "white",
      hit_duration: 0.38,
      hit_relative_size: 2,
      hit_probability_per_sec: 1,
    }),
  },
  "01:07:38": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "01:07:47.900": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:07:49.200": {
    rails: effect.off(),
  },
  "01:07:52.700": {
    rails: effect("real_strobe", {
      strobe_color: "white",
      gradient: "black",
      strobe_width: 15,
      blur: 0,
    }),
  },
  "01:07:54.200": {
    rails: effect.off(),
  },
  "01:07:57": {
    rails: effect.bladeDefault("white", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:07:57.200": {
    rails: effect.off(),
  },
  "01:08:02": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
  },
  "01:08:02.700": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "01:08:03.200": {
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "01:08:04": {
    ceiling: effect.off(),
  },
  "01:08:04.500": {
    rails: effect("power", {
      gradient: "#030303",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:08:05": {
    rails: effect.off(),
  },
  "01:08:06": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 15,
      blur: 0,
    }),
  },
  "01:08:06.500": {
    rails: effect.off(),
  },
  "01:08:07.600": {
    ceiling: effect("singleColor", { color: "red", brightness: 0.1 }),
  },
  "01:08:09.500": {
    rails: effect("power", {
      gradient: "#030303",
      background_color: "black",
      sparks_color: "red",
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "01:08:22": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 15,
      blur: 0,
    }),
  },
  "01:08:28.500": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 40,
      blur: 3,
    }),
  },
  "01:08:41": {
    rails: effect("scan", {
      color_scan: "red",
      scan_width: 5,
      speed: 100,
      count: 2,
      blur: 0,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:09:06": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "white",
      brightness: 1,
    }),
    ceiling: effect("power", {
      gradient: "red",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:09:30.500": {
    rails: effect("rain", {
      mids_color: "white",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
      brightness: 0.25,
    }),
  },
  "01:09:54": {
    rails: effect("rain", {
      mids_color: "red",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
      brightness: 1,
    }),
  },
  "01:10:08": {
    rails: effect("melt_and_sparkle", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#3e00ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 0.5,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "01:10:32.500": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#3e00ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
  },
  "01:10:58": {
    rails: effect("power", {
      gradient: "#020202",
      background_color: "black",
      sparks_color: "#3e00ff",
      brightness: 1,
    }),
  },
  "01:11:10.700": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      speed: 100,
      count: 3,
      blur: 0,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "01:11:36": {
    rails: effect("rain", {
      mids_color: "#3e00ff",
      lows_color: "black",
      high_color: "black",
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.1,
    }),
  },
  "01:12:01": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.38,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:12:27": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "#3e00ff", brightness: 0.1 }),
  },
  "01:12:33": {
    rails: effect("melt_and_sparkle", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#ff2800",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 0.5,
    }),
    ceiling: effect("power", {
      gradient: "#3e00ff",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:13:09": {
    rails: effect("melt_and_sparkle", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 1,
      fix_hues: true,
      flip: false,
      gradient: "#3e00ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 0.5,
      speed: 0.5,
    }),
    ceiling: effect.off(),
  },
  "01:13:21": {
    rails: effect("power", {
      gradient: "black",
      background_color: "black",
      sparks_color: "#3e00ff",
      brightness: 1,
    }),
  },
  "01:13:33": {
    rails: effect.gradient1ScanSmall("#3e00ff", 5, 1),
  },
  "01:13:39": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect("power", {
      gradient: "#ff2800",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.5,
    }),
  },
  "01:13:51": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "#3e00ff",
      hit_duration: 0.1,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
    }),
  },
  "01:14:03": {
    rails: effect("scan", {
      color_scan: "#3e00ff",
      scan_width: 5,
      speed: 100,
      count: 2,
      bounce: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:14:15": {
    rails: effect("melt", {
      background_brightness: 1,
      background_color: "black",
      blur: 0,
      brightness: 0.5,
      fix_hues: true,
      flip: false,
      gradient: "#3e00ff",
      gradient_roll: 0,
      mirror: false,
      reactivity: 1,
      speed: 1,
    }),
    ceiling: effect("power", {
      gradient: "pink",
      background_color: "black",
      sparks_color: "black",
      brightness: 0.5,
    }),
  },
  "01:14:51": {
    rails: effect("rain", {
      mids_color: "white",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "01:15:03": {
    rails: effect("rain", {
      mids_color: "pink",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
    ceiling: effect("singleColor", { color: "white", brightness: 0.1 }),
  },
  "01:15:10": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "pink", brightness: 0.1 }),
  },
  "01:15:18.500": {
    rails: effect("rain", {
      mids_color: "pink",
      lows_color: "black",
      high_color: "black",
      raindrop_animation: "Laser",
      mids_sensitivity: 0.3,
      lows_sensitivity: 0.03,
      high_sensitivity: 0.03,
    }),
  },
  "01:15:37": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.38,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
    ceiling: effect("power", {
      gradient: "white",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
  },
  "01:15:49": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.19,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:15:55": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:15:58": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.1,
      hit_relative_size: 1,
      hit_probability_per_sec: 1,
    }),
  },
  "01:16:01": {
    ceiling: effect("power", {
      gradient: "pink",
      background_color: "black",
      sparks_color: "black",
      brightness: 1,
    }),
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "white",
      hit_duration: 0.38,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
      brightness: 0.25,
    }),
  },
  "01:16:25": {
    rails: effect("scan", {
      color_scan: "pink",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: false,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:16:37": {
    rails: effect("scan", {
      color_scan: "pink",
      scan_width: 20,
      speed: 100,
      count: 3,
      bounce: false,
      flip: true,
      frequency_range: FrequencyRange.Mids,
    }),
  },
  "01:16:57": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "pink",
      hit_duration: 0.1,
      hit_relative_size: 20,
      hit_probability_per_sec: 1,
      brightness: 0.25,
    }),
  },
  "01:17:03": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
      brightness: 0.25,
    }),
  },
  "01:17:07": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
      brightness: 0.25,
    }),
  },
  "01:17:13": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "pink",
      hit_duration: 0.2,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
      brightness: 0.25,
    }),
  },
  "01:17:17": {
    rails: effect("singleColor", { color: "white", brightness: 0.5 }),
    ceiling: effect("singleColor", { color: "white", brightness: 0.5 }),
  },
  "01:17:39": {
    ceiling: effect.off(),
    rails: effect.gradient1ScanSmall("red", 5, 1),
  },
  "01:17:49.500": {
    rails: effect("real_strobe", {
      strobe_color: "red",
      gradient: "black",
      strobe_width: 15,
      blur: 0,
    }),
    ceiling: effect.strobeBass("red", {
      background_color: "black",
      gradient: "white",
    }),
  },
  "01:18:18": {
    rails: effect("random_flash", {
      blur: 0,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 5,
      hit_probability_per_sec: 1,
    }),
  },
  "01:18:20": {
    rails: effect("random_flash", {
      blur: 3,
      hit_color: "red",
      hit_duration: 0.1,
      hit_relative_size: 10,
      hit_probability_per_sec: 1,
    }),
  },
  "01:18:32": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "01:18:35.500": {
    rails: effect.bladeDefault("red", {
      frequency_range: FrequencyRange.Mids,
      flip: true,
    }),
  },
  "01:18:41.500": {
    rails: effect.bladeDefault("red", { frequency_range: FrequencyRange.Mids }),
  },
  "01:18:49": {
    rails: effect("singleColor", { color: "red", brightness: 1 }),
    ceiling: effect("singleColor", { color: "red", brightness: 1 }),
  },
  "01:18:54.500": {
    rails: effect.off(),
    ceiling: effect("singleColor", { color: "#ff2800", brightness: 1 }),
  },
};

export const PLAYLIST = new Map<TimeString, PlaylistEntry>(
  Object.entries(Playlist) as [TimeString, PlaylistEntry][],
);

// Time	Song Name
// [
//   {
//       "position": "01",
//       "time": "",
//       "title": "Restricted - ID"
//   },
//   {
//       "position": "02",
//       "time": "01:55",
//       "title": "Kendrick Lamar - Swimming Pools (Drank) (Lister Remix) "
//   },
//   {
//       "position": "w/",
//       "time": "",
//       "title": "Lister - Faded (Swimming Pools Edit)"
//   },
//   {
//       "position": "03",
//       "time": "03:11",
//       "title": "Timmy Trumpet & Restricted - Perfect (Exceeder) "
//   },
//   {
//       "position": "04",
//       "time": "05:40",
//       "title": "Joey Risdon - Hardcore Power "
//   },
//   {
//       "position": "05",
//       "time": "06:55",
//       "title": "KIRK - Hardstyle Flavour "
//   },
//   {
//       "position": "06",
//       "time": "08:16",
//       "title": "Warp Brothers & Flymeon - Phatt Bass "
//   },
//   {
//       "position": "07",
//       "time": "10:40",
//       "title": "Artemas - i like the way you kiss me "
//   },
//   {
//       "position": "08",
//       "time": "13:27",
//       "title": "The Prodigy - Voodoo People (Mr.Machine Edit)"
//   },
//   {
//       "position": "09",
//       "time": "15:16",
//       "title": "Restricted & KIRK - We Don't Care"
//   },
//   {
//       "position": "10",
//       "time": "18:06",
//       "title": "Restricted & Nik Sitz - Tunnel Vision "
//   },
//   {
//       "position": "11",
//       "time": "21:51",
//       "title": "Franky-B & Kø:lab - Godspeed "
//   },
//   {
//       "position": "12",
//       "time": "23:09",
//       "title": "Azyr - Direct It To The Roof (Riot Code Remix) "
//   },
//   {
//       "position": "13",
//       "time": "25:34",
//       "title": "Restricted - Close To My"
//   },
//   {
//       "position": "14",
//       "time": "28:14",
//       "title": "Zombie Nation - Kernkraft 400 (Mr.Machine & Edmmaro Edit)"
//   },
//   {
//       "position": "w/",
//       "time": "29:56",
//       "title": "Zombie Nation - Kernkraft 400 (MJU 2k24 Edit) "
//   },
//   {
//       "position": "15",
//       "time": "31:38",
//       "title": "Skrillex & Habstrakt - Chicken Soup (Vortek's Remix) "
//   },
//   {
//       "position": "16",
//       "time": "34:50",
//       "title": "GRAVEDGR - FVCK YOU!"
//   },
//   {
//       "position": "17",
//       "time": "36:47",
//       "title": "Black Eyed Peas - Pump It "
//   },
//   {
//       "position": "18",
//       "time": "37:48",
//       "title": "Gyko - Hypnotic Waves "
//   },
//   {
//       "position": "19",
//       "time": "39:42",
//       "title": "Restricted - Smells Like Teen Spirit "
//   },
//   {
//       "position": "20",
//       "time": "42:42",
//       "title": "KNTRLVRLST - Psycho "
//   },
//   {
//       "position": "21",
//       "time": "44:22",
//       "title": "Jayron & Gewoonraves - Knock Knock "
//   },
//   {
//       "position": "22",
//       "time": "46:16",
//       "title": "KX CHR - Yasuo "
//   },
//   {
//       "position": "23",
//       "time": "47:27",
//       "title": "TRFN & Ken Rosenberg - Maneater "
//   },
//   {
//       "position": "w/",
//       "time": "",
//       "title": "Benny Benassi pres. The Biz - Satisfaction (BEAUZ Hard Techno Remix) "
//   },
//   {
//       "position": "24",
//       "time": "49:53",
//       "title": "Restricted & Nik Sitz ft. 89ers - Party People "
//   },
//   {
//       "position": "25",
//       "time": "53:02",
//       "title": "T A N E - MONEY RIGHT "
//   },
//   {
//       "position": "26",
//       "time": "54:23",
//       "title": "Vortek's - Crashdown "
//   },
//   {
//       "position": "27",
//       "time": "56:11",
//       "title": "Scot Project & Sam Jones - Weed "
//   },
//   {
//       "position": "28",
//       "time": "59:42",
//       "title": "MANDY - UNDRGRND (2024 Rave Edit) "
//   },
//   {
//       "position": "29",
//       "time": "1:01:02",
//       "title": "TNT - 2003 "
//   },
//   {
//       "position": "30",
//       "time": "1:02:14",
//       "title": "GNS & David DTX - My Humps "
//   },
//   {
//       "position": "31",
//       "time": "1:03:14",
//       "title": "Vortex's & Tekas & Spice Up! - Soldiers "
//   },
//   {
//       "position": "32",
//       "time": "1:05:05",
//       "title": "The Bloody Beetroots ft. Steve Aoki - Warp 1.9 (Edmmaro Hard Techno Mix) "
//   },
//   {
//       "position": "33",
//       "time": "1:06:26",
//       "title": "TRIPTYKH - Bass Keeps Going "
//   },
//   {
//       "position": "34",
//       "time": "1:07:41",
//       "title": "O.B.I. - Hard Music Lessons "
//   },
//   {
//       "position": "35",
//       "time": "1:09:08",
//       "title": "RÜFÜS DU SOL - Innerbloom (HOEHENANGST HT Remix) "
//   },
//   {
//       "position": "36",
//       "time": "1:12:35",
//       "title": "Coolio & 1World & Holy Priest - Gangsta's Paradise "
//   },
//   {
//       "position": "37",
//       "time": "1:14:53",
//       "title": "Disclosure ft. Eliza Doolittle - You & Me (ØTJE Hard Techno Remix) "
//   },
//   {
//       "position": "38",
//       "time": "1:17:40",
//       "title": "Ray Volpe - Laserbeam (Anderex More Lazers Bootleg) "
//   },
//   {
//       "position": "w/",
//       "time": "",
//       "title": "Rooler & Sickmode - CLUB BANGER "
//   }
// ]
