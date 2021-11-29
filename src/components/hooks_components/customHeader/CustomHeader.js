import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Typography } from 'antd';
import { ENVIRONMENT } from '../../../utils/properties';
import { connect } from "react-redux";


const { Link } = Typography;

//import style
import '../../../style.css'
import './CustomHeader.css'

//import assets
import logo_dark from '../../../assets/images/logo/logo_official_dark_noBg.png'
import logo_light from '../../../assets/images/logo/logo_white_written.png'

//import components
import SwitchLanguage from '../switchLanguage/SwitchLanguage'
import BurgerMenu from '../burgerMenu/BurgerMenu';
import Navbar from '../../functional_components/navbar/Navbar';

const CustomHeader = (props) => {

  const { t } = useTranslation();

  console.log('menu props', props.menuDuck.menuOpen)
  console.log('burger color props', props.colorDuck.lightColor)

  return (
    <>
      <Row className='d-flex items-center'>
        <Col xs={12} sm={12} lg={5} className='container-row items-center'>
          <Link href={ENVIRONMENT.BASE_URL} className={'header-img-container'}>
            <Image
              className={'header-logo'}
              preview={false}
              src={!props.menuDuck.menuOpen ? logo_dark : logo_light}
              width='100%'
            />
          </Link>
        </Col>
        <Col xs={0} sm={0} lg={16} >
          <Navbar
            classNameRow={!props.visibilityDuck.visibility ? 'display-none' : 'navbar-row'}
            classNameCol={'col-link'}
            classNameLink={'navbar-general-link'}
          />
        </Col>
        <Col xs={0} sm={0} lg={2} className='container-row justify-start items-end'>
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
