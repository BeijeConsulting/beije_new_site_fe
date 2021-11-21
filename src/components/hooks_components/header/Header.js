import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Modal, Typography, Menu } from 'antd';
import { ENVIRONMENT } from '../../../utils/properties';
import {
  MenuOutlined,
  CloseOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';

const { confirm } = Modal;
const { Link } = Typography;

//import style
import '../../../style.css'
import './Header.css'

//import assets
import logo from '../../../assets/images/logo/logo_offivial_dark_noBg.png'
// import logo from '../../../assets/images/logo.png'
import menu_icon_dark from '../../../assets/icons/icon_menu_dark.png'

//import components
import SwitchLanguage from '../switchLanguage/SwitchLanguage'
import CustomButton from '../../functional_components/Button/CustomButton';
import BurgerMenu from '../../hooks_components/burgerMenu/BurgerMenu';

const Header = () => {

  const { t } = useTranslation();
  const [state, setState] = useState({
    collapsed: false,
  });

  const toggleCollapsed = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };


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
          <BurgerMenu />
        </Col>
      </Row>
    </>


  );
}

export default Header;
