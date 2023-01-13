import React, { useRef, useState } from "react";
import { useEventListener, useTimeout } from "@lilib/hooks";
import { Popper, PopperProps, PopperVirtualElement } from "@lilib/ui";

function VirtualElement(props: PopperProps) {
  const [open, setOpen] = useState(false);
  const rangeRef = useRef<Range>();
  const containerRef = useRef<HTMLDivElement>(null);

  const [getSelection] = useTimeout(() => {
    const selection = document.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = document.getSelection()?.getRangeAt(0);

      if (
        range &&
        !range.collapsed &&
        containerRef.current?.contains(range.commonAncestorContainer)
      ) {
        rangeRef.current = range;
        setOpen(true);
      }
    }
  }, 0);

  useEventListener(() => document, "mouseup", getSelection);

  const virtualElement: PopperVirtualElement = {
    getBoundingClientRect() {
      return (
        rangeRef.current!.getClientRects()[0] ||
        rangeRef.current!.getBoundingClientRect()
      );
    },
  };

  const tooltip = (
    <div
      style={{
        padding: 16,
        borderRadius: 4,
        color: "#fff",
        backgroundColor: "#666",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      This is a tip message.
    </div>
  );

  return (
    <>
      <div
        ref={containerRef}
        style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}
      >
        React is a free and open-source front-end JavaScript library for
        building user interfaces or UI components.
      </div>

      <Popper
        {...props}
        open={open}
        placement="top"
        onClose={() => setOpen(false)}
        content={tooltip}
      >
        {() => virtualElement}
      </Popper>
    </>
  );
}

export default VirtualElement;
