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

  const homeStructureData = {
    "@context": "http://www.schema.org",
    "@type": "WebSite",
    "name": "Home",
    "alternateName": "Home Beije People  First",
    "url": "http://localhost:3000/",
    "title": t('general.Welcome')
  }


  return (
    <div className="home-container">
      {/* *he* */}
      {/* 
        <Helmet>
            <title>Beije People First</title>
            <meta name='description' content='beije home page' />
            <meta name='keywords' content='web developer, people first' />
        </Helmet> 
      */}

      {/* *seo* */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(homeStructureData)}
        </script>
      </Helmet>

      <Row justify="center">
        <Col className="center">
          {/* <Title level={2}>{t('general.Welcome')} {userInfo.name}</Title> */}
          <Title level={2}>{homeStructureData.title} {userInfo.name}</Title>
        </Col>
      </Row>
    </div>

  );
}

export default Home;
