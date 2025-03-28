import React, { CSSProperties, useRef } from "react";
import { usePersist } from "@lilib/hooks";
import { Button, Popper, PopperProps, PopperUpdateData } from "@lilib/ui";

const popperStyle: CSSProperties = {
  zIndex: 1000,
  width: "max-content",
  padding: 16,
  borderRadius: 8,
  color: "#fff",
  backgroundColor: "#797E86",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.6)",
};

function BasicPopper(props: PopperProps) {
  const popperRef = useRef<HTMLDivElement>(null);

  const handleUpdate = usePersist(({ x, y }: PopperUpdateData) => {
    Object.assign(popperRef.current!.style, {
      top: "0",
      left: "0",
      transform: `translate(${Math.round(x)}px, ${Math.round(y)}px)`,
    });
  });

  return (
    <Popper
      ref={popperRef}
      content="This is a popper"
      onUpdate={handleUpdate}
      {...props}
      style={{ ...popperStyle, ...props.style }}
    >
      {props.children || <Button>Click</Button>}
    </Popper>
  );
}

export default BasicPopper;
