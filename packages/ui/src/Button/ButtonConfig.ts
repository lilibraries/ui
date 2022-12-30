import { ReactNode } from "react";
import { IntentValue } from "../Intent";
import createConfig from "../utils/createConfig";

export type ButtonVariant = null | "solid" | "outlined" | "flat";
export type ButtonLoadingPosition = null | "start" | "center" | "end";

export interface ButtonConfigValue {
  variant?: ButtonVariant;
  intent?: IntentValue;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  loadingPosition?: ButtonLoadingPosition;
}

export interface ButtonConfigProps extends ButtonConfigValue {
  children?: ReactNode;
}

const ButtonConfig = createConfig<ButtonConfigValue, ButtonConfigProps>(
  [
    "variant",
    "intent",
    "fluid",
    "round",
    "truncated",
    "disabled",
    "iconOnly",
    "loading",
    "loadingPosition",
  ],
  {}
);

export default ButtonConfig;
