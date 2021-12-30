import React from "react";
// import { useTranslation } from "react-i18next";

import { Row, Col, Typography, Collapse } from "antd";
const { Title } = Typography
const { Panel } = Collapse;

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
import { turnToUppercase, addBreakPoint } from "../../utils/utilities";

//import constants
import { java_program } from "../../utils/properties";

//import components
import CustomButton from "../functional_components/Button/CustomButton";
import CustomCard from "../functional_components/customCard/CustomCard";
import GoBackBtn from "../functional_components/goBackBtn/GoBackBtn";

const AcademyDetails = (props) => {

    // const { t } = useTranslation()

    const changeIcon = (panelProps) => {
        console.log('panelProps', panelProps)
        console.log('is active: ', panelProps.isActive)
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


    const printListTopic = (item, key) => {
        return (
            <Panel
                key={key}
                header={item.title_subject}
                className={'aDeteils-program-section-program-panel'}
            >
                {addBreakPoint(item.subtopic_list, '-br-')}
            </Panel >
        )
    }

    return (
        <div
            className={'aDeteils-container'}
        >

            <section className={'aDeteils-introductive-section-container'}>
                <Row>
                    <Col xs={24} className={'aDeteils-introductive-section-goBack-btn'} >
                        <CustomButton
                            type={'go-back-btn'}
                            content={
                                <GoBackBtn
                                    goBackContent={"Torna all'academy"}
                                />}
                        />
                    </Col>
                    <Col xs={12} md={24} className={'aDeteils-introductive-section-title-container'}>
                        <Row>
                            <Title
                                level={1}
                            >{props.pageTitle}</Title>
                        </Row>
                    </Col>
                    <Col xs={24} md={12} lg={12} className={'aDeteils-introductive-section-intro-col1'}>
                        <Row className="aDeteils-introductive-section-intro-container">
                            <CustomCard
                                cardDescription={props.pageDescription}
                                descriptionClassName={'aDeteils-introductive-section-desc-desktop'}
                            />
                        </Row>
                    </Col>
                    <Col xs={24} md={12} lg={12} className={'aDeteils-introductive-section-img1-container'}>
                        <CustomCard
                            cardImg
                            imgPreview={false}
                            // alt={*alt*} 
                            imgClassName={'aDeteils-introductive-section-img1'}
                            imgSrc={props.imgSrc}
                        />
                    </Col>

                    <Col xs={24} className={'aDeteils-introductive-section-btn-candidate'}>
                        <CustomButton
                            content={props.btnContent}
                            htmlType='submit'
                            type={'form-btn'}
                        />
                    </Col>
                    <Col xs={24} md={0} className={'aDeteils-introductive-section-desc-mobile-container'}>
                        <CustomCard
                            cardDescription={props.pageDescription}
                            descriptionClassName={'aDeteils-introductive-section-desc-mobile'}
                        />
                    </Col>
                </Row>
            </section>

            <section className={'aDeteils-program-section'}>
                <Row>
                    <Col xs={24} md={8} lg={6}>
                        <Row>
                            <CustomCard
                                titleLevel={2}
                                cardTitle={'Struttura'}
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
                                    cardParagraph={turnToUppercase('Stage')}
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
                                    cardParagraph={turnToUppercase('Compenso')}
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
                                    cardParagraph={turnToUppercase('Sede del corso')}
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
                                cardTitle={'Programma'}
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
                                {java_program.map(printListTopic)}
                            </Collapse>
                        </Row>
                    </Col>
                    <Col xs={0} md={2} lg={4}></Col>
                </Row>
            </section>
        </div>
    )
}

export default AcademyDetails