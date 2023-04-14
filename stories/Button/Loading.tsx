import React, { useState } from "react";
import { Button, Flexbox, Switch } from "@lilib/ui";
import {
  FiStar,
  FiHeart,
  FiLogOut,
  FiThumbsUp,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

function Example() {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Flexbox gap="2x" align="center">
        <Button iconOnly loading={loading} startIcon={<FiThumbsUp />} />
        <Button iconOnly loading={loading}>
          <FiStar />
        </Button>
        <Button iconOnly loading={loading} endIcon={<FiHeart />} />
      </Flexbox>

      <Flexbox gap="2x" align="center">
        <Button loading={loading}>Button</Button>
        <Button loading={loading} startIcon={<FiThumbsUp />}>
          Like
        </Button>
        <Button loading={loading} endIcon={<FiLogOut />}>
          Logout
        </Button>
        <Button
          loading={loading}
          startIcon={<FiFileText />}
          endIcon={<FiArrowRight />}
        >
          Next page
        </Button>
      </Flexbox>
    </Flexbox>
  );
}

export default Example;
