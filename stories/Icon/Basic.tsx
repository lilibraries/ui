import React from "react";
import { Icon } from "@lilib/ui";
import { FiStar } from "react-icons/fi";
import starImage from "./star.png";

function Example() {
  return (
    <>
      <h6>Text</h6>
      <div>
        <Icon icon="☆" /> Star
      </div>

      <h6>Emoji</h6>
      <div>
        <Icon icon="⭐️" /> Star
      </div>

      <h6>Image</h6>
      <div>
        <Icon icon={<img alt="Star" src={starImage} />} /> Star
      </div>

      <h6>SVG</h6>
      <div>
        <Icon icon={<FiStar />} /> Star
      </div>
    </>
  );
}

export default Example;
