import React from "react";
import { useDarkMode } from "@lilib/hooks";
import { Button, Theme } from "@lilib/ui";

function Example() {
  const isDarkMode = useDarkMode();

  return (
    <Theme scoped value={isDarkMode ? "dark" : "light"}>
      <Button>The system theme mode is {isDarkMode ? "dark" : "light"}</Button>
    </Theme>
  );
}

export default Example;
