import { Effect } from "./effects"

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

export type DeviceEffect = 
  | ReturnType<typeof rails>
  | ReturnType<typeof ceiling>
