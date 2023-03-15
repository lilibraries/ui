import React, { FC, useEffect, useRef, useState } from "react";
import { Prefix } from "@lilib/ui";
import { useDarkMode } from "storybook-dark-mode";

const Row: FC<{ name: string }> = ({ name }) => {
  const { var: prefix } = Prefix.useConfig();
  const valueRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState("");
  const isDarkMode = useDarkMode();

  useEffect(() => {
    const color = window.getComputedStyle(valueRef.current!).color;
    const value = /rgb\((.*)\)/.exec(color)![1];
    setValue(value);
  }, [isDarkMode]);

  return (
    <tr>
      <td>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 1000,
            background: `rgb(var(--${prefix}${name}))`,
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
          {value}
          <span
            ref={valueRef}
            style={{ display: "none", color: `rgb(var(--${prefix}${name}))` }}
          />
        </div>
      </td>
    </tr>
  );
};

const colors = [
  "red",
  "magenta",
  "purple",
  "indigo",
  "navy",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
  "brown",
  "gray",
];

const BaseTable: FC = () => {
  let rows = [];
  for (const name of colors) {
    rows.push(<Row key={name} name={name} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default BaseTable;
