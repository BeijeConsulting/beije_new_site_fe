import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Modal, Typography, Menu } from 'antd';
import { ENVIRONMENT } from '../../../utils/properties';

const { Link } = Typography;

//import style
import '../../../style.css'
import './Header.css'

//import assets
import logo from '../../../assets/images/logo/logo_offivial_dark_noBg.png'

//import components
import SwitchLanguage from '../switchLanguage/SwitchLanguage'
import CustomMenu from '../customMenu/CustomMenu';

const Header = () => {

  const { t } = useTranslation();



  return (
    <>
      <Row className='d-flex items-center'>
        <Col span={12} className='container-row items-center'>
          <Link href={ENVIRONMENT.BASE_URL}>
            <Image
              className='header-logo'
              preview={false}
              src={logo}
              width='100%'
            />
          </Link>
        </Col>
        <Col span={12} className='container-row jusify-left items-center'>
          <SwitchLanguage
            classNameContainer={'header-switch-language'}
          />
          <CustomMenu />
        </Col>
      </Row>
    </>


  );
}

export default Header;
