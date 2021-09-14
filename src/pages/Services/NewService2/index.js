import React from "react";
import { Card, Breadcrumb, Layout } from "antd";

const { Content } = Layout;

function NewService2() {
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/services">角色管理</Breadcrumb.Item>
        <Breadcrumb.Item href="/services/2">租户管理</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: "15px 0" }}>
        <p>租户管理内容</p>
      </Content>
    </Card>
  );
}

export default NewService2;
