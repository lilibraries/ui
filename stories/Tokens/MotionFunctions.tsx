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
          <Usage type="scss" name="motion-function-ease" />,
          <Usage type="css" name="motion-function-ease" />,
          <Value styleName="animationTimingFunction" styleValue={(prefix) => `var(--${prefix}motion-function-ease)`} />,
        ],

        [
          <Usage type="scss" name="motion-function-ease-in" />,
          <Usage type="css" name="motion-function-ease-in" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-ease-in)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-function-ease-out" />,
          <Usage type="css" name="motion-function-ease-out" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-ease-out)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-function-ease-in-out" />,
          <Usage type="css" name="motion-function-ease-in-out" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-ease-in-out)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-function-linear" />,
          <Usage type="css" name="motion-function-linear" />,
          <Value
            styleName="animationTimingFunction"
            styleValue={(prefix) => `var(--${prefix}motion-function-linear)`}
          />,
        ],
      ]}
    />
  );
};

export default MotionFunctions;
