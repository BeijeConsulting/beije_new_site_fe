import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Typography} from 'antd';
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

const CustomHeader = (props) => {

  const { t } = useTranslation();

  return (
    <>
      <Row className='d-flex items-center'>
        <Col span={12} className='container-row items-center'>
          <Link href={ENVIRONMENT.BASE_URL} className={'header-img-container'}>
            <Image
              className={'header-logo'}
              preview={false}
              src={!props.menuDuck.menuOpen ? logo_dark : logo_light}
              width='100%'
            />
          </Link>
        </Col>
        <Col span={12} className='container-row jusify-left items-center'>
          <SwitchLanguage
            classNameContainer={!props.menuDuck.menuOpen ? 'header-switch-language' : 'header-switch-language txt-light'}
          />
          <BurgerMenu />
        </Col>
      </Row>
    </>


  );
}

const mapStateToProps = state => ({
  menuDuck: state.menuDuck
})

export default connect(mapStateToProps)(CustomHeader);
