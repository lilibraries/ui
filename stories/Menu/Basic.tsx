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
    <Menu style={{ width: 300 }}>
      <Menu.Item
        intent="major"
        icon={<FiUser />}
        title="Title Message"
        label="Your profile"
        detail="This is detail message"
      >
        <Menu.Item icon={<FiHeart />} label="Your likes" />
        <Menu.Item icon={<FiStar />} label="Your stars">
          <Menu.Item icon={<FiHeart />} label="Your likes" />
          <Menu.Item icon={<FiStar />} label="Your stars" />
        </Menu.Item>
      </Menu.Item>
      <Menu.Item icon={<AiOutlineProject />} label="Your projects" collapsible>
        <Menu.Item icon={<FiCode />} label="Your codespaces" collapsible>
          <Menu.Item icon={<FiCode />} label="Your codespaces" />
          <Menu.Item icon={<FiGitPullRequest />} label="Your repositories" />
          <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
        </Menu.Item>
        <Menu.Item icon={<FiGitPullRequest />} label="Your repositories" />
        <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
      </Menu.Item>
      <Menu.Item
        intent="major"
        activeIntent="major"
        icon={<AiOutlineBgColors />}
        suffix="Dark"
        label="Theme preferences"
        disabled
      />
    </Menu>
  );
}

export default Example;
