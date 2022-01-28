import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect, useSelector } from "react-redux";
import '../../style.css'
import './GeneralLayout.css'
import { get } from "lodash";

const {Content } = Layout;

const GeneralLayout = (props) => {

  const pageIsLoading = useSelector((state) => get(state.loadingDuck, 'pageIsLoading', false));
  return (
    <Layout className="min-h-100vh">
      <Layout>
        <Layout className="h-100">
          <Content>
            <div >
              <Outlet />
              {pageIsLoading ? 'LOADING' : ''}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}


const mapStateToProps = state => ({
  menuDuck: state.menuDuck,
  colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(GeneralLayout)