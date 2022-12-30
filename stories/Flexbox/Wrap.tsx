import React, { useState } from "react";
import { Button, Flexbox, FlexboxProps, FlexboxWrap } from "@lilib/ui";

function Wrap(props: FlexboxProps) {
  const [wrap, setWrap] = useState<FlexboxWrap>("wrap");

  const buttons = [];
  for (let i = 1; i <= 20; i++) {
    buttons.push(<Button key={i}>{i}</Button>);
  }

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <select
        value={wrap as string}
        onChange={(event) => {
          setWrap(event.target.value as FlexboxWrap);
        }}
      >
        <option value="wrap">wrap</option>
        <option value="nowrap">nowrap</option>
        <option value="wrap-reverse">wrap-reverse</option>
      </select>

      <Flexbox gap="4x" {...props} wrap={wrap}>
        {buttons}
      </Flexbox>
    </Flexbox>
  );
}

export default Wrap;
