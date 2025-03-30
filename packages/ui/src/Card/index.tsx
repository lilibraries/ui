import React, {
  ReactNode,
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  CSSProperties,
  ComponentProps,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import Direction from "../Direction";
import isCSSValue from "../utils/isCSSValue";
import isRenderable from "../utils/isRenderable";

export type CardImagePlacement = "top" | "bottom" | "start" | "end";

export interface CardCommonProps {
  icon?: ReactNode;
  title?: ReactNode;
  headnote?: ReactNode;
  headmark?: ReactNode;
  footnote?: ReactNode;
  footmark?: ReactNode;
  image?: string | ReactNode;
  imageSize?: string | number;
  imagePlacement?: CardImagePlacement;
  splited?: boolean;
  shadowed?: boolean;
  hoverable?: boolean;
  unpadding?: boolean;
  borderless?: boolean;
  renderHeader?: (header: ReactElement | null) => ReactElement | null;
  renderFooter?: (footer: ReactElement | null) => ReactElement | null;
}

export type CardProps<C extends ElementType = "div"> = C extends "div"
  ? Omit<ComponentProps<C>, "title"> & CardCommonProps & { as?: C }
  : Omit<ComponentProps<C>, "title"> & CardCommonProps & { as: C };

export interface CardComponent extends ForwardRefExoticComponent<CardCommonProps> {
  <C extends ElementType = "div">(props: CardProps<C>): ReactElement;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    as = "div",
    icon,
    title,
    headnote,
    headmark,
    footnote,
    footmark,
    image: imageProp,
    imageSize = "100px",
    imagePlacement = "top",
    splited,
    shadowed,
    hoverable,
    unpadding,
    borderless,
    renderHeader,
    renderFooter,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const isRTL = Direction.useConfig() === "rtl";

  const hasIcon = isRenderable(icon);
  const hasTitle = isRenderable(title);
  const hasHeadnote = isRenderable(headnote);
  const hasHeadmark = isRenderable(headmark);
  const hasFootnote = isRenderable(footnote);
  const hasFootmark = isRenderable(footmark);

  let image: ReactNode = null;
  let header: ReactElement | null = null;
  let footer: ReactElement | null = null;
  let hasImage = false;
  let hasHeader = hasIcon || hasTitle || hasHeadnote || hasHeadmark;
  let hasFooter = hasFootnote || hasFootmark;

  if (imageProp) {
    let style: CSSProperties | undefined;
    if (isCSSValue(imageSize)) {
      if (imagePlacement === "top" || imagePlacement === "bottom") {
        style = { height: imageSize };
      }
      if (imagePlacement === "start" || imagePlacement === "end") {
        style = { width: imageSize };
      }
    }
    image = (
      <div style={style} className={`${cls}card-image`}>
        {isString(imageProp) ? <img src={imageProp} /> : imageProp}
      </div>
    );
    hasImage = true;
  }

  if (hasHeader) {
    header = (
      <div className={`${cls}card-header`}>
        {isRenderable(icon) && <span className={`${cls}card-icon`}>{icon}</span>}
        <span className={`${cls}card-title`}>{title}</span>
        {isRenderable(headnote) && <span className={`${cls}card-headnote`}>{headnote}</span>}
        {isRenderable(headmark) && <span className={`${cls}card-headmark`}>{headmark}</span>}
      </div>
    );
  }

  if (hasFooter) {
    footer = (
      <div className={`${cls}card-footer`}>
        <span className={`${cls}card-footnote`}>{footnote}</span>
        {hasFootmark && <span className={`${cls}card-footmark`}>{footmark}</span>}
      </div>
    );
  }

  if (renderHeader) {
    header = renderHeader(header);
  }
  if (renderFooter) {
    footer = renderFooter(footer);
  }
  hasHeader = isRenderable(header);
  hasFooter = isRenderable(footer);

  const classes = cn(
    `${cls}card`,
    {
      [`${cls}rtl`]: isRTL,
      [`${cls}splited`]: splited,
      [`${cls}shadowed`]: shadowed,
      [`${cls}hoverable`]: hoverable,
      [`${cls}unpadding`]: unpadding,
      [`${cls}borderless`]: borderless,
      [`${cls}with-header`]: hasHeader,
      [`${cls}with-footer`]: hasFooter,
      [`${cls}image-placement-${imagePlacement}`]: hasImage,
    },
    className
  );

  return createElement(
    as,
    {
      tabIndex: hoverable ? 0 : undefined,
      ...rest,
      ref,
      className: classes,
    },
    image,
    <div className={`${cls}card-main`}>
      {header}
      {isRenderable(children) && <div className={`${cls}card-content`}>{children}</div>}
      {footer}
    </div>
  );
}) as CardComponent;

export default Card;
