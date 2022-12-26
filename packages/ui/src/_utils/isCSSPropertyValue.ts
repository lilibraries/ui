import isString from "lodash/isString";
import isNumber from "lodash/isNumber";

function isCSSPropertyValue(value: unknown): value is string | number {
  return isString(value) || (isNumber(value) && !isNaN(value));
}

export default isCSSPropertyValue;
