import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface BorderColorsProps {
  variant?: "deep" | "solid";
}

const BorderColors: FC<BorderColorsProps> = (props) => {
  const { variant } = props;
  const { var: prefix } = Prefix.useConfig();

  const rows = ["base", "hover", "active", "inactive", "disabled"].map(
    (status) => {
      let name = "border-color-";
      if (variant) {
        name += variant + "-";
      }
      name += status;

      return [
        <Usage type="scss" name={name} darkable />,
        <Usage type="css" name={name} />,
        <Value
          format="hex"
          styleName="color"
          styleValue={`var(--${prefix}${name})`}
        />,
        <div
          style={{
            width: 60,
            height: 1,
            borderTop: `1px solid var(--${prefix}${name})`,
            borderRadius: `var(--${prefix}border-radius-fixed-small)`,
          }}
        />,
      ];
    }
  );

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={rows}
      style={{ marginBottom: `var(--${prefix}space-8)` }}
    />
  );
};

export default BorderColors;
