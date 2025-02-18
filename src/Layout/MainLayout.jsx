import React from "react";
import { Layout, Menu, Avatar, Divider } from "antd";
import { 
  UserOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = (props) => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider 
        theme="light"
      >
        <div style={{ 
          height: 64, 
          textAlign: "center", 
          fontSize: 18, 
          padding: "16px 0", 
          fontWeight: "bold" 
        }}>
          🚀 UI Kit
        </div>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" >
            <NavLink to='/'>
              Overview
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to='/credit'>
              Credit
            </NavLink>
          </Menu.Item>
          <Divider />
          <Menu.Item key="5">
            <NavLink to='/typography'>
              Typography
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to='/button'>
              Button
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to='/tag'>
              Tag
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header style={{ 
          background: "#fff", 
          padding: "0 16px", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          borderBottom: "1px solid #ddd"
        }}>
          {/* <div 
            onClick={() => setCollapsed(!collapsed)} 
            style={{ fontSize: 18, cursor: "pointer" }}
          >
          </div> */}
          <div></div>
          <Avatar icon={<UserOutlined />} />
        </Header>

        {/* Content */}
        <Content style={{ margin: "16px", padding: "16px", background: "#fff", borderRadius: 8 }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
