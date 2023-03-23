import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import Monospace from "../components/Monospace";

const MotionDurationsTable: FC = () => {
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
            <Monospace>$motion-duration-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-duration-base)</Monospace>
          </td>
          <td>
            <Monospace>300ms</Monospace>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$motion-duration-fast</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-duration-fast)</Monospace>
          </td>
          <td>
            <Monospace>150ms</Monospace>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$motion-duration-slow</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-duration-slow)</Monospace>
          </td>
          <td>
            <Monospace>750ms</Monospace>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$motion-duration-lazy</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-duration-lazy)</Monospace>
          </td>
          <td>
            <Monospace>1250ms</Monospace>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MotionDurationsTable;
