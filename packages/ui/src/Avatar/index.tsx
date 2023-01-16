import React, {
  useRef,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import isString from "lodash/isString";
import ResizeObserver from "resize-observer-polyfill";
import {
  usePersist,
  useUnmount,
  useComposedRef,
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";
import { inBrowser } from "@lilib/utils";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import Image, { ImageProps } from "../Image";
import { PresetColor } from "../types";
import AvatarGroup from "./AvatarGroup";
import AvatarConfig from "./AvatarConfig";

export * from "./AvatarGroup";
export * from "./AvatarConfig";

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  size?: SizeValue;
  image?: string | ImageProps;
  round?: boolean;
  color?: PresetColor;
  outlined?: boolean;
  clickable?: boolean;
}

export interface AvatarComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<AvatarProps> & RefAttributes<HTMLSpanElement>
  > {
  Group: typeof AvatarGroup;
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    image,
    round: roundProp,
    color: colorProp,
    outlined: outlinedProp,
    clickable: clickableProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  const { round, color, outlined, clickable } = AvatarConfig.useConfig({
    round: roundProp,
    color: colorProp,
    outlined: outlinedProp,
    clickable: clickableProp,
  });

  const classes = cn(
    `${cls}avatar`,
    {
      [`${cls}${size}`]: size,
      [`${cls}round`]: round,
      [`${cls}${color}`]: color,
      [`${cls}outlined`]: outlined,
      [`${cls}clickable`]: clickable !== undefined ? !!clickable : !!onClick,
    },
    className
  );

  const wrapperRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<ResizeObserver>();

  const clearObserver = usePersist(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = undefined;
    }
  });

  const scale = usePersist(() => {
    if (wrapperRef.current && contentRef.current) {
      const wrapperWidth = wrapperRef.current.clientWidth * 0.75;
      const wrapperHeight = wrapperRef.current.clientHeight * 0.75;
      const contentWidth = contentRef.current.clientWidth;
      const contentHeight = contentRef.current.clientHeight;

      if (contentWidth > wrapperWidth || contentHeight > wrapperHeight) {
        const scale = Math.min(
          wrapperWidth / contentWidth,
          wrapperHeight / contentHeight
        );
        contentRef.current.style.transform = `scale(${scale}) translate(-50%, -50%)`;
      } else {
        contentRef.current.style.transform = "translate(-50%, -50%)";
      }
    }
  });

  useIsomorphicLayoutEffect(() => {
    scale();
    clearObserver();
    if (inBrowser && !image && wrapperRef.current && contentRef.current) {
      observerRef.current = new ResizeObserver(scale);
      observerRef.current.observe(wrapperRef.current);
      observerRef.current.observe(contentRef.current);
    }
  }, [!image]);

  useUnmount(clearObserver);

  return (
    <span
      {...rest}
      ref={useComposedRef(wrapperRef, ref)}
      className={classes}
      onClick={onClick}
    >
      {!!image ? (
        isString(image) ? (
          <Image src={image} />
        ) : (
          <Image {...image} />
        )
      ) : (
        <span ref={contentRef} className={`${cls}avatar-content`}>
          {children}
        </span>
      )}
    </span>
  );
}) as AvatarComponent;

Avatar.Group = AvatarGroup;

export default Avatar;
