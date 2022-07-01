import React from "react";
import { Icon, IconProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";
import star from "./Star.png";

function Basic(props: IconProps) {
  return (
    <>
      <h6>Text</h6>
      <div>
        <Icon {...props} icon="☆" /> Star
      </div>

      <h6>Emoji</h6>
      <div>
        <Icon {...props} icon="⭐️" /> Star
      </div>

      <h6>Image</h6>
      <div>
        <Icon {...props}>
          <img alt="Star" src={star} />
        </Icon>{" "}
        Star
      </div>

      <h6>SVG</h6>
      <div>
        <Icon {...props} icon={<FiStar />} /> Star
      </div>
    </>
  );
}

export default Basic;
