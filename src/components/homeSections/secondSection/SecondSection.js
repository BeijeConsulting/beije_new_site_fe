import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { truncate as _truncate } from 'lodash'

//import style
import './SecondSection.css'

//import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';

//import costants
import { cardWhoWeAre } from '../../../utils/properties'

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";

const SecondSection = () => {
    const [state, setState] = useState({
        dimensionDevice: window.innerWidth
    })

    const updateMedia = () => {
        setState({
            ...state,
            dimensionDevice: window.innerWidth
        });
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const { t } = useTranslation()

    const changeLength = () => {
        let dimensionDevice = state.dimensionDevice
        let textLength = 60
        if (dimensionDevice <= 320)
            textLength = 70
        else if (dimensionDevice > 320 && dimensionDevice <= 425) {
            textLength = 80
        }
        else if (dimensionDevice > 425 && dimensionDevice <= 768) {
            textLength = 100
        }
        else if (dimensionDevice > 768 && dimensionDevice <= 1024) {
            textLength = 200
        }
        else if (dimensionDevice > 1024) {
            textLength = 300
        }
        return textLength

    }

    const printCard = (item, key) => {
        return (
            <Col xs={24} md={7} key={key}>

                <CustomCard
                    key={key}
                    cardClassName={item.cardClassName}
                    level={item.titleLevel}
                    cardTitle={t('home.secondSection.' + item.cardTitle)}
                    titleClassName={item.titleClassName}
                >
                    <CustomCard
                        cardClassName={item.squareClassName}
                        cardParagraph={_truncate(t(`home.secondSection.${item.paragraph}`),
                            {
                                length: changeLength(),
                                separator: '...'
                            }
                        )}
                        paragraphClassName={'sec-section-paragraph'}
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
            <Row style={{ width: '100 %', display: 'flex' }} className='d-flex justify-center'>
                {cardWhoWeAre.map(printCard)}
            </Row>

        </>
    )
}

export default SecondSection