import React from "react";
import { useDarkMode } from "@lilib/hooks";
import { Button, Theme } from "@lilib/ui";

function Example() {
  const isDarkMode = useDarkMode();

  return (
    <Theme scoped value={isDarkMode ? "dark" : "light"}>
      <Button>Sync with operating system</Button>
    </Theme>
  );
}

export default Example;
