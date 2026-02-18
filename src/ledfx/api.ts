import type { Effect } from "./types/effect";
import { effectDefaultsByType } from "./types/effectDefaults";

let HOST = "http://192.168.0.175:8888";

export const api = {
  setHost(url: string) {
    HOST = url;
  },
  
  getHost() {
    return HOST;
  },
  
  async setEffect(device: string, { type, config }: Effect) {
    const defaults = effectDefaultsByType[type];

    return await fetch(`${HOST}/api/virtuals/${device}/effects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, config: { ...defaults, ...config } }),
    });
  },
};
