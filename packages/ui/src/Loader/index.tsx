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
import Collapse from "../Collapse";
import Transition from "../Transition";
import Size, { SizeValue } from "../Size";
import Icon, { IconProps } from "../Icon";
import LoaderIcon from "../icons/LoaderIcon";
import isRenderable from "../utils/isRenderable";
import LoaderConfig from "./LoaderConfig";

export * from "./LoaderConfig";

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeValue;
  icon?: ReactNode;
  message?: ReactNode;
  delay?: number;
  loading?: boolean;
}

export interface LoaderComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<LoaderProps> & RefAttributes<HTMLDivElement>
  > {
  Config: typeof LoaderConfig;
}

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
  const contained = isRenderable(children);

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
  if (isRenderable(iconConfig)) {
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
      [`${cls}${size}`]: size,
      [`${cls}contained`]: contained,
      [`${cls}standalone`]: !contained,
    },
    className
  );

  if (contained) {
    return (
      <div {...rest} ref={ref} className={classes}>
        <Transition
          in={loading}
          classes
          durations={fast}
          enterDelay={delay}
          firstMount
          keepMounted
        >
          <div className={`${cls}loader-content`}>{children}</div>
        </Transition>
        <Transition in={loading} classes durations={fast} enterDelay={delay}>
          <div className={`${cls}loader-mask`}>
            {icon}
            {isRenderable(message) && (
              <div className={`${cls}loader-message`}>{message}</div>
            )}
          </div>
        </Transition>
      </div>
    );
  } else {
    return (
      <Collapse
        {...rest}
        ref={ref}
        className={classes}
        open={loading}
        openDelay={delay}
      >
        <div className={`${cls}loader-content`}>
          {icon}
          {isRenderable(message) && (
            <div className={`${cls}loader-message`}>{message}</div>
          )}
        </div>
      </Collapse>
    );
  }
}) as LoaderComponent;

Loader.Config = LoaderConfig;

export default Loader;
