function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export default isNumber;
