import { Layout } from 'antd'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setMenu, initMenu } from '../../../redux/ducks/menuDuck'
import { Row, Col, Typography } from 'antd';
const { Header, Content } = Layout;
const { Link } = Typography;


//import assets
import { social } from '../../../utils/properties';

//import style
import './BurgerMenu.css'

//import components
import CustomButton from '../../functional_components/Button/CustomButton';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import CustomCard from '../../functional_components/customCard/CustomCard';



const BurgerMenu = (props) => {
    const [state, setState] = useState({
        openMenu: false
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
            openMenu: !state.openMenu
        })
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
                <nav>
                    <Layout className="menu-overlay">
                        <Header className='header-ant-style' />
                        <Content className={'burger-menu-content'} >
                            <Row>
                                <Col xs={0} md={4} />
                                <Col xs={24} md={10} style={{ marginBottom: '20px' }}>
                                    <Link href={'https://www.google.it/'} >
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'CONSULTING'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'ACADEMY'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'APP'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'CAREER'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'CHI SIAMO'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title txt-light'}
                                            cardTitle={'CONTATTI'}
                                        />
                                    </Link>
                                </Col>
                                <Col xs={24} md={10} >
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title2 txt-light'}
                                            cardTitle={'BLOG'}
                                        />
                                    </Link>
                                    <Link href={'https://www.google.it/'}>
                                        <CustomCard
                                            titleClassName={'burger-menu-title2 txt-light'}
                                            cardTitle={'OUR COMMUNITY'}
                                        />
                                    </Link>
                                </Col>
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