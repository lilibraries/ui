import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Monospace from "../components/Monospace";

const FontFamilies: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage
            type="scss"
            name="font-family-base"
            style={{ whiteSpace: "nowrap" }}
          />,
          <Usage
            type="css"
            name="font-family-base"
            style={{ whiteSpace: "nowrap" }}
          />,
          <Monospace>
            system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", "Open Sans", Arial, sans-serif, "Apple Color
            Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
          </Monospace>,
        ],

        [
          <Usage
            type="scss"
            name="font-family-mono"
            style={{ whiteSpace: "nowrap" }}
          />,
          <Usage
            type="css"
            name="font-family-mono"
            style={{ whiteSpace: "nowrap" }}
          />,
          <Monospace>
            Monaco, Menlo, Consolas, "Courier New", Courier, monospace
          </Monospace>,
        ],
      ]}
    />
  );
};

export default FontFamilies;
