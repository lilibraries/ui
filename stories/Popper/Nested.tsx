import React, { CSSProperties } from "react";
import { Button, Popper, PopperProps } from "@lilib/ui";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const popupStyle: CSSProperties = {
  padding: 16,
  borderRadius: 4,
  color: "#fff",
  backgroundColor: "#666",
  boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
};

function Nested(props: PopperProps) {
  const layer3 = <div style={popupStyle}>This is a tip message.</div>;

  const layer2 = (
    <div style={popupStyle}>
      <Popper
        {...props}
        placement="bottom-start"
        content={layer3}
        style={{ zIndex: 1000 }}
      >
        <Button endIcon={<FiChevronDown />} style={{ color: "#fff" }}>
          Dropdown
        </Button>
      </Popper>
    </div>
  );

  const layer1 = (
    <div style={popupStyle}>
      <Popper
        {...props}
        placement="right-start"
        content={layer2}
        style={{ zIndex: 1000 }}
      >
        <Button endIcon={<FiChevronRight />} style={{ color: "#fff" }}>
          Dropright
        </Button>
      </Popper>
    </div>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <Popper {...props} content={layer1} style={{ zIndex: 1000 }}>
        <Button>Click</Button>
      </Popper>
    </div>
  );
}

export default Nested;
