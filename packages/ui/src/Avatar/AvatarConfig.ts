import { ReactNode } from "react";
import { PresetColor } from "../types";
import createConfig from "../utils/createConfig";

export interface AvatarConfigValue {
  round?: boolean;
  color?: PresetColor;
  outlined?: boolean;
  clickable?: boolean;
}

export interface AvatarConfigProps extends AvatarConfigValue {
  children: ReactNode;
}

const AvatarConfig = createConfig<AvatarConfigValue, AvatarConfigProps>({}, [
  "round",
  "color",
  "outlined",
  "clickable",
]);

export default AvatarConfig;
