import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";

const LineHeights: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [<Usage type="scss" name="line-height-base" />, <Usage type="css" name="line-height-base" />, <span>1.5</span>],

        [
          <Usage type="scss" name="line-height-small" />,
          <Usage type="css" name="line-height-small" />,
          <span>1.25</span>,
        ],

        [<Usage type="scss" name="line-height-large" />, <Usage type="css" name="line-height-large" />, <span>2</span>],
      ]}
    />
  );
};

export default LineHeights;
