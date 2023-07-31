import React, { useRef, useState } from "react";
import { Display, Switch } from "@lilib/ui";

function Example() {
  const [open, setOpen] = useState(false);
  const switchRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <>
      <Switch
        ref={switchRef}
        checked={open}
        onChange={(event) => setOpen(event.target.checked)}
      />
      <Display
        open={open}
        closeOnEscape
        closeOnPageHide
        closeOnWindowBlur
        closeOnClickOutside={[switchRef, contentRef]}
        onClose={() => setOpen(false)}
      >
        <div ref={contentRef}>Display content. Click outside to close.</div>
      </Display>
    </>
  );
}

export default Example;
