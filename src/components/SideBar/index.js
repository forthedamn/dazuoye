import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-guard";

const { SubMenu } = Menu;

function SideBar(props) {
  const { pathname } = props;

  return (
    <Menu
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={["/services/1"]}
      mode="inline"
      theme="dark"
    >
      <SubMenu
        key="/home"
        title={
          <span>
            <Icon type="setting" />
            <span>系统设置</span>
          </span>
        }
      >
        <Menu.Item key="/home/1">
          <Link to="/home/1">组件管理</Link>
        </Menu.Item>
        <Menu.Item key="/home/2">
          <Link to="/home/2">系统配置</Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="/services"
        title={
          <span>
            <Icon type="setting" />
            <span>角色管理</span>
          </span>
        }
      >
        <Menu.Item key="/services/1">
          <Link to="/services/1">权限管理</Link>
        </Menu.Item>
        <Menu.Item key="/services/2">
          <Link to="/services/2">租户管理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SideBar;
