import React, { FC } from "react";
import { ColorValue, IntentValue, Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BorderColorsProps {
  color?: ColorValue;
  intent?: IntentValue;
  variant?: "deep" | "solid";
}

const BorderColors: FC<BorderColorsProps> = (props) => {
  const { color, intent, variant } = props;
  const { var: prefix } = Prefix.useConfig();

  const rows = ["base", "hover", "active", "inactive", "disabled"].map((status) => {
    let name = "border-color-";
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

    return [
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value format="hex" styleName="color" styleValue={`var(--${prefix}${name})`} />,
      <div
        style={{
          width: 60,
          height: 1,
          borderTop: `1px solid var(--${prefix}${name})`,
        }}
      />,
    ];
  });

  return <Table head={["SCSS", "CSS", "Value", "Preview"]} body={rows} />;
};

export default BorderColors;
