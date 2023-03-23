import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import Monospace from "../components/Monospace";

const BorderRadiiTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <table>
      <thead>
        <tr>
          <th>SCSS</th>
          <th>CSS</th>
          <th>Value</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>$border-radius-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-base)</Monospace>
          </td>
          <td>
            <Monospace>0.5em</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-base)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-small</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-small)</Monospace>
          </td>
          <td>
            <Monospace>0.25em</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-small)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-large</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-large)</Monospace>
          </td>
          <td>
            <Monospace>1em</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-large)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-round</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-round)</Monospace>
          </td>
          <td>
            <Monospace>1000px</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-round)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-fixed-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-fixed-base)</Monospace>
          </td>
          <td>
            <Monospace>8px</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-fixed-base)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-fixed-small</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-fixed-small)</Monospace>
          </td>
          <td>
            <Monospace>4px</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-fixed-small)`,
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$border-radius-fixed-large</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}border-radius-fixed-large)</Monospace>
          </td>
          <td>
            <Monospace>16px</Monospace>
          </td>
          <td>
            <div
              style={{
                width: 50,
                height: 50,
                border: `1px solid var(--${prefix}border-color-base)`,
                borderRadius: `var(--${prefix}border-radius-fixed-large)`,
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BorderRadiiTable;
