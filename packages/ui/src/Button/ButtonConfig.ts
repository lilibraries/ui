import { ReactNode } from "react";
import { IntentValue } from "../types";
import createConfig from "../utils/createConfig";

export type ButtonVariant = null | "solid" | "hollow";
export type ButtonLoadingPlacement = null | "start" | "center" | "end";

export interface ButtonConfigValue {
  variant?: ButtonVariant;
  intent?: IntentValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  borderless?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  loadingPlacement?: ButtonLoadingPlacement;
}

export interface ButtonConfigProps extends ButtonConfigValue {
  children: ReactNode;
}

const ButtonConfig = createConfig<ButtonConfigValue, ButtonConfigProps>({}, [
  "variant",
  "intent",
  "fluid",
  "round",
  "truncated",
  "borderless",
  "disabled",
  "iconOnly",
  "loading",
  "loadingPlacement",
]);

export default ButtonConfig;
