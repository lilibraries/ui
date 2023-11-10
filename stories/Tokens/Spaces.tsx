import React, { FC } from "react";
import Table from "../components/Table";
import Usage from "../components/Usage";
import Value from "../components/Value";

const Spaces: FC = () => {
  const rows = [];

  for (let i = 1; i <= 9; i++) {
    rows.push([
      <Usage type="scss" name={`space-${i}`} />,
      <Usage type="css" name={`space-${i}`} />,
      <Value
        styleName="width"
        styleValue={(prefix) => `var(--${prefix}space-${i})`}
      />,
    ]);
  }

  return (
    <>
      <Table head={["SCSS", "CSS", "Value"]} body={rows} />
      <br />
      <Table
        head={["SCSS", "CSS", "Value"]}
        body={[
          [
            <Usage type="scss" name="space-block-base" />,
            <Usage type="css" name="space-block-base" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-block-base)`}
            />,
          ],

          [
            <Usage type="scss" name="space-block-small" />,
            <Usage type="css" name="space-block-small" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-block-small)`}
            />,
          ],

          [
            <Usage type="scss" name="space-block-large" />,
            <Usage type="css" name="space-block-large" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-block-large)`}
            />,
          ],

          [
            <Usage type="scss" name="space-inline-base" />,
            <Usage type="css" name="space-inline-base" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-inline-base)`}
            />,
          ],

          [
            <Usage type="scss" name="space-inline-small" />,
            <Usage type="css" name="space-inline-small" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-inline-small)`}
            />,
          ],

          [
            <Usage type="scss" name="space-inline-large" />,
            <Usage type="css" name="space-inline-large" />,
            <Value
              styleName="width"
              styleValue={(prefix) => `var(--${prefix}space-inline-large)`}
            />,
          ],
        ]}
      />
    </>
  );
};

export default Spaces;
