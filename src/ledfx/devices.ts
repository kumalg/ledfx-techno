import { Effect } from "./types/effect";

export const rails = (effect: Effect) => {
  return {
    device: "rails-segments",
    // device: "bedroom",
    // device: "grups",
    data: effect,
  };
};

export const rails2 = (effect: Effect) => {
  return {
    device: "rails",
    // device: "gledopto",
    data: effect,
  };
};

export const ceiling = (effect: Effect) => {
  return {
    // device: "office",
    device: "wled-7eaef4",
    // device: "sufit-test",
    data: effect,
  };
};

export type DeviceKey = "rails" | "ceiling" | "rails2";

export const ALL_DEVICE_KEYS: DeviceKey[] = ["rails", "rails2", "ceiling"];

export type DeviceEffect =
  | ReturnType<typeof rails>
  | ReturnType<typeof ceiling>
  | ReturnType<typeof rails2>;
