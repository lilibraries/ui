import { PresetColor } from "../types";
import { PRESET_COLORS } from "./constans";

function isPresetColor(value: any): value is PresetColor {
  return PRESET_COLORS.includes(value);
}

export default isPresetColor;
