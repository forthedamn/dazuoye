import React from "react";
import { Card, Breadcrumb, Layout } from "antd";

const { Content } = Layout;

function NewService1() {
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/services">角色管理</Breadcrumb.Item>
        <Breadcrumb.Item href="/services/1">权限管理</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: "15px 0" }}>
        <p>权限管理内容</p>
      </Content>
    </Card>
  );
}

export default NewService1;
