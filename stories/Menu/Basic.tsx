import React from "react";
import { Card, Menu, Divider } from "@lilib/ui";
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
          <Menu.Item icon={<FiStar />} label="Your stars" />
        </Menu.Item>
        <Divider spacing="1x" />
        <Menu.Item icon={<AiOutlineProject />} label="Your projects">
          <Menu.Item icon={<FiCode />} label="Your codespaces" />
          <Menu.Item icon={<FiGitPullRequest />} label="Your repositories" />
          <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
        </Menu.Item>
        <Divider spacing="1x" />
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
