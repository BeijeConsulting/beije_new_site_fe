import React from 'react';
import { connect } from "react-redux";
import { Row, Col, Image, Typography } from 'antd';
const { Link } = Typography;

//import constats
import { ENVIRONMENT } from '../../../utils/properties';

//import style
import '../../../style.css'
import './CustomHeader.css'

//import assets
import logo_dark from '../../../assets/images/logo/logo_official_dark_noBg.svg'
import logo_light from '../../../assets/images/logo/logo_white_written.png'

//import components
import SwitchLanguage from '../switchLanguage/SwitchLanguage'
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Navbar from '../../functional_components/navbar/Navbar';

const CustomHeader = (props) => {

  return (
    <>
      <Row className='d-flex items-center'>
        <Col xs={12} sm={12} lg={5} className='container-row items-center'>
          <Link href={ENVIRONMENT.ROUTING.BASE_URL} className={'header-img-container'}>
            <Image
              className={'header-logo'}
              preview={false}
              src={!props.menuDuck.menuOpen ? logo_dark : logo_light}
              width='100%'
            />
          </Link>
        </Col>
        <Col xs={0} sm={0} lg={15} >
          <Navbar
            classNameRow={!props.visibilityDuck.visibility ? 'display-none' : 'navbar-row'}
            classNameCol={'col-link'}
            classNameLink={props.colorDuck.lightColor ? 'navbar-link-light' : 'navbar-general-link'}
          />
        </Col>
        <Col xs={0} sm={0} lg={3} className='container-row justify-center items-end'>
          {
            (!props.menuDuck.menuOpen && !props.colorDuck.lightColor) &&
            <SwitchLanguage
              classNameContainer={'header-switch-language'}
            />
          }
          {
            (props.menuDuck.menuOpen || props.colorDuck.lightColor) &&
            <SwitchLanguage
              classNameContainer={'header-switch-language txt-light'}
            />
          }
        </Col>
        <Col xs={12} sm={12} lg={1} className='heade-container-burger container-row justify-end items-end'>
          <BurgerMenu />
        </Col>
      </Row>
    </>


  );
}

const mapStateToProps = state => (
  {
    menuDuck: state.menuDuck,
    colorDuck: state.colorDuck,
    visibilityDuck: state.visibilityDuck
  }
)

export default connect(mapStateToProps)(CustomHeader);
