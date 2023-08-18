import React from "react";
import { List, Switch } from "@lilib/ui";
import { useSetState } from "@lilib/hooks";
import {
  AiOutlineBgColors,
  AiOutlinePicCenter,
  AiOutlineBorderOuter,
} from "react-icons/ai";
import {
  BsTextIndentLeft,
  BsHandIndexThumb,
  BsArrowRightSquare,
} from "react-icons/bs";
import { VscSplitVertical } from "react-icons/vsc";
import { MdOutlineNearMeDisabled } from "react-icons/md";

function Example() {
  const [
    {
      filled,
      splited,
      indented,
      bounded,
      bordered,
      arrowed,
      hoverable,
      disabled,
    },
    setState,
  ] = useSetState({
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
    <List
      style={{ width: 300 }}
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
          <Switch
            size="small"
            checked={filled}
            onChange={(event) => setState({ filled: event.target.checked })}
          />
        }
      >
        Filled
      </List.Item>
      <List.Item
        icon={<VscSplitVertical />}
        suffix={
          <Switch
            size="small"
            checked={splited}
            onChange={(event) => setState({ splited: event.target.checked })}
          />
        }
      >
        Splited
      </List.Item>
      <List.Item
        icon={<BsTextIndentLeft />}
        suffix={
          <Switch
            size="small"
            checked={indented}
            onChange={(event) => setState({ indented: event.target.checked })}
          />
        }
      >
        Indented
      </List.Item>
      <List.Item
        icon={<AiOutlinePicCenter />}
        suffix={
          <Switch
            size="small"
            checked={bounded}
            onChange={(event) => setState({ bounded: event.target.checked })}
          />
        }
      >
        Bounded
      </List.Item>
      <List.Item
        icon={<AiOutlineBorderOuter />}
        suffix={
          <Switch
            size="small"
            checked={bordered}
            onChange={(event) => setState({ bordered: event.target.checked })}
          />
        }
      >
        Bordered
      </List.Item>
      <List.Item
        icon={<BsArrowRightSquare />}
        suffix={
          <Switch
            size="small"
            checked={arrowed}
            onChange={(event) => setState({ arrowed: event.target.checked })}
          />
        }
      >
        Arrowed
      </List.Item>
      <List.Item
        icon={<BsHandIndexThumb />}
        suffix={
          <Switch
            size="small"
            checked={hoverable}
            onChange={(event) => setState({ hoverable: event.target.checked })}
          />
        }
      >
        Hoverable
      </List.Item>
      <List.Item
        icon={<MdOutlineNearMeDisabled />}
        suffix={
          <Switch
            size="small"
            checked={disabled}
            onChange={(event) => setState({ disabled: event.target.checked })}
          />
        }
      >
        Disabled
      </List.Item>
    </List>
  );
}

export default Example;
