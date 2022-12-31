import React, { useState } from "react";
import { Button, ButtonProps, Flexbox, Switch } from "@lilib/ui";
import {
  FiStar,
  FiHeart,
  FiLogOut,
  FiThumbsUp,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

function Loading(props: ButtonProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Flexbox direction="column" gap="4x" align="flex-start">
      <Switch
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />

      <Flexbox gap="2x" align="center">
        <Button
          {...props}
          iconOnly
          loading={loading}
          startIcon={<FiThumbsUp />}
        />
        <Button {...props} iconOnly loading={loading}>
          <FiStar />
        </Button>
        <Button {...props} iconOnly loading={loading} endIcon={<FiHeart />} />
      </Flexbox>

      <Flexbox gap="2x" align="center">
        <Button {...props} loading={loading}>
          Button
        </Button>
        <Button {...props} loading={loading} startIcon={<FiThumbsUp />}>
          Like
        </Button>
        <Button {...props} loading={loading} endIcon={<FiLogOut />}>
          Logout
        </Button>
        <Button
          {...props}
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

export default Loading;
