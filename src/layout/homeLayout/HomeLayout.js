import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux";

import '../../style.css'
import './HomeLayout.css'


//Import Components
import CustomHeader from "../../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../../components/hooks_components/customFooter/CustomFooter";

const { Header, Footer, Content } = Layout;

const HomeLayout = (props) => {

  return (
    <Layout>

      <Layout className="min-h-100vh">
        <Header className='header-ant-style'>
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
      {
        !props.menuDuck.menuOpen &&
        <Footer className={'homeLayout-footer'}>
          <CustomFooter />
        </Footer>
      }
    </Layout>
  );
}


const mapStateToProps = state => ({
  menuDuck: state.menuDuck
})

export default connect(mapStateToProps)(HomeLayout);
