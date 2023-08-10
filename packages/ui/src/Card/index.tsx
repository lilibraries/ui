import React, {
  forwardRef,
  ElementType,
  ReactElement,
  createElement,
  ComponentProps,
  ForwardRefExoticComponent,
  ReactNode,
} from "react";
import cn from "classnames";
import isString from "lodash/isString";
import Prefix from "../Prefix";
import Image, { ImageProps } from "../Image";
import isRenderableNode from "../utils/isRenderableNode";

export interface CardCommonProps {
  icon?: ReactNode;
  title?: ReactNode;
  headnote?: ReactNode;
  headmark?: ReactNode;
  footnote?: ReactNode;
  footmark?: ReactNode;
  image?: string | ImageProps;
  imagePlacement?: "top" | "bottom" | "start" | "end";
  splited?: boolean;
  shadowed?: boolean;
  hoverable?: boolean;
  unpadding?: boolean;
  borderless?: boolean;
  renderHeader?: (header: ReactNode) => ReactNode;
  renderFooter?: (footer: ReactNode) => ReactNode;
}

export type CardProps<C extends ElementType = "div"> = C extends "div"
  ? {
      as?: C;
    } & ComponentProps<C> &
      CardCommonProps
  : {
      as: C;
    } & ComponentProps<C> &
      CardCommonProps;

export interface CardComponent
  extends ForwardRefExoticComponent<CardCommonProps> {
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
    imagePlacement,
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

  const hasIcon = isRenderableNode(icon);
  const hasTitle = isRenderableNode(title);
  const hasHeadnote = isRenderableNode(headnote);
  const hasHeadmark = isRenderableNode(headmark);
  const hasFootnote = isRenderableNode(footnote);
  const hasFootmark = isRenderableNode(footmark);

  let image: ReactNode = null;
  let header: ReactNode = null;
  let footer: ReactNode = null;
  let hasImage = false;
  let hasHeader = hasIcon || hasTitle || hasHeadnote || hasHeadmark;
  let hasFooter = hasFootnote || hasFootmark;

  if (!!imageProp) {
    if (isString(imageProp)) {
      image = <Image src={imageProp} />;
    } else {
      image = <Image {...imageProp} />;
    }
  }
  if (image) {
    image = <div className={`${cls}card-image`}>{image}</div>;
    hasImage = true;
  }

  if (hasHeader) {
    header = (
      <div className={`${cls}card-header`}>
        {isRenderableNode(icon) && (
          <span className={`${cls}card-icon`}>{icon}</span>
        )}
        <span className={`${cls}card-title`}>{title}</span>
        {isRenderableNode(headnote) && (
          <span className={`${cls}card-headnote`}>{headnote}</span>
        )}
        {isRenderableNode(headmark) && (
          <span className={`${cls}card-headmark`}>{headmark}</span>
        )}
      </div>
    );
  }
  if (hasFooter) {
    footer = (
      <div className={`${cls}card-footer`}>
        <span className={`${cls}card-footnote`}>{footnote}</span>
        <span className={`${cls}card-footmark`}>{footmark}</span>
      </div>
    );
  }

  if (renderHeader) {
    header = renderHeader(header);
  }
  if (renderFooter) {
    footer = renderFooter(footer);
  }
  hasHeader = isRenderableNode(header);
  hasFooter = isRenderableNode(footer);

  const classes = cn(
    `${cls}card`,
    {
      [`${cls}splited`]: splited,
      [`${cls}shadowed`]: shadowed,
      [`${cls}hoverable`]: hoverable,
      [`${cls}unpadding`]: unpadding,
      [`${cls}borderless`]: borderless,
      [`${cls}has-image`]: hasImage,
      [`${cls}has-header`]: hasHeader,
      [`${cls}has-footer`]: hasFooter,
    },
    className
  );

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: classes,
    },
    image,
    <div className={`${cls}card-main`}>
      {header}
      <div className={`${cls}card-content`}>{children}</div>
      {footer}
    </div>
  );
}) as CardComponent;

export default Card;
