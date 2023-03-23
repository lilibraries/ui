import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import { useDarkMode } from "storybook-dark-mode";
import Monospace from "../components/Monospace";
import CSSValue from "../components/CSSValue";

const IntentColorsTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const isDarkMode = useDarkMode();

  function transform(value: string) {
    if (/rgb/.test(value)) {
      return String(/rgb\((.*)\)/.exec(value)![1])
        .split(",")
        .map((item) => item.trim())
        .join(" ");
    } else {
      return value;
    }
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
            <Monospace>{`$${isDarkMode ? "dark-" : ""}basis-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}basis-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}basis-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}major-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}major-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}major-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}minor-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}minor-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}minor-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}positive-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}positive-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}positive-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}alertive-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}alertive-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}alertive-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}negative-rgb`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}negative-rgb)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `rgb(var(--${prefix}negative-rgb))` }}
              transform={transform}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default IntentColorsTable;
