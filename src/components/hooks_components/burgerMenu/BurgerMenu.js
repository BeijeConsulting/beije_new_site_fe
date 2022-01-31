import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;

//action dispatched
import { setMenu, initMenu } from '../../../redux/ducks/menuDuck'

//import assets and obj
import { siteMenu } from '../../../utils/properties';

//import style
import './BurgerMenu.css'

//import components
// import CustomButton from '../../functional_components/Button/CustomButton';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import CustomCard from '../../functional_components/customCard/CustomCard';
import { useTranslation } from 'react-i18next';
import SocialSection from '../../functional_components/socialSection/SocialSection';
import { setGaEvent } from '../../../utils/utilities';



const BurgerMenu = (props) => {
  const [state, setState] = useState({
    openMenu: false,
    stateLink: false,
    idElement: null
  })

  const { t } = useTranslation()

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

  const clickOnLink = ({ item }) => () => {
    setGaEvent({ category: "Navigation", action: "Burger menu", label: item.title })
    props.dispatch(initMenu())
    setState({
      ...state,
      openMenu: !state.openMenu
    })

  }

  const printPrimaryMenu = (item, key) => {
    if (item.typeMenu === 'primary') {
      return (
        <Link
          key={key}
          to={item.linkTo}
          onClick={clickOnLink({ item })}
        >
          <CustomCard
            titleClassName={state.stateLink && state.idElement === key ? item.titleStyleHover : item.titleStyle}
            cardTitle={t(`burgerMenu.${item.title}`)}
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
          to={item.linkTo}
          onClick={clickOnLink({ item })}
        >
          <CustomCard
            titleClassName={state.stateLink && state.idElement === key ? item.titleStyleHover : item.titleStyle}
            cardTitle={t(`burgerMenu.${item.title}`)}
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
      case "focusAcademy":
        className = "menu-overlay-img menu-focusAcademy"
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
      {/* 'burger-menu-container' */}
      <div
        className={!props.colorDuck.lightColor ? 'burger-menu-container' : 'burger-menu-container-light'}
        onClick={changeStateMenu}>
        <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
        <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close burger-menu-middle-line'}></i>
        <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
      </div>

      {
        state.openMenu &&
        <nav className="menu-overlay">
          <Layout
            className={state.stateLink ? switchBgMenu() : "menu-overlay"}>
            <Header className='header-ant-style-transparent' />
            <Content className={'burger-menu-content'} >
              <Row className='burger-menu-row-content'>
                <Col xs={0} lg={2} />
                <Col xs={24} lg={9} className='mb-20'>
                  {
                    siteMenu.map(printPrimaryMenu)
                  }
                </Col>
                <Col xs={0} lg={2} />
                <Col xs={24} lg={9} >
                  {
                    siteMenu.map(printSecondaryMenu)
                  }
                </Col>
                <Col xs={0} lg={2} />
              </Row>
              <Row className={'burger-menu-social'}>

                <Col xs={12} lg={24} className='burger-menu-social-col container-row items-center'>
                  <SocialSection />
                </Col>
                <Col xs={12} sm={0} className='burger-menu-lang'>
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

const mapStateToProps = state => ({
  colorDuck: state.colorDuck
})

export default connect(mapStateToProps)(BurgerMenu)