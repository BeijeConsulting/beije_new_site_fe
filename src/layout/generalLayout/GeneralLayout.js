import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect, useSelector } from "react-redux";
import '../../style.css'
import './GeneralLayout.css'
import { get } from "lodash";
import LoadingBounce from "../../components/functional_components/loadingBounce/LoadingBounce";

const { Content } = Layout;

const GeneralLayout = () => {

  const pageIsLoading = useSelector((state) => get(state.loadingDuck, 'pageIsLoading', false));
  return (
    <Layout className="min-h-100vh">
      <Layout>
        <Layout className="h-100">
          <Content>
            <div>
              {pageIsLoading ? <LoadingBounce /> : <Outlet />}
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