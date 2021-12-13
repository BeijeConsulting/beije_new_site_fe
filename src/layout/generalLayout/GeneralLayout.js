import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux";

import '../../style.css'
import './GeneralLayout.css'

import CustomHeader from "../../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../../components/hooks_components/customFooter/CustomFooter";

const { Header, Footer, Content } = Layout;

const GeneralLayout = (props) => {
    return (
        <Layout style={{ backgroundColor: 'red' }}>

            <Layout>
                <Header className='header-ant-style'>
                    <CustomHeader />
                </Header>

                <Layout>
                    <Content>
                        <div >
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
            {
                !props.menuDuck.menuOpen &&
                <Footer className={'generalLayout-footer'}>
                    <CustomFooter />
                </Footer>
            }
        </Layout>
    )
}


const mapStateToProps = state => ({
    menuDuck: state.menuDuck
})

export default connect(mapStateToProps)(GeneralLayout)