import { ReactNode } from "react";
import createConfig from "../utils/createConfig";
import { IntentValue } from "../utils/types";

export type ButtonVariant = null | "solid" | "hollow";
export type ButtonLoadingPlacement = "auto" | "start" | "center" | "end";

export interface ButtonConfigValue {
  intent?: IntentValue;
  variant?: ButtonVariant;
  fluid?: boolean;
  rounded?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingPlacement?: ButtonLoadingPlacement;
}

export interface ButtonConfigProps extends ButtonConfigValue {
  children: ReactNode;
}

const ButtonConfig = createConfig<ButtonConfigValue, ButtonConfigProps>({}, [
  "intent",
  "variant",
  "fluid",
  "rounded",
  "truncated",
  "borderless",
  "iconOnly",
  "disabled",
  "loading",
  "loadingPlacement",
]);

export default ButtonConfig;
