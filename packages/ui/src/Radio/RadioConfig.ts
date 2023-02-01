import { ChangeEventHandler, ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface RadioElement extends HTMLInputElement {
  value: any;
}

export interface RadioConfigValue {
  name?: string;
  value?: any;
  loading?: boolean;
  disabled?: boolean;
  controlled?: boolean;
  onChange?: ChangeEventHandler<RadioElement>;
}

export interface RadioConfigProps extends RadioConfigValue {
  children: ReactNode;
}

const RadioConfig = createConfig<RadioConfigValue, RadioConfigProps>({}, [
  "name",
  "value",
  "loading",
  "disabled",
  "controlled",
  "onChange",
]);

export default RadioConfig;
