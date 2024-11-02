import React, { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import tinycolor from "tinycolor2";
import { useTimeout } from "@lilib/hooks";
import { useDarkMode } from "storybook-dark-mode";
import Monospace from "./Monospace";
import { Prefix } from "@lilib/ui";

function toHex(value: string) {
  const color = tinycolor(value);
  if (color.getAlpha() < 1) {
    return color.toRgbString();
  } else {
    return tinycolor(value).toHexString().toUpperCase();
  }
}

function toRgb(value: string) {
  const color = tinycolor(value).toRgb();
  return `${color.r} ${color.g} ${color.b}`;
}

function toAlpha(value: string) {
  return tinycolor(value).getAlpha().toString();
}

interface ValueProps extends HTMLAttributes<HTMLSpanElement> {
  styleName: keyof CSSStyleDeclaration;
  styleValue?: string | ((prefix: string) => string);
  format?: "hex" | "rgb" | "alpha" | ((value: string) => string);
}

const Value: FC<ValueProps> = (props) => {
  const { styleName, styleValue, format, ...rest } = props;
  const valueNodeRef = useRef<HTMLSpanElement>(null);
  const isDarkMode = useDarkMode();
  const { var: prefix } = Prefix.useConfig();
  const [value, setValue] = useState("");

  let transform: typeof toHex;
  if (format === "hex") {
    transform = toHex;
  } else if (format === "rgb") {
    transform = toRgb;
  } else if (format === "alpha") {
    transform = toAlpha;
  } else if (typeof format === "function") {
    transform = format;
  }

  const [updateValue] = useTimeout(() => {
    if (valueNodeRef.current) {
      const value = String(window.getComputedStyle(valueNodeRef.current!)[styleName]);
      setValue(transform ? transform(value) : value);
    }
  }, 1);

  useEffect(
    () => {
      updateValue();
    },
    [isDarkMode, styleName] // eslint-disable-line
  );

  return (
    <span {...rest}>
      <Monospace>{value}</Monospace>
      <span
        ref={valueNodeRef}
        style={{
          display: "none",
          [styleName]: typeof styleValue === "function" ? styleValue(prefix) : styleValue,
        }}
      />
    </span>
  );
};

export default Value;
