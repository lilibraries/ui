import { ReactNode } from "react";
import { EffectTarget } from "@lilib/utils";
import createConfig from "../utils/createConfig";

export interface PortalConfigValue {
  container?: EffectTarget<HTMLElement>;
}

export interface PortalConfigProps extends PortalConfigValue {
  children: ReactNode;
}

const PortalConfig = createConfig<PortalConfigValue, PortalConfigProps>(
  {},
  ["container"],
  { inherit: true }
);

export default PortalConfig;
