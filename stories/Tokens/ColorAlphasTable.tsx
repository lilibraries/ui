import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import { useDarkMode } from "storybook-dark-mode";
import CSSValue from "../components/CSSValue";
import Monospace from "../components/Monospace";

const ColorAlphasTable: FC = () => {
  const isDarkMode = useDarkMode();
  const { var: prefix } = Prefix.useConfig();

  function transform(value: string) {
    const matches = /^rgba\(0,\s?0,\s?0,\s?(.*)\)$/.exec(value);
    return matches ? matches[1] : "";
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
      <tbody>
        <tr>
          <td>
            <Monospace>${isDarkMode ? "dark-" : ""}alpha-soft</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}alpha-soft)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{
                color: `rgba(0, 0, 0, var(--${prefix}alpha-soft))`,
              }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>${isDarkMode ? "dark-" : ""}alpha-deep</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}alpha-deep)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{
                color: `rgba(0, 0, 0, var(--${prefix}alpha-deep))`,
              }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>${isDarkMode ? "dark-" : ""}alpha-dark</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}alpha-dark)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{
                color: `rgba(0, 0, 0, var(--${prefix}alpha-dark))`,
              }}
              transform={transform}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ColorAlphasTable;
