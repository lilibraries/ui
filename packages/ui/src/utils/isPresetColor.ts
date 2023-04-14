import { COLORS } from "./constants";

function isPresetColor(value: any): value is typeof COLORS[number] {
  return COLORS.includes(value);
}

export default isPresetColor;
