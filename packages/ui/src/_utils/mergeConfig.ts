import { hasOwn, isObject } from "@lilib/hooks";

function mergeConfig<T = any>(base: T, override?: Partial<T>): T {
  if (override === undefined) {
    return base;
  }
  if (!isObject(base) || !isObject(override)) {
    return override as T;
  }

  let config = base;
  let changed = false;

  for (const key in override) {
    if (
      hasOwn(override, key) &&
      override[key] !== undefined &&
      !Object.is(override[key], base[key])
    ) {
      if (!changed) {
        config = { ...base };
        changed = true;
      }
      config[key] = override[key] as any;
    }
  }

  return config;
}

export default mergeConfig;
