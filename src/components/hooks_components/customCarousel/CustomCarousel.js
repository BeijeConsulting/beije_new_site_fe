import React, { useRef } from "react";

import { useTranslation } from "react-i18next";

import { Carousel, Row, Col } from 'antd';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';

//import style
import './CustomCarousel.css'

//import constants
import { consulting_carousel_client } from "../../../utils/properties";

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";

const CustomCarousel = (props) => {

    const { t } = useTranslation()

    // const carouselRef = React.createRef();
    const carouselRef = useRef()

    const printElCarousel = (item, key) => {
        return (
            <div key={key}>
                <Row>
                    <Col xs={4} className={'custom-carousel-col-arrow'}>
                        <CustomCard
                            cardButton
                            currentIcon={
                                <ArrowLeftOutlined
                                    className={'custom-carousel-arrow'}
                                />}
                            type={'carousel-btn'}

                            clickCallback={() => {
                                carouselRef.current.prev();
                            }}
                        />
                    </Col>
                    <Col xs={16} className={'container-column items-center justify-center'}>
                        <CustomCard
                            cardClassName={'custom-carousel-icon'}
                            imgPreview={false}
                            cardImg
                            imgSrc={item.iconSrc}
                            imgHeight={42}
                            imgWidth={56}
                        />
                        <div className='separator-line-vertical'></div>
                        <CustomCard
                            titleLevel={1}
                            cardTitle={item.titlePenrcentage}
                            titleClassName={`center ${props.titleObjClassName}`}
                        />
                    </Col>
                    <Col xs={4} className={'custom-carousel-col-arrow'}>
                        <CustomCard
                            cardButton
                            currentIcon={
                                <ArrowRightOutlined
                                    className={'custom-carousel-arrow'}
                                />}
                            type={'carousel-btn'}
                            clickCallback={() => {
                                carouselRef.current.next();
                            }}

                        />
                    </Col>

                </Row>
                <Row>
                    <Col xs={4}>
                    </Col>
                    <Col xs={16}>
                        <CustomCard
                            cardParagraph={t(`Consulting.${item.carouselDesc}`)}
                            paragraphClassName={'custom-carousel-paragraph'}
                        />
                    </Col>
                    <Col xs={4}>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <Carousel
            effect={props.effect}
            dots={props.dots}
            ref={carouselRef}
        >
            {
                !!props.obj &&
                props.obj.map(printElCarousel)
            }
            {
                props.obj === undefined || props.obj == [] &&
                props.children
            }

        </Carousel>
    )
}

CustomCarousel.defaultProps = {
    dots: false,
    effect: 'scrollx',
    obj: consulting_carousel_client
}

export default CustomCarousel