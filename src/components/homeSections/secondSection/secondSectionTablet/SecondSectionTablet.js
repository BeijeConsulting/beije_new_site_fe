import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import '../SecondSection.css'

//import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';

//import costants
import { cardWhoWeAre } from "../../../../utils/properties";
// const slicedArray = array.slice(0, n);
// const valueHistoryObj = [];
// valueHistoryObj = cardWhoWeAre[0, 1];

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";
import CustomButton from "../../../functional_components/Button/CustomButton";

const SecondSectionTablet = (props) => {

    const { t } = useTranslation()

    const ref = useRef(null)

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const container = element.querySelectorAll('.sec-section-container-gsap');
        const singleEl = element.querySelectorAll('.sec-section-singleEl-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 75%',
            }
        })

        t1.from(container, { y: 50, opacity: 0, stagger: 0.5, duration: 1, ease: 'power2.in' })
        t2.from(singleEl, { y: 50, opacity: 0, stagger: 0.5, duration: 1.5, ease: 'power2.in' })
    }, [])


    const printCard = (item, key) => {
        return (
            <Col
                md={12}
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
                            className={item.btnClassName}
                        />
                    </Row>
                </div>
            </Col >
        )
    }

    return (
        <>
            <Row
                className='d-flex justify-between width-100'
                ref={ref}

            >
                {cardWhoWeAre.slice(props.card1, props.card2).map(printCard)}
            </Row>

        </>
    )
}

SecondSectionTablet.defaultProps = {
    card1: 0, //2
    card2: 2 //4
}

export default SecondSectionTablet