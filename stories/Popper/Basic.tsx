import React, { useRef } from "react";
import { usePersist } from "@lilib/hooks";
import { Button, Popper, PopperProps, PopperUpdateData } from "@lilib/ui";

const popperStyle = {
  zIndex: 1000,
  padding: "8px 16px",
  borderRadius: 8,
  color: "#fff",
  backgroundColor: "#666",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
};

function Basic(props: PopperProps) {
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
      style={popperStyle}
      content="This is a tooltip message."
      onUpdate={handleUpdate}
      {...props}
    >
      {props.children || <Button>Click</Button>}
    </Popper>
  );
}

export default Basic;
