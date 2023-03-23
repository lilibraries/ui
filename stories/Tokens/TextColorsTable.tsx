import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import rgb2hex from "rgb-hex";
import { useDarkMode } from "storybook-dark-mode";
import Monospace from "../components/Monospace";
import CSSValue from "../components/CSSValue";

const TextColorsTable: FC = () => {
  const { var: prefix } = Prefix.useConfig();
  const isDarkMode = useDarkMode();

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
            <Monospace>{`$${
              isDarkMode ? "dark-" : ""
            }text-color-base`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}text-color-base)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}text-color-base)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <span style={{ color: `var(--${prefix}text-color-base)` }}>
              Base
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${
              isDarkMode ? "dark-" : ""
            }text-color-hover`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}text-color-hover)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}text-color-hover)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <span style={{ color: `var(--${prefix}text-color-hover)` }}>
              Hover
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${
              isDarkMode ? "dark-" : ""
            }text-color-active`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}text-color-active)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}text-color-active)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <span style={{ color: `var(--${prefix}text-color-active)` }}>
              Active
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${
              isDarkMode ? "dark-" : ""
            }text-color-inactive`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}text-color-inactive)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}text-color-inactive)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <span style={{ color: `var(--${prefix}text-color-inactive)` }}>
              Inactive
            </span>
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${
              isDarkMode ? "dark-" : ""
            }text-color-disabled`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}text-color-disabled)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}text-color-disabled)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <span style={{ color: `var(--${prefix}text-color-disabled)` }}>
              Disabled
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TextColorsTable;
