import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";

const FontSizes: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value", "Preview"]}
      body={[
        [
          <Usage type="scss" name="font-size-heading-1" />,
          <Usage type="css" name="font-size-heading-1" />,
          <span>2.875rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-1)` }}>Heading 1</span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-2" />,
          <Usage type="css" name="font-size-heading-2" />,
          <span>2.25rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-2)` }}>Heading 2</span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-3" />,
          <Usage type="css" name="font-size-heading-3" />,
          <span>1.75rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-3)` }}>Heading 3</span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-4" />,
          <Usage type="css" name="font-size-heading-4" />,
          <span>1.375rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-4)` }}>Heading 4</span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-5" />,
          <Usage type="css" name="font-size-heading-5" />,
          <span>1.125rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-5)` }}>Heading 5</span>,
        ],

        [
          <Usage type="scss" name="font-size-heading-6" />,
          <Usage type="css" name="font-size-heading-6" />,
          <span>0.875rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-heading-6)` }}>Heading 6</span>,
        ],

        [
          <Usage type="scss" name="font-size-base" />,
          <Usage type="css" name="font-size-base" />,
          <span>1rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-base)` }}>Base</span>,
        ],

        [
          <Usage type="scss" name="font-size-small" />,
          <Usage type="css" name="font-size-small" />,
          <span>0.75rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-small)` }}>Small</span>,
        ],

        [
          <Usage type="scss" name="font-size-large" />,
          <Usage type="css" name="font-size-large" />,
          <span>1.25rem</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-large)` }}>Large</span>,
        ],

        [
          <Usage type="scss" name="font-size-smaller" />,
          <Usage type="css" name="font-size-smaller" />,
          <span>0.875em</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-smaller)` }}>Smaller</span>,
        ],

        [
          <Usage type="scss" name="font-size-larger" />,
          <Usage type="css" name="font-size-larger" />,
          <span>1.125em</span>,
          <span style={{ fontSize: `var(--${prefix}font-size-larger)` }}>Larger</span>,
        ],
      ]}
    />
  );
};

export default FontSizes;
