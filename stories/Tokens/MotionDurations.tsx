import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const MotionDurations: FC = () => {
  return (
    <Table
      head={["SCSS", "CSS", "Value"]}
      body={[
        [
          <Usage type="scss" name="motion-duration-base" />,
          <Usage type="css" name="motion-duration-base" />,
          <Value
            styleName="animationDuration"
            styleValue={(prefix) => `var(--${prefix}motion-duration-base)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-duration-fast" />,
          <Usage type="css" name="motion-duration-fast" />,
          <Value
            styleName="animationDuration"
            styleValue={(prefix) => `var(--${prefix}motion-duration-fast)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-duration-slow" />,
          <Usage type="css" name="motion-duration-slow" />,
          <Value
            styleName="animationDuration"
            styleValue={(prefix) => `var(--${prefix}motion-duration-slow)`}
          />,
        ],

        [
          <Usage type="scss" name="motion-duration-lazy" />,
          <Usage type="css" name="motion-duration-lazy" />,
          <Value
            styleName="animationDuration"
            styleValue={(prefix) => `var(--${prefix}motion-duration-lazy)`}
          />,
        ],
      ]}
    />
  );
};

export default MotionDurations;
