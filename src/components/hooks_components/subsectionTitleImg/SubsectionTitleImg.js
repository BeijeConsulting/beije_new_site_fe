import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Typography } from "antd";
const { Paragraph } = Typography

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import './SubsectionTitleImg.css';

// import constants 
import { social } from "../../../utils/properties";

// import components
import CustomButton from "../../functional_components/Button/CustomButton";
import SectionSubtitle from "../../functional_components/sectionSubtitle/SectionSubtitle";

const SubsectionTitleImg = (props) => {

    const { t } = useTranslation()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const title = element.querySelector('.subSection-title-gsap');
        const desc = element.querySelector('.subSection-desc-mobile-gsap');
        const descDesktop = element.querySelector('.subSection-desc-desktop-gsap');
        const img = element.querySelector('.subSection-img-gsap');
        const btn = element.querySelector('.subSection-btn-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        const t1_2 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(title, { y: 50, opacity: 0, duration: 0.5, ease: 'back' })
        t1.from(desc, { y: 20, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t1.from(descDesktop, { y: 20, opacity: 0, duration: 0.3, ease: 'baunce.in' })
        t1_2.from(img, { opacity: 0, duration: 0.5, ease: 'power2.in' })
        t1_2.from(btn, { opacity: 0, duration: 0.5, ease: 'power2.in' })
    }, [])

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
        <div
            className={props.classNameContainer}
            ref={ref}
        >
            {
                props.titleOutColumn &&
                <Row className={`subSection-title-gsap ${props.classNameTitle}`}>
                    <SectionSubtitle
                        level={2}
                        title={props.subTitle}
                        shortLineBelow
                    />
                </Row>
            }
            <Row className={`sub-section-row ${props.imgRight ? 'sub-section-row2' : ''}`}>
                {/* Description mobile always below title */}
                {/* <Col
                    xs={24}
                    lg={0}
                > */}
                <dvi className='sub-section-desc-mobile'>

                    {
                        props.desc &&
                        <Row className={'sub-section-desc-container '}>
                            <Paragraph
                                className={`sub-section-desc subSection-desc-mobile-gsap ${props.descLight ? 'txt-light' : ''}`}
                            >
                                {props.desc}
                            </Paragraph>
                        </Row>
                    }
                    {
                        props.list &&
                        <Row className={'sub-section-desc-container'}>
                            <ul className={`subSection-desc-mobile-gsap ${props.ulClassName}`}>
                                {!props.createList && props.listToPrint !== undefined ? props.listToPrint.map(printList) : props.createList}
                            </ul>

                        </Row>
                    }
                </dvi>

                {/* </Col> */}


                {/* Img on left side */}

                {props.imgLeftDescRight &&
                    <div className={'sub-section-img-icon-container'}>
                        <div
                            className={`sub-section-img sub-section-img-left subSection-img-gsap ${props.bg}`}
                        >
                        </div>
                        {/* Bottone visibile solo su mobile */}
                        {props.youTubeBtn &&
                            <div className="sub-section-btn-youtube-container-mobile subSection-btn-gsap">
                                <CustomButton
                                    type={'secondary-social'}
                                    href={social[2].url}
                                    bgIcon='btn-youtube-bg'
                                />
                            </div>
                        }
                    </div>
                }

                {/* <Col
                    xs={0}
                    lg={12}
                    className={props.descDesktopContainer}
                > */}
                <div
                    className={props.descDesktopContainer}

                >
                    {
                        props.desc &&
                        <Row className={'sub-section-desc-container'}>
                            <Paragraph
                                className={`sub-section-desc subSection-desc-desktop-gsap ${props.descLight ? 'txt-light' : ''}`}
                            >
                                {props.desc}
                            </Paragraph>
                        </Row>
                    }
                    {
                        props.list &&
                        <Row className={'sub-section-desc-container'}>
                            <ul className={`subSection-desc-desktop-gsap ${props.ulClassName}`}>
                                {!props.createList && props.listToPrint !== undefined ? props.listToPrint.map(printList) : props.createList}
                            </ul>

                        </Row>
                    }

                    {/* Bottone visibile solo su desktop */}
                    {props.youTubeBtn &&
                        <div className="subSection-btn-gsap">
                            <CustomButton
                                type={'secondary-social'}
                                href={social[2].url}
                                bgIcon='btn-youtube-bg'
                            />
                        </div>
                    }
                    {/* </Col> */}
                </div>
                {props.imgRightDescLeft &&
                    <div className={'sub-section-img-icon-container'}>

                        <div
                            className={`sub-section-img sub-section-img-right subSection-img-gsap ${props.bg}`}
                        >
                        </div>
                        {/* Bottone visibile solo su mobile */}
                        {props.youTubeBtn &&
                            <div className="sub-section-btn-youtube-container-mobile subSection-btn-gsap">
                                <CustomButton
                                    type={'secondary-social'}
                                    href={social[2].url}
                                    bgIcon='btn-youtube-bg'
                                />
                            </div>
                        }
                    </div>
                }
            </Row >
        </div >
    )
}

SubsectionTitleImg.defaultProps = {
    classNameContainer: 'sub-section-container sub-sec-gsap',
    classNameTitle: 'sub-section-title',
    titleOutColumn: true,
    subTitle: 'Value',
    imgRight: false,
    descDesktopContainer: 'sub-section-desc-desktop-container',
    ulClassName: "sub-section-list",
    imgRightDescLeft: true,
    list: false,
    imgLeftDescRight: false,
    youTubeBtn: true
}

export default SubsectionTitleImg