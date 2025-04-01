import React from "react";
import { useToggle } from "@lilib/hooks";
import { Button, Modal, Avatar, Text } from "@lilib/ui";

function Example() {
  const [open, { toggleOn, toggleOff }] = useToggle(false);

  return (
    <>
      <Button intent="major" onClick={toggleOn}>
        View Profile
      </Button>
      <Modal
        icon={<Avatar rounded image="https://avatars.githubusercontent.com/u/9942342?v=4" />}
        title={
          <a rel="noreferrer" href="https://github.com/LeeWeisheng" target="_blank">
            LeeWeisheng
          </a>
        }
        headnote={
          <Text<"a">
            as="a"
            rel="noreferrer"
            href="https://github.com/LeeWeisheng?tab=followers"
            target="_blank"
            size="small"
            muted
          >
            10 Followers
          </Text>
        }
        footnote={
          <Text size="small" muted>
            Joined at July 31, 2023
          </Text>
        }
        cancelLabel="Cancel"
        confirmLabel="Follow"
        width="medium"
        closable
        open={open}
        onClose={toggleOff}
        onConfirm={() => {
          window.open("https://github.com/LeeWeisheng", "_blank");
        }}
      >
        I am a front-end developer. Daily development using the React framework. I am interested in UI design and have
        created a component library. I am currently looking for a good job.
      </Modal>
    </>
  );
}

export default Example;
