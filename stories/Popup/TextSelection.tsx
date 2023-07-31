import React, { useRef, useState } from "react";
import { useEventListener, useTimeout } from "@lilib/hooks";
import { Popup, PopperVirtualElement } from "@lilib/ui";

function Example() {
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

  return (
    <>
      <div ref={containerRef}>
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library for building user interfaces or UI
        components. It is maintained by Facebook and a community of individual
        developers and companies. React can be used as a base in the development
        of single-page or mobile applications. However, React is only concerned
        with state management and rendering that state to the DOM, so creating
        React applications usually requires the use of additional libraries for
        routing, as well as certain client-side functionality.
      </div>
      <Popup
        content="This is a popup message."
        open={open}
        placement="top"
        onClose={() => setOpen(false)}
      >
        {() => virtualElement}
      </Popup>
    </>
  );
}

export default Example;
