import React, { FC, useEffect, useRef, useState } from "react";
import { Prefix } from "@lilib/ui";
import hex from "rgb-hex";
import { useDarkMode } from "storybook-dark-mode";

const Row: FC<{ name: string }> = ({ name }) => {
  const { var: prefix } = Prefix.useConfig();
  const valueRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState("");
  const isDarkMode = useDarkMode();

  useEffect(() => {
    setValue(window.getComputedStyle(valueRef.current!).color);
  }, [isDarkMode]);

  return (
    <tr>
      <td>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 1000,
            background: `var(--${prefix}${name})`,
          }}
        />
      </td>
      <td>
        <div style={{ fontFamily: `var(--${prefix}font-family-mono)` }}>
          {name}
        </div>
      </td>
      <td>
        <div style={{ fontFamily: `var(--${prefix}font-family-mono)` }}>
          {value && "#" + hex(value).toUpperCase()}
        </div>
      </td>
      <td>
        <div style={{ fontFamily: `var(--${prefix}font-family-mono)` }}>
          {value}
          <span
            ref={valueRef}
            style={{ display: "none", color: `var(--${prefix}${name})` }}
          />
        </div>
      </td>
    </tr>
  );
};

const ColorTable: FC<{ name: string }> = ({ name }) => {
  let rows = [];
  for (let i = 0; i <= 9; i++) {
    rows.push(<Row key={`${name}-${i}`} name={`${name}-${i}`} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Name</th>
          <th>Hex</th>
          <th>RGB</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ColorTable;
