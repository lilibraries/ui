import React, { cloneElement, useRef, useState } from "react";
import cn from "classnames";
import { Button, Modal } from "@lilib/ui";
import { useToggle, usePersist } from "@lilib/hooks";
import { AiOutlineHolder } from "react-icons/ai";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

function Example() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, { toggleOn, toggleOff }] = useToggle(false);
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const handleDragStart = usePersist(
    (event: DraggableEvent, data: DraggableData) => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      const modalRect = modalRef.current?.getBoundingClientRect();
      if (modalRect) {
        setBounds({
          top: -modalRect.top + data.y,
          left: -modalRect.left + data.x,
          right: clientWidth - (modalRect.right - data.x),
          bottom: clientHeight - (modalRect.bottom - data.y),
        });
      }
    }
  );

  const handleDragStop = usePersist(
    (event: DraggableEvent, data: DraggableData) => {
      console.log(data);
    }
  );

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Draggable
        bounds={bounds}
        nodeRef={modalRef}
        handle=".draggable-handle"
        defaultPosition={{ x: -150, y: 0 }}
        onStart={handleDragStart}
        onStop={handleDragStop}
      >
        <Modal
          ref={modalRef}
          open={open}
          width="small"
          splited
          showClose
          hideBackdrop
          icon={<AiOutlineHolder />}
          title="Draggable"
          onClose={toggleOff}
          renderHeader={(header) => {
            if (header) {
              return cloneElement(header, {
                style: { ...header.props.style, cursor: "move" },
                className: cn(header.props.className, "draggable-handle"),
              });
            } else {
              return header;
            }
          }}
        >
          This is modal content.
        </Modal>
      </Draggable>
    </>
  );
}

export default Example;
