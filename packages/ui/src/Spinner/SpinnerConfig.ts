import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface SpinnerConfigValue {
  icon?: ReactNode;
  delay?: number;
}

const SpinnerConfig = createConfig<SpinnerConfigValue>(["icon", "delay"], {});

export default SpinnerConfig;
