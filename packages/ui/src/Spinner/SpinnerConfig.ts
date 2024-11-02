import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface SpinnerConfigValue {
  icon?: ReactNode;
  delay?: number;
}

export interface SpinnerConfigProps extends SpinnerConfigValue {
  children: ReactNode;
}

const SpinnerConfig = createConfig<SpinnerConfigValue, SpinnerConfigProps>({}, ["icon", "delay"], { inherit: true });

export default SpinnerConfig;
