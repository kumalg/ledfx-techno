import type { QlcPlaylist, QlcPlaylistEntry, TimeString } from "./types";

const qlcFunction = {
  on: (id: string) => `QLC+API|setFunctionStatus|${id}|1`,
  off: (id: string) => `QLC+API|setFunctionStatus|${id}|0`,
};

const qlcFunctionIds: Record<string, `${number}`> = {
  stop: "37",

  dots__red_blue: "10",
  dots__green_violet: "11",
  dots__lime_cyan: "12",
  dots__red_violet: "14",
  dots__white_blue: "13",
  dots__white_lime: "9",

  dots_line__red_blue: "16",
  dots_line__green_violet: "17",
  dots_line__lime_cyan: "18",
  dots_line__red_violet: "20",
  dots_line__white_blue: "19",
  dots_line__white_lime: "15",

  moving_dots__red_blue: "32",
  moving_dots__green_violet: "33",
  moving_dots__lime_cyan: "34",
  moving_dots__red_violet: "36",
  moving_dots__white_blue: "35",
  moving_dots__white_lime: "31",

  moving_lines__red_blue: "25",
  moving_lines__green_violet: "27",
  moving_lines__lime_cyan: "28",
  moving_lines__red_violet: "30",
  moving_lines__white_blue: "29",
  moving_lines__white_lime: "26",

  line__light_blue: "23",
  line__purple_violet: "24",
  line__violet: "22",
  line__white: "21",
};

const qlcPlaylist: QlcPlaylist = {
  "00:00": [qlcFunction.on(qlcFunctionIds.stop)],
  "00:23.500": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],
  "00:25": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

  "00:34": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "00:37.500": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

  "00:54.500": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],
  "00:56": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

  "01:02.000": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],

  "01:06.500": [
    qlcFunction.off(qlcFunctionIds.moving_lines__white_blue),
    qlcFunction.on(qlcFunctionIds.dots__white_blue),
  ],
  "01:08.500": [
    qlcFunction.off(qlcFunctionIds.dots__white_blue),
    qlcFunction.on(qlcFunctionIds.moving_lines__white_blue),
  ],
  "01:11.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

  "01:25.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "01:27": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

  "01:45.000": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "01:47": [
    qlcFunction.off(qlcFunctionIds.dots__white_lime),
    qlcFunction.on(qlcFunctionIds.line__white),
  ],
  "01:48.700": [qlcFunction.off(qlcFunctionIds.line__white)],

  "02:44": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "02:47": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "03:17.500": [qlcFunction.on(qlcFunctionIds.moving_dots__red_blue)],
  "03:26": [qlcFunction.off(qlcFunctionIds.moving_dots__red_blue)],

  "03:29": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
  "03:38": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

  "04:16.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "04:18": [
    qlcFunction.off(qlcFunctionIds.dots__white_blue),
    qlcFunction.on(qlcFunctionIds.moving_lines__white_blue),
  ],
  "04:28.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

  "04:30": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "04:55": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
  // "00:00.000": ["14|255"],
  // "00:01.000": ["27|255"],
  // "00:03.500": ["27|0", "10|255"],
  // "00:06.500": ["10|0", "15|255"],
  // "00:09.500": ["15|0"],
};

export const QLC_PLAYLIST = new Map<TimeString, QlcPlaylistEntry>(
  Object.entries(qlcPlaylist) as [TimeString, QlcPlaylistEntry][],
);
