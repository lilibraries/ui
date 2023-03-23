import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import CSSValue from "../components/CSSValue";
import Monospace from "../components/Monospace";

const SpacesTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const rows = [];

  for (let i = 1; i <= 9; i++) {
    rows.push(
      <tr key={i}>
        <td>
          <Monospace>$space-{i}x</Monospace>
        </td>
        <td>
          <Monospace>
            var(--{prefix}space-{i}x)
          </Monospace>
        </td>
        <td>
          <CSSValue
            valueName="paddingLeft"
            valueStyle={{ paddingLeft: `var(--${prefix}space-${i}x)` }}
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

export default SpacesTable;
