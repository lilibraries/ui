import React, { useState } from "react";
import {
  Button,
  Card,
  Avatar,
  Text,
  Image,
  Flexbox,
  Checkbox,
} from "@lilib/ui";
import { FiMoreVertical } from "react-icons/fi";

function Example() {
  const [splited, setSplited] = useState(false);
  const [shadowed, setShadowed] = useState(false);
  const [hoverable, setHoverable] = useState(false);
  const [unpadding, setUnpadding] = useState(false);
  const [borderless, setBorderless] = useState(false);

  return (
    <>
      <Flexbox gap="4x" style={{ marginBottom: 16 }}>
        <Checkbox
          checked={splited}
          onChange={(event) => setSplited(event.target.checked)}
        >
          Splited
        </Checkbox>
        <Checkbox
          checked={shadowed}
          onChange={(event) => setShadowed(event.target.checked)}
        >
          Shadowed
        </Checkbox>
        <Checkbox
          checked={hoverable}
          onChange={(event) => setHoverable(event.target.checked)}
        >
          Hoverable
        </Checkbox>
        <Checkbox
          checked={unpadding}
          onChange={(event) => setUnpadding(event.target.checked)}
        >
          Unpadding
        </Checkbox>
        <Checkbox
          checked={borderless}
          onChange={(event) => setBorderless(event.target.checked)}
        >
          Borderless
        </Checkbox>
      </Flexbox>

      <Card
        style={{ width: 600 }}
        splited={splited}
        shadowed={shadowed}
        hoverable={hoverable}
        unpadding={unpadding}
        borderless={borderless}
        image={
          <Image src="https://images.unsplash.com/photo-1688168293343-e1c824a4ace5" />
        }
        imageSize="200px"
        imagePlacement="start"
        icon={
          <Avatar
            round
            size="small"
            image="https://avatars.githubusercontent.com/u/9942342?v=4"
          />
        }
        title={
          <a
            rel="noreferrer"
            href="https://github.com/LeeWeisheng"
            target="_blank"
          >
            LeeWeisheng
          </a>
        }
        headnote={
          <Text size="small" muted hoverable>
            10 Followers
          </Text>
        }
        headmark={
          <Button variant="hollow" iconOnly round borderless>
            <FiMoreVertical />
          </Button>
        }
        footnote={
          <Text size="small" muted>
            Joined at July 31, 2023
          </Text>
        }
        footmark={
          <Button variant="solid" intent="major" borderless size="small">
            Follow
          </Button>
        }
      >
        I am a front-end developer. Daily development using the React framework.
        I am interested in UI design and have created a component library. I am
        currently looking for a good job.
      </Card>
    </>
  );
}

export default Example;
