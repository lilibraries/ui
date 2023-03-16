import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import { useDarkMode } from "storybook-dark-mode";
import colors from "./colors";
import Monospace from "../components/Monospace";
import CSSValue from "../components/CSSValue";

const RGBTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const isDarkMode = useDarkMode();

  let rows = [];
  for (const name of colors) {
    rows.push(
      <tr key={name}>
        <td>
          <Monospace>{`$${isDarkMode ? "dark-" : ""}${name}-rgb`}</Monospace>
        </td>
        <td>
          <Monospace>{`var(--${prefix}${name}-rgb)`}</Monospace>
        </td>
        <td>
          <CSSValue
            valueName="color"
            valueStyle={{ color: `rgb(var(--${prefix}${name}-rgb))` }}
            transform={(value) => {
              if (/rgb/.test(value)) {
                return String(/rgb\((.*)\)/.exec(value)![1])
                  .split(",")
                  .map((item) => item.trim())
                  .join(" ");
              } else {
                return value;
              }
            }}
          />
        </td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>SCSS</th>
          <th>CSS</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default RGBTable;
