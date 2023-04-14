import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface TextColorsProps {
  variant?: "solid";
}

const TextColors: FC<TextColorsProps> = (props) => {
  const { variant } = props;
  const { var: prefix } = Prefix.useConfig();

  const statuses = variant
    ? ["base", "hover", "active", "inactive", "disabled"]
    : ["base", "muted", "hover", "active", "inactive", "disabled"];

  const head = ["SCSS", "CSS", "Value"];
  if (!variant) {
    head.push("Preview");
  }

  const body = statuses.map((status) => {
    let name = "text-color-";
    if (variant) {
      name += variant + "-";
    }
    name += status;

    const result = [
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value
        format="hex"
        styleName="color"
        styleValue={`var(--${prefix}${name})`}
      />,
    ];

    if (!variant) {
      result.push(
        <span style={{ color: `var(--${prefix}${name})` }}>{status}</span>
      );
    }

    return result;
  });

  return (
    <Table
      head={head}
      body={body}
      style={{ marginBottom: `var(--${prefix}space-8)` }}
    />
  );
};

export default TextColors;
