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
import { useTranslation } from "react-i18next";

const SectionForm = (props) => {

    const { t } = useTranslation();

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const element = ref.current;

        const title = element.querySelector('.sec-form-title-gsap');
        const desc = element.querySelectorAll('.sec-form-desc-gsap');

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 75%',
            }
        })

        t1.from(title, { y: 100, opacity: 0, duration: 0.5, ease: 'back' })
        t1.from(desc, { opacity: 0, stragger: 0.3, duration: 0.5, ease: 'power2.in' })

    }, [])

    return (
        <div
            ref={ref}
            className={props.classNameFormContainer}
        >
            <Row>
                <Col
                    xs={props.xsCol1Title}
                >
                    <SectionSubtitle
                        styleContainer={{ marginBottom: props.marginBottom }}
                        classNameLongLine={props.classNameLongLine}
                        LongLineAbove={props.LongLineAbove}
                        classNameTitle={`sec-form-title-gsap ${props.classNameTitle}`}
                        title={props.title}
                        level={props.titleLevel}
                    />
                </Col>
                <Col
                    xs={props.xsColInfo}
                    md={props.mdColInfo}
                >
                    <Row className={'sec-form-row-desc sec-form-desc-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.location')}
                            cardDescription2={'Via Varese, 27/38'}
                            cardDescription3={'Lissone (MB)'}
                        />

                    </Row>
                    <Row className={'sec-form-row-desc sec-form-desc-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.contacts')}
                            cardDescription2={'job@beije.it'}
                            cardDescription3={'commerciale@beije.it'}
                        />
                    </Row>
                </Col>
                <Col xs={props.xsColDivider} md={props.mdColDivider}></Col>
                <Col xs={props.xsColForm} md={props.mdColForm}>
                    <CustomForm
                        moreInfo={props.moreInfo}
                        agreement={props.agreement}
                        positionBtn={props.positionBtn}
                        classNameTextArea={props.classNameTextArea}
                        typeBtn={props.typeBtn}
                        classNameCheckbox={props.classNameCheckbox}
                        // callBack={props.callBack}
                        origin={props.origin}
                    />
                </Col>
            </Row>
        </div>
    )
}

SectionForm.defaultProps = {
    classNameFormContainer: "sec-form-container",
    marginBottom: '10px',
    LongLineAbove: false,
    positionBtn: 'flex-end',

    xsCol1Title: 24,
    xsColInfo: 24,
    mdColInfo: 6,
    xsColDivider: 0,
    mdColDivider: 4,
    xsColForm: 24,
    mdColForm: 14,

    origin: 'home'
}

export default SectionForm