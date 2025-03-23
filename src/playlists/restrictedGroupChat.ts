import { DeviceEffect, rails, ceiling } from "../ledfx/devices"
import { power, rain, randomFlash, scan, singleColor, strobe } from "../ledfx/effects"
import { bladeDefault, gradient1Scan, gradient2Scan, off, strobeBass } from "../ledfx/presets"

export const VIDEO_URL = 'https://www.youtube.com/watch?v=shFiitpKUSo'

const Playlist: Record<string, DeviceEffect[]> = {
  "00:00.100": [
    ceiling(singleColor({ color: "white", brightness: 0.5 })),
    rails(off())
  ],
  "00:20": [
    ceiling(strobe({ gradient: "#000000", strobe_color: "white", brightness: 1 }))
  ],
  "00:25": [
    ceiling(randomFlash({ blur: 4, hit_color: "blue", hit_duration: 0.1, hit_relative_size: 100 })),
    rails(randomFlash({ blur: 4, hit_color: "red", hit_duration: 0.1, hit_relative_size: 30 }))
  ],
  "00:43": [
    ceiling(singleColor({ color: "black", brightness: 0.0 })),
    rails(scan({ color_scan: "red", scan_width: 50, speed: 50, count: 1, bounce: true })),
  ],
  "00:49": [
    ceiling(singleColor({ color: "red", brightness: 1 })),
    rails(singleColor({ color: "black", brightness: 0.0 })),
  ],
  "00:57.500": [
    ceiling(singleColor({ color: "black", brightness: 0.0 })),
    rails(strobe({ strobe_color: "red", gradient: "black", strobe_width: 50 }))
  ],
  "01:00": [
    ceiling(strobeBass("red")),
  ],
  "01:01.500": [
    ceiling(singleColor({ color: "black", brightness: 0.0 })),
  ],
  "01:06.700": [
    ceiling(strobeBass("red")),
  ],
  "01:08": [
    ceiling(singleColor({ color: "black", brightness: 0.0 })),
  ],
  "01:10": [
    rails(gradient1Scan("red", 10, 1)),
  ],
  "01:16.300": [
    rails(gradient1Scan("red", 10, 7)),
  ],
  "01:19.700": [
    rails(gradient1Scan("red", 10, 9)),
  ],
  "01:21": [
    rails(singleColor({ color: "red", brightness: 1 })),
  ],
  "01:22.500": [
    ceiling(strobe({ gradient: "#000000", strobe_color: "white", brightness: 1 })),
    rails(off()),
  ],
  "01:28.500": [
    rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
    ceiling(strobe({ gradient: "#000000", strobe_color: "white", brightness: 1 }))
  ],
  "01:41": [
    // rails(scan({ color_scan: "red", scan_width: 30, speed: 50, count: 3, bounce: true })),
    rails(bladeDefault("red", { frequency_range: "Lows (beat+bass)" }))
  ],
  "01:53": [
    rails(scan({ color_scan: "blue", scan_width: 50, speed: 50, count: 1, bounce: false })),
    ceiling(singleColor({ color: "black", brightness: 0.0 })),
  ],
  "02:31": [
    rails(scan({ color_scan: "blue", scan_width: 30, speed: 100, count: 1, bounce: true })),
    ceiling(power({ gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 })),
  ],
  "02:43.700": [
    rails(gradient1Scan("blue", 10, 7)),
  ],
  "03:10.000": [
    rails(gradient1Scan("#6200ff", 10, 7)),
  ],
  "03:19.000": [
    rails(gradient1Scan("#6200ff", 10, 9)),
  ],
  "03:20": [
    rails(singleColor({ color: "#6200ff", brightness: 1 })),
  ],
  "03:22": [
    rails(strobe({ strobe_color: "#6200ff", strobe_width: 50, background_color: "black", gradient: "black" })),
    ceiling(strobe({ gradient: "#000000", strobe_color: "#6200ff", brightness: 1 }))
  ],
  "03:34": [
    rails(scan({ color_scan: "#6200ff", blur: 5, scan_width: 25, speed: 100, count: 2, bounce: true })),
  ],
  "04:24": [
    rails(gradient1Scan("#6200ff", 10, 6)),
  ],
  "04:36": [
    rails(scan({ color_scan: "#6200ff", blur: 5, scan_width: 25, speed: 100, count: 1, bounce: true })),
  ],
  "04:45": [
    rails(randomFlash({ blur: 4, hit_color: "#6200ff", hit_duration: 0.1, hit_relative_size: 30 }))
  ],
  "04:48": [
    rails(strobe({ strobe_color: "#6200ff", strobe_width: 50, background_color: "black", gradient: "black" })),
    ceiling(off()),
  ],
  // "04:49": [
  //   rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
  // ],
  "04:55": [
    ceiling(strobe({ gradient: "#000000", strobe_color: "#6200ff", brightness: 1 }))
  ],
  "04:58": [
    ceiling(off()),
  ],
  "05:01": [
    ceiling(strobe({ gradient: "#000000", strobe_color: "#6200ff", brightness: 1 })),
    rails(randomFlash({ blur: 4, hit_color: "#6200ff", hit_duration: 0.1, hit_relative_size: 30 }))
  ],
  "05:13": [
    rails(scan({ color_scan: "#6200ff", scan_width: 30, speed: 50, count: 3, bounce: false })),
  ],
  "05:26": [
    ceiling(power({ gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 })),
    rails(scan({ color_scan: "red", scan_width: 30, speed: 50, count: 3, bounce: false })),
  ],
  "05:38": [
    rails(gradient2Scan("red", 8, 1))
  ],
  "05:50": [
    rails(rain({ mids_color: "red", lows_color: "black", high_color: "black" }))
  ],
  "05:57": [
    rails(randomFlash({ blur: 4, hit_color: "red", hit_duration: 0.1, hit_relative_size: 30 }))
  ],
  "06:00": [
    rails(singleColor({ color: "red" }))
  ],
  "06:03": [
    rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
    // ceiling(strobeBass("white"))
    ceiling(power({ gradient: "white", background_color: "black", sparks_color: "black", brightness: 0.25 })),
  ],
  "06:15.500": [
    rails(scan({ scan_width: 25, color_scan: "red", speed: 75, bounce: true })),
    ceiling(off())
  ],
  "06:25": [
    rails(gradient2Scan("red", 10, 3))
  ],
  //   "06:28": [
  //     rails(scan({scan_width: 20, color_scan: "red", speed: 75, bounce: true, mirror: true})),
  //   ],
  "06:28": [
    rails(power({ sparks_color: "red", background_color: "black", gradient: "black" })),
  ],
  "06:40": [
    ceiling(power({ gradient: "red", background_color: "black", sparks_color: "black", brightness: 0.25 })),
  ],
  "06:52.500": [
    rails(off())
  ],
  "07:06": [
    rails(bladeDefault("red"))
  ],
  "07:11.500": [
    rails(gradient1Scan("white", 10, 7))
  ],
  "07:16": [
    rails(off())
  ],
  "07:18": [
    rails(bladeDefault("red", { frequency_range: "Bass" }))
  ],
  "07:25": [
    ceiling(strobe({ gradient: "white", strobe_color: "black", brightness: 0.5 })),
  ],
  "07:37": [
    rails(scan({ color_scan: "red", bounce: true, scan_width: 20 }))
  ],
  
  // TODO

  "08:14": [
    rails(strobe({ strobe_color: "red", gradient: "black", strobe_width: 30 }))
  ],
  "08:51": [
    rails(gradient1Scan("red", 5, 5, { mirror: true }))
  ],
  "08:57": [
    rails(randomFlash({ blur: 1, hit_color: "red", hit_duration: 0.1, hit_relative_size: 5 }))
  ],
  "09:03.500": [
    rails(off()),
    ceiling(singleColor({ color: "red", brightness: 0.25 }))
  ],
  "09:07": [
    ceiling(off()),
    rails(randomFlash({ blur: 1, hit_color: "red", hit_duration: 0.5, hit_relative_size: 15 }))
  ],
  "09:10": [
    rails(strobe({ strobe_color: "red", gradient: "black", strobe_width: 30 })),
    ceiling(strobe({ gradient: "white", strobe_color: "black", brightness: 0.5 })),
  ],
  "09:35": [
    rails(scan({ scan_width: 20, color_scan: "red", bounce: true, speed: 100, blur: 1, count: 3 }))
  ],
  "10:24": [
    rails(rain({ mids_color: "red", lows_color: "black", high_color: "black" }))
  ],
  "10:40": [
    rails(power({ sparks_color: "red", background_color: "black", gradient: "black" })),
  ],


  // TESTS

  "22:20": [
    ceiling(power({ gradient: "green", background_color: "black", sparks_color: "black" })),
  ],
  "34:30": [
    rails(gradient1Scan("red", 10, 1)),
  ],
  "34:33": [
    rails(gradient1Scan("red", 10, 2)),
  ],
  "34:36": [
    rails(gradient1Scan("red", 5, 1)),
  ],
  "35:04": [
    rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
  ],
  "35:06": [
    rails(gradient1Scan("red", 5, 1)),
  ],
  "35:18": [
    rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
  ],
  "35:30": [
    rails(gradient1Scan("red", 5, 2)),
  ],
  "35:36": [
    rails(gradient1Scan("red", 7, 4)),
  ],
  "35:39": [
    rails(gradient1Scan("red", 10, 4)),
  ],
  "35:40": [
    rails(strobe({ strobe_color: "red", strobe_width: 50, background_color: "black", gradient: "black" })),
  ],
  "35:48": [
    rails(gradient1Scan("red", 10, 6)),
  ],
}

