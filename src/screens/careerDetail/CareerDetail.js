import React from "react";

import { Row, Typography } from "antd";
const { Title, Paragraph } = Typography

// import style
import './CareerDetail.css'

// import components
import GoBackBtn from "../../components/functional_components/goBackBtn/GoBackBtn";
import CustomButton from "../../components/functional_components/Button/CustomButton";

const CareerDetail = (props) => {
    return (
        <section style={{ padding: '100px 20px 30px 20px' }}>
            <Row>
                <CustomButton
                    type={'go-back-btn'}
                    content={
                        <GoBackBtn
                            goBackContent={'Torna agli annunci'}
                        />}
                    clickCallback={props.clickCallback}
                />
            </Row>
            <Row>
                <Title
                    level={1}
                >
                    REACT DEVELOPER - ACADEMY
                </Title>
            </Row>
            <Row>
                <Paragraph>
                    Ti appassionano le tecnologie e i linguaggi di programmazione? Diventa Web Developer con noi!
                </Paragraph>
            </Row>
        </section>


    )
}

export default CareerDetail