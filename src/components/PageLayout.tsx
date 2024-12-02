import { Outlet } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { Breadcrumb, Image, Layout, Menu, MenuProps, theme } from "antd";
import React, { useState } from "react";
import logo from "./../public/assets/ABC_logo.png";
import './../public/css/style.css';
const { Header, Content, Footer } = Layout;

export default function PageLayout() {
  // const history = useHistory();
  // const location = useLocation();
  const [current, setCurrent] = useState("1");

  // const items = new Array(3).fill(null).map((_, index) => ({
  //   key: String(index + 1),
  //   label: `nav ${index + 1}`,
  // }));

  const items = [
    { key: 1, label: "Home" },
    { key: 2, label: "Explore" },
    { key: 3, label: "Others" },
  ];

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
        <img src={logo} style={{ paddingRight: "20px", width: "70px" }} />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          items={items}
          // onClick={(item, key)=>{onClick(item, key)}}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
        ABC News ©{new Date().getFullYear()}.
        <br />
        All Rights Reserved.
      </Footer>
    </Layout>
  );
}
