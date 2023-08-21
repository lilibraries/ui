function isEmptyArray(value: unknown): value is [] {
  return Array.isArray(value) && !value.length;
}

export default isEmptyArray;
