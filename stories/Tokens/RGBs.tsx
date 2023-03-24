import React, { FC } from "react";
import { names } from "./Colors";
import PaletteRGBs from "../Palettes/RGBs";

const RGBs: FC = () => {
  return <PaletteRGBs names={names} />;
};

export default RGBs;
