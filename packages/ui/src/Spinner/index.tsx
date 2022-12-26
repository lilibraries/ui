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
import Icon, { IconProps } from "../Icon";
import Prefix from "../Prefix";
import Duration from "../Duration";
import Transition from "../Transition";
import LoaderIcon from "../_icons/LoaderIcon";
import isRenderableNode from "../_utils/isRenderableNode";
import isCSSPropertyValue from "../_utils/isCSSPropertyValue";
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
export type SpinnerComponent = ForwardRefExoticComponent<
  PropsWithoutRef<SpinnerProps> & RefAttributes<HTMLSpanElement>
> & {
  Config: typeof SpinnerConfig;
};

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

  const prefix = Prefix.useConfig();
  const { fast } = Duration.useConfig();
  const { icon: iconConfig, delay } = SpinnerConfig.useConfig({
    icon: iconProp,
    delay: delayProp,
  });

  const hasContent = isRenderableNode(children);
  const contained = !!containedProp || hasContent;
  const hasStartSpaceStyle = isCSSPropertyValue(startSpace);
  const hasEndSpaceStyle = isCSSPropertyValue(endSpace);
  const hasStartSpaceClass = !!startSpace && !hasStartSpaceStyle;
  const hasEndSpaceClass = !!endSpace && !hasEndSpaceStyle;

  let icon: ReactNode;
  if (isRenderableNode(iconConfig)) {
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
    const styles = Object.assign(
      {},
      {
        marginLeft: hasStartSpaceStyle ? startSpace : undefined,
        marginRight: hasEndSpaceStyle ? endSpace : undefined,
      },
      style
    );

    const classes = cn(
      `${prefix}spinner`,
      `${prefix}contained`,
      {
        [`${prefix}start-spaced`]: hasStartSpaceClass,
        [`${prefix}end-spaced`]: hasEndSpaceClass,
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
            durations={fast}
            exitDelay={delay}
            classNames={{
              [Transition.ENTER]: true,
              [Transition.EXIT]: true,
              [Transition.EXITING]: true,
              [Transition.EXITED]: true,
            }}
          >
            <span className={`${prefix}spinner-switcher`}>{content}</span>
          </Transition>
        )}
        <Transition
          in={spinning}
          durations={fast}
          enterDelay={delay}
          classNames={{
            [Transition.ENTER]: true,
            [Transition.EXIT]: true,
            [Transition.EXITING]: true,
            [Transition.EXITED]: true,
          }}
        >
          <span className={`${prefix}spinner-switcher`}>{icon}</span>
        </Transition>
      </span>
    );
  } else {
    return (
      <Transition
        unmountOnExit
        in={spinning}
        durations={fast}
        enterDelay={delay}
        classNames={{
          [Transition.ENTER]: true,
          [Transition.EXIT]: true,
          [Transition.EXITING]: true,
        }}
      >
        {(status) => {
          const enter =
            status === Transition.ENTERING || status === Transition.ENTERED;

          const styles = Object.assign(
            {},
            {
              marginLeft: enter && hasStartSpaceStyle ? startSpace : undefined,
              marginRight: enter && hasEndSpaceStyle ? endSpace : undefined,
            },
            style
          );

          const classes = cn(
            `${prefix}spinner`,
            `${prefix}standalone`,
            {
              [`${prefix}start-spaced`]: enter && hasStartSpaceClass,
              [`${prefix}end-spaced`]: enter && hasEndSpaceClass,
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
