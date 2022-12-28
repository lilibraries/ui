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
import Collapse from "../Collapse";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import LoaderIcon from "../icons/LoaderIcon";
import isRenderableNode from "../utils/isRenderableNode";
import LoaderConfig from "./LoaderConfig";

export * from "./LoaderConfig";
export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeValue;
  icon?: ReactNode;
  message?: ReactNode;
  delay?: number;
  loading?: boolean;
}
export type LoaderComponent = ForwardRefExoticComponent<
  PropsWithoutRef<LoaderProps> & RefAttributes<HTMLDivElement>
> & {
  Config: typeof LoaderConfig;
};

const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    icon: iconProp,
    message: messageProp,
    delay: delayProp,
    loading,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const { fast } = Duration.useConfig();
  const contained = isRenderableNode(children);
  const {
    icon: iconConfig,
    delay,
    message,
  } = LoaderConfig.useConfig({
    icon: iconProp,
    delay: delayProp,
    message: messageProp,
  });

  let icon: ReactNode;
  if (isRenderableNode(iconConfig)) {
    icon = iconConfig;
  } else {
    icon = <LoaderIcon />;
  }
  if (isValidElement(icon) && icon.type === Icon) {
    icon = cloneElement<IconProps>(icon as any, {
      spinning: true,
      className: cn(`${cls}loader-icon`, icon.props.className),
    });
  } else {
    icon = (
      <Icon spinning className={`${cls}loader-icon`}>
        {icon}
      </Icon>
    );
  }

  const classes = cn(
    `${cls}loader`,
    {
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
      [`${cls}${size}`]: size,
    },
    className
  );

  if (contained) {
    return (
      <div {...rest} ref={ref} className={classes}>
        <Transition
          in={loading}
          durations={fast}
          enterDelay={delay}
          classNames={{
            [Transition.ENTER]: true,
            [Transition.ENTERING]: true,
            [Transition.ENTERED]: true,
          }}
        >
          <div className={`${cls}loader-content`}>{children}</div>
        </Transition>
        <Transition
          unmountOnExit
          in={loading}
          durations={fast}
          enterDelay={delay}
          classNames={{
            [Transition.ENTER]: true,
            [Transition.EXIT]: true,
            [Transition.EXITING]: true,
          }}
        >
          <div className={`${cls}loader-mask`}>
            {icon}
            {isRenderableNode(message) && (
              <div className={`${cls}loader-message`}>{message}</div>
            )}
          </div>
        </Transition>
      </div>
    );
  } else {
    return (
      <Duration scoped base={fast}>
        <Collapse
          {...rest}
          ref={ref}
          className={classes}
          open={loading}
          openDelay={delay}
          unmountOnClose
        >
          <div className={`${cls}loader-content`}>
            {icon}
            {isRenderableNode(message) && (
              <div className={`${cls}loader-message`}>{message}</div>
            )}
          </div>
        </Collapse>
      </Duration>
    );
  }
}) as LoaderComponent;

Loader.Config = LoaderConfig;

export default Loader;
