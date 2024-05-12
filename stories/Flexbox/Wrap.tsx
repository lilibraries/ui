import React, { useState } from "react";
import { Button, Flexbox, FlexboxWrap, Radio } from "@lilib/ui";

function Example() {
  const [wrap, setWrap] = useState<FlexboxWrap>("wrap");

  const buttons = [];
  for (let i = 1; i <= 20; i++) {
    buttons.push(<Button key={i}>{i}</Button>);
  }

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Radio.Group
        value={wrap}
        onChange={(event) => {
          setWrap(event.target.value);
        }}
      >
        <Flexbox gap="4x">
          <Radio value="wrap">wrap</Radio>
          <Radio value="nowrap">nowrap</Radio>
          <Radio value="wrap-reverse">wrap-reverse</Radio>
        </Flexbox>
      </Radio.Group>

      <Flexbox gap="4x" wrap={wrap}>
        {buttons}
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
