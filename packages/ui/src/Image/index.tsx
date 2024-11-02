import "intersection-observer";
import React, { useRef, forwardRef, ImgHTMLAttributes } from "react";
import { inBrowser } from "@lilib/utils";
import {
  useUpdate,
  usePersist,
  useUnmount,
  useSafeState,
  useComposedRef,
  useIsomorphicLayoutEffect,
} from "@lilib/hooks";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "children"> {
  fallback?: string;
  placeholder?: string;
}

interface ImageState {
  alt?: string;
  src?: string;
  srcSet?: string;
  visibility?: "hidden";
}

const supportNativeLazyLoading = inBrowser && "loading" in HTMLImageElement.prototype;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    children,
    style,
    alt: altProp,
    src: srcProp,
    srcSet: srcSetProp,
    loading: loadingProp,
    sizes,
    decoding,
    crossOrigin,
    referrerPolicy,
    fallback,
    placeholder,
    onError,
    ...rest
  } = props;

  const isLazy = loadingProp === "lazy";
  const isNativeLazy = isLazy && supportNativeLazyLoading && !placeholder;
  const isCustomLazy = isLazy && inBrowser && !isNativeLazy;
  const hasSource = !!srcProp || !!srcSetProp;

  const [state, setState] = useSafeState<ImageState>(() => {
    let alt: string | undefined;
    let src: string | undefined;
    let srcSet: string | undefined;
    let visibility: "hidden" | undefined;
    if (isCustomLazy) {
      visibility = "hidden";
    } else {
      alt = altProp;
      if (placeholder) {
        src = placeholder;
      } else if (hasSource) {
        src = srcProp;
        srcSet = srcSetProp;
      } else if (fallback) {
        src = fallback;
      }
    }
    return { alt, src, srcSet, visibility };
  });
  const { alt, src, srcSet, visibility } = state;

  const handleError = usePersist((event: any) => {
    if (fallback && src !== fallback) {
      setState({ alt: altProp, src: fallback });
    }
    if (onError) {
      onError(event);
    }
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const composedRef = useComposedRef(imageRef, ref);
  const preloadRef = useRef<HTMLImageElement>();
  const observerRef = useRef<IntersectionObserver>();

  const clearPreload = usePersist(() => {
    if (preloadRef.current) {
      preloadRef.current.src = "";
      preloadRef.current.srcset = "";
      preloadRef.current.onload = null;
      preloadRef.current = undefined;
    }
  });

  const clearObserver = usePersist(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = undefined;
    }
  });

  const preloadSource = usePersist(() => {
    clearPreload();
    if (inBrowser && hasSource) {
      preloadRef.current = new window.Image();
      if (sizes !== undefined) {
        preloadRef.current.sizes = sizes;
      }
      if (decoding !== undefined) {
        preloadRef.current.decoding = decoding;
      }
      if (crossOrigin !== undefined) {
        preloadRef.current.crossOrigin = crossOrigin;
      }
      if (referrerPolicy !== undefined) {
        preloadRef.current.referrerPolicy = referrerPolicy;
      }
      if (srcProp !== undefined) {
        preloadRef.current.src = srcProp;
      }
      if (srcSetProp !== undefined) {
        preloadRef.current.srcset = srcSetProp;
      }
      if (preloadRef.current.complete) {
        setState({ alt: altProp, src: srcProp, srcSet: srcSetProp });
        return true;
      } else {
        preloadRef.current.onload = () => {
          clearPreload();
          setState({ alt: altProp, src: srcProp, srcSet: srcSetProp });
        };
      }
    } else {
      setState({ alt: altProp, src: srcProp, srcSet: srcSetProp });
      return true;
    }
    return false;
  });

  const updateSource = usePersist(() => {
    clearPreload();
    if (placeholder) {
      if (!hasSource || !preloadSource()) {
        setState({ alt: altProp, src: placeholder });
      }
    } else if (hasSource) {
      setState({ alt: altProp, src: srcProp, srcSet: srcSetProp });
    } else if (fallback) {
      setState({ alt: altProp, src: fallback });
    }
  });

  const handleIntersect = usePersist((entries: IntersectionObserverEntry[]) => {
    if (entries && entries[0] && entries[0].isIntersecting) {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      updateSource();
    }
  });

  if (!observerRef.current && isCustomLazy) {
    observerRef.current = new IntersectionObserver(handleIntersect);
  }

  useIsomorphicLayoutEffect(() => {
    if (isCustomLazy && imageRef.current && observerRef.current) {
      observerRef.current.observe(imageRef.current);
    } else if (src === placeholder && hasSource) {
      preloadSource();
    }
  }, []);

  useUpdate(() => {
    clearObserver();
    if (isCustomLazy) {
      observerRef.current = new IntersectionObserver(handleIntersect);
    }
  }, [isCustomLazy]);

  useUpdate(() => {
    if (isCustomLazy && imageRef.current && observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current.observe(imageRef.current);
    } else {
      updateSource();
    }
  }, [srcProp, srcSetProp, fallback, placeholder, isCustomLazy]);

  useUnmount(() => {
    clearPreload();
    clearObserver();
  });

  return (
    <img
      {...rest}
      key={fallback}
      ref={composedRef}
      style={{ visibility, ...style }}
      alt={alt}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      decoding={decoding}
      crossOrigin={crossOrigin}
      referrerPolicy={referrerPolicy}
      loading={isLazy ? (isNativeLazy ? "lazy" : undefined) : loadingProp}
      onError={handleError}
    />
  );
});

export default Image;
