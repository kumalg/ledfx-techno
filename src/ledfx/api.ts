import type { Effect } from "./types/effect";
import { effectDefaultsByType } from "./types/effectDefaults";

const HOST = "http://192.168.0.175:8888";

export const api = {
  async setEffect(device: string, effect: Effect) {
    const defaults =
      effect.type in effectDefaultsByType
        ? effectDefaultsByType[effect.type as keyof typeof effectDefaultsByType]
        : undefined;
    const config = defaults ? { ...defaults, ...effect.config } : effect.config;

    return await fetch(`${HOST}/api/virtuals/${device}/effects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: effect.type, config }),
    });
  },
};
