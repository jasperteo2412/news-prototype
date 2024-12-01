import { Outlet } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from "react";

const { Header, Content, Footer } = Layout;

export default function PageLayout() {
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const history = useHistory();
  // const location = useLocation();

  const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));

  // function handleUrlChange() {
  //   //replace url based on article link
  //   const params = new URLSearchParams({ name: "value" });
  //   history.replace({ pathname: location.pathname, search: params.toString() });
  // }

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ABC News ©{new Date().getFullYear()}.
        <br/>
        All Rights Reserved.
      </Footer>
    </Layout>
  );
}
