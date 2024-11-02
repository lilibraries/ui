import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";
import Monospace from "../components/Monospace";

const LineHeights: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="line-height-base" />,
          <Usage type="css" name="line-height-base" />,
          <Monospace>1.5</Monospace>,
        ],

        [
          <Usage type="scss" name="line-height-small" />,
          <Usage type="css" name="line-height-small" />,
          <Monospace>1.25</Monospace>,
        ],

        [
          <Usage type="scss" name="line-height-large" />,
          <Usage type="css" name="line-height-large" />,
          <Monospace>2</Monospace>,
        ],

        [
          <Usage type="scss" name="line-height-fixed-base" />,
          <Usage type="css" name="line-height-fixed-base" />,
          <Value styleName="lineHeight" styleValue={(prefix) => `var(--${prefix}line-height-fixed-base)`} />,
        ],

        [
          <Usage type="scss" name="line-height-fixed-small" />,
          <Usage type="css" name="line-height-fixed-small" />,
          <Value styleName="lineHeight" styleValue={(prefix) => `var(--${prefix}line-height-fixed-small)`} />,
        ],

        [
          <Usage type="scss" name="line-height-fixed-large" />,
          <Usage type="css" name="line-height-fixed-large" />,
          <Value styleName="lineHeight" styleValue={(prefix) => `var(--${prefix}line-height-fixed-large)`} />,
        ],
      ]}
    />
  );
};

export default LineHeights;
