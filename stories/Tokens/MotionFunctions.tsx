import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const MotionFunctions: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="motion-function-base" />,
          <Usage type="css" name="motion-function-base" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-base)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-function-spin" />,
          <Usage type="css" name="motion-function-spin" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-spin)`}
          />,
        ],
      ]}
    />
  );
};

export default MotionFunctions;
