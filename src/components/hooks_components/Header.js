import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Image, Typography } from 'antd';
import React from 'react';
import { ENVIRONMENT } from '../../utils/properties';

const { Link } = Typography;

import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
      <Row>
        <Col xs={24} sm={24} md={6}>
          <Link href={ENVIRONMENT.BASE_URL}><Image preview={false} src={logo} /></Link>
        </Col>
        <Col xs={0} sm={24} md={12}>
          <span>
            <UserOutlined />
          </span>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Row type="flex" align="middle" justify="end">
            <Col className="right">
            </Col>
          </Row>
        </Col>
      </Row>
    );
}

export default Header;
