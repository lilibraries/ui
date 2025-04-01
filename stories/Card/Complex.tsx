import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Avatar, Button, Card, CardImagePlacement, Checkbox, Flexbox, Radio, Text } from "@lilib/ui";

function Example() {
  const [divided, setDivided] = useState(false);
  const [striped, setStriped] = useState(false);
  const [shadowed, setShadowed] = useState(false);
  const [hoverable, setHoverable] = useState(false);
  const [unpadding, setUnpadding] = useState(false);
  const [borderless, setBorderless] = useState(false);
  const [imagePlacement, setImagePlacement] = useState<CardImagePlacement>("start");

  return (
    <>
      <Flexbox gap="4x" wrap style={{ marginBottom: 16 }}>
        <span>Image:</span>
        <Radio.Group value={imagePlacement} onChange={(event) => setImagePlacement(event.target.value)}>
          <Radio value="top">top</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="start">start</Radio>
          <Radio value="end">end</Radio>
        </Radio.Group>
      </Flexbox>

      <Flexbox gap="4x" wrap style={{ marginBottom: 16 }}>
        <span>Styles:</span>
        <Checkbox checked={divided} onChange={(event) => setDivided(event.target.checked)}>
          Divided
        </Checkbox>
        <Checkbox checked={striped} onChange={(event) => setStriped(event.target.checked)}>
          Striped
        </Checkbox>
        <Checkbox checked={shadowed} onChange={(event) => setShadowed(event.target.checked)}>
          Shadowed
        </Checkbox>
        <Checkbox checked={hoverable} onChange={(event) => setHoverable(event.target.checked)}>
          Hoverable
        </Checkbox>
        <Checkbox checked={unpadding} onChange={(event) => setUnpadding(event.target.checked)}>
          Unpadding
        </Checkbox>
        <Checkbox checked={borderless} onChange={(event) => setBorderless(event.target.checked)}>
          Borderless
        </Checkbox>
      </Flexbox>

      <Card
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
        headmark={
          <Button variant="hollow" iconOnly rounded borderless>
            <FiMoreVertical />
          </Button>
        }
        footnote={
          <Text size="small" muted>
            Joined at July 31, 2023
          </Text>
        }
        footmark={
          <Button variant="solid" intent="major">
            Follow
          </Button>
        }
        image="https://images.unsplash.com/photo-1688168293343-e1c824a4ace5"
        imageSize="200px"
        imagePlacement={imagePlacement}
        divided={divided}
        striped={striped}
        shadowed={shadowed}
        hoverable={hoverable}
        unpadding={unpadding}
        borderless={borderless}
        style={{ maxWidth: 600 }}
      >
        I am a front-end developer. Daily development using the React framework. I am interested in UI design and have
        created a component library. I am currently looking for a good job.
      </Card>
    </>
  );
}

export default Example;
