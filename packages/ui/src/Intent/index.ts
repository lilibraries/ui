import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export type IntentValue =
  | null
  | "major"
  | "minor"
  | "positive"
  | "alertive"
  | "negative";

export interface IntentProps {
  value: IntentValue;
  children: ReactNode;
}

const Intent = createConfig<IntentValue, IntentProps>(null, "value");

export default Intent;
