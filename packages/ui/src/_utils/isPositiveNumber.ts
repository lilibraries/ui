import isNumber from "./isNumber";

function isPositiveNumber(value: unknown): value is number {
  return isNumber(value) && value > 0;
}

export default isPositiveNumber;
