import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { printCommunities, printBlog, printCareer } from "../../redux/actions/actions";

import '../../style.css'
import './GeneralLayout.css'

import CustomHeader from "../../components/hooks_components/customHeader/CustomHeader";
import CustomFooter from "../../components/functional_components/customFooter/CustomFooter";

const { Header, Footer, Content } = Layout;

const GeneralLayout = (props) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        apiReady: false
    });

    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        await printCommunities(dispatch);
        await printBlog(dispatch);
        await printCareer(dispatch);

        setState({
            apiReady: true
        })
    }


    return (
        <Layout className="min-h-100vh">
            <Header
                className={!props.menuDuck.menuOpen ? 'header-ant-general-style' : 'header-ant-style'}
                style={{
                    backgroundColor: props.colorHeaderDuck.colorHeader !== undefined ?
                        props.colorHeaderDuck.colorHeader : "transparent",
                    transition: '1.5s'
                }}
            >
                <CustomHeader />
            </Header>
            <Layout>
                <Layout className="h-100">
                    {state.apiReady &&
                        <Content>
                            <div >
                                <Outlet />
                            </div>
                        </Content>
                    }
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
    menuDuck: state.menuDuck,
    colorHeaderDuck: state.colorHeaderDuck
})

export default connect(mapStateToProps)(GeneralLayout)