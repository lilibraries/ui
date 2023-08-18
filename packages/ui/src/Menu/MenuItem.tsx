import { ReactNode } from "react";
import { IntentValue } from "../utils/types";

export interface MenuItemCommonProps {
  icon?: ReactNode;
  label?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  intent?: IntentValue;
  activeIntent?: IntentValue;
  active?: boolean;
  disabled?: boolean;
}
