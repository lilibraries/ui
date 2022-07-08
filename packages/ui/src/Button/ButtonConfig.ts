import { IntentValue } from "../_utils/types";
import createConfig from "../_utils/createConfig";

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

const ButtonConfig = createConfig<ButtonConfigValue>(
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
