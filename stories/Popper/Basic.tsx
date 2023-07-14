import React, { useRef } from "react";
import { usePersist } from "@lilib/hooks";
import { Button, Popper, PopperProps, PopperUpdateData } from "@lilib/ui";

const popperStyle = {
  zIndex: 1000,
  width: "max-content",
  padding: 16,
  borderRadius: 8,
  color: "#fff",
  backgroundColor: "#797E86",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
};

function BasicPopper(props: PopperProps) {
  const popperRef = useRef<HTMLDivElement>(null);

  const handleUpdate = usePersist(
    ({ x, y, referenceHidden }: PopperUpdateData) => {
      Object.assign(popperRef.current!.style, {
        top: "0",
        left: "0",
        transform: `translate(${Math.round(x)}px, ${Math.round(y)}px)`,
        visibility: referenceHidden ? "hidden" : "visible",
      });
    }
  );

  return (
    <Popper
      ref={popperRef}
      content="This is a tooltip message."
      onUpdate={handleUpdate}
      {...props}
      style={{ ...popperStyle, ...props.style }}
    >
      {props.children || (
        <Button style={{ borderStyle: "dashed" }}>Click</Button>
      )}
    </Popper>
  );
}

export default BasicPopper;
