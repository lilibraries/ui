import React, {
  ReactNode,
  forwardRef,
  cloneElement,
  RefAttributes,
  isValidElement,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Direction from "../Direction";
import Transition from "../Transition";
import LoaderIcon from "../icons/LoaderIcon";
import Icon, { IconProps } from "../Icon";
import isCSSValue from "../utils/isCSSValue";
import isRenderable from "../utils/isRenderable";
import SpinnerConfig from "./SpinnerConfig";

export * from "./SpinnerConfig";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode;
  delay?: number;
  spinning?: boolean;
  contained?: boolean;
  startSpace?: boolean | number | string;
  endSpace?: boolean | number | string;
}

export interface SpinnerComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<SpinnerProps> & RefAttributes<HTMLSpanElement>
  > {
  Config: typeof SpinnerConfig;
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>((props, ref) => {
  const {
    style,
    children,
    className,
    icon: iconProp,
    delay: delayProp,
    spinning,
    contained: containedProp,
    startSpace,
    endSpace,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { fast } = Duration.useConfig();
  const isRTL = Direction.useConfig() === "rtl";
  const { icon: iconConfig, delay } = SpinnerConfig.useConfig({
    icon: iconProp,
    delay: delayProp,
  });

  const hasContent = isRenderable(children);
  const contained = !!containedProp || hasContent;
  const hasStartSpaceStyle = isCSSValue(startSpace);
  const hasEndSpaceStyle = isCSSValue(endSpace);
  const hasStartSpaceClass = !!startSpace && !hasStartSpaceStyle;
  const hasEndSpaceClass = !!endSpace && !hasEndSpaceStyle;

  let icon: ReactNode;
  if (isRenderable(iconConfig)) {
    icon = iconConfig;
  } else {
    icon = <LoaderIcon />;
  }
  if (isValidElement(icon) && icon.type === Icon) {
    icon = cloneElement<IconProps>(icon as any, { spinning: true });
  } else {
    icon = <Icon spinning>{icon}</Icon>;
  }

  if (contained) {
    const start = hasStartSpaceStyle ? startSpace : undefined;
    const end = hasEndSpaceStyle ? endSpace : undefined;

    const styles = Object.assign(
      {},
      isRTL
        ? { marginLeft: end, marginRight: start }
        : { marginLeft: start, marginRight: end },
      style
    );

    const classes = cn(
      `${cls}spinner`,
      `${cls}contained`,
      {
        [`${cls}left-spaced`]: isRTL ? hasEndSpaceClass : hasStartSpaceClass,
        [`${cls}right-spaced`]: isRTL ? hasStartSpaceClass : hasEndSpaceClass,
      },
      className
    );

    let content: ReactNode;
    if (hasContent) {
      if (isValidElement(children) && children.type === Icon) {
        content = children;
      } else {
        content = <Icon>{children}</Icon>;
      }
    }

    return (
      <span {...rest} ref={ref} style={styles} className={classes}>
        {hasContent && (
          <Transition
            in={!spinning}
            classes
            durations={fast}
            exitDelay={delay}
            firstMount
            keepMounted
          >
            <span className={`${cls}spinner-switcher`}>{content}</span>
          </Transition>
        )}
        <Transition in={spinning} classes durations={fast} enterDelay={delay}>
          <span className={`${cls}spinner-switcher`}>{icon}</span>
        </Transition>
      </span>
    );
  } else {
    return (
      <Transition in={spinning} classes durations={fast} enterDelay={delay}>
        {(status) => {
          const enter =
            status === Transition.ENTERING || status === Transition.ENTERED;
          const start = enter && hasStartSpaceStyle ? startSpace : undefined;
          const end = enter && hasEndSpaceStyle ? endSpace : undefined;

          const styles = Object.assign(
            {},
            isRTL
              ? { marginLeft: end, marginRight: start }
              : { marginLeft: start, marginRight: end },
            style
          );

          const classes = cn(
            `${cls}spinner`,
            `${cls}standalone`,
            {
              [`${cls}left-spaced`]: isRTL
                ? hasEndSpaceClass
                : hasStartSpaceClass,
              [`${cls}right-spaced`]: isRTL
                ? hasStartSpaceClass
                : hasEndSpaceClass,
            },
            className
          );

          return (
            <span {...rest} ref={ref} style={styles} className={classes}>
              {icon}
            </span>
          );
        }}
      </Transition>
    );
  }
}) as SpinnerComponent;

Spinner.Config = SpinnerConfig;

export default Spinner;
