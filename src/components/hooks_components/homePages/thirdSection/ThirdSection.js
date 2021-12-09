import React from "react";

import { Row, Col, Layout } from "antd";

import './ThirdSection.css'
import CustomCard from "../../../functional_components/customCard/CustomCard";
import { useTranslation } from "react-i18next";
import ImageCarousel from "../../../functional_components/customCarousel/CustomCarousel";

const ThirdSection = () => {

    const { t } = useTranslation()

    return (
        <Layout className={'third-sec-container'}>
            <Row className={'third-sec-row'}>
                <Col sx={24} md={8} lg={6} className={'third-sec-col1'}>
                    <CustomCard
                        cardTitle={t('home.thirdSection.title')}
                        cardDescription={t('home.thirdSection.description')}
                    />
                </Col>
                <Col md={1} lg={2}/>
                <Col sx={24} md={15} className={'third-sec-col2'}>
                    <ImageCarousel />
                </Col>
            </Row>
        </Layout>
    )
}

export default ThirdSection