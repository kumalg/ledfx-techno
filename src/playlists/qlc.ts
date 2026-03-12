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

  "01:35": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "01:36": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

  "01:41.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "01:42.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

  "01:45.000": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
  "01:47": [
    qlcFunction.off(qlcFunctionIds.dots__white_lime),
    qlcFunction.on(qlcFunctionIds.line__white),
  ],
  "01:48.700": [qlcFunction.off(qlcFunctionIds.line__white)],

  "02:44": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
  "02:47": [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

  "02:55": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
  "02:56": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

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
  "10:43": [
    qlcFunction.off(qlcFunctionIds.dots__white_lime),
    qlcFunction.on(qlcFunctionIds.line__white),
  ],
  "10:44.500": [qlcFunction.off(qlcFunctionIds.line__white)],

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

  "14:38": [qlcFunction.on(qlcFunctionIds.line__light_blue)],
  "14:41": [qlcFunction.off(qlcFunctionIds.line__light_blue)],

  "14:44": [qlcFunction.on(qlcFunctionIds.line__purple_violet)],
  "14:47": [qlcFunction.off(qlcFunctionIds.line__purple_violet)],

  "14:56": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
  "15:07": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

  "15:37": [qlcFunction.on(qlcFunctionIds.moving_lines__red_blue)],
  "15:47": [qlcFunction.off(qlcFunctionIds.moving_lines__red_blue)],

   "15:49": [qlcFunction.on(qlcFunctionIds.moving_dots__red_blue)],
   "16:00": [qlcFunction.off(qlcFunctionIds.moving_dots__red_blue)],

    "16:26": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
    "16:28": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

    "16:41.500": [qlcFunction.on(qlcFunctionIds.dots_line__red_blue)],
     "16:46": [qlcFunction.off(qlcFunctionIds.dots_line__red_blue)],

      "16:54.500": [qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)],
       "17:05": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime),
       ],

         "17:06.500": [ qlcFunction.on(qlcFunctionIds.dots__white_lime)],
          "17:19": [qlcFunction.off(qlcFunctionIds.dots__white_lime),
            qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)
          ],

    "17:25": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],
        
     "17:50": [qlcFunction.on(qlcFunctionIds.moving_dots__white_lime)],

     "18:00.500": [qlcFunction.off(qlcFunctionIds.moving_dots__white_lime),

      qlcFunction.on(qlcFunctionIds.dots__white_lime)
     ],

     "18:02": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

     "18:37.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
     "18:39.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

      "18:45.500": [qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)],
       "18:54.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],

        "18:56.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
         "18:58": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

         "19:29": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
         "19:48": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue)],

          "19:54": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],
          "20:05": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

          "20:07": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
          "20:18": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

          "20:20": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],
          "20:30.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

          "20:44.300": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
          "20:44.800": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

          "20:54": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
          "20:55.800": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

          "21:25": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
          "21:26.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

          "21:29.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
          "21:31": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

          "21:33": [qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)],
          "21:34": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],
          

          "21:35.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
          "21:37": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],
          
          "21:39": [qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)],
          "21:40": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],

           "22:05.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
           "22:16": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

           "22:58": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
            "22:59.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime),
              qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)
            ],

            "23:01.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime),
              qlcFunction.on(qlcFunctionIds.dots__white_lime)
            ],

            "23:03": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

            "23:09": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
            "23:21.600": [qlcFunction.off(qlcFunctionIds.dots__white_lime),
              qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)
            ],
            "23:32.500": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],

             "23:34": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
             "23:46.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

             "26:44": [qlcFunction.on(qlcFunctionIds.dots__red_violet)],
             "26:56"  : [qlcFunction.off(qlcFunctionIds.dots__red_violet)],

             "27:09": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:09.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

             "27:10.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:11.200"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

             "27:12": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:12.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

             "27:12.800": [qlcFunction.on(qlcFunctionIds.moving_lines__red_blue)],
              "27:14"  : [qlcFunction.off(qlcFunctionIds.moving_lines__red_blue)],

             "27:15": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:15.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             

             "27:16.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:17.200"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

             "27:18": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:18.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             

             "27:18.800": [qlcFunction.on(qlcFunctionIds.moving_lines__red_blue)],
              "27:20"  : [qlcFunction.off(qlcFunctionIds.moving_lines__red_blue)],

             "27:21": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:21.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             
             "27:22.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:23.200"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             

             "27:24": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:24.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             

             "27:24.800": [qlcFunction.on(qlcFunctionIds.moving_lines__red_blue)],
              "27:26"  : [qlcFunction.off(qlcFunctionIds.moving_lines__red_blue)],

              

             "27:27": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:27.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             
             "27:28.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:29.200"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
             

             "27:30": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
             "27:30.700"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

             "27:44": [qlcFunction.on(qlcFunctionIds.moving_dots__lime_cyan)],
              "27:54.500"  : [qlcFunction.off(qlcFunctionIds.moving_dots__lime_cyan)],

              
             "27:56": [qlcFunction.on(qlcFunctionIds.moving_lines__lime_cyan)],
             "28:08"  : [qlcFunction.off(qlcFunctionIds.moving_lines__lime_cyan)],

             "28:19": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
             "28:20.500"  : [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

             "28:34": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
              "28:45"  : [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

              "28:59": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
              "29:19": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue)],

              "29:30": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
              "29:31.500"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

              "29:52": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
              "30:02"  : [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

               "30:35": [qlcFunction.on(qlcFunctionIds.dots_line__white_blue)],
               "30:47.500": [qlcFunction.off(qlcFunctionIds.dots_line__white_blue), 
                qlcFunction.on(qlcFunctionIds.moving_dots__white_lime)
               ],

               "31:00": [qlcFunction.off(qlcFunctionIds.moving_dots__white_lime)],

               "31:31": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
                "31:43.500": [qlcFunction.off(qlcFunctionIds.dots__white_blue),
                  qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)
                ],
                "31:56": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue)],

                "32:38": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
                "32:39.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

                "32:43": [qlcFunction.on(qlcFunctionIds.dots_line__white_lime)], 
                "32:54": [qlcFunction.off(qlcFunctionIds.dots_line__white_lime)],

                "32:55.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
                "33:08": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

                "33:10": [qlcFunction.on(qlcFunctionIds.moving_dots__white_lime)],
                "33:19": [qlcFunction.off(qlcFunctionIds.moving_dots__white_lime)],

                  "33:41.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
                  "33:51.500": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

                  
                "34:34": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
                "34:47": [qlcFunction.off(qlcFunctionIds.dots__white_lime),
                  qlcFunction.on(qlcFunctionIds.moving_lines__white_lime)
                ],

                "34:59": [qlcFunction.off(qlcFunctionIds.moving_lines__white_lime)],

                "35:12": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
                "35:24.500 ": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue),
                  qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)
                ],
                "35:31": [
                  qlcFunction.off(qlcFunctionIds.moving_lines__white_blue),
                  qlcFunction.on(qlcFunctionIds.dots__white_blue)],
                  "35:37": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

                  "35:55.500": [   qlcFunction.on(qlcFunctionIds.dots__white_blue)],
                  "36:20": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

                  "40:18.500": [qlcFunction.on(qlcFunctionIds.dots__green_violet)],
                  "40:31": [qlcFunction.off(qlcFunctionIds.dots__green_violet),
                    qlcFunction.on(qlcFunctionIds.moving_dots__green_violet)
                  ],
                  "40:44": [qlcFunction.off(qlcFunctionIds.moving_dots__green_violet),
                    qlcFunction.on(qlcFunctionIds.moving_lines__green_violet)
                  ],
                  "40:57": [qlcFunction.off(qlcFunctionIds.moving_lines__green_violet)],

                   "41:38.500": [qlcFunction.on(qlcFunctionIds.dots__green_violet)],
                   "41:52": [qlcFunction.off(qlcFunctionIds.dots__green_violet),
                    qlcFunction.on(qlcFunctionIds.moving_lines__green_violet)
                   ],
                    "42:04": [qlcFunction.off(qlcFunctionIds.moving_lines__green_violet)],

                     "42:46.500": [qlcFunction.on(qlcFunctionIds.dots__white_lime)],
                     "42:58": [qlcFunction.off(qlcFunctionIds.dots__white_lime)],

                     "43:31": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
                     "43:55.500": [qlcFunction.off(qlcFunctionIds.dots__white_blue),
                      qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)
                     ],
                     "44:04": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue),
                      qlcFunction.on(qlcFunctionIds.dots__white_blue)
                     ],
                     "44:05.500": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

                     "47:59": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
                      "48:00.500": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

                      
                     "48:02.500": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
                      "48:03.500": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],
                      
                     "48:05.500": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
                      "48:06.500": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],
                      
                     "48:08.500": [qlcFunction.on(qlcFunctionIds.dots__red_blue)],
                      "48:09.500": [qlcFunction.off(qlcFunctionIds.dots__red_blue)],

                      "49:47": [qlcFunction.on(qlcFunctionIds.dots_line__lime_cyan)],
                      "49:59": [qlcFunction.off(qlcFunctionIds.dots_line__lime_cyan),
                        qlcFunction.on(qlcFunctionIds.dots__lime_cyan)
                      ],
                        "50:12": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan),
                          qlcFunction.on(qlcFunctionIds.moving_dots__lime_cyan)
                        ],
