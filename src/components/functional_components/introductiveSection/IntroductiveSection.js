import React from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Typography } from "antd";
const { Title, Paragraph } = Typography

// import style
import './IntroductiveSection.css'

// import components
import CustomButton from "../Button/CustomButton";
import GoBackBtn from "../goBackBtn/GoBackBtn";


const IntroductiveSection = (props) => {

    const { t } = useTranslation()

    const switchClassImg1 = () => {
        let resultClass = `intro-section-single-img-container intro-section-img1-container intro-sec-gsap-img1 ${props.bg1}`
        if (props.secondRow) {
            resultClass = `intro-section-img-container intro-section-img1-container intro-sec-gsap-img1 ${props.bg1}`
        }
        else if (props.detailPage) {
            resultClass = `intro-section-detail-img-container intro-section-img1-container intro-sec-gsap-img1 ${props.bg1}`
        }
        return resultClass
    }

    const printList = (item, key) => {
        return (
            <li
                key={key}
            >
                {t(item)}
            </li>
        )
    }

    return (
        <div className={props.classNameContainer}>
            {
                props.btnGoBack &&
                <Row className="intro-sec-go-back-btn-container">
                    <CustomButton
                        type={'go-back-btn'}
                        content={
                            <GoBackBtn
                                goBackContent={props.goBackContent}
                            />}
                        clickCallback={props.clickCallback}
                    />
                </Row>
            }
            {
                props.titleOutColumn &&
                <Row>
                    <Title
                        level={1}
                    >
                        {props.titleOutColumn}
                    </Title>
                </Row>
            }
            <Row className="intro-section-first-row">
                <Col
                    xs={24}
                    md={12}
                >
                    {props.titleInColumn &&
                        <Row>
                            <Title
                                level={1}
                                className={`intro-section-title intro-sec-gsap-title ${props.titleLight ? 'txt-light' : ''}`}
                            >
                                {props.titleInColumn}
                            </Title>
                        </Row>
                    }
                    <Row className={'intro-section-intro-container'}>
                        <Paragraph
                            className={`intro-section-intro intro-sec-gsap-intro ${props.introLight ? 'txt-light' : ''}`}
                        >
                            {props.intro}
                        </Paragraph>
                    </Row>
                    {
                        props.desc1Desktop &&
                        <Row className={'intro-section-desc1-container intro-section-desc-container'}>
                            <Paragraph
                                className={`intro-section-desc1 intro-sec-gsap-desc1-desktop ${props.desc1Light ? 'txt-light' : ''}`}
                            >
                                {props.desc1}
                            </Paragraph>
                        </Row>
                    }
                    {
                        props.listDesktop && props.listToPrint !== undefined &&
                        <Row className={'intro-section-desc1-container intro-section-desc-container'}>
                            <ul className="intro-section-list">
                                {props.listToPrint.map(printList)}
                            </ul>

                        </Row>
                    }
                </Col>
                <div
                    className={switchClassImg1()}
                >
                </div>


                <Col
                    xs={24}
                    md={0}
                >
                    <Paragraph
                        className={`intro-section-desc intro-sec-gsap-desc-mobile ${props.desc1Light ? 'txt-light' : ''}`}
                    >
                        {props.desc1}
                    </Paragraph>
                </Col>

                {
                    props.listMobile && props.listToPrint !== undefined &&
                    <Col
                        xs={24}
                        md={0}
                    >
                        <ul>
                            {props.listToPrint.map(printList)}
                        </ul>
                    </Col>
                }

                {
                    props.candidateBtn &&
                    // <Row className="intro-sec-candidate-row">
                    //     <Col
                    //         xs={0}
                    //         md={12}
                    //     >
                    //         <Paragraph>
                    //             Vuoi entrare a far parte della Talent Community Beije?
                    //         </Paragraph>
                    //     </Col>
                    <Col
                        xs={24}
                        md={24}

                        className="intro-sec-candidate-btn"
                    >
                        <CustomButton
                            content={props.btnContent}
                            htmlType='submit'
                            type={'form-btn'}
                        />
                    </Col>
                    // </Row>

                }
            </Row >
            {
                props.secondRow &&
                <Row>
                    <div
                        className={`intro-section-img-container intro-section-img2-container ${props.bg2}`}
                    >
                    </div>
                    {
                        props.desc2Mobile &&
                        <Col
                            xs={24}
                            md={12}
                            className="intro-section-desc-container"
                        >
                            <Paragraph
                                className={`intro-section-desc ${props.desc2Light ? 'txt-light' : ''}`}
                            >
                                {props.desc2}
                            </Paragraph>
                        </Col>
                    }
                    {
                        !props.desc2Mobile &&
                        <Col
                            xs={0}
                            md={12}
                            className="intro-section-desc-container"
                        >
                            <Paragraph
                                className={`intro-section-desc ${props.desc2Light ? 'txt-light' : ''}`}
                            >
                                {props.desc2}
                            </Paragraph>
                        </Col>
                    }

                </Row>
            }

        </div >
    )
}

IntroductiveSection.defaultProps = {
    titleInColumn: true,
    classNameContainer: 'intro-section-container intro-sec-gsap',
    desc1Desktop: true,
    secondRow: true,
    desc2Mobile: true,
    btnGoBack: false,
    candidateBtn: false,
    detailPage: false,
    listDesktop: false,
    listMobile: false
}

export default IntroductiveSection