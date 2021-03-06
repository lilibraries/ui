import { ReactNode } from "react";
import createConfig from "../_utils/createConfig";

export interface LoaderConfigValue {
  icon?: ReactNode;
  delay?: number;
  message?: ReactNode;
}

const LoaderConfig = createConfig<LoaderConfigValue>(
  ["icon", "delay", "message"],
  {}
);

export default LoaderConfig;
