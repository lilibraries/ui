import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import Monospace from "../components/Monospace";

const MotionFunctionsTable: FC = () => {
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
            <Monospace>$motion-function-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-function-base)</Monospace>
          </td>
          <td>
            <Monospace>ease-in-out</Monospace>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$motion-function-spin</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}motion-function-spin)</Monospace>
          </td>
          <td>
            <Monospace>linear</Monospace>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MotionFunctionsTable;
