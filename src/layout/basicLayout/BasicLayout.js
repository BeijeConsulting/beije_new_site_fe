import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux";

import '../../style.css'
import './BasicLayout.css'


//Import Components
import CustomHeader from "../../components/hooks_components/customHeader/CustomHeader";

const { Header, Content } = Layout;

const BasicLayout = (props) => {

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
      {/* {
        !props.menuDuck.menuOpen &&
        <Footer className={'basicLayout-footer'}>
          <CustomFooter />
        </Footer>
      } */}
    </Layout>
  );
}


const mapStateToProps = state => ({
  menuDuck: state.menuDuck,
})

export default connect(mapStateToProps)(BasicLayout);
