import React, { FC, ReactNode } from "react";
import cn from "classnames";
import Icon from "../Icon";
import Prefix from "../Prefix";
import Direction from "../Direction";
import DownChevronIcon from "../icons/DownChevronIcon";
import LeftChevronIcon from "../icons/LeftChevronIcon";
import RightChevronIcon from "../icons/RightChevronIcon";

interface ExpandIconProps {
  opened?: boolean;
  collapsible?: boolean;
}

const ExpandIcon: FC<ExpandIconProps> = (props) => {
  const { opened, collapsible } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  let icon: ReactNode = null;
  let iconClassName = "";

  if (collapsible) {
    icon = <DownChevronIcon />;
    iconClassName = `${cls}menu-item-open-icon`;
    if (opened) {
      iconClassName = cn(iconClassName, `${cls}reverse`);
    }
  } else {
    if (isRTL) {
      icon = <LeftChevronIcon />;
    } else {
      icon = <RightChevronIcon />;
    }
  }

  return <Icon className={iconClassName}>{icon}</Icon>;
};

export default ExpandIcon;
