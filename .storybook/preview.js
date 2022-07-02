import React, { useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { useLayoutMount } from "@lilib/hooks";
import { Theme, Size, Compact } from "@lilib/ui";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import order from "./order";
import { light, dark } from "./themes";

export const parameters = {
  darkMode: { light, dark },
  options: { storySort: { order } },
  docs: {
    container: function DocsContainer({ children, context }) {
      const isDarkMode = useDarkMode();
      const { size, compact = null } = context.globals;
      return (
        <Theme value={isDarkMode ? "dark" : "light"}>
          <Size value={size}>
            <Compact value={compact}>
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
            </Compact>
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
      showName: true,
      items: [{ value: null, title: "null" }, "small", "large"],
    },
  },
  compact: {
    name: "Compact",
    toolbar: {
      showName: true,
      items: [
        { value: null, title: "null" },
        { value: true, title: "true" },
        { value: false, title: "false" },
      ],
    },
  },
};

export const decorators = [
  (render, context) => {
    const { size, compact = null } = context.globals;
    const demoContainerRef = useRef();

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
          <Compact value={compact}>
            <div ref={demoContainerRef}>{render()}</div>
          </Compact>
        </Size>
      </Theme>
    );
  },
];
