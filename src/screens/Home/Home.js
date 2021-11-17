import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';
import { Col, Row, Typography, Card } from "antd";
import './Home.css';
import '../../style.css'

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
      {/* Prova card color */}
      <Row>
        <Col span={8}>
          <Card title="charcoal" bordered={false} className='test-style-card1'>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} className='test-style-card2'>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} className='test-style-card3'>
            Card content
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Card title="Card title" bordered={false} className='test-style-card4'>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} className='test-style-card5'>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false} className='test-style-card6'>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
