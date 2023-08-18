import React, {
  useRef,
  ReactNode,
  MouseEvent,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  isValidElement,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import {
  usePersist,
  useSafeState,
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";
import Prefix from "../Prefix";
import Direction from "../Direction";
import LeftChevronIcon from "../icons/LeftChevronIcon";
import RightChevronIcon from "../icons/RightChevronIcon";
import isRenderableNode from "../utils/isRenderableNode";
import List from "./List";
import ListConfig, { ListConfigValue } from "./ListConfig";

export interface ListItemCommonProps extends ListConfigValue {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label?: ReactNode;
  title?: ReactNode;
  detail?: ReactNode;
  active?: boolean;
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
    style,
    className,
    icon,
    prefix,
    suffix,
    label,
    title,
    detail,
    active,
    arrowed: arrowedProp,
    arrowIcon: arrowIconProp,
    hoverable: hoverableProp,
    disabled: disabledProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const {
    indent = 0,
    arrowed,
    arrowIcon,
    disabled,
    hoverable: hoverableConfig,
  } = ListConfig.useConfig({
    arrowed: arrowedProp,
    arrowIcon: arrowIconProp,
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

  const iconRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [increasedIndent, setIncreasedIndent] = useSafeState(0);

  useIsomorphicLayoutEffect(() => {
    if (isRenderableNode(children)) {
      let newIncreasedIndent = 0;
      if (iconRef.current) {
        newIncreasedIndent = iconRef.current.clientWidth;
      } else if (innerRef.current) {
        const style = window.getComputedStyle(innerRef.current);
        const padding = isRTL ? style.paddingRight : style.paddingLeft;
        if (padding) {
          newIncreasedIndent = window.parseInt(padding, 10);
        }
      }
      if (newIncreasedIndent !== increasedIndent) {
        setIncreasedIndent(newIncreasedIndent);
      }
    }
  });

  const inner = (
    <div ref={innerRef} className={`${cls}list-item-inner`}>
      {isRenderableNode(icon) && (
        <div ref={iconRef} className={`${cls}list-item-icon`}>
          {icon}
        </div>
      )}
      <div className={`${cls}list-item-main`}>
        {isRenderableNode(prefix) && (
          <div className={`${cls}list-item-prefix`}>{prefix}</div>
        )}
        <div className={`${cls}list-item-info`}>
          {isRenderableNode(title) && (
            <div className={`${cls}list-item-title`}>{title}</div>
          )}
          <div className={`${cls}list-item-label`}>{label}</div>
          {isRenderableNode(detail) && (
            <div className={`${cls}list-item-detail`}>{detail}</div>
          )}
        </div>
        {isRenderableNode(suffix) && (
          <div className={`${cls}list-item-suffix`}>{suffix}</div>
        )}
        {!!arrowed && (
          <div className={`${cls}list-item-arrow`}>
            {isRenderableNode(arrowIcon) ? (
              arrowIcon
            ) : isRTL ? (
              <LeftChevronIcon />
            ) : (
              <RightChevronIcon />
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {createElement(
        as,
        {
          tabIndex: hoverable && !disabled ? 0 : undefined,
          ...rest,
          ref,
          disabled,
          style:
            indent > 0
              ? {
                  paddingLeft: !isRTL ? indent : undefined,
                  paddingRight: isRTL ? indent : undefined,
                  ...style,
                }
              : style,
          className: classes,
          onClick: handleClick,
        },
        inner
      )}
      {isRenderableNode(children) && (
        <ListConfig indent={indent + increasedIndent}>
          {isValidElement(children) && children.type === List ? (
            children
          ) : (
            <List>{children}</List>
          )}
        </ListConfig>
      )}
    </>
  );
});

export default ListItem;
