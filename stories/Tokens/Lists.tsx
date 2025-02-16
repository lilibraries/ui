import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";

const Lists: FC = () => {
  return (
    <Table
      head={["SCSS", "Value"]}
      body={[
        [<Usage type="scss" name="intents" />, <span>"major", "minor", "positive", "alertive", "negative"</span>],
        [
          <Usage type="scss" name="colors" />,
          <span>
            "red", "magenta", "purple", "indigo", "navy", "blue", "cyan", "teal", "green", "lime", "yellow", "orange",
            "brown", "gray"
          </span>,
        ],
      ]}
    />
  );
};

export default Lists;
