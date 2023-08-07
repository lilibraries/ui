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
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
};

const arrowStyle: CSSProperties = {
  position: "absolute",
  width: 12,
  height: 12,
  backgroundColor: "#797E86",
  transform: "rotate(45deg)",
};

function ArrowPopper(props: PopperProps) {
  const arrowRef = useRef<HTMLSpanElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const handleUpdate = usePersist((data: PopperUpdateData) => {
    const { x, y, arrowX, arrowY, placement } = data;

    Object.assign(popperRef.current!.style, {
      top: "0",
      left: "0",
      transform: `translate(${Math.round(x)}px, ${Math.round(y)}px)`,
    });

    if (arrowX) {
      arrowRef.current!.style.left = `${arrowX}px`;
    }
    if (arrowY) {
      arrowRef.current!.style.top = `${arrowY}px`;
    }

    if (placement.startsWith("top")) {
      arrowRef.current!.style.top = "";
      arrowRef.current!.style.bottom = "-6px";
    } else if (placement.startsWith("right")) {
      arrowRef.current!.style.right = "";
      arrowRef.current!.style.left = "-6px";
    } else if (placement.startsWith("bottom")) {
      arrowRef.current!.style.bottom = "";
      arrowRef.current!.style.top = "-6px";
    } else if (placement.startsWith("left")) {
      arrowRef.current!.style.left = "";
      arrowRef.current!.style.right = "-6px";
    }
  });

  return (
    <Popper
      ref={popperRef}
      arrow={<span ref={arrowRef} style={arrowStyle} />}
      arrowPadding={8}
      content="This is a tooltip message."
      onUpdate={handleUpdate}
      {...props}
      style={{ ...popperStyle, ...props.style }}
    >
      {props.children || <Button>Click</Button>}
    </Popper>
  );
}

export default ArrowPopper;
