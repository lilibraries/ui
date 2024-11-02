import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";
import Monospace from "../components/Monospace";

const FontSizes: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="font-size-heading-1" />,
          <Usage type="css" name="font-size-heading-1" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-1)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-1` }}>
            Heading 1
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-2" />,
          <Usage type="css" name="font-size-heading-2" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-2)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-2` }}>
            Heading 2
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-3" />,
          <Usage type="css" name="font-size-heading-3" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-3)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-3` }}>
            Heading 3
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-4" />,
          <Usage type="css" name="font-size-heading-4" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-4)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-4` }}>
            Heading 4
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-5" />,
          <Usage type="css" name="font-size-heading-5" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-5)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-5` }}>
            Heading 5
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-6" />,
          <Usage type="css" name="font-size-heading-6" />,
          <Value
            styleName="fontSize"
            styleValue={`var(--${prefix}font-size-heading-6)`}
          />,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-6` }}>
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

        [
          <Usage type="scss" name="font-size-smaller" />,
          <Usage type="css" name="font-size-smaller" />,
          <Monospace>0.875em</Monospace>,
          <span style={{ fontSize: `var(--${prefix}font-size-smaller` }}>
            Smaller
          </span>,
        ],

        [
          <Usage type="scss" name="font-size-larger" />,
          <Usage type="css" name="font-size-larger" />,
          <Monospace>1.125em</Monospace>,
          <span style={{ fontSize: `var(--${prefix}font-size-larger` }}>
            Larger
          </span>,
        ],
      ]}
    />
  );
};

export default FontSizes;
