import React, { useState } from "react";
import { Menu, Switch } from "@lilib/ui";
import { GiOrganigram } from "react-icons/gi";
import { FiCode, FiHeart, FiStar, FiUser, FiGitPullRequest } from "react-icons/fi";
import { AiOutlineProject, AiOutlineBgColors } from "react-icons/ai";

function Example() {
  const [collapseByIcon, setCollapseByIcon] = useState(false);

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Switch checked={collapseByIcon} onChange={(event) => setCollapseByIcon(event.target.checked)} /> Collapse by
        Icon
      </div>

      <Menu bounded collapsible collapseByIcon={collapseByIcon} keepMounted style={{ width: 300 }}>
        <Menu.Item icon={<FiUser />} label="Your profile">
          <Menu.Item icon={<FiHeart />} label="Your likes" />
          <Menu.Item icon={<FiStar />} label="Your stars" />
        </Menu.Item>
        <Menu.Item icon={<AiOutlineProject />} label="Your projects">
          <Menu.Item icon={<FiCode />} label="Your codespaces" />
          <Menu.Item icon={<FiGitPullRequest />} label="Your repositories">
            <Menu.Item label="React hooks" />
            <Menu.Item label="React components" />
          </Menu.Item>
          <Menu.Item icon={<GiOrganigram />} label="Your organizations" />
        </Menu.Item>
        <Menu.Item icon={<AiOutlineBgColors />} suffix="Dark" label="Theme preferences" />
      </Menu>
    </>
  );
}

export default Example;
