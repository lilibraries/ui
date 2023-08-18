import React from "react";
import { List } from "@lilib/ui";
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
    <List splited indented bordered hoverable style={{ width: 300 }}>
      <List.Item icon={<FiUser />} label="Your profile">
        <List splited={false}>
          <List.Item icon={<FiHeart />} label="Your likes" />
          <List.Item icon={<FiStar />} label="Your stars" />
        </List>
      </List.Item>
      <List.Item icon={<AiOutlineProject />} label="Your projects">
        <List.Item icon={<FiCode />} label="Your codespaces" />
        <List.Item icon={<FiGitPullRequest />} label="Your repositories" />
        <List.Item icon={<GiOrganigram />} label="Your organizations" />
      </List.Item>
      <List.Item
        icon={<AiOutlineBgColors />}
        arrowed
        suffix="Dark"
        label="Theme preferences"
      />
    </List>
  );
}

export default Example;
