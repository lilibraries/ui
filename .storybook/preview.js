import React, { useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { useLayoutMount } from "@lilib/hooks";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { Root, Prefix, Baseline, Focusing, Theme, Direction, Notice } from "@lilib/ui";
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
        <Root>
          <Baseline>
            <Focusing>
              <Prefix cls="li-" var="li-">
                <Theme value={isDarkMode ? "dark" : "light"}>
                  <Direction value={direction || "ltr"}>
                    <Notice>
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
                    </Notice>
                  </Direction>
                </Theme>
              </Prefix>
            </Focusing>
          </Baseline>
        </Root>
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
      <Root>
        <Baseline>
          <Focusing>
            <Prefix cls="li-" var="li-">
              <Theme value={useDarkMode() ? "dark" : "light"}>
                <Direction value={direction || "ltr"}>
                  <Notice>
                    <div ref={demoContainerRef}>{render()}</div>
                  </Notice>
                </Direction>
              </Theme>
            </Prefix>
          </Focusing>
        </Baseline>
      </Root>
    );
  },
];
