import React from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import classes from "./index.module.scss";
import logoAnt from "src/assets/logo-ant.svg";

export const Sider: React.FC = () => {
  const { SubMenu, Item } = Menu;
  return (
    <>
      <div className={classes["logo"]}>
        <img src={logoAnt} alt="log" className={classes["logo__img"]} />
        <span className={classes["logo__title"]}>财咖网络</span>
      </div>
      <Menu theme="dark">
        <SubMenu title="submenu" icon={<MailOutlined />}>
          <Item key="1">Item1 in group</Item>
          <Item key="2">Item2 in group</Item>
          <Item key="3">Item3 in group</Item>
        </SubMenu>
        <Item icon={<MailOutlined />}>Item1 in menu</Item>
        <Item icon={<MailOutlined />}>Item2 in menu</Item>
        <Item icon={<MailOutlined />}>Item3 in menu</Item>
      </Menu>
    </>
  );
};
