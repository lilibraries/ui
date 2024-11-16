import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
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
      ]}
    />
  );
};

export default LineHeights;
