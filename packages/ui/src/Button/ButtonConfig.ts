import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export type ButtonVariant = null | "solid" | "hollow";
export type ButtonLoadingPosition = null | "start" | "center" | "end";

export interface ButtonConfigValue {
  variant?: ButtonVariant;
  fluid?: boolean;
  round?: boolean;
  truncated?: boolean;
  borderless?: boolean;
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
    "fluid",
    "round",
    "truncated",
    "borderless",
    "disabled",
    "iconOnly",
    "loading",
    "loadingPosition",
  ],
  {}
);

export default ButtonConfig;
