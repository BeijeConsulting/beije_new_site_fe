import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { Row, Col, Image, Modal, Typography } from 'antd';
import { get } from 'lodash';
import { UserOutlined, LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Flags from './Flags/Flags';
import Button from '../functional_components/Button/CustomButton';
import { ENVIRONMENT } from '../../utils/properties';

const { confirm } = Modal;
const { Link } = Typography;

import logo from '../../assets/images/logo.png';
import { userLogout } from '../../redux/ducks/UserInfo';
import { useNavigate } from 'react-router';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const userInfo = useSelector((state) => get(state.userInfoDuck, 'userInfo', {}));
  const doLogout = () => () => {
    confirm({
      title: t(`general.youWantLogout`),
      icon: <QuestionCircleOutlined />,
      content: '',
      onOk() {
        localStorage.clear();
        dispatch(userLogout());
        navigate('/login');
      },
      onCancel() {},
      cancelText: t('general.cancel')
    });
  }
    return (
      <Row>
        <Col xs={24} sm={24} md={6}>
          <Link href={ENVIRONMENT.BASE_URL}><Image preview={false} src={logo} /></Link>
        </Col>
        <Col xs={0} sm={24} md={12}>
          <span>
            <UserOutlined />
          </span>
          <span>
            <strong>{userInfo.name}</strong>
          </span>
          <span>
            <Button
              currentIcon={<LogoutOutlined className="icon-small"/>}
              clickCallback={doLogout()}
              currentSize="small"
              floatRight
            />
          </span>
        </Col>
        {/* <Col xs={24} sm={24} md={6}>
          <Row type="flex" align="middle" justify="end">
            <Col className="right">
            </Col>
            <Col>
              <Flags />
            </Col>
          </Row>
        </Col> */}
      </Row>
    );
}

export default Header;
