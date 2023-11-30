import { ReactNode } from "react";
import createConfig from "../utils/createConfig";
import { ColorValue, IntentValue } from "../utils/types";

export type ButtonVariant = null | "solid" | "hollow";
export type ButtonLoadingPlacement = null | "start" | "center" | "end";

export interface ButtonConfigValue {
  variant?: ButtonVariant;
  color?: ColorValue;
  intent?: IntentValue;
  round?: boolean;
  fluid?: boolean;
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
  "variant",
  "color",
  "intent",
  "round",
  "fluid",
  "truncated",
  "borderless",
  "iconOnly",
  "disabled",
  "loading",
  "loadingPlacement",
]);

export default ButtonConfig;
