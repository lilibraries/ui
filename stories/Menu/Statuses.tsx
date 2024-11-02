import React, { useState } from "react";
import { Menu, Radio, SizeValue, Switch } from "@lilib/ui";
import { CgSize } from "react-icons/cg";
import { AiOutlineBgColors } from "react-icons/ai";
import { MdOutlineNearMeDisabled } from "react-icons/md";

function Example() {
  const [size, setSize] = useState<SizeValue>(null);
  const [filled, setFilled] = useState(false);
  const [splited, setSplited] = useState(true);
  const [indented, setIndented] = useState(true);
  const [bounded, setBounded] = useState(true);
  const [bordered, setBordered] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Menu
      collapsible
      size={size}
      filled={filled}
      splited={splited}
      indented={indented}
      bounded={bounded}
      bordered={bordered}
      disabled={disabled}
      style={{ width: 300 }}
    >
      <Menu.Item label="Size" icon={<CgSize />} defaultOpen>
        <Radio.Group value={size} onChange={(event) => setSize(event.target.value)}>
          <Menu.Item label="Small" suffix={<Radio value="small" />} />
          <Menu.Item label="Medium" suffix={<Radio value={null} />} />
          <Menu.Item label="Large" suffix={<Radio value="large" />} />
        </Radio.Group>
      </Menu.Item>
      <Menu.Item label="Style" icon={<AiOutlineBgColors />} defaultOpen>
        <Menu.Item
          label="Filled"
          suffix={<Switch size="small" checked={filled} onChange={(event) => setFilled(event.target.checked)} />}
        />
        <Menu.Item
          label="Splited"
          suffix={<Switch size="small" checked={splited} onChange={(event) => setSplited(event.target.checked)} />}
        />
        <Menu.Item
          label="Indented"
          suffix={<Switch size="small" checked={indented} onChange={(event) => setIndented(event.target.checked)} />}
        />
        <Menu.Item
          label="Bounded"
          suffix={<Switch size="small" checked={bounded} onChange={(event) => setBounded(event.target.checked)} />}
        />
        <Menu.Item
          label="Bordered"
          suffix={<Switch size="small" checked={bordered} onChange={(event) => setBordered(event.target.checked)} />}
        />
      </Menu.Item>
      <Menu.Item
        label="Disabled"
        icon={<MdOutlineNearMeDisabled />}
        suffix={<Switch size="small" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />}
      />
    </Menu>
  );
}

export default Example;
