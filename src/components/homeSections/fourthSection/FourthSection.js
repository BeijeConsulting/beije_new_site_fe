import React, { useEffect, useRef } from "react";
import { Row, Col, Layout, Typography } from "antd";
const { Title } = Typography;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './FourthSection.css'

//import components
import CustomCard from '../../functional_components/customCard/CustomCard'
import { useTranslation } from "react-i18next";
import CustomForm from "../../hooks_components/customForm/CustomForm";

const FourthSection = () => {

    const { t } = useTranslation()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;

        const singleEl = element.querySelectorAll('.singleEl-gsap')

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(singleEl, { y: 200, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })


    }, [])

    return (
        <div
            ref={ref}
        >
            <Layout className={'fourth-sec-container'}>
                <Row>
                    <Title
                        level={1}
                        className={'singleEl-gsap'}
                    >
                        {t('home.fourthSection.title')}
                    </Title>
                </Row>
                <Row>
                    <Col xs={0} md={8} className={'fourth-sec-col1 txt-dark'}>
                        <Row className={'fourth-sec-single-row singleEl-gsap'}>
                            <CustomCard
                                descriptionClassName={'fourth-sec-description'}
                                cardDescription={t('home.fourthSection.location')}
                                cardDescription2={'Via Varese, 27/38'}
                                cardDescription3={'Lissone (MB)'}
                            />

                        </Row>
                        <Row className={'fourth-sec-single-row singleEl-gsap'}>
                            <CustomCard
                                descriptionClassName={'fourth-sec-description'}
                                cardDescription={t('home.fourthSection.contacts')}
                                cardDescription2={'job@beije.it'}
                                cardDescription3={'commerciale@beije.it'}
                            />
                        </Row>
                    </Col>
                    <Col xs={0} md={2} />
                    <Col xs={24} md={14} className={'fourth-sec-col2'}>
                        <CustomForm
                            classNameTextArea={'fourth-sec-text-area-form'}
                        />
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default FourthSection