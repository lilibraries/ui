import React, {
  useRef,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import isString from "lodash/isString";
import ResizeObserver from "resize-observer-polyfill";
import { usePersist, useUnmount, useComposedRef, useIsomorphicLayoutEffect } from "@lilib/hooks";
import { inBrowser } from "@lilib/utils";
import Prefix from "../Prefix";
import Size, { SizeValue } from "../Size";
import Image, { ImageProps } from "../Image";
import { ColorValue } from "../utils/types";
import AvatarGroup from "./AvatarGroup";
import AvatarConfig, { AvatarVariant } from "./AvatarConfig";

export * from "./AvatarGroup";
export * from "./AvatarConfig";

export interface AvatarCommonProps {
  variant?: AvatarVariant;
  size?: SizeValue;
  image?: string | ImageProps;
  round?: boolean;
  color?: ColorValue;
  outlined?: boolean;
  hoverable?: boolean;
}

export type AvatarProps<C extends ElementType = "span"> = C extends "span"
  ? {
      as?: C;
    } & ComponentProps<C> &
      AvatarCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      AvatarCommonProps;

export interface AvatarComponent extends ForwardRefExoticComponent<AvatarCommonProps> {
  <C extends ElementType = "span">(props: AvatarProps<C>): ReactElement;
  Group: typeof AvatarGroup;
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    children,
    className,
    as = "span",
    variant: variantProp,
    size: sizeProp,
    image,
    round: roundProp,
    color: colorProp,
    outlined: outlinedProp,
    hoverable: hoverableProp,
    onClick,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  const { variant, round, color, outlined, hoverable } = AvatarConfig.useConfig({
    variant: variantProp,
    round: roundProp,
    color: colorProp,
    outlined: outlinedProp,
    hoverable: hoverableProp,
  });

  const classes = cn(
    `${cls}avatar`,
    {
      [`${cls}${size}`]: size,
      [`${cls}${variant}`]: variant,
      [`${cls}round`]: round,
      [`${cls}${color}`]: color,
      [`${cls}outlined`]: outlined,
      [`${cls}hoverable`]: hoverable !== undefined ? !!hoverable : !!onClick,
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
        const scale = Math.min(wrapperWidth / contentWidth, wrapperHeight / contentHeight);
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

  return createElement<AvatarProps>(
    as,
    {
      tabIndex: hoverable ? 0 : undefined,
      ...rest,
      ref: useComposedRef(wrapperRef, ref),
      onClick: onClick,
      className: classes,
    },
    !!image ? (
      isString(image) ? (
        <Image src={image} />
      ) : (
        <Image {...image} />
      )
    ) : (
      <span ref={contentRef} className={`${cls}avatar-content`}>
        {children}
      </span>
    )
  );
}) as AvatarComponent;

Avatar.Group = AvatarGroup;

export default Avatar;
