import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Monospace from "../components/Monospace";

const Lists: FC = () => {
  return (
    <Table
      head={["SCSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="intents" />,
          <Monospace>
            "major", "minor", "positive", "alertive", "negative"
          </Monospace>,
        ],
        [
          <Usage type="scss" name="colors" />,
          <Monospace>
            "red", "magenta", "purple", "indigo", "navy", "blue", "cyan",
            "teal", "green", "lime", "yellow", "orange", "brown", "gray"
          </Monospace>,
        ],
      ]}
    />
  );
};

export default Lists;
