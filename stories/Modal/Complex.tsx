import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Avatar, Text } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button onClick={toggleOn}>Open</Button>
      <Modal
        open={open}
        onClose={toggleOff}
        width="medium"
        splited
        showClose
        icon={<Avatar round size="small" image="https://avatars.githubusercontent.com/u/9942342?v=4" />}
        title={
          <a rel="noreferrer" href="https://github.com/LeeWeisheng" target="_blank">
            LeeWeisheng
          </a>
        }
        headnote={
          <Text size="small" muted hoverable>
            10 Followers
          </Text>
        }
        footnote={
          <Text size="small" muted>
            Joined at July 31, 2023
          </Text>
        }
        confirmLabel="Profile"
        onConfirm={() => {
          window.open("https://github.com/LeeWeisheng", "_blank");
        }}
        cancelLabel="Cancel"
      >
        I am a front-end developer. Daily development using the React framework. I am interested in UI design and have
        created a component library. I am currently looking for a good job.
      </Modal>
    </>
  );
}

export default Example;
