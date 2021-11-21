import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';

import '../../style.css'
import './BasicLayout.css'


//Import Components
import CustomHeader from "../../components/hooks_components/header/Header";
import CustomFooter from "../../components/hooks_components/customFooter/CustomFooter";

const { Header, Footer, Content } = Layout;

const BasicLayout = () => {
  return (
    <Layout>
      <Layout className="min-h-100vh">
        <Header className='basicLayout-header'>
          <CustomHeader />
        </Header>

        <Layout className="h-100">
          <Content>
            <div >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer className={'basicLayout-footer'}>
        <CustomFooter />
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