"50:24.500": [qlcFunction.off(qlcFunctionIds.moving_dots__lime_cyan)],
  "50:53.500": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "50:56.600": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

   "51:01": [  qlcFunction.on(qlcFunctionIds.moving_lines__lime_cyan)],
    "51:02.500": [qlcFunction.off(qlcFunctionIds.moving_lines__lime_cyan)],

      "51:11.000": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:11.800": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],
   
      "51:12.500": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:13.500": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],
   
      "51:14.000": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:14.800": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

   
   "51:15": [  qlcFunction.on(qlcFunctionIds.moving_lines__lime_cyan)],
    "51:16.500": [qlcFunction.off(qlcFunctionIds.moving_lines__lime_cyan)],

    
      "51:17.200": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:18.200": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],
   
      "51:19.000": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:20.000": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

   
      "51:23.500": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:24.500": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],
   


   
      "51:25.200": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:26.200": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

   
      "51:27": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:28": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan),
    qlcFunction.on(qlcFunctionIds.moving_lines__lime_cyan)],
    "51:29.500": [qlcFunction.off(qlcFunctionIds.moving_lines__lime_cyan)],


    
      "51:30.000": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:31.000": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],

      "51:31.500": [qlcFunction.on(qlcFunctionIds.dots__lime_cyan)],
   "51:32.500": [qlcFunction.off(qlcFunctionIds.dots__lime_cyan)],
   
