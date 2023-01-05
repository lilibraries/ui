import { ChangeEventHandler, ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface RadioConfigValue {
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface RadioConfigValueProps extends RadioConfigValue {
  children?: ReactNode;
}

const RadioConfig = createConfig<RadioConfigValue, RadioConfigValueProps>(
  ["name", "value", "onChange"],
  {}
);

export default RadioConfig;
