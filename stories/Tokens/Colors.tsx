import React, { FC } from "react";
import PaletteColors from "../Palettes/Colors";

export const names = [
  "basis",
  "major",
  "minor",
  "positive",
  "alertive",
  "negative",
];

const Colors: FC = () => {
  return <PaletteColors names={names} />;
};

export default Colors;
