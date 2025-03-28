import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";

const FontSizes: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [<Usage type="scss" name="blur-1" />, <Usage type="css" name="blur-1" />, <span>4px</span>],
        [<Usage type="scss" name="blur-2" />, <Usage type="css" name="blur-2" />, <span>8px</span>],
        [<Usage type="scss" name="blur-3" />, <Usage type="css" name="blur-3" />, <span>12px</span>],
      ]}
    />
  );
};

export default FontSizes;
