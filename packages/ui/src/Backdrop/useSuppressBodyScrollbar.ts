import { inBrowser } from "@lilib/utils";
import { useIsomorphicLayoutEffect } from "@lilib/hooks";

function hasScrollbar() {
  return (
    document.body.scrollHeight > document.body.clientHeight ||
    document.body.scrollHeight > window.innerHeight
  );
}

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.offsetWidth;
}

function useSuppressBodyScrollbar(enable: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (enable) {
      let el: HTMLStyleElement;

      if (inBrowser) {
        if (hasScrollbar()) {
          el = document.createElement("style");
          el.textContent = `
            body {
              overflow-y: hidden !important;
              width: calc(100% - ${getScrollbarWidth()}px) !important;
            }
          `;
          document.head.append(el);
        }
      }

      return () => {
        if (el) {
          document.head.removeChild(el);
        }
      };
    }
  }, [enable]);
}

export default useSuppressBodyScrollbar;
