import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface AvatarConfigValue {
  rounded?: boolean;
  outlined?: boolean;
}

export interface AvatarConfigProps extends AvatarConfigValue {
  children: ReactNode;
}

const AvatarConfig = createConfig<AvatarConfigValue, AvatarConfigProps>({}, ["rounded", "outlined"]);

export default AvatarConfig;
