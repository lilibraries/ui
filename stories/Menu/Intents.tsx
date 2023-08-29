import React from "react";
import { Menu } from "@lilib/ui";
import {
  FiExternalLink,
  FiHeart,
  FiStar,
  FiThumbsUp,
  FiUser,
} from "react-icons/fi";

function Example() {
  return (
    <Menu style={{ width: 300 }}>
      <Menu.Item intent="major" icon={<FiUser />} label="Major" />
      <Menu.Item intent="minor" icon={<FiExternalLink />} label="Minor" />
      <Menu.Item intent="positive" icon={<FiThumbsUp />} label="Positive" />
      <Menu.Item intent="alertive" icon={<FiStar />} label="Alertive" />
      <Menu.Item intent="negative" icon={<FiHeart />} label="Negative" />
    </Menu>
  );
}

export default Example;
