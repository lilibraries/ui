import React from "react";
import { Menu, Card } from "@lilib/ui";
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
    <Card unpadding style={{ width: 300 }}>
      <Menu>
        <Menu.Item icon={<FiUser />} label="Your profile">
          <Menu.Item icon={<FiHeart />} label="Your likes" />
          <Menu.Item icon={<FiStar />} label="Your stars" openMode="collapse">
            <Menu.Item icon={<FiHeart />} label="Your likes" />
            <Menu.Item icon={<FiStar />} label="Your stars" />
          </Menu.Item>
        </Menu.Item>
        <Menu.Item
          icon={<AiOutlineProject />}
          label="Your projects"
          openMode="collapse"
        >
          <Menu.Item
            icon={<FiCode />}
            label="Your codespaces"
            openMode="collapse"
          >
            <Menu.Item icon={<FiCode />} label="Your codespaces" />
            <Menu.Item icon={<FiGitPullRequest />} label="Your repositories" />
            <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
          </Menu.Item>
          <Menu.Item icon={<FiGitPullRequest />} label="Your repositories" />
          <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
        </Menu.Item>
        <Menu.Item
          icon={<AiOutlineBgColors />}
          suffix="Dark"
          label="Theme preferences"
        />
      </Menu>
    </Card>
  );
}

export default Example;
