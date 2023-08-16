import React from "react";
import { List } from "@lilib/ui";
import { GiOrganigram } from "react-icons/gi";
import { FiCode, FiStar, FiUser } from "react-icons/fi";
import { AiOutlineProject, AiOutlineBgColors } from "react-icons/ai";

function Example() {
  return (
    <List splited bordered hoverable style={{ width: 300 }}>
      <List.Item icon={<FiUser />}>Your profile</List.Item>
      <List.Item icon={<FiStar />}>Your stars</List.Item>
      <List.Item icon={<AiOutlineProject />}>Your projects</List.Item>
      <List.Item icon={<FiCode />}>Your codespaces</List.Item>
      <List.Item icon={<GiOrganigram />}>Your organizations</List.Item>
      <List.Item icon={<AiOutlineBgColors />} suffix="Dark" arrowed>
        Theme preferences
      </List.Item>
    </List>
  );
}

export default Example;
