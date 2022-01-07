import React from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Typography } from "antd";
const { Paragraph } = Typography

//import style
import './SubsectionTitleImg.css';

// import constants 
import { social } from "../../../utils/properties";

// import components
import CustomButton from "../../functional_components/Button/CustomButton";
import SectionSubtitle from "../../functional_components/sectionSubtitle/SectionSubtitle";

const SubsectionTitleImg = (props) => {

    const { t } = useTranslation()

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
                props.titleOutColumn &&
                <Row className={props.classNameTitle}>
                    <SectionSubtitle
                        level={2}
                        title={props.subTitle}
                        shortLineBelow
                    />
                </Row>
            }
            <Row className="sub-section-row">
                {/* Description mobile always below title */}
                <Col
                    xs={24}
                    md={0}
                >

                    {
                        props.desc &&
                        <Row className={'sub-section-desc-container'}>
                            <Paragraph
                                className={`sub-section-desc ${props.descLight ? 'txt-light' : ''}`}
                            >
                                {props.desc}
                            </Paragraph>
                        </Row>
                    }
                    {
                        props.list && props.listToPrint !== undefined &&
                        <Row className={'sub-section-desc-container'}>
                            <ul className="sub-section-list">
                                {props.listToPrint.map(printList)}
                            </ul>

                        </Row>
                    }
                </Col>

                {/* Img on left side */}

                {props.imgLeftDescRight &&
                    <div className={'sub-section-img-icon-container'}>
                        <div
                            className={`sub-section-img sub-section-img-left ${props.bg}`}
                        >
                        </div>
                        {/* Bottone visibile solo su mobile */}
                        {props.youTubeBtn &&
                            <div className="sub-section-btn-youtube-container-mobile">
                                <CustomButton
                                    type={'secondary-social'}
                                    href={social.url.url_youTube}
                                    bgIcon='btn-youtube-bg'
                                />
                            </div>
                        }
                    </div>
                }

                <Col
                    xs={0}
                    md={12}
                    className={props.descDesktopContainer}
                >

                    {
                        props.desc &&
                        <Row className={'sub-section-desc-container'}>
                            <Paragraph
                                className={`sub-section-desc ${props.descLight ? 'txt-light' : ''}`}
                            >
                                {props.desc}
                            </Paragraph>
                        </Row>
                    }
                    {
                        props.list && props.listToPrint !== undefined &&
                        <Row className={'sub-section-desc-container'}>
                            <ul className="sub-section-list">
                                {props.listToPrint.map(printList)}
                            </ul>

                        </Row>
                    }

                    {/* Bottone visibile solo su desktop */}
                    {props.youTubeBtn &&
                        <div>
                            <CustomButton
                                type={'secondary-social'}
                                href={social.url.url_youTube}
                                bgIcon='btn-youtube-bg'
                            />
                        </div>
                    }
                </Col>

                {props.imgRightDescLeft &&
                    <div className={'sub-section-img-icon-container'}>

                        <div
                            className={`sub-section-img sub-section-img-right ${props.bg}`}
                        >
                        </div>
                        {/* Bottone visibile solo su mobile */}
                        {props.youTubeBtn &&
                            <div className="sub-section-btn-youtube-container-mobile">
                                <CustomButton
                                    type={'secondary-social'}
                                    href={social.url.url_youTube}
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
    descDesktopContainer: 'sub-section-desc-desktop-container',
    imgRightDescLeft: true,
    list: false,
    imgLeftDescRight: false,
    youTubeBtn: true
}

export default SubsectionTitleImg