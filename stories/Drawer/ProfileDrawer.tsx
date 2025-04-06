import React from "react";
import { Button, Drawer, Avatar, Text } from "@lilib/ui";

function Example() {
  return (
    <Drawer
      size="small"
      closable
      icon={<Avatar rounded image="https://avatars.githubusercontent.com/u/9942342?v=4" />}
      title={
        <a rel="noreferrer" href="https://github.com/LeeWeisheng" target="_blank">
          LeeWeisheng
        </a>
      }
      content={
        <div>
          I am a front-end developer. Daily development using the React framework. I am interested in UI design and have
          created a component library. I am currently looking for a good job.
        </div>
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
      onConfirm={() => {
        window.open("https://github.com/LeeWeisheng", "_blank");
      }}
    >
      <Button intent="major">View Profile</Button>
    </Drawer>
  );
}

export default Example;
