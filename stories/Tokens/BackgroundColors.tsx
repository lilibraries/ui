import React, { FC } from "react";
import { ColorValue, IntentValue, Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Color from "../components/Color";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BackgroundColorsProps {
  color?: ColorValue;
  intent?: IntentValue;
  variant?: "deep" | "solid";
  statuses?: string[];
}

const BackgroundColors: FC<BackgroundColorsProps> = (props) => {
  const { color, intent, variant, statuses = ["base", "hover", "active", "inactive", "disabled"] } = props;
  const { var: prefix } = Prefix.useConfig();

  const rows = statuses.map((status) => {
    let name = "background-color-";
    if (color) {
      name += color + "-";
    }
    if (intent) {
      name += intent + "-";
    }
    if (variant) {
      name += variant + "-";
    }
    name += status;

    let borderName = "";
    if (!!props.statuses) {
      borderName = "border-color-base";
    } else {
      borderName = name.replace("background", "border");
    }

    return [
      <Color
        name={name}
        style={{
          border: `1px solid var(--${prefix}${borderName})`,
        }}
      />,
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value format="hex" styleName="color" styleValue={`var(--${prefix}${name})`} />,
    ];
  });

  return <Table head={["Color", "SCSS", "CSS", "Value"]} body={rows} />;
};

export default BackgroundColors;
