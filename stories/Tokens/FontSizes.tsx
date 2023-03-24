import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const FontSizes: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="font-size-h1" />,
          <Usage type="css" name="font-size-h1" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h1)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h1` }}>
            Heading 1
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-h2" />,
          <Usage type="css" name="font-size-h2" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h2)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h2` }}>
            Heading 2
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-h3" />,
          <Usage type="css" name="font-size-h3" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h3)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h3` }}>
            Heading 3
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-h4" />,
          <Usage type="css" name="font-size-h4" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h4)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h4` }}>
            Heading 4
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-h5" />,
          <Usage type="css" name="font-size-h5" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h5)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h5` }}>
            Heading 5
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-h6" />,
          <Usage type="css" name="font-size-h6" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-h6)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-h6` }}>
            Heading 6
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-base" />,
          <Usage type="css" name="font-size-base" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-base)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-base` }}>
            Base
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-small" />,
          <Usage type="css" name="font-size-small" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-small)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-small` }}>
            Small
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-large" />,
          <Usage type="css" name="font-size-large" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-large)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-large` }}>
            Large
          </span>,
        ],
      ]}
    />
  );
};

export default FontSizes;
