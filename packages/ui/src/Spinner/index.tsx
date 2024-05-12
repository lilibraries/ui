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
  contented?: boolean;
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
    contented: contentedProp,
    startSpace,
    endSpace,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const { base } = Duration.useConfig();
  const { icon: iconConfig, delay } = SpinnerConfig.useConfig({
    icon: iconProp,
    delay: delayProp,
  });

  const hasContent = isRenderable(children);
  const contented = !!contentedProp || hasContent;
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

  if (contented) {
    const marginInlineStart = hasStartSpaceStyle ? startSpace : undefined;
    const marginInlineEnd = hasEndSpaceStyle ? endSpace : undefined;

    const styles = Object.assign(
      {},
      {
        marginInlineStart,
        marginInlineEnd,
      },
      style
    );

    const classes = cn(
      `${cls}spinner`,
      `${cls}contented`,
      {
        [`${cls}start-spaced`]: hasStartSpaceClass,
        [`${cls}end-spaced`]: hasEndSpaceClass,
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
            durations={base}
            exitDelay={delay}
            firstMount
            keepMounted
          >
            <span className={`${cls}spinner-switcher`}>{content}</span>
          </Transition>
        )}
        <Transition in={spinning} classes durations={base} enterDelay={delay}>
          <span className={`${cls}spinner-switcher`}>{icon}</span>
        </Transition>
      </span>
    );
  } else {
    return (
      <Transition in={spinning} classes durations={base} enterDelay={delay}>
        {(status) => {
          const enter =
            status === Transition.ENTERING || status === Transition.ENTERED;
          const marginInlineStart =
            enter && hasStartSpaceStyle ? startSpace : undefined;
          const marginInlineEnd =
            enter && hasEndSpaceStyle ? endSpace : undefined;

          const styles = Object.assign(
            {},
            {
              marginInlineStart,
              marginInlineEnd,
            },
            style
          );

          const classes = cn(
            `${cls}spinner`,
            {
              [`${cls}start-spaced`]: hasStartSpaceClass,
              [`${cls}end-spaced`]: hasEndSpaceClass,
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
