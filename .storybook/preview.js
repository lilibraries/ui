import React, { useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { useLayoutMount } from "@lilib/hooks";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { Root, Baseline, Theme, Size, Intent, Direction } from "@lilib/ui";
import order from "./order";
import { light, dark } from "./themes";
import "./preview.scss";

export const parameters = {
  darkMode: { light, dark },
  options: { storySort: { order } },
  docs: {
    container: function DocsContainer({ children, context }) {
      const isDarkMode = useDarkMode();
      const story = context.storyById(context.id);
      const { globals } = context.getStoryContext(story);
      const { size, intent, direction } = globals;

      return (
        <Root>
          <Baseline>
            <Theme value={isDarkMode ? "dark" : "light"}>
              <Size value={size}>
                <Intent value={intent}>
                  <Direction value={direction || "ltr"}>
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
          </Baseline>
        </Root>
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
      items: ["ltr", "rtl"],
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
      <Root>
        <Baseline>
          <Theme value={useDarkMode() ? "dark" : "light"}>
            <Size value={size}>
              <Intent value={intent}>
                <Direction value={direction || "ltr"}>
                  <div ref={demoContainerRef}>{render()}</div>
                </Direction>
              </Intent>
            </Size>
          </Theme>
        </Baseline>
      </Root>
    );
  },
];
