import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Layout } from "antd";

//import style
import './ThirdSection.css'

//import functions
import { turnToUppercase } from "../../../utils/utilities";

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";
import ImageCarousel from "../../hooks_components/customOwlCarousel/CustomOwlCarousel";
import CustomButton from "../../functional_components/Button/CustomButton";
import ViewAllButton from "../../functional_components/viewAllButton/ViewAllButton";

const ThirdSection = () => {

    const { t } = useTranslation()

    return (
        <Layout className={'third-sec-container'}>
            <Row className={'third-sec-row'}>
                <Col xs={24} md={8} lg={6} className={'third-sec-col1'}>
                    <CustomCard
                        cardTitle={t('home.thirdSection.title')}
                        cardDescription={t('home.thirdSection.description')}
                        descriptionClassName={'third-sec-description'}
                    />
                </Col>
                <Col md={1} lg={2} />
                <Col xs={24} md={15} className={'third-sec-col2'}>
                    <CustomButton
                        type='drag-more-btn'
                        content={turnToUppercase(t('btn.drag'))}
                    />
                    <ImageCarousel />
                </Col>
                <Col span={24} className={'third-sec-col3'}>
                    <CustomButton
                        type={'view-all-btn'}
                        content={<ViewAllButton />}
                    />
                </Col>
            </Row>
        </Layout>
    )
}

export default ThirdSection