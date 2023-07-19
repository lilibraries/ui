import { ReactNode } from "react";
import createConfig from "../utils/createConfig";
import { ColorValue, IntentValue } from "../utils/types";

export type ButtonVariant = null | "solid" | "hollow";
export type ButtonLoadingPlacement = null | "start" | "center" | "end";

export interface ButtonConfigValue {
  variant?: ButtonVariant;
  intent?: IntentValue;
  color?: ColorValue;
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
  "color",
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
