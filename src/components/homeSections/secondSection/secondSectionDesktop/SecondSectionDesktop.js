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
                className={'sec-section-card-col'}>

                <CustomCard
                    cardClassName={item.cardClassName}
                    level={item.titleLevel}
                    cardTitle={t('home.secondSection.' + item.cardTitle)}
                    titleClassName={item.titleClassName}
                    cardParagraph={_truncate(t(`home.secondSection.${item.paragraph}`),
                        {
                            length: 100,
                            separator: '...'
                        }
                    )}
                    paragraphClassName={'sec-section-paragraph'}
                >
                    <CustomCard
                        cardClassName={item.bgImage}
                        cardButton={item.show_btn}
                        type={item.type_btn}
                        currentIcon={<ArrowRightOutlined />}
                    />
                </CustomCard>
            </Col>
        )
    }

    return (
        <>
            <Row className='d-flex justify-center width-100'>
                {cardWhoWeAre.map(printCard)}
            </Row>

        </>
    )
}

export default SecondSectionDesktop