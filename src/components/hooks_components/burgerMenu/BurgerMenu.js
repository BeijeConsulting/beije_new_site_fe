import { Layout } from 'antd'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setMenu, initMenu } from '../../../redux/ducks/menuDuck'

import { Row, Col, Typography } from 'antd';
const { Header, Content } = Layout;
const { Link } = Typography;

//import assets and obj
import { social } from '../../../utils/properties';
import { siteMenu } from '../../../utils/properties';

//import style
import './BurgerMenu.css'

//import components
import CustomButton from '../../functional_components/Button/CustomButton';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import CustomCard from '../../functional_components/customCard/CustomCard';



const BurgerMenu = (props) => {
    const [state, setState] = useState({
        openMenu: false,
        stateLink: false,
        idElement: null
    })

    const changeStateMenu = () => {
        // *ga*
        if (!state.openMenu) {
            props.dispatch(setMenu(true))
        }
        else {
            props.dispatch(initMenu())
        }

        setState({
            ...state,
            openMenu: !state.openMenu
        })
    }

    const mouseOver = (val, val2) => () => {
        setState({
            ...state,
            stateLink: true,
            idElement: val,
            keyElement: val2
        })
    }

    const mouseLeave = (val, val2) => () => {
        setState({
            ...state,
            stateLink: false,
            idElement: val,
            keyElement: val2
        })
    }

    const printPrimaryMenu = (item, key) => {
        if (item.typeMenu === 'primary') {
            return (
                <Link
                    key={key}
                    href={item.linkTo}
                >
                    <CustomCard
                        titleClassName={state.stateLink && state.idElement === key ? item.titleStyleHover : item.titleStyle}
                        cardTitle={item.title}
                        callbackMouseEnter={mouseOver(key, item.key)}
                        callbackMouseLeave={mouseLeave(key, item.key)}
                    />
                </Link>
            )
        }
    }

    const printSecondaryMenu = (item, key) => {
        if (item.typeMenu === 'secondary') {
            return (
                <Link
                    key={key}
                    href={item.linkTo}
                >
                    <CustomCard
                        titleClassName={state.stateLink && state.idElement === key ? item.titleStyleHover : item.titleStyle}
                        cardTitle={item.title}
                        callbackMouseEnter={mouseOver(key, item.key)}
                        callbackMouseLeave={mouseLeave(key, item.key)}
                    />
                </Link>
            )
        }
    }

    const switchBgMenu = () => {
        let className = "menu-overlay-img"
        switch (state.keyElement) {
            case "consulting":
                className = "menu-overlay-img menu-consulting"
                break
            case "academy":
                className = "menu-overlay-img menu-academy"
                break
            case "up":
                className = "menu-overlay-img menu-up"
                break
            case "career":
                className = "menu-overlay-img menu-career"
                break
            case "whoWeAre":
                className = "menu-overlay-img menu-whoWeAre"
                break
            case "contacts":
                className = "menu-overlay-img menu-contacts"
                break
            case "blog":
                className = "menu-overlay-img menu-blog"
                break
            case "community":
                className = "menu-overlay-img menu-community"
                break
            default:
                break
        }
        return className
    }


    return (
        <>
            <div className={'burger-menu-container'} onClick={changeStateMenu}>
                <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
                <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close burger-menu-middle-line'}></i>
                <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
            </div>

            {
                state.openMenu &&
                <nav className="menu-overlay">
                    <Layout
                        className={state.stateLink ? switchBgMenu() : "menu-overlay"}

                    >
                        <Header className='header-ant-style' />
                        <Content className={'burger-menu-content'} >
                            <Row>
                                <Col xs={0} md={4} />
                                <Col xs={24} md={5} className='mb-20'>
                                    {
                                        siteMenu.map(printPrimaryMenu)
                                    }
                                </Col>
                                <Col xs={0} md={5} />
                                <Col xs={24} md={5} >
                                    {
                                        siteMenu.map(printSecondaryMenu)
                                    }
                                </Col>
                                <Col xs={0} md={5} />
                            </Row>
                            <Row className={'burger-menu-social'}>

                                <Col sx={12} md={24} className='container-row jusify-left items-center'>
                                    <CustomButton
                                        type={'primary-social'}
                                        href={social.url.url_linkedIn}
                                        currentIcon={<img src={social.icon.icon_linkedIn} style={{ height: 16 }} className={'icon-social'} />}
                                    />
                                    <div style={{ margin: 20 }}>
                                        <CustomButton
                                            type={'primary-social'}
                                            href={social.url.url_youTube}
                                            currentIcon={<img src={social.icon.icon_youTube} style={{ height: 16 }} className={'icon-social'} />}
                                        />
                                    </div>
                                    <CustomButton
                                        type={'primary-social'}
                                        href={social.url.url_facebook}
                                        currentIcon={<img src={social.icon.icon_facebook} style={{ height: 16 }} className={'icon-social'} />}
                                    />

                                </Col>
                                <Col sx={12} md={0} className='burger-menu-lang'>
                                    <SwitchLanguage />
                                </Col>
                            </Row>
                        </Content>
                    </Layout>
                </nav>
            }

        </>
    )
}


export default connect()(BurgerMenu)