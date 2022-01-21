import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Layout } from "antd";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import './ThirdSection.css'

//import functions
import { turnToUppercase, divideText } from "../../../utils/utilities";

// import constants
import { ENVIRONMENT } from "../../../utils/properties";

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";
import CustomOwlCarousel from "../../hooks_components/customOwlCarousel/CustomOwlCarousel";
import CustomButton from "../../functional_components/Button/CustomButton";
import ViewAllButton from "../../functional_components/viewAllButton/ViewAllButton";

const ThirdSection = () => {

    const [state, setState] = useState({
        showDragBtn: true
    })

    const { t } = useTranslation()
    const ref = useRef(null);
    const navigate = useNavigate();

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

    const goToWhoWeAre = () => {
        navigate(`${ENVIRONMENT.ROUTING.BASE_URL}whoweare`)
    }

    return (
        <Layout
            className={'third-sec-container'}
        >
            <div
                ref={ref}
            >
                <Row className={'third-sec-row'}>
                    <Col xs={24} md={8} lg={7} className={'third-sec-col1'}>
                        <CustomCard
                            cardTitle={turnToUppercase(t('home.thirdSection.title'))}
                            titleClassName={'third-sec-title single-el-gsap'}
                            cardDescription={t('home.thirdSection.description')}
                            descriptionClassName={'third-sec-description single-el-gsap'}
                        />
                    </Col>
                    <Col md={1} lg={1} />
                    <Col
                        xs={24} md={15} lg={16}
                        className={'third-sec-col2 single-el-gsap'}
                    >
                        {state.showDragBtn &&
                            <CustomButton
                                type='drag-more-btn'
                                content={divideText(turnToUppercase(t('btn.drag')), '-BR-')}
                            />
                        }
                        <CustomOwlCarousel
                            showArrows={true}
                            dragged={draggedCarousel}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} className={'third-sec-col3 single-el-gsap'}>
                        <CustomButton
                            type={'view-all-btn'}
                            content={<ViewAllButton />}
                            clickCallback={goToWhoWeAre}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default ThirdSection