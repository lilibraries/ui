import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const FontWeights: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="font-weight-base" />,
          <Usage type="css" name="font-weight-base" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-base)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-base` }}>
            Base
          </span>,
        ],

        [
          <Usage type="scss" name="font-weight-input" />,
          <Usage type="css" name="font-weight-input" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-input)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-input` }}>
            Input
          </span>,
        ],

        [
          <Usage type="scss" name="font-weight-button" />,
          <Usage type="css" name="font-weight-button" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-button)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-button` }}>
            Button
          </span>,
        ],

        [
          <Usage type="scss" name="font-weight-heading" />,
          <Usage type="css" name="font-weight-heading" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-heading)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-heading` }}>
            Heading
          </span>,
        ],

        [
          <Usage type="scss" name="font-weight-title" />,
          <Usage type="css" name="font-weight-title" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-title)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-title` }}>
            Title
          </span>,
        ],

        [
          <Usage type="scss" name="font-weight-subtitle" />,
          <Usage type="css" name="font-weight-subtitle" />,
          <Value
            styleName="fontWeight"
            styleValue={`var(--${prefix}font-weight-subtitle)`}
          />,
          <span style={{ fontWeight: `var(--${prefix}font-weight-subtitle` }}>
            Subtitle
          </span>,
        ],
      ]}
    />
  );
};

export default FontWeights;
