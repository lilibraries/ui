import React from "react";
import { Icon, IconProps } from "@lilib/ui";
import { FiStar } from "react-icons/fi";

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
          <img
            alt="Star"
            src="https://img.icons8.com/external-bearicons-outline-color-bearicons/2x/external-star-essential-collection-bearicons-outline-color-bearicons.png"
          />
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
