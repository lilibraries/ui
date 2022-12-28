import React, { useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { useLayoutMount } from "@lilib/hooks";
import { Theme, Size, Intent, Direction } from "@lilib/ui";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import order from "./order";
import { light, dark } from "./themes";
import "./preview.css";

export const parameters = {
  darkMode: { light, dark },
  options: { storySort: { order } },
  docs: {
    container: function DocsContainer({ children, context }) {
      const isDarkMode = useDarkMode();
      const { size, intent, direction } = context.globals;
      return (
        <Theme value={isDarkMode ? "dark" : "light"}>
          <Size value={size}>
            <Intent value={intent}>
              <Direction value={direction}>
                <BaseContainer
                  context={{
                    ...context,
                    storyById: (id) => {
                      const storyContext = context.storyById(id);
                      return {
                        ...storyContext,
                        parameters: {
                          ...storyContext?.parameters,
                          docs: {
                            ...storyContext?.parameters?.docs,
                            theme: isDarkMode ? dark : light,
                          },
                        },
                      };
                    },
                  }}
                >
                  {children}
                </BaseContainer>
              </Direction>
            </Intent>
          </Size>
        </Theme>
      );
    },
  },
};

export const globalTypes = {
  size: {
    name: "Size",
    toolbar: {
      title: "Size",
      items: [{ value: null, title: "null" }, "small", "large"],
    },
  },
  intent: {
    name: "Intent",
    toolbar: {
      title: "Intent",
      items: [
        { value: null, title: "null" },
        "major",
        "minor",
        "positive",
        "alertive",
        "negative",
      ],
    },
  },
  direction: {
    name: "Direction",
    toolbar: {
      title: "Direction",
      items: [{ value: null, title: "null" }, "ltr", "rtl"],
    },
  },
};

export const decorators = [
  (render, context) => {
    const demoContainerRef = useRef();
    const { size, intent, direction } = context.globals;

    useLayoutMount(() => {
      const wrapper = demoContainerRef.current?.closest(
        ".innerZoomElementWrapper"
      );
      if (wrapper) {
        wrapper.parentNode.style.height = "unset";
      }
    });

    return (
      <Theme value={useDarkMode() ? "dark" : "light"}>
        <Size value={size}>
          <Intent value={intent}>
            <Direction value={direction}>
              <div ref={demoContainerRef}>{render()}</div>
            </Direction>
          </Intent>
        </Size>
      </Theme>
    );
  },
];
