import { inBrowser } from "@lilib/utils";
import { useIsomorphicLayoutEffect } from "@lilib/hooks";

function hasScrollbar() {
  return document.body.scrollHeight > document.body.clientHeight || document.body.scrollHeight > window.innerHeight;
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.offsetWidth;
}

function useSuppressBodyScrollbar(enable: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (enable) {
      let styleElement: HTMLStyleElement;

      if (inBrowser) {
        if (hasScrollbar()) {
          styleElement = document.createElement("style");
          const scrollbarWidth = getScrollbarWidth();
          let styleContent = "body { overflow-y: hidden !important;";
          if (scrollbarWidth) {
            styleContent = styleContent + `width: calc(100% - ${scrollbarWidth}px) !important;`;
          }
          styleContent = styleContent + "}";
          styleElement.textContent = styleContent;
          document.head.append(styleElement);
        }
      }

      return () => {
        if (styleElement) {
          document.head.removeChild(styleElement);
        }
      };
    }
  }, [enable]);
}

export default useSuppressBodyScrollbar;
