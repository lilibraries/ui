import React, { FC } from "react";
import { ColorValue, IntentValue, Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

interface TextColorsProps {
  color?: ColorValue;
  intent?: IntentValue;
  variant?: "solid";
  preview?: boolean;
  statuses?: string[];
}

const TextColors: FC<TextColorsProps> = (props) => {
  const {
    color,
    intent,
    variant,
    preview = true,
    statuses = ["base", "hover", "active", "inactive", "disabled"],
  } = props;
  const { var: prefix } = Prefix.useConfig();

  const head = ["SCSS", "CSS", "Value"];
  if (preview) {
    head.push("Preview");
  }

  const body = statuses.map((status) => {
    let name = "text-color-";
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

    const result = [
      <Usage type="scss" name={name} darkable />,
      <Usage type="css" name={name} />,
      <Value
        format="hex"
        styleName="color"
        styleValue={`var(--${prefix}${name})`}
      />,
    ];

    if (preview) {
      result.push(
        <span style={{ color: `var(--${prefix}${name})` }}>{status}</span>
      );
    }

    return result;
  });

  return <Table head={head} body={body} />;
};

export default TextColors;
