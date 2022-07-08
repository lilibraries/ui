import { ColorPreset } from "./types";

const colors = [
  "red",
  "magenta",
  "purple",
  "indigo",
  "navy",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
  "brown",
  "gray",
];

function isColorPreset(value: any): value is ColorPreset {
  return colors.includes(value);
}

export default isColorPreset;
