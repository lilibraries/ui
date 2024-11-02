import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";
import Monospace from "../components/Monospace";

const BorderRadii: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="border-radius-base" />,
          <Usage type="css" name="border-radius-base" />,
          <Monospace>0.5em</Monospace>,
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
          <Monospace>0.25em</Monospace>,
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
          <Monospace>1em</Monospace>,
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

        [
          <Usage type="scss" name="border-radius-fixed-base" />,
          <Usage type="css" name="border-radius-fixed-base" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-fixed-base)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-fixed-base)`,
            }}
          />,
        ],

        [
          <Usage type="scss" name="border-radius-fixed-small" />,
          <Usage type="css" name="border-radius-fixed-small" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-fixed-small)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-fixed-small)`,
            }}
          />,
        ],

        [
          <Usage type="scss" name="border-radius-fixed-large" />,
          <Usage type="css" name="border-radius-fixed-large" />,
          <Value styleName="borderRadius" styleValue={`var(--${prefix}border-radius-fixed-large)`} />,
          <div
            style={{
              width: 50,
              height: 50,
              border: `1px solid var(--${prefix}border-color-base)`,
              borderRadius: `var(--${prefix}border-radius-fixed-large)`,
            }}
          />,
        ],
      ]}
    />
  );
};

export default BorderRadii;
