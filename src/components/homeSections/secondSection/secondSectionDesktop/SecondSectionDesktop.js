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

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";

const SecondSectionDesktop = () => {

    const { t } = useTranslation()

    const printCard = (item, key) => {
        return (
            <Col
                md={6}
                key={key}
                className={item.colContainerClassName}
            >
                {/* <div className={item.colClassName}> */}
                    <CustomCard
                        cardTitle={t('home.secondSection.' + item.cardTitle)}
                        titleLevel={item.titleLevel}
                        cardClassName={item.colClassName}
                    />

                {/* </div> */}

                {/* <CustomCard
                    cardClassName={item.cardClassName}
                    titleLevel={item.titleLevel}
                    cardTitle={t('home.secondSection.' + item.cardTitle)}
                    titleClassName={item.titleClassName}
                    cardParagraph={_truncate(t(`home.secondSection.${item.paragraph}`),
                        {
                            length: 80,
                            separator: '...'
                        }
                    )}
                    // cardParagraph={t(`home.secondSection.${item.paragraph}`)}
                    paragraphClassName={'sec-section-paragraph'}
                >
                    <CustomCard
                        cardClassName={item.bgImage}
                        cardButton={item.show_btn}
                        type={item.type_btn}
                        currentIcon={
                            <ArrowRightOutlined
                                className='arrow-icon-btn' />
                        }
                    />
                </CustomCard> */}
            </Col>
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