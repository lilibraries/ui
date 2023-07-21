import { ReactNode } from "react";
import createConfig from "../utils/createConfig";
import { ColorValue } from "../utils/types";

export type AvatarVariant = null | "solid";

export interface AvatarConfigValue {
  variant?: AvatarVariant;
  round?: boolean;
  color?: ColorValue;
  outlined?: boolean;
  clickable?: boolean;
}

export interface AvatarConfigProps extends AvatarConfigValue {
  children: ReactNode;
}

const AvatarConfig = createConfig<AvatarConfigValue, AvatarConfigProps>({}, [
  "variant",
  "round",
  "color",
  "outlined",
  "clickable",
]);

export default AvatarConfig;
