import React, { useRef, useEffect } from "react";

import { Row, Col } from "antd";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './SectionForm.css';

// import components
import SectionSubtitle from "../sectionSubtitle/SectionSubtitle";
import CustomCard from "../customCard/CustomCard";
import CustomForm from "../../hooks_components/customForm/CustomForm";

const SectionForm = (props) => {

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const title = element.querySelector('.sec-form-title-gsap');
        const desc = element.querySelector('.sec-form-desc-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(title, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t1.from(desc, { opacity: 0, duration: 0.5, ease: 'power2.in' })

    }, [])

    return (
        <div
            ref={ref}
        >
            <Row>
                <Col
                    xs={24}
                >
                    <SectionSubtitle
                        styleContainer={{ marginBottom: props.marginBottom }}
                        classNameLongLine={props.classNameLongLine}
                        LongLineAbove={props.LongLineAbove}
                        classNameTitle={`sec-form-title-gsap ${props.classNameTitle}`}
                        title={props.title}
                    />
                </Col>
                <Col
                    xs={24}
                    md={6}
                >
                    <CustomCard
                        cardParagraph={props.cardParagraph}
                        paragraphClassName={props.paragraphClassName}
                        cardClassName={`sec-form-desc-gsap ${props.cardClassName}`}
                    />
                </Col>
                <Col xs={0} md={4}></Col>
                <Col xs={24} md={14}>
                    <CustomForm
                        moreInfo={props.moreInfo}
                        agreement={props.agreement}
                        positionBtn={props.positionBtn}
                        classNameTextArea={props.classNameTextArea}
                        typeBtn={props.typeBtn}
                    />
                </Col>
            </Row>
        </div>
    )
}

SectionForm.defaultProps = {
    marginBottom: '10px',
    LongLineAbove: true,
    moreInfo: false,
    agreement: false,
    positionBtn: 'flex-end'
}

export default SectionForm