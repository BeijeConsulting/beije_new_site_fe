import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Row, Col, Collapse, List } from "antd";
const { Panel } = Collapse;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './AcademyDetails.css'
// import '../../screens/academy/Academy.css'

// import assets
import {
    PlusOutlined,
    MinusOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';

//import functions
import { turnToUppercase } from "../../utils/utilities";

//import constants
import { java_program } from "../../utils/properties";

//import components
import CustomButton from "../functional_components/Button/CustomButton";
import CustomCard from "../functional_components/customCard/CustomCard";
import IntroductiveSection from "../functional_components/introductiveSection/IntroductiveSection";
import CustomList from "../functional_components/customList/CustomList";

const AcademyDetails = (props) => {

    const { t } = useTranslation()

    const navigate = useNavigate()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const structureCol = element.querySelector('.aDetals-structure-container-gsap');
        const structureColTitle = element.querySelector('.aDetals-structure-title-gsap');
        const sctructureColEl = element.querySelectorAll('.aDetals-structure-el-gsap')

        const programCol = element.querySelector('.aDetals-program-container-gsap');
        const programColTitle = element.querySelector('.aDetals-program-title-gsap');
        const programColEl = element.querySelectorAll('.aDetals-program-el-gsap')

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: structureCol,
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: structureCol,
                start: 'top 75%'
            }
        })

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: programCol,
                start: 'top 75%'
            }
        })

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: programCol,
                start: 'top 75%'
            }
        })


        t1.from(structureColTitle, { y: 200, opacity: 0, stragger: 0.3, duration: 1, ease: 'back' });
        t2.from(sctructureColEl, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })

        t3.from(programColTitle, { y: 200, opacity: 0, stragger: 0.3, duration: 1, ease: 'back' })
        t4.from(programColEl, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
    })

    const changeIcon = (panelProps) => {
        if (panelProps.isActive) {
            return (
                <CustomButton
                    type={'primary-arrow-btn'}
                    currentIcon={
                        <MinusOutlined />
                    }
                />
            )
        }
        else {
            return (

                <CustomButton
                    type={'primary-arrow-btn'}
                    currentIcon={
                        <PlusOutlined />
                    }
                />
            )
        }
    }


    const printListTopic = (el, key) => {
        return (
            <Panel
                key={key}
                header={t(el.title_subject)}
                className={'aDetails-program-section-program-panel'}
            >
                <CustomList
                    size="large"
                    // indent={false}
                    data={el.subtopic_list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />

            </Panel >

        )
    }

    const goBackAcademy = () => {
        navigate(-1)
    }

    return (
        <div
            className={'aDeteils-container'}
            ref={ref}
        >

            <section className={'aDeteils-introductive-section-container'}>
                <IntroductiveSection
                    btnGoBack={true}
                    goBackContent={t('btn.goBackAcademy')}
                    titleOutColumn={props.pageTitle}
                    bg1={'academy-bg1'}
                    candidateBtn={true}
                    btnContent={t('btn.apply')}
                    intro={props.pageIntro}
                    secondRow={false}
                    detailPage={true}
                    listDesktop={true}
                    listMobile={true}
                    listToPrint={props.listToPrint}
                    clickCallback={goBackAcademy}
                />
            </section>

            <section className={'aDetails-program-section'}>
                <Row>
                    <Col
                        xs={24}
                        md={8}
                        lg={6}
                        className={'aDetals-structure-container-gsap'}
                    >
                        <Row className="aDetals-structure-title-gsap">
                            <CustomCard
                                titleLevel={2}
                                cardTitle={t('AcademyDedails.structure')}
                            />
                        </Row>
                        <Row className={'aDetails-program-section-structure-rows aDetals-structure-el-gsap'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDetails-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.stage'))}
                                    paragraphClassName={'aDetails-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.stageDescription}
                                    paragraphClassName={'aDetails-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                        <Row className={'aDetails-program-section-structure-rows aDetals-structure-el-gsap'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDetails-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.compensation'))}
                                    paragraphClassName={'aDetails-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.compensationDesc}
                                    paragraphClassName={'aDetails-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                        <Row className={'aDetails-program-section-structure-rows aDetals-structure-el-gsap'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDetails-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.location'))}
                                    paragraphClassName={'aDetails-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.locationDesc}
                                    paragraphClassName={'aDetails-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} md={2} lg={2}></Col>
                    <Col
                        xs={24}
                        md={12}
                        lg={12}
                        className={'aDetals-program-container-gsap'}
                    >
                        <Row className="aDetals-program-title-gsap">
                            <CustomCard
                                titleLevel={2}
                                cardTitle={t('AcademyDedails.program')}
                            />
                        </Row>
                        <Row className="aDetals-program-el-gsap">
                            <Collapse
                                bordered={false}
                                ghost
                                showArrow={false}
                                expandIconPosition={"right"}
                                expandIcon={(panelProps) => changeIcon(panelProps)}
                                style={{ width: '100%' }}
                            >
                                {props.academyProgram.map(printListTopic)}
                            </Collapse>
                        </Row>
                    </Col>
                    <Col xs={0} md={2} lg={4}></Col>
                </Row>
            </section>
        </div>
    )
}

AcademyDetails.defaultProps = {
    academyProgram: java_program
}

export default AcademyDetails