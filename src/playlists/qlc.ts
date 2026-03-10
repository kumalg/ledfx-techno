import type { QlcPlaylist, QlcPlaylistEntry, TimeString } from "./types";

const qlcFunction = {
  on: (id: string) => `QLC+API|setFunctionStatus|${id}|1`,
  off: (id: string) => `QLC+API|setFunctionStatus|${id}|0`,
};

const qlcFunctionIds = {
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
} satisfies Record<string, `${number}`>;

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

  "05:05.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "05:18.200": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

  "05:51": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "06:01.500": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

  "06:03": [qlcFunction.on(qlcFunctionIds.dots_line__white_blue)],
  "06:14": [qlcFunction.off(qlcFunctionIds.dots_line__white_blue)],

  "06:58.500": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "07:00": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "07:11": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "07:13": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "07:24": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "07:25.500": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "07:36": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "07:42": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "08:10": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "08:13": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "09:55": [qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)],
  "10:07.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],

  "10:23": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "10:26": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

  "10:32.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "10:43": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

  "10:57.500": [qlcFunction.on(qlcFunctionIds.moving_lines__red_violet)],
  "11:08": [qlcFunction.off(qlcFunctionIds.moving_lines__red_violet)],

  "11:23.500": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "11:25": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "11:56.500": [qlcFunction.on(qlcFunctionIds.moving_lines__red_violet)],
  "12:06": [qlcFunction.off(qlcFunctionIds.moving_lines__red_violet)],

  "12:31": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "12:34": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "12:53": [qlcFunction.on(qlcFunctionIds.dots_line__white_blue)],
  "13:02": [
    qlcFunction.off(qlcFunctionIds.dots_line__white_blue),
    qlcFunction.on(qlcFunctionIds.dots__white_blue),
  ],
  "13:04": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
};

export const QLC_PLAYLIST = new Map<TimeString, QlcPlaylistEntry>(
  Object.entries(qlcPlaylist) as [TimeString, QlcPlaylistEntry][],
);
