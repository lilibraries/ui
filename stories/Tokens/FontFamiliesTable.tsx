import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import Monospace from "../components/Monospace";

const FontFamiliesTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();

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
            <Monospace>$font-family-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-family-base)</Monospace>
          </td>
          <td>
            <Monospace>
              system-ui,
              <br />
              -apple-system,
              <br />
              BlinkMacSystemFont,
              <br />
              "Segoe UI",
              <br />
              Roboto,
              <br />
              "Helvetica Neue",
              <br />
              "Open Sans",
              <br />
              Arial,
              <br />
              sans-serif,
              <br />
              "Apple Color Emoji",
              <br />
              "Segoe UI Emoji",
              <br />
              "Segoe UI Symbol"
            </Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$font-family-mono</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-family-mono)</Monospace>
          </td>
          <td>
            <Monospace>
              Monaco,
              <br />
              Menlo,
              <br />
              Consolas,
              <br />
              "Courier New",
              <br />
              Courier,
              <br />
              monospace
            </Monospace>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FontFamiliesTable;
