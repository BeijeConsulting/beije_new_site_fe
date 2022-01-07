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
                className={'aDeteils-program-section-program-panel'}
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

            <section className={'aDeteils-program-section'}>
                <Row>
                    <Col xs={24} md={8} lg={6}>
                        <Row>
                            <CustomCard
                                titleLevel={2}
                                cardTitle={t('AcademyDedails.structure')}
                            />
                        </Row>
                        <Row className={'aDeteils-program-section-structure-rows'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDeteils-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.stage'))}
                                    paragraphClassName={'aDeteils-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.stageDescription}
                                    paragraphClassName={'aDeteils-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                        <Row className={'aDeteils-program-section-structure-rows'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDeteils-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.compensation'))}
                                    paragraphClassName={'aDeteils-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.compensationDesc}
                                    paragraphClassName={'aDeteils-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                        <Row className={'aDeteils-program-section-structure-rows'}>
                            <Col xs={4}>
                                <ArrowRightOutlined
                                    className='aDeteils-program-section-structure-arrow-ul'
                                />
                            </Col>
                            <Col xs={20}>
                                <CustomCard
                                    cardParagraph={turnToUppercase(t('AcademyDedails.location'))}
                                    paragraphClassName={'aDeteils-program-section-structure-row-title'}
                                />
                                <CustomCard
                                    cardParagraph={props.locationDesc}
                                    paragraphClassName={'aDeteils-program-section-structure-text'}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} md={2} lg={2}></Col>
                    <Col xs={24} md={12} lg={12}>
                        <Row>
                            <CustomCard
                                titleLevel={2}
                                cardTitle={t('AcademyDedails.program')}
                            />
                        </Row>
                        <Row>
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