import React, { FC, HTMLAttributes } from "react";
import { useDarkMode } from "storybook-dark-mode";
import Monospace from "./Monospace";

interface UsageProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: "css" | "scss";
  darkable?: boolean;
  format?: (value: string) => string;
}

const Usage: FC<UsageProps> = (props) => {
  const { name, type, format, darkable, ...rest } = props;
  const isDarkMode = useDarkMode();

  let value = name;
  if (type === "css") {
    value = `var(--${name})`;
  } else if (type === "scss") {
    value = "$" + (darkable && isDarkMode ? "dark-" : "") + name;
  }
  if (format) {
    value = format(value);
  }

  return <Monospace {...rest}>{value}</Monospace>;
};

export default Usage;
