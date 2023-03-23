import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import Monospace from "../components/Monospace";

const LineHeightsTable: FC = () => {
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
            <Monospace>$line-height-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-base)</Monospace>
          </td>
          <td>
            <Monospace>1.5</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$line-height-small</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-small)</Monospace>
          </td>
          <td>
            <Monospace>1.25</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$line-height-large</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-large)</Monospace>
          </td>
          <td>
            <Monospace>2</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$line-height-fixed-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-fixed-base)</Monospace>
          </td>
          <td>
            <Monospace>24px</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$line-height-fixed-small</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-fixed-small)</Monospace>
          </td>
          <td>
            <Monospace>18px</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>$line-height-fixed-large</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}line-height-fixed-large)</Monospace>
          </td>
          <td>
            <Monospace>30px</Monospace>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LineHeightsTable;
