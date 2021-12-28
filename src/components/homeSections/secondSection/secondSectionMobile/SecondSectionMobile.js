import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { truncate as _truncate } from 'lodash'

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

const SecondSectionMobile = (props) => {

    const { t } = useTranslation()

    return (
        <Row className='d-flex justify-center width-100 height-100'>
            <Col xs={0} sm={4} />
            <Col
                xs={24}
                sm={16}
                className={'sec-section-card-col'}>

                <CustomCard
                    cardClassName={props.obj.cardClassName}
                    level={props.obj.titleLevel}
                    cardTitle={t('home.secondSection.' + props.obj.cardTitle)}
                    titleClassName={props.obj.titleClassName}
                    cardParagraph={_truncate(t(`home.secondSection.${props.obj.paragraph}`),
                        {
                            length: 70,
                            separator: '...'
                        }
                    )}
                    paragraphClassName={'sec-section-paragraph'}
                >
                    <CustomCard
                        cardClassName={props.obj.bgImage}
                        cardButton={props.obj.show_btn}
                        type={props.obj.type_btn}
                        currentIcon={
                            <ArrowRightOutlined
                                className='arrow-icon-btn' />
                        }
                    />
                </CustomCard>
            </Col>
            <Col xs={0} sm={4} />
        </Row>
    )
}

SecondSectionMobile.defaultProps = {
    obj: valueObj
}

export default SecondSectionMobile