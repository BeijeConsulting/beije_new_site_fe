import React from "react";
import {useSelector} from "react-redux";
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';
import { Col, Row, Typography } from "antd";
import './Home.css';

const { Title } = Typography;

const Home = () => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => get(state.userInfoDuck, 'userInfo', {}));
  return (
    <div className="home-container">
    <Row justify="center">
      <Col className="center">
        <Title level={2}>{t('general.Welcome')} {userInfo.name}</Title>
      </Col>
    </Row>
    </div>
  );
}

export default Home;
