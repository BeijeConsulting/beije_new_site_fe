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
const valueObj = cardWhoWeAre[0];

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";
import CustomButton from "../../../functional_components/Button/CustomButton";

const SecondSectionMobile = (props) => {

    const { t } = useTranslation()

    return (
        <Col
            xs={24}
            className={props.obj.colContainerClassName}
        >
            <div className={props.obj.cardContainerClassName}>
                <Row className="sec-section-row-title">
                    <CustomCard
                        cardTitle={t('home.secondSection.' + props.obj.cardTitle)}
                        titleLevel={props.obj.titleLevel}
                        cardClassName={props.obj.colClassName}
                    />

                    <CustomButton
                        type={props.obj.type_btn}
                        currentIcon={
                            <ArrowRightOutlined
                                className='arrow-icon-btn' />
                        }
                    />
                </Row>
            </div>
        </Col>
    )
}

SecondSectionMobile.defaultProps = {
    obj: valueObj
}

export default SecondSectionMobile