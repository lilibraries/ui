import React, { FC, ReactNode, useState } from "react";
import { useLayoutMount } from "@lilib/hooks";

const RenderAfterMount: FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useLayoutMount(() => {
    setMounted(true);
  });

  return <>{mounted && children}</>;
};

export default RenderAfterMount;
