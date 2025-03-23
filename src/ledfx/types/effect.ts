import { EffectConfigMap } from "./effectConfigs";

export type Effect = {
  type: keyof EffectConfigMap;
  config: Partial<EffectConfigMap[keyof EffectConfigMap]>; 
};

/**
 * Creates an effect configuration object with the specified type and config
 * @param effectType The type of effect to create
 * @param config Configuration parameters for the effect
 * @returns An object containing the effect type and configuration
 */
export function effect<T extends keyof EffectConfigMap>(
  effectType: T,
  config: Partial<EffectConfigMap[T]>
): Effect {
  return {
    type: effectType,
    config
  };
}
