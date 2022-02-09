import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Typography } from "antd";
import "./Home.css";

const { Title } = Typography;

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <Row justify="center">
        <Col className="center">
          <Title level={2}>{t("general.Welcome")}</Title>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
