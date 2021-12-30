import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux";

import '../../style.css'
import './HomeLayout.css'


//Import Components
import CustomHeader from "../../components/hooks_components/customHeader/CustomHeader";

const { Header, Content } = Layout;

const HomeLayout = (props) => {

  return (
    <Layout>

      <Layout className="min-h-100vh">
        <Header
          className={!props.visibilityDuck.visibility ? 'header-ant-style-transparent' : 'header-ant-style'}
          style={{
            backgroundColor: props.colorHeaderDuck.colorHeader !== undefined ?
              props.colorHeaderDuck.colorHeader : "#fff",
            transition: '1s'
          }}
        >
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
        <Footer className={'homeLayout-footer'}>
          <CustomFooter />
        </Footer>
      } */}
    </Layout>
  );
}


const mapStateToProps = state => ({
  menuDuck: state.menuDuck,
  visibilityDuck: state.visibilityDuck,
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(HomeLayout);
