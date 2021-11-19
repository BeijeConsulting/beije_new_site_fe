import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';
import { Col, Row, Typography, Card } from "antd";

import { Helmet } from "react-helmet";

//import style
import './Home.css';
import '../../style.css'

const { Title } = Typography;

const Home = () => {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => get(state.userInfoDuck, 'userInfo', {}));
  return (
    <div className="home-container">
      <Helmet>
       <title>Beije People First</title>
       <meta name='description' content='beije home page'/>
       <meta name='keywords' content='web developer, people first'/>
      </Helmet>
      <Row justify="center">
        <Col className="center">
          <Title level={2}>{t('general.Welcome')} {userInfo.name}</Title>
        </Col>
      </Row>
    </div>

  );
}

export default Home;
