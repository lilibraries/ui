import React, { FC } from "react";
import { Prefix } from "@lilib/ui";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const ZIndexes: FC = () => {
  const { var: prefix } = Prefix.useConfig();

  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="z-index-affix" />,
          <Usage type="css" name="z-index-affix" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-affix`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-backdrop" />,
          <Usage type="css" name="z-index-backdrop" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-backdrop`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-drawer" />,
          <Usage type="css" name="z-index-drawer" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-drawer`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-modal" />,
          <Usage type="css" name="z-index-modal" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-modal`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-popup" />,
          <Usage type="css" name="z-index-popup" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-popup`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-tooltip" />,
          <Usage type="css" name="z-index-tooltip" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-tooltip`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-notice" />,
          <Usage type="css" name="z-index-notice" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-notice`}
          />,
        ],

        [
          <Usage type="scss" name="z-index-toast" />,
          <Usage type="css" name="z-index-toast" />,
          <Value
            styleName="zIndex"
            styleValue={`var(--${prefix}z-index-toast`}
          />,
        ],
      ]}
    />
  );
};

export default ZIndexes;
