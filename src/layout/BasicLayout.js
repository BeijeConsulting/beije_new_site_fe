import React from "react";
import { Outlet } from "react-router-dom";
import {Layout} from 'antd';
import MenuLeft from "../components/hooks_components/MenuLeft";
import CustomHeader from "../components/hooks_components/Header";

const { Header, Footer, Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout className="min-h-100vh">
      <Header><CustomHeader /></Header>
      <Layout>
        <MenuLeft />
        <div className="menu-left-overlay"/>
        <Layout className="h-100">
          <Content>
            <div >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
