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
      ]}
    />
  );
};

export default ZIndexes;
