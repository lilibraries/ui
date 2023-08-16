import React, {
  ReactNode,
  MouseEvent,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import { usePersist } from "@lilib/hooks";
import Prefix from "../Prefix";
import Direction from "../Direction";
import LeftChevronIcon from "../icons/LeftChevronIcon";
import RightChevronIcon from "../icons/RightChevronIcon";
import isRenderableNode from "../utils/isRenderableNode";
import ListConfig, { ListConfigValue } from "./ListConfig";

export interface ListItemCommonProps extends ListConfigValue {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
}

export type ListItemProps<C extends ElementType = "div"> = C extends "div"
  ? {
      as?: C;
    } & Omit<ComponentProps<C>, "prefix" | "title"> &
      ListItemCommonProps
  : {
      as: C;
    } & Omit<ComponentProps<C>, "prefix" | "title"> &
      ListItemCommonProps;

export interface ListItemComponent
  extends ForwardRefExoticComponent<ListItemCommonProps> {
  <C extends ElementType = "div">(props: ListItemProps<C>): ReactElement;
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const {
    as = "div",
    children,
    className,
    icon,
    prefix,
    suffix,
    title,
    detail,
    arrowed: arrowedProp,
    hoverable: hoverableProp,
    active: activeProp,
    disabled: disabledProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const {
    active,
    arrowed,
    disabled,
    hoverable: hoverableConfig,
  } = ListConfig.useConfig({
    active: activeProp,
    arrowed: arrowedProp,
    disabled: disabledProp,
    hoverable: hoverableProp,
  });
  const hoverable =
    hoverableConfig !== undefined ? !!hoverableConfig : !!onClick;

  const classes = cn(`${cls}list-item`, {
    [`${cls}rtl`]: isRTL,
    [`${cls}hoverable`]: hoverable,
    [`${cls}active`]: active,
    [`${cls}disabled`]: disabled,
  });

  const handleClick = usePersist((event: MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  });

  const content = (
    <>
      {isRenderableNode(icon) && (
        <span className={`${cls}list-item-icon`}>{icon}</span>
      )}
      <span className={`${cls}list-item-main`}>
        {isRenderableNode(prefix) && (
          <span className={`${cls}list-item-prefix`}>{prefix}</span>
        )}
        <span className={`${cls}list-item-body`}>
          {isRenderableNode(title) && (
            <span className={`${cls}list-item-title`}>{title}</span>
          )}
          <span className={`${cls}list-item-content`}>{children}</span>
          {isRenderableNode(detail) && (
            <span className={`${cls}list-item-detail`}>{detail}</span>
          )}
        </span>
        {isRenderableNode(suffix) && (
          <span className={`${cls}list-item-suffix`}>{suffix}</span>
        )}
        {!!arrowed && (
          <span className={`${cls}list-item-arrow`}>
            {isRTL ? <LeftChevronIcon /> : <RightChevronIcon />}
          </span>
        )}
      </span>
    </>
  );

  return createElement(
    as,
    {
      tabIndex: hoverable && !disabled ? 0 : undefined,
      ...rest,
      ref,
      disabled,
      className: classes,
      onClick: handleClick,
    },
    content
  );
});

export default ListItem;
