import { Effect } from "./types/effect"

export const rails = (effect: Effect) => {
  return {
    device: "grups",
    data: effect
  }
}

export const ceiling = (effect: Effect) => {
  return {
    device: "wled-7eaef4",
    data: effect
  }
}

export type DeviceKey = "rails" | "ceiling"

export type DeviceEffect = 
  | ReturnType<typeof rails>
  | ReturnType<typeof ceiling>
