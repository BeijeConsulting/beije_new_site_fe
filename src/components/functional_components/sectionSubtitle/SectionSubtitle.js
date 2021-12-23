import React from "react";

import { Row, Col } from "antd";

//import style
import './SectionSubtitle.css'

//import components
import CustomCard from "../customCard/CustomCard";

const SectionSubtitle = (props) => {
    return (
        <Row className={props.classNameContainer} style={props.styleContainer}>
            {
                !!props.shortLineAbove &&
                <Col xs={24}>
                    <div className={props.classNameShortLine}></div>
                </Col>
            }
            {
                !!props.LongLineAbove &&
                <Col xs={24}>
                    <div className={props.classNameLongLine}></div>
                </Col>
            }
            {!!props.title &&
                <Col xs={24}>
                    <CustomCard
                        titleLevel={props.level}
                        cardTitle={props.title}
                    />
                </Col>
            }
            {!!props.description &&
                <Col xs={24}>
                    <CustomCard
                        descriptionClassName={props.classNameDesc}
                        cardDescription={props.description}
                    />
                </Col>
            }
            {
                !!props.shortLineBelow &&
                <Col xs={24}>
                    <div className={props.classNameShortLine}></div>
                </Col>
            }
            {
                !!props.LongLineBelow &&
                <Col xs={24}>
                    <div className={props.classNameLongLine}></div>
                </Col>
            }

        </Row>
    )
}

SectionSubtitle.defaultProps = {
    classNameContainer: 'sec-subtitle-container',
    level: 2,
    classNameShortLine: 'separator-short-horizontal-line',
    classNameLongLine: 'separator-long-horizontal-line'
}

export default SectionSubtitle