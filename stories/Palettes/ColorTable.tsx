import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import rgb2hex from "rgb-hex";
import { useDarkMode } from "storybook-dark-mode";
import colors from "./colors";
import ColorPreview from "../components/ColorPreview";
import Monospace from "../components/Monospace";
import CSSValue from "../components/CSSValue";

const ColorTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const isDarkMode = useDarkMode();

  let rows = [];
  for (const name of colors) {
    rows.push(
      <tr key={name}>
        <td>
          <ColorPreview style={{ background: `var(--${prefix}${name})` }} />
        </td>
        <td>
          <Monospace>{`$${isDarkMode ? "dark-" : ""}${name}`}</Monospace>
        </td>
        <td>
          <Monospace>{`var(--${prefix}${name})`}</Monospace>
        </td>
        <td>
          <CSSValue
            valueName="color"
            valueStyle={{ color: `var(--${prefix}${name})` }}
            transform={(value) =>
              /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
            }
          />
        </td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>SCSS</th>
          <th>CSS</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ColorTable;
