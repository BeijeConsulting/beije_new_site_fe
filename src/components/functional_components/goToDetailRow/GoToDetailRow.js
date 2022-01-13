import React, { useRef, useEffect } from "react";

import { Row, Col, Typography } from "antd";
const { Text, Title } = Typography;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './GoToDetailRow.css'

// import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';


// import components
import CustomCard from "../customCard/CustomCard";

const GoToDetailRow = (props) => {

    const ref = useRef(null);


    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;

        const singleCol1 = element.querySelectorAll('.go-to-detail-row-single-col')
        const singleCol2 = element.querySelectorAll('.go-to-detail-row-col');


        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%'
            }
        })

        t1.from(singleCol1, { x: -200, opacity: 0, stagger: 0.5, duration: 0.5, ease: 'power2.in' })
        t1.from(singleCol2, { x: -200, opacity: 0, stagger: 0.5, duration: 0.5, ease: 'power2.in' })


    }, [])
    return (
        <Row
            ref={ref}
            className={`go-to-detail-row-container ${props.containerClassName}`}
        >
            <Col xs={18} md={18}>
                {
                    props.numCol === 1 &&
                    <Col
                        span={24}
                        className={'go-to-detail-row-single-col'}
                    >
                        <Title
                            level={props.titleLevel}
                            className={props.textClassName}
                        >
                            {props.text}
                        </Title>
                    </Col>

                }
                {props.numCol === 2 &&
                    <Row>
                        <Col
                            xs={24}
                            md={14}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text1}
                            </Text>
                        </Col>
                        <Col
                            xs={24}
                            md={10}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text2}
                            </Text>
                        </Col>
                    </Row>
                }
                {props.numCol === 4 &&
                    <Row>
                        <Col
                            xs={24}
                            md={8}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text1}
                            </Text>
                        </Col>
                        <Col xs={0} md={2}></Col>
                        <Col
                            xs={12}
                            md={4}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text2}
                            </Text>
                        </Col>
                        <Col
                            xs={12}
                            md={4}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text3}
                            </Text>
                        </Col>
                        <Col xs={0} md={2}></Col>
                        <Col
                            xs={24}
                            md={4}
                            className={'go-to-detail-row-col'}
                        >
                            <Text className={props.textClassName}>
                                {props.text4}
                            </Text>
                        </Col>
                    </Row>
                }
            </Col>
            <Col
                xs={6}
                md={6}
                className={`go-to-detail-row-col ${props.btnClassName}`}
            >
                <CustomCard
                    cardButton
                    type={'primary-arrow-btn'}
                    currentIcon={
                        <ArrowRightOutlined
                            className='arrow-icon-btn' />
                    }
                    clickCallback={props.clickCallback}
                />
            </Col>
        </Row>
    )
}

GoToDetailRow.defaultProps = {
    numCol: 4,
    textClassName: 'go-to-detail-row-txt',
    btnClassName: 'go-to-detail-row-btn',
}

export default GoToDetailRow