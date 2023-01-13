import React, { FC, useState } from "react";
import { useLayoutMount } from "@lilib/hooks";

const RenderAfterMount: FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useLayoutMount(() => {
    setMounted(true);
  });

  return <>{mounted && children}</>;
};

export default RenderAfterMount;
