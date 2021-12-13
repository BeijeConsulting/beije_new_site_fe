import React from 'react';
import { Row, Col } from "antd";

//import style
import './detailBox.css';

const DetailBox = (props) => {

  return (
    <Row type="flex" justify="center" align="middle">
      <Col span={24} className="detailBox_title">
        {props.title}
      </Col>
      <Col span={24} className="detailBox_content-box">
        {props.children}
      </Col>
    </Row>
  )
}

export default DetailBox;
