import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const Alphas: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="alpha-base" darkable />,
          <Usage type="css" name="alpha-base" />,
          <Value
            format="alpha"
            styleName="color"
            styleValue={(prefix) => `rgba(0 0 0 / var(--${prefix}alpha-base))`}
          />,
        ],

        [
          <Usage type="scss" name="alpha-deep" darkable />,
          <Usage type="css" name="alpha-deep" />,
          <Value
            format="alpha"
            styleName="color"
            styleValue={(prefix) => `rgba(0 0 0 / var(--${prefix}alpha-deep))`}
          />,
        ],

        [
          <Usage type="scss" name="alpha-dark" darkable />,
          <Usage type="css" name="alpha-dark" />,
          <Value
            format="alpha"
            styleName="color"
            styleValue={(prefix) => `rgba(0 0 0 / var(--${prefix}alpha-dark))`}
          />,
        ],
      ]}
    />
  );
};

export default Alphas;
