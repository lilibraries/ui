import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface SpinnerConfigValue {
  icon?: ReactNode;
  delay?: number;
}

export interface SpinnerConfigProps extends SpinnerConfigValue {
  children?: ReactNode;
}

const SpinnerConfig = createConfig<SpinnerConfigValue, SpinnerConfigProps>(
  ["icon", "delay"],
  {}
);

export default SpinnerConfig;
