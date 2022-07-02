function isCSSPropertyValue(value: unknown): value is string | number {
  return (
    typeof value === "string" || (typeof value === "number" && !isNaN(value))
  );
}

export default isCSSPropertyValue;
