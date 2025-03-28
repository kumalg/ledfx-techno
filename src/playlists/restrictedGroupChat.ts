import { DeviceKey } from "../ledfx/devices"
import * as presets from "../ledfx/presets"
import { Effect, effect } from "../ledfx/types/effect"

export const VIDEO_URL = 'https://www.youtube.com/watch?v=shFiitpKUSo'

const Playlist: Record<string, { [key in DeviceKey]?: Effect }> = {
  "00:00.100": {
    ceiling: effect("singleColor", { color: "white", brightness: 0.5 }),
    rails: presets.off()
  },
  "00:20": {
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "white", brightness: 1 })
  },
  "00:25": {
    ceiling: effect("random_flash", { blur: 4, hit_color: "blue", hit_duration: 0.1, hit_relative_size: 100, hit_probability_per_sec: 1 }),
    rails: effect("random_flash", { blur: 4, hit_color: "red", hit_duration: 0.1, hit_relative_size: 30, hit_probability_per_sec: 1 })
  },
  "00:43": {
    ceiling: presets.off(),
    rails: effect("scan", { color_scan: "red", scan_width: 50, speed: 50, count: 1, bounce: true }),
  },
  "00:49": {
    ceiling: effect("singleColor", { color: "red", brightness: 1 }),
    rails: presets.off(),
  },
  "00:57.500": {
    ceiling: presets.off(),
    rails: effect("real_strobe", { strobe_color: "red", gradient: "black", strobe_width: 50 })
  },
  "01:00": {
    ceiling: presets.strobeBass("red"),
  },
  "01:01.500": {
    ceiling: presets.off(),
  },
  "01:06.700": {
    ceiling: presets.strobeBass("red"),
  },
  "01:08": {
    ceiling: presets.off(),
  },
  "01:10": {
    rails: presets.gradient1Scan("red", 10, 1),
  },
  "01:16.300": {
    rails: presets.gradient1Scan("red", 10, 7),
  },
  "01:19.700": {
    rails: presets.gradient1Scan("red", 10, 9),
  },
  "01:21": {
    rails: effect("singleColor", { color: "red", brightness: 1 }),
  },
  "01:22.500": {
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "white", brightness: 1 }),
    rails: presets.off(),
  },
  "01:28.500": {
    rails: effect("real_strobe", { strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" }),
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "white", brightness: 1 })
  },
  "01:41": {
    rails: presets.bladeDefault("red", { frequency_range: "Lows (beat+bass)" })
  },
  "01:53": {
    rails: effect("scan", { color_scan: "blue", scan_width: 50, speed: 50, count: 1, bounce: false }),
    ceiling: presets.off(),
  },
  "02:31": {
    rails: effect("scan", { color_scan: "blue", scan_width: 30, speed: 100, count: 1, bounce: true }),
    ceiling: effect("power", { gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "02:43.700": {
    rails: presets.gradient1Scan("blue", 10, 7),
  },
  "03:10.000": {
    rails: presets.gradient1Scan("#6200ff", 10, 7),
  },
  "03:19.000": {
    rails: presets.gradient1Scan("#6200ff", 10, 9),
  },
  "03:20": {
    rails: effect("singleColor", { color: "#6200ff", brightness: 1 }),
  },
  "03:22": {
    rails: effect("real_strobe", { strobe_color: "#6200ff", strobe_width: 50, background_color: "black", gradient: "black" }),
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "#6200ff", brightness: 1 })
  },
  "03:34": {
    rails: effect("scan", { color_scan: "#6200ff", blur: 5, scan_width: 25, speed: 100, count: 2, bounce: true }),
  },
  "04:24": {
    rails: presets.gradient1Scan("#6200ff", 10, 6),
  },
  "04:36": {
    rails: effect("scan", { color_scan: "#6200ff", blur: 5, scan_width: 25, speed: 100, count: 1, bounce: true }),
  },
  "04:45": {
    rails: effect("random_flash", { blur: 4, hit_color: "#6200ff", hit_duration: 0.1, hit_relative_size: 30, hit_probability_per_sec: 1 })
  },
  "04:48": {
    rails: effect("real_strobe", { strobe_color: "#6200ff", strobe_width: 50, background_color: "black", gradient: "black" }),
    ceiling: presets.off(),
  },
  "04:55": {
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "#6200ff", brightness: 1 })
  },
  "04:58": {
    ceiling: presets.off(),
  },
  "05:01": {
    ceiling: effect("real_strobe", { gradient: "#000000", strobe_color: "#6200ff", brightness: 1 }),
    rails: effect("random_flash", { blur: 4, hit_color: "#6200ff", hit_duration: 0.1, hit_relative_size: 30, hit_probability_per_sec: 1 })
  },
  "05:13": {
    rails: effect("scan", { color_scan: "#6200ff", scan_width: 30, speed: 50, count: 3, bounce: false }),
  },
  "05:26": {
    ceiling: effect("power", { gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 }),
    rails: effect("scan", { color_scan: "red", scan_width: 30, speed: 50, count: 3, bounce: false }),
  },
  "05:38": {
    rails: presets.gradient2Scan("red", 8, 1)
  },
  "05:50": {
    rails: effect("rain", { mids_color: "red", lows_color: "black", high_color: "black" })
  },
  "05:57": {
    rails: effect("random_flash", { blur: 4, hit_color: "red", hit_duration: 0.1, hit_relative_size: 30, hit_probability_per_sec: 1 })
  },
  "06:00": {
    rails: effect("singleColor", { color: "red" })
  },
  "06:03": {
    rails: effect("real_strobe", { strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" }),
    ceiling: effect("power", { gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "06:15.500": {
    rails: effect("scan", { scan_width: 25, color_scan: "red", speed: 75, bounce: true }),
    ceiling: presets.off()
  },
  "06:25": {
    rails: presets.gradient2Scan("red", 10, 3)
  },
  "06:28": {
    rails: effect("power", { sparks_color: "red", background_color: "black", gradient: "black" }),
  },
  "06:40": {
    ceiling: effect("power", { gradient: "red", background_color: "black", sparks_color: "black", brightness: 0.25 }),
  },
  "06:52.500": {
    rails: presets.off()
  },
  "07:06": {
    rails: presets.bladeDefault("red")
  },
  "07:11.500": {
    rails: presets.gradient1Scan("white", 10, 7)
  },
  "07:16": {
    rails: presets.off()
  },
  "07:18": {
    rails: presets.bladeDefault("red", { frequency_range: "Bass" })
  },
  "07:25": {
    ceiling: effect("real_strobe", { gradient: "white", strobe_color: "black", brightness: 0.5 }),
  },
  "07:37": {
    rails: effect("scan", { color_scan: "red", bounce: true, scan_width: 20 })
  },
  "08:14": {
    rails: effect("real_strobe", { strobe_color: "red", gradient: "black", strobe_width: 30 })
  },
  "08:51": {
    rails: presets.gradient1Scan("red", 5, 5, { mirror: true })
  },
  "08:57": {
    rails: effect("random_flash", { blur: 1, hit_color: "red", hit_duration: 0.1, hit_relative_size: 5, hit_probability_per_sec: 1 })
  },
  "09:03.500": {
    rails: presets.off(),
    ceiling: effect("singleColor", { color: "red", brightness: 0.25 })
  },
  "09:07": {
    ceiling: presets.off(),
    rails: effect("random_flash", { blur: 1, hit_color: "red", hit_duration: 0.5, hit_relative_size: 15, hit_probability_per_sec: 1 })
  },
  "09:10": {
    rails: effect("real_strobe", { strobe_color: "red", gradient: "black", strobe_width: 30 }),
    ceiling: effect("real_strobe", { gradient: "white", strobe_color: "black", brightness: 0.5 }),
  },
  "09:35": {
    rails: effect("scan", { scan_width: 20, color_scan: "red", bounce: true, speed: 100, blur: 1, count: 3 })
  },
  "10:24": {
    rails: effect("rain", { mids_color: "red", lows_color: "black", high_color: "black" })
  },
  "10:40": {
    rails: effect("power", { sparks_color: "red", background_color: "black", gradient: "black" }),
  },
  "22:20": {
    ceiling: effect("power", { gradient: "green", background_color: "black", sparks_color: "black" }),
  },
  "34:30": {
    rails: presets.gradient1Scan("red", 10, 1),
  },
  "34:33": {
    rails: presets.gradient1Scan("red", 10, 2),
  },
  "34:36": {
    rails: presets.gradient1Scan("red", 5, 1),
  },
  "35:04": {
    rails: effect("real_strobe", { strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" }),
  },
  "35:06": {
    rails: presets.gradient1Scan("red", 5, 1),
  },
  "35:18": {
    rails: effect("real_strobe", { strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" }),
  },
  "35:30": {
    rails: presets.gradient1Scan("red", 5, 2),
  },
  "35:36": {
    rails: presets.gradient1Scan("red", 7, 4),
  },
  "35:39": {
    rails: presets.gradient1Scan("red", 10, 4),
  },
  "35:40": {
    rails: effect("real_strobe", { strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" }),
  },
  "35:48": {
    rails: presets.gradient1Scan("red", 10, 6),
  },
}

export const PLAYLIST = new Map<string, { [key in DeviceKey]?: Effect }>(Object.entries(Playlist))

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