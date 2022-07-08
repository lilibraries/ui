export type IntentValue =
  | null
  | "major"
  | "minor"
  | "positive"
  | "alertive"
  | "negative";

export type ColorPreset =
  | "red"
  | "magenta"
  | "purple"
  | "indigo"
  | "navy"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange"
  | "brown"
  | "gray";

export type ColorValue = null | ColorPreset | string;