"52:01": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
"52:13.500": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue),
    qlcFunction.on(qlcFunctionIds.moving_lines__white_blue),
],

"52:18": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],



"52:51": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
 "53:01": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue)],

 "53:16": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
 "53:27": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

 "54:06": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "54:16": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],
  

 "54:18": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "54:31": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],

  "54:49.300": [qlcFunction.on(qlcFunctionIds.moving_lines__red_violet)],
  "55:00": [qlcFunction.off(qlcFunctionIds.moving_lines__red_violet),
    qlcFunction.on(qlcFunctionIds.line__purple_violet)
  ],
  "55:02": [
    qlcFunction.off(qlcFunctionIds.line__purple_violet),
     qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)
  ],
  "55:13": [
     qlcFunction.off(qlcFunctionIds.moving_dots__white_blue),
  ],

  "56:25.500": [qlcFunction.on(qlcFunctionIds.dots__white_blue)],
  "56:36": [qlcFunction.off(qlcFunctionIds.dots__white_blue)],


  "56:38": [qlcFunction.on(qlcFunctionIds.moving_lines__white_blue)],
  "56:48": [qlcFunction.off(qlcFunctionIds.moving_lines__white_blue)],

  "56:50": [qlcFunction.on(qlcFunctionIds.moving_dots__white_blue)],
  "57:02.500": [qlcFunction.off(qlcFunctionIds.moving_dots__white_blue)],

"57:44": [
  qlcFunction.on(qlcFunctionIds.dots__red_violet)
],
"57:56": [
  qlcFunction.off(qlcFunctionIds.dots__red_violet)
]

};

export const QLC_PLAYLIST = new Map<TimeString, QlcPlaylistEntry>(
  Object.entries(qlcPlaylist) as [TimeString, QlcPlaylistEntry][],
);
