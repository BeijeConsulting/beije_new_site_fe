import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import CustomHeader from "../components/hooks_components/Header";

const { Header, Footer, Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout>
      <Header><CustomHeader /></Header>
      <Content><Outlet /></Content>
      <Footer />
    </Layout>
  );
}

export default BasicLayout;
