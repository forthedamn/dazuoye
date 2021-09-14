import React from "react";
import { Card, Breadcrumb, Layout } from "antd";

// 接口 api/component

const { Content } = Layout;

function Home() {
  return (
    <Card>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/home">角色管理</Breadcrumb.Item>
        <Breadcrumb.Item href="/home/1">组件管理</Breadcrumb.Item>
      </Breadcrumb>

      <Content style={{ margin: "15px 0" }}>组件管理内容</Content>
    </Card>
  );
}

export default Home;
