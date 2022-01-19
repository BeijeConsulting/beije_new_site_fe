import React, { useEffect, useRef } from "react";
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
const valueObj = cardWhoWeAre[0];

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";
import CustomButton from "../../../functional_components/Button/CustomButton";

const SecondSectionMobile = (props) => {

    const { t } = useTranslation()

    const ref = useRef(null)

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const container = element.querySelector('.sec-section-container-gsap');
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

        t1.from(container, { y: 50, opacity: 0, duration: 0.5, ease: 'power2.in' })
        t2.from(singleEl, { y: 50, opacity: 0, duration: 0.5, ease: 'power2.in' })
    }, [])

    return (
        // <Col
        //     xs={24}
        //     className={props.obj.colContainerClassName}
        //     ref={ref}
        // >
            <div 
            className={`sec-section-container-gsap ${props.obj.cardContainerClassName}`}
            ref={ref}
            >
                <Row className="sec-section-row-title">
                    <CustomCard
                        cardTitle={t('home.secondSection.' + props.obj.cardTitle)}
                        titleLevel={props.obj.titleLevel}
                        cardClassName={`sec-section-singleEl-gsap ${props.obj.colClassName}`}
                    />

                    <CustomButton
                        type={props.obj.type_btn}
                        currentIcon={
                            <ArrowRightOutlined
                                className='arrow-icon-btn' />
                        }
                        className={'sec-section-singleEl-gsap'}
                    />
                </Row>
            </div>
        // </Col>
    )
}

SecondSectionMobile.defaultProps = {
    obj: valueObj
}

export default SecondSectionMobile