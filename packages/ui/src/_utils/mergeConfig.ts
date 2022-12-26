import isObject from "lodash/isObject";

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
      Object.prototype.hasOwnProperty.call(override, key) &&
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
