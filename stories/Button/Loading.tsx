import React, { useState } from "react";
import { Button, ButtonProps } from "@lilib/ui";
import { FiThumbsUp, FiArrowRight, FiGlobe } from "react-icons/fi";

function Loading(props: ButtonProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />
      </div>
      <Button {...props} loading={loading}>
        Button
      </Button>{" "}
      <Button {...props} loading={loading} startIcon={<FiThumbsUp />}>
        Like
      </Button>{" "}
      <Button {...props} loading={loading} endIcon={<FiArrowRight />}>
        Next
      </Button>{" "}
      <Button
        {...props}
        loading={loading}
        startIcon={<FiGlobe />}
        endIcon={<FiArrowRight />}
      >
        Link
      </Button>
    </>
  );
}

export default Loading;
