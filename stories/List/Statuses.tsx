import React, { useState } from "react";
import { Flexbox, List, Radio, SizeValue, Switch } from "@lilib/ui";
import { useSetState } from "@lilib/hooks";
import { AiOutlineBgColors, AiOutlinePicCenter, AiOutlineBorderOuter } from "react-icons/ai";
import { BsTextIndentLeft, BsHandIndexThumb, BsArrowRightSquare } from "react-icons/bs";
import { VscSplitVertical } from "react-icons/vsc";
import { MdOutlineNearMeDisabled } from "react-icons/md";

function Example() {
  const [size, setSize] = useState<SizeValue>(null);
  const [{ filled, splited, indented, bounded, bordered, arrowed, hoverable, disabled }, setState] = useSetState({
    filled: false,
    splited: true,
    indented: true,
    bounded: true,
    bordered: false,
    arrowed: false,
    hoverable: false,
    disabled: false,
  });

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Radio.Group size={size} value={size} onChange={(event) => setSize(event.target.value as SizeValue)}>
          <Flexbox gap="4x">
            <Radio value="small">Small</Radio>
            <Radio value={null}>Medium</Radio>
            <Radio value="large">Large</Radio>
          </Flexbox>
        </Radio.Group>
      </div>
      <List
        style={{ width: 300 }}
        size={size}
        filled={filled}
        splited={splited}
        indented={indented}
        bounded={bounded}
        bordered={bordered}
        arrowed={arrowed}
        hoverable={hoverable}
        disabled={disabled}
      >
        <List.Item
          icon={<AiOutlineBgColors />}
          suffix={
            <Switch size="small" checked={filled} onChange={(event) => setState({ filled: event.target.checked })} />
          }
          label="Filled"
        />
        <List.Item
          icon={<VscSplitVertical />}
          suffix={
            <Switch size="small" checked={splited} onChange={(event) => setState({ splited: event.target.checked })} />
          }
          label="Splited"
        />
        <List.Item
          icon={<BsTextIndentLeft />}
          suffix={
            <Switch
              size="small"
              checked={indented}
              onChange={(event) => setState({ indented: event.target.checked })}
            />
          }
          label="Indented"
        />
        <List.Item
          icon={<AiOutlinePicCenter />}
          suffix={
            <Switch size="small" checked={bounded} onChange={(event) => setState({ bounded: event.target.checked })} />
          }
          label="Bounded"
        />
        <List.Item
          icon={<AiOutlineBorderOuter />}
          suffix={
            <Switch
              size="small"
              checked={bordered}
              onChange={(event) => setState({ bordered: event.target.checked })}
            />
          }
          label="Bordered"
        />
        <List.Item
          icon={<BsArrowRightSquare />}
          suffix={
            <Switch size="small" checked={arrowed} onChange={(event) => setState({ arrowed: event.target.checked })} />
          }
          label="Arrowed"
        />
        <List.Item
          icon={<BsHandIndexThumb />}
          suffix={
            <Switch
              size="small"
              checked={hoverable}
              onChange={(event) => setState({ hoverable: event.target.checked })}
            />
          }
          label="Hoverable"
        />
        <List.Item
          icon={<MdOutlineNearMeDisabled />}
          suffix={
            <Switch
              size="small"
              checked={disabled}
              onChange={(event) => setState({ disabled: event.target.checked })}
            />
          }
          label="Disabled"
        />
      </List>
    </>
  );
}

export default Example;
