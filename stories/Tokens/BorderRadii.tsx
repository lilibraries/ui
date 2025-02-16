import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const BorderRadii: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="border-radius-base" />,
          <Usage type="css" name="border-radius-base" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-base)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-base)`,
            }}
          />,
        ],

        [
          <Usage type="scss" name="border-radius-small" />,
          <Usage type="css" name="border-radius-small" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-small)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-small)`,
            }}
          />,
        ],

        [
          <Usage type="scss" name="border-radius-large" />,
          <Usage type="css" name="border-radius-large" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-large)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-large)`,
            }}
          />,
        ],

        [
          <Usage type="scss" name="border-radius-round" />,
          <Usage type="css" name="border-radius-round" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-round)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-round)`,
            }}
          />,
        ],
      ]}
    />
  );
};

export default BorderRadii;
