import React from "react";
import { useDarkMode } from "@lilib/hooks";
import { Button, Theme } from "@lilib/ui";

function SyncWithSystem() {
  const isDarkMode = useDarkMode();

  return (
    <Theme scoped value={isDarkMode ? "dark" : "light"}>
      <Button>Sync with system</Button>
    </Theme>
  );
}

export default SyncWithSystem;
