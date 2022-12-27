import createConfig from "../utils/createConfig";

export type IntentValue =
  | null
  | "major"
  | "minor"
  | "positive"
  | "alertive"
  | "negative";
export interface IntentProps {
  value?: IntentValue;
}

const Intent = createConfig<IntentValue, IntentProps>("value", null);

export default Intent;
