import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux"; // useSelector
// import { get } from "lodash";


import '../../style.css'
import './HomeLayout.css'


const { Content } = Layout;

const HomeLayout = () => {

  // const pageIsLoading = useSelector((state) => get(state.loadingDuck, 'pageIsLoading', false));

  return (
    <Layout>

      <Layout className="min-h-100vh">

        <Layout className="h-100">
          <Content>
            <div >
              <Outlet />
              {/* {pageIsLoading ? 'LOADING' : ''} */}
            </div>
          </Content>
        </Layout>

      </Layout>
    </Layout>
  );
}


const mapStateToProps = state => ({
  menuDuck: state.menuDuck,
  visibilityDuck: state.visibilityDuck,
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(HomeLayout);
