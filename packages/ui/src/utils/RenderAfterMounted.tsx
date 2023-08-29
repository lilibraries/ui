import React, { FC, ReactNode } from "react";
import { useLayoutMount, useSafeState } from "@lilib/hooks";

const RenderAfterMounted: FC<{ children?: ReactNode }> = (props) => {
  const { children } = props;
  const [mounted, setMounted] = useSafeState(false);

  useLayoutMount(() => {
    setMounted(true);
  });

  return mounted ? <>{children}</> : null;
};

export default RenderAfterMounted;
