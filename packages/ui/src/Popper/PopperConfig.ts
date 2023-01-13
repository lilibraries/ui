import { ReactNode } from "react";
import { EffectTarget } from "@lilib/utils";
import createConfig from "../utils/createConfig";

export interface PopperConfigValue {
  container?: EffectTarget<HTMLElement>;
}

export interface PopperConfigProps extends PopperConfigValue {
  children: ReactNode;
}

const PopperConfig = createConfig<PopperConfigValue, PopperConfigProps>(
  {},
  ["container"],
  { inherit: true }
);

export default PopperConfig;
