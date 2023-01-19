import { PresetColor } from "../types";
import { PRESET_COLORS } from "./constans";

function isPresetColor(value: any): value is NonNullable<PresetColor> {
  return PRESET_COLORS.includes(value);
}

export default isPresetColor;