export const PLAYLIST = new Map<string, DeviceEffect[]>(Object.entries(Playlist))


// Time	Song Name
// 46:16	KX CHR - Yasuo
// 47:27	TRFN & Ken Rosenberg - Maneater
// 49:53	Restricted & Nik Sitz ft. 89ers - Party People
// 53:02	T A N E - MONEY RIGHT
// 54:23	Vortek's - Crashdown
// 56:11	Scot Project & Sam Jones - Weed
// 59:42	MANDY - UNDRGRND (2024 Rave Edit)
// 1:01:02	TNT - 2003
// 1:02:14	GNS & David DTX - My Humps
// 1:03:14	Vortex's & Tekas & Spice Up! - Soldiers
// 1:05:05	The Bloody Beetroots ft. Steve Aoki - Warp 1.9 (Edmmaro Hard Techno Mix)
// 1:06:26	TRIPTYKH - Bass Keeps Going
// 1:07:41	O.B.I. - Hard Music Lessons
// 1:09:08	RÜFÜS DU SOL - Innerbloom (HOEHENANGST HT Remix)
// 1:12:35	Coolio & 1World & Holy Priest - Gangsta's Paradise
// 1:14:53	Disclosure ft. Eliza Doolittle - You & Me (ØTJE Hard Techno Remix)
// 1:17:40	Ray Volpe - Laserbeam (Anderex More Lazers Bootleg)
// Played w/	Rooler & Sickmode - CLUB BANGER