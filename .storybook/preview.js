import React, { useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { useLayoutMount } from "@lilib/hooks";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { Root, Prefix, Baseline, Focusing, Theme, Direction } from "@lilib/ui";
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
      const { direction } = globals;

      return (
        <Prefix cls="li-" var="li-">
          <Root>
            <Baseline>
              <Focusing>
                <Theme value={isDarkMode ? "dark" : "light"}>
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
                </Theme>
              </Focusing>
            </Baseline>
          </Root>
        </Prefix>
      );
    },
  },
};

export const globalTypes = {
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
    const { direction } = context.globals;

    useLayoutMount(() => {
      const wrapper = demoContainerRef.current?.closest(".innerZoomElementWrapper");
      if (wrapper) {
        wrapper.parentNode.style.height = "unset";
      }
    });

    return (
      <Prefix cls="li-" var="li-">
        <Root>
          <Baseline>
            <Focusing>
              <Theme value={useDarkMode() ? "dark" : "light"}>
                <Direction value={direction || "ltr"}>
                  <div ref={demoContainerRef}>{render()}</div>
                </Direction>
              </Theme>
            </Focusing>
          </Baseline>
        </Root>
      </Prefix>
    );
  },
];
