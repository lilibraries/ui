import React from "react";
import { List } from "@lilib/ui";
import { GiOrganigram } from "react-icons/gi";
import { FiCode, FiStar, FiUser } from "react-icons/fi";
import { AiOutlineProject, AiOutlineBgColors } from "react-icons/ai";

function Example() {
  return (
    <List splited bordered hoverable style={{ width: 300 }}>
      <List.Item icon={<FiUser />} label="Your profile" />
      <List.Item icon={<FiStar />} label="Your stars" />
      <List.Item icon={<AiOutlineProject />} label="Your projects" />
      <List.Item icon={<FiCode />} label="Your codespaces" />
      <List.Item icon={<GiOrganigram />} label="Your organizations" />
      <List.Item icon={<AiOutlineBgColors />} arrowed suffix="Dark" label="Theme preferences" />
    </List>
  );
}

export default Example;
