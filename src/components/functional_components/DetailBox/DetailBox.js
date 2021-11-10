import React from 'react';
import './detailBox.css';
import {Row, Col} from "antd";

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
