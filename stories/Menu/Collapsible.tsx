import React from "react";
import { Menu } from "@lilib/ui";
import { GiOrganigram } from "react-icons/gi";
import {
  FiCode,
  FiHeart,
  FiStar,
  FiUser,
  FiGitPullRequest,
} from "react-icons/fi";
import { AiOutlineProject, AiOutlineBgColors } from "react-icons/ai";

function Example() {
  return (
    <Menu collapsible style={{ width: 300 }}>
      <Menu.Item icon={<FiUser />} label="Your profile">
        <Menu>
          <Menu.Item icon={<FiHeart />} label="Your likes" />
          <Menu.Item icon={<FiStar />} label="Your stars" />
        </Menu>
      </Menu.Item>
      <Menu.Item icon={<AiOutlineProject />} label="Your projects">
        <Menu.Item icon={<FiCode />} label="Your codespaces" />
        <Menu.Item icon={<FiGitPullRequest />} label="Your repositories">
          <Menu.Item label="React hooks" />
          <Menu.Item label="React components" />
        </Menu.Item>
        <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
      </Menu.Item>
      <Menu.Item
        icon={<AiOutlineBgColors />}
        suffix="Dark"
        label="Theme preferences"
      />
    </Menu>
  );
}

export default Example;
