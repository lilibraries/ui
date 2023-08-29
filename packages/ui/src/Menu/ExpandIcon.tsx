import React, { FC, ReactNode, MouseEvent } from "react";
import cn from "classnames";
import Icon from "../Icon";
import Button from "../Button";
import Prefix from "../Prefix";
import Direction from "../Direction";
import DownChevronIcon from "../icons/DownChevronIcon";
import LeftChevronIcon from "../icons/LeftChevronIcon";
import RightChevronIcon from "../icons/RightChevronIcon";

interface ExpandIconProps {
  open?: boolean;
  disabled?: boolean;
  collapsible?: boolean;
  collapseByIcon?: boolean;
  onCollapseClick?: (event: MouseEvent) => void;
}

const ExpandIcon: FC<ExpandIconProps> = (props) => {
  const { open, disabled, collapsible, collapseByIcon, onCollapseClick } =
    props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  let icon: ReactNode = null;
  let iconClassName = "";

  if (collapsible) {
    icon = <DownChevronIcon />;
    iconClassName = `${cls}menu-item-collapse-icon`;
    if (!collapseByIcon) {
      iconClassName = cn(iconClassName, `${cls}menu-item-expand-icon`);
    }
    if (open) {
      iconClassName = cn(iconClassName, `${cls}reverse`);
    }
  } else {
    if (isRTL) {
      icon = <LeftChevronIcon />;
    } else {
      icon = <RightChevronIcon />;
    }
    iconClassName = `${cls}menu-item-expand-icon`;
  }

  icon = <Icon className={iconClassName}>{icon}</Icon>;

  if (collapseByIcon) {
    icon = (
      <Button
        variant="hollow"
        borderless
        onClick={onCollapseClick}
        className={`${cls}menu-item-collapse-button`}
        disabled={disabled}
      >
        {icon}
      </Button>
    );
  }

  return <>{icon}</>;
};

export default ExpandIcon;
