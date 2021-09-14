import React from "react";
import { Card, Breadcrumb, Layout } from "antd";

const { Content } = Layout;

function Home() {
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/home">角色管理</Breadcrumb.Item>
        <Breadcrumb.Item href="/home/1">系统配置</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: "15px 0" }}>
        <p>系统配置内容</p>
      </Content>
    </Card>
  );
}

export default Home;
