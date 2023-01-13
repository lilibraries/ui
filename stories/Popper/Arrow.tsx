import React, { CSSProperties, useState } from "react";
import {
  Button,
  Popper,
  PopperSide,
  PopperProps,
  PopperUpdateData,
} from "@lilib/ui";

const popperStyle = {
  padding: "8px 16px",
  borderRadius: 8,
  color: "#fff",
  backgroundColor: "#808080",
  boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
};

const reverseSides: { [key in PopperSide]: PopperSide } = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function Arrow(props: PopperProps) {
  const [data, setData] = useState<PopperUpdateData>();

  const arrowPosition: { [key in PopperSide]: string } = {
    left: "",
    top: "",
    right: "",
    bottom: "",
  };

  if (data) {
    if (data.arrowX) {
      arrowPosition.left = `${data.arrowX}px`;
    }
    if (data.arrowY) {
      arrowPosition.top = `${data.arrowY}px`;
    }

    const side = data.placement.split("-")[0] as PopperSide;
    arrowPosition[reverseSides[side]] = "-6px";
  }

  const arrowStyle: CSSProperties = {
    position: "absolute",
    ...arrowPosition,
    width: 12,
    height: 12,
    backgroundColor: "#808080",
    transform: "rotate(45deg)",
  };

  return (
    <Popper
      {...props}
      style={popperStyle}
      arrow={<span style={arrowStyle} />}
      content="This is a tooltip message."
      onUpdate={(data) => setData(data)}
    >
      <Button>Click</Button>
    </Popper>
  );
}

export default Arrow;
