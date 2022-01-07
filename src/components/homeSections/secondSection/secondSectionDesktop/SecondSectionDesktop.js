import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

//import style
import '../SecondSection.css'

//import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';

//import costants
import { cardWhoWeAre } from "../../../../utils/properties";

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";
import CustomButton from "../../../functional_components/Button/CustomButton";

const SecondSectionDesktop = () => {

    const { t } = useTranslation()

    const printCard = (item, key) => {
        return (
            <Col
                md={6}
                key={key}
                className={item.colContainerClassName}
            >
                <div className={item.cardContainerClassName}>
                    <Row className="sec-section-row-title">
                        <CustomCard
                            cardTitle={t('home.secondSection.' + item.cardTitle)}
                            titleLevel={item.titleLevel}
                            cardClassName={item.colClassName}
                        />

                        <CustomButton
                            type={item.type_btn}
                            currentIcon={
                                <ArrowRightOutlined
                                    className='arrow-icon-btn' />
                            }
                        />
                    </Row>
                </div>
            </Col >
        )
    }

    return (
        <>
            <Row className='d-flex justify-between width-100'>
                {cardWhoWeAre.map(printCard)}
            </Row>

        </>
    )
}

export default SecondSectionDesktop