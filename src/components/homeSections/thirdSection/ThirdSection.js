import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Layout } from "antd";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import './ThirdSection.css'

//import functions
import { turnToUppercase, divideText, setGaEvent } from "../../../utils/utilities";

// import constants
import { ENVIRONMENT } from "../../../utils/properties";

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";
import CustomMultiCarousel from "../../hooks_components/customMultiCarousel/CustomMultiCarousel";
import CustomButton from "../../functional_components/Button/CustomButton";
import ViewAllButton from "../../functional_components/viewAllButton/ViewAllButton";

const ThirdSection = () => {

    const [state, setState] = useState({
        showDragBtn: true
    })

    const { t } = useTranslation()
    const ref = useRef(null);
    const draggedCarousel = () => {
        setState({
            ...state,
            showDragBtn: false
        })
    }

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;

        const singleEl = element.querySelectorAll('.single-el-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        // t1.from(percentage1SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' });
        t1.from(singleEl, { y: 50, opacity: 0, stagger: 0.3, duration: 0.8, ease: 'power2.in' })

    }, [])

    return (
        <Layout
            className={'third-sec-container'}
        >
            <div
                ref={ref}
            >
                <Row className={'third-sec-row'}>
                    <Col xs={24} lg={7} className={'third-sec-col1'}>
                        <CustomCard
                            cardTitle={turnToUppercase(t('home.thirdSection.title'))}
                            titleClassName={'third-sec-title single-el-gsap'}
                            cardDescription={t('home.thirdSection.description')}
                            descriptionClassName={'third-sec-description single-el-gsap'}
                        />
                    </Col>
                    <Col md={1} lg={1} />
                    <Col
                        xs={24} lg={16}
                        className={'third-sec-col2 single-el-gsap'}
                    >
                        {state.showDragBtn &&
                            <CustomButton
                                type='drag-more-btn'
                                content={divideText(turnToUppercase(t('btn.drag')), '-BR-')}
                            />
                        }
                        <CustomMultiCarousel
                            dragged={draggedCarousel}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} className={'third-sec-col3 single-el-gsap'}>
                        <CustomButton
                            type={'view-all-btn'}
                            content={<ViewAllButton />}
                            clickCallback={setGaEvent({category: "Navigation", action: "Click view all", label: "Third section home"})}
                            href={`${ENVIRONMENT.ROUTING.BASE_URL}whoweare`}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default ThirdSection