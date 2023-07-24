import { useClickOutside, useEventListener } from "@lilib/hooks";
import { EffectTarget, inBrowser, isPageVisible } from "@lilib/utils";

export interface CloseEventOptions {
  closeOnEscape?: boolean;
  closeOnPageHide?: boolean;
  closeOnWindowBlur?: boolean;
  closeOnClickOutside?: EffectTarget<Node> | EffectTarget<Node>[];
  closeOnDocumentClick?: boolean;
}

function useCloseEvent(listener: () => void, options: CloseEventOptions) {
  const {
    closeOnEscape,
    closeOnPageHide,
    closeOnWindowBlur,
    closeOnClickOutside,
    closeOnDocumentClick,
  } = options;

  useEventListener(
    inBrowser && closeOnEscape ? document : null,
    "keydown",
    (event: KeyboardEvent) => {
      if (!event.repeat) {
        if (event.key === "Escape") {
          listener();
        }
      }
    }
  );

  useEventListener(
    inBrowser && closeOnPageHide ? document : null,
    "visibilitychange",
    () => {
      if (!isPageVisible()) {
        listener();
      }
    }
  );

  useEventListener(
    inBrowser && closeOnWindowBlur ? window : null,
    "blur",
    listener
  );

  useClickOutside(
    inBrowser && closeOnClickOutside ? closeOnClickOutside : null,
    listener
  );

  useEventListener(
    inBrowser && closeOnDocumentClick ? document : null,
    "click",
    listener
  );
}

export default useCloseEvent;
