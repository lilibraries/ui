import { ChangeEventHandler, ReactNode } from "react";
import createConfig from "../utils/createConfig";

export interface RadioConfigValue {
  name?: string;
  value?: string;
  loading?: boolean;
  disabled?: boolean;
  controlled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
