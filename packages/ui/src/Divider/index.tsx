import React, {
  forwardRef,
  ElementType,
  ReactElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";

export type DividerMarginSize =
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x";

export type DividerLabelAlign = "start" | "center" | "end";

export interface DividerCommonProps {
  vertical?: boolean;
  margin?: DividerMarginSize | string | number;
  labelAlign?: DividerLabelAlign;
  labelMargin?: string | number;
  labelPadding?: string | number;
}

export type DividerProps<C extends ElementType = "div"> = C extends "div"
  ? {
      as?: C;
    } & ComponentProps<C> &
      DividerCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      DividerCommonProps;

export interface DividerComponent
  extends ForwardRefExoticComponent<DividerCommonProps> {
  <C extends ElementType = "div">(props: DividerProps<C>): ReactElement;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { children, className, ...rest } = props;

  const { cls } = Prefix.useConfig();
  const classes = cn(`${cls}divider`, className);

  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
}) as DividerComponent;

export default Divider;
