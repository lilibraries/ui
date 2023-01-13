import React from "react";
import { Button, Popper, PopperProps } from "@lilib/ui";

function Placements(props: PopperProps) {
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
    <div style={{ textAlign: "center" }}>
      <Button.Group style={{ marginBottom: 16 }}>
        <Popper
          {...props}
          placement="top-start"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>top-start</Button>
        </Popper>
        <Popper
          {...props}
          placement="top"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>top</Button>
        </Popper>
        <Popper
          {...props}
          placement="top-end"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>top-end</Button>
        </Popper>
      </Button.Group>
      <br />

      <Button.Group style={{ marginBottom: 16 }}>
        <Popper
          {...props}
          placement="bottom-start"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>bottom-start</Button>
        </Popper>
        <Popper
          {...props}
          placement="bottom"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>bottom</Button>
        </Popper>
        <Popper
          {...props}
          placement="bottom-end"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>bottom-end</Button>
        </Popper>
      </Button.Group>
      <br />

      <Button.Group style={{ marginBottom: 16 }}>
        <Popper
          {...props}
          placement="left-start"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>left-start</Button>
        </Popper>
        <Popper
          {...props}
          placement="left"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>left</Button>
        </Popper>
        <Popper
          {...props}
          placement="left-end"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>left-end</Button>
        </Popper>
      </Button.Group>
      <br />

      <Button.Group>
        <Popper
          {...props}
          placement="right-start"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>right-start</Button>
        </Popper>
        <Popper
          {...props}
          placement="right"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>right</Button>
        </Popper>
        <Popper
          {...props}
          placement="right-end"
          content={tooltip}
          style={{ zIndex: 1000 }}
        >
          <Button>right-end</Button>
        </Popper>
      </Button.Group>
    </div>
  );
}

export default Placements;
