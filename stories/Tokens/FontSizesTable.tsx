import { Prefix } from "@lilib/ui";
import React, { FC } from "react";
import CSSValue from "../components/CSSValue";
import Monospace from "../components/Monospace";

const FontSizesTable: FC = () => {
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
            <Monospace>$font-size-h1</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h1)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h1` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h1` }}>
              Heading 1
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-h2</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h2)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h2` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h2` }}>
              Heading 2
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-h3</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h3)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h3` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h3` }}>
              Heading 3
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-h4</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h4)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h4` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h4` }}>
              Heading 4
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-h5</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h5)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h5` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h5` }}>
              Heading 5
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-h6</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-h6)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-h6` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-h6` }}>
              Heading 6
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-base</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-base)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-base` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-base` }}>
              Basic text size
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-small</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-small)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-small` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-small` }}>
              Small text size
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>$font-size-large</Monospace>
          </td>
          <td>
            <Monospace>var(--{prefix}font-size-large)</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="fontSize"
              valueStyle={{ fontSize: `var(--${prefix}font-size-large` }}
            />
          </td>
          <td>
            <span style={{ fontSize: `var(--${prefix}font-size-large` }}>
              Large text size
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FontSizesTable;
