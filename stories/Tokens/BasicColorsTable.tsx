import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import rgb2hex from "rgb-hex";
import { useDarkMode } from "storybook-dark-mode";
import ColorPreview from "../components/ColorPreview";
import Monospace from "../components/Monospace";
import CSSValue from "../components/CSSValue";

const BasicColorsTable: FC = () => {
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
            <Monospace>{`$${isDarkMode ? "dark-" : ""}basis`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}basis)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}basis)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}basis)` }} />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}major`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}major)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}major)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}major)` }} />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}minor`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}minor)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}minor)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}minor)` }} />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}positive`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}positive)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}positive)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}positive)` }} />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}alertive`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}alertive)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}alertive)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}alertive)` }} />
          </td>
        </tr>

        <tr>
          <td>
            <Monospace>{`$${isDarkMode ? "dark-" : ""}negative`}</Monospace>
          </td>
          <td>
            <Monospace>{`var(--${prefix}negative)`}</Monospace>
          </td>
          <td>
            <CSSValue
              valueName="color"
              valueStyle={{ color: `var(--${prefix}negative)` }}
              transform={(value) =>
                /rgb/.test(value) ? `#${rgb2hex(value).toUpperCase()}` : value
              }
            />
          </td>
          <td>
            <ColorPreview style={{ background: `var(--${prefix}negative)` }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicColorsTable;
