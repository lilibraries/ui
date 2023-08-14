import React from "react";
import { useSetState } from "@lilib/hooks";
import { Button, Flexbox, Modal, Spinner } from "@lilib/ui";

function Example() {
  const [
    {
      open,
      closeOnEscape,
      closeOnPageHide,
      closeOnWindowBlur,
      closeOnClickOutside,
    },
    setState,
  ] = useSetState({
    open: false,
    closeOnEscape: false,
    closeOnPageHide: false,
    closeOnWindowBlur: false,
    closeOnClickOutside: false,
  });

  return (
    <>
      <Flexbox gap="2x" wrap>
        <Button
          onClick={() => {
            setState({
              open: true,
              closeOnEscape: true,
              closeOnPageHide: false,
              closeOnWindowBlur: false,
              closeOnClickOutside: false,
            });
          }}
        >
          Escape Key
        </Button>
        <Button
          onClick={() => {
            setState({
              open: true,
              closeOnEscape: false,
              closeOnPageHide: true,
              closeOnWindowBlur: false,
              closeOnClickOutside: false,
            });
          }}
        >
          Page Hide
        </Button>
        <Button
          onClick={() => {
            setState({
              open: true,
              closeOnEscape: false,
              closeOnPageHide: false,
              closeOnWindowBlur: true,
              closeOnClickOutside: false,
            });
          }}
        >
          Window Blur
        </Button>
        <Button
          onClick={() => {
            setState({
              open: true,
              closeOnEscape: false,
              closeOnPageHide: false,
              closeOnWindowBlur: false,
              closeOnClickOutside: true,
            });
          }}
        >
          Click Outside
        </Button>
        <Button
          onClick={() => {
            setState({
              open: true,
              closeOnEscape: true,
              closeOnPageHide: true,
              closeOnWindowBlur: true,
              closeOnClickOutside: true,
            });
          }}
        >
          All
        </Button>
      </Flexbox>

      <Modal
        open={open}
        closeOnEscape={closeOnEscape}
        closeOnPageHide={closeOnPageHide}
        closeOnWindowBlur={closeOnWindowBlur}
        closeOnClickOutside={closeOnClickOutside}
        onClose={() => setState({ open: false })}
      >
        <Spinner spinning /> Loading...
      </Modal>
    </>
  );
}

export default Example;
