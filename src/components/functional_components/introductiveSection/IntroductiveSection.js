import React, { useEffect, useRef } from "react";

import { Row, Col, Typography } from "antd";
const { Title, Paragraph } = Typography

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './IntroductiveSection.css'

// import components
import CustomButton from "../Button/CustomButton";
import GoBackBtn from "../goBackBtn/GoBackBtn";
import CustomList from "../customList/CustomList";


const IntroductiveSection = (props) => {
    const ref = useRef(null)

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const element = ref.current;

        const titleOutRow = element.querySelector('.intro-sec-row-title-out-gsap');
        const titleOut = element.querySelector('.intro-sec-title-out-gsap');

        const firstRow = element.querySelector('.intro-sec-row1-gsap');
        const firstRowTitle = element.querySelector('.intro-sec-gsap-title');
        const firstRowIntro = element.querySelector('.intro-sec-gsap-intro');
        const firstRowImg1 = element.querySelector('.intro-sec-gsap-img1')
        const firstRowDesc1Desktop = element.querySelector('.intro-sec-gsap-desc1-desktop')
        const firstRowDescMobile = element.querySelector('.intro-sec-gsap-desc-mobile')
        const firstRowListDesktop = element.querySelector('.intro-sec-gsap-list-desktop')
        const firstRowListMobile = element.querySelector('.intro-sec-gsap-list-mobile')


        const secondRow = element.querySelector('.into-sec-row2-gsap');
        const imgRow2 = element.querySelector('.into-sec-row2-img-gsap');
        const descDesktopRow2 = element.querySelector('.into-sec-row2-desc-desktop-gsap');
        const descMobileRow2 = element.querySelector('.into-sec-row2-desc-mobile-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: titleOutRow,
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                start: 'top 75%'
            }
        })

        const t2_2 = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                start: 'top 75%'
            }
        })

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: secondRow,
                start: 'top 75%'
            }
        })

        t1.from(titleOut, { y: 100, opacity: 0, duration: 0.5, ease: 'back' })

        t2.from(firstRowTitle, { y: 100, opacity: 0, duration: 0.5, ease: 'back' })
        t2.from(firstRowIntro, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2.from(firstRowDesc1Desktop, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2.from(firstRowListDesktop, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2.from(firstRowDescMobile, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2.from(firstRowListMobile, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2_2.from(firstRowImg1, { opacity: 0, duration: 0.5, ease: 'power2.in' })


        t3.from(imgRow2, { opacity: 0, duration: 0.5, ease: 'power2.in' })
        t3.from(descDesktopRow2, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t3.from(descMobileRow2, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
    }, [])


    const switchClassImg1 = () => {
        let resultClass = `intro-section-img-container intro-section-img1-container intro-sec-gsap-img1 ${props.bg1}`

        if (props.detailPage) {
            resultClass = `intro-section-img-container intro-section-img1-container intro-sec-gsap-img1 ${props.bg1}`
        }
        return resultClass
    }

    return (
        <div
            className={`intro-sec-gsap ${props.classNameContainer}`}
            ref={ref}
        >
            {/* go back button */}
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
                <Row className="intro-sec-row-title-out intro-sec-row-title-out-gsap">
                    <Title
                        level={1}
                        className="intro-sec-title-out-gsap"
                    >
                        {props.titleOutColumn}
                    </Title>
                </Row>
            }

            {/* Start of firt row */}
            {props.firstRow &&
                <Row className="intro-section-row-image intro-sec-row1-gsap">
                    {/* Text col */}

                    <div className="intro-sec-txt-div-container">


                        {/* Title */}
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
                        {/* Introduction */}
                        {props.intro &&
                            <Row className={'intro-section-intro-container'}>
                                <Paragraph
                                    className={`intro-section-intro intro-sec-gsap-intro ${props.introLight ? 'txt-light' : ''}`}
                                >
                                    {props.intro}
                                </Paragraph>
                            </Row>
                        }
                        {/* Description for desktop - next to img */}
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
                                <CustomList
                                    liClassName={props.liClassName}
                                    ulClassName={props.ulClassName}
                                    listToPrint={props.listToPrint}
                                />
                            </Row>
                        }

                    </div>
                    {/* Space for Img */}
                    <div
                        className={switchClassImg1()}
                    >
                    </div>


                    <Col
                        xs={24}
                        md={24}
                        lg={0}
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
                            md={24}
                            lg={0}
                        >
                            <CustomList
                                ulClassName={props.ulClassNameMobile}
                                listToPrint={props.listToPrint}
                            />
                        </Col>
                    }

                    {
                        props.candidateBtn &&

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
            }

            {/* Start of second row */}
            {
                props.secondRow &&
                <div className="intro-section-row-image intro-section-row2-image into-sec-row2-gsap">
                    {
                        props.desc2Mobile && props.desc2MobileAbove &&
                        <div
                            className="intro-sec-row2-desc-mobile"
                        >
                            <Paragraph
                                className={`intro-section-desc ${props.desc2Light ? 'txt-light' : ''} into-sec-row2-desc-mobile-gsap`}
                            >
                                {props.desc2}
                            </Paragraph>
                        </div>
                    }
                    <div
                        className={`intro-section-img-container intro-section-img2-container ${props.bg2} into-sec-row2-img-gsap`}
                    >
                    </div>
                    {
                        props.desc2Mobile && props.desc2Mobilebelow &&
                        <div
                            className="intro-sec-row2-desc-mobile"
                        >
                            <Paragraph
                                className={`intro-section-desc ${props.desc2Light ? 'txt-light' : ''} into-sec-row2-desc-mobile-gsap`}
                            >
                                {props.desc2}
                            </Paragraph>
                        </div>
                    }
                    {
                        // !props.desc2Mobile &&
                        <div
                            className="intro-sec-row2-desc-desktop"
                        >
                            <Paragraph
                                className={`intro-section-desc ${props.desc2Light ? 'txt-light' : ''} into-sec-row2-desc-desktop-gsap`}
                            >
                                {props.desc2}
                            </Paragraph>
                        </div>
                    }

                </div>
            }

        </div >
    )
}

IntroductiveSection.defaultProps = {
    titleInColumn: true,
    classNameContainer: 'intro-section-container',
    firstRow: true,
    desc1Desktop: true,
    secondRow: true,
    desc2Mobile: true,
    btnGoBack: false,
    candidateBtn: false,
    detailPage: false,
    listDesktop: false,
    listMobile: false,
    liClassName: 'intro-section-list-li',
    ulClassName: 'intro-section-list intro-sec-gsap-list-desktop',
    ulClassNameMobile: 'intro-sec-gsap-list-mobile',
    desc2MobileAbove: false,
    desc2Mobilebelow: true
}

export default IntroductiveSection