import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface LoaderConfigValue {
  icon?: ReactNode;
  delay?: number;
  message?: ReactNode;
}

export interface LoaderConfigProps extends LoaderConfigValue {
  children: ReactNode;
}

const LoaderConfig = createConfig<LoaderConfigValue, LoaderConfigProps>({}, ["icon", "delay", "message"], {
  inherit: true,
});

export default LoaderConfig;
