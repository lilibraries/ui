import React from "react";
import { Popper, PopperProps } from "@lilib/ui";

function Inline(props: PopperProps) {
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
    <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
      React is a free and{" "}
      <Popper
        {...props}
        on="hover"
        placement="top-start"
        content={tooltip}
        style={{ zIndex: 1000 }}
      >
        <a href="https://js.org/">open-source front-end JavaScript library</a>
      </Popper>{" "}
      for building user interfaces or UI components.
    </div>
  );
}

export default Inline;
