import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Carousel } from 'antd'

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setColor } from '../../redux/ducks/colorDuck'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import constants
import { academy_comments, up_case_studies } from "../../utils/properties";

// import style
import './Up.css'

// import components
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";
import CustomCard from '../../components/functional_components/customCard/CustomCard'
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import Comments from "../../components/functional_components/comments/Comments";
import CustomOwlCarousel from "../../components/hooks_components/customOwlCarousel/CustomOwlCarousel";
import CustomButton from "../../components/functional_components/Button/CustomButton";
import ViewAllButton from "../../components/functional_components/viewAllButton/ViewAllButton";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";

const Up = (props) => {

    const primary_bg_page_up = '#52798e'

    const { t } = useTranslation()

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        props.dispatch(setColor(true))
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_up))
            props.dispatch(setColor(true))
        }
    }

    const printComments = (item, key) => {
        return (
            <Comments
                key={key}
                commentsText={item.commentsText}
                name={item.name}
                surname={item.surname}
                imgAlt={item.name}  // *alt*
                imgSrc={item.imgSrc}
                imgClassName={item.imgClassName}
            />
        )
    }

    const printCaseStudies = (item, key) => {
        return (
            <CustomCard
                key={key}
                cardClassName={item.containerClassName}
                cardParagraph={turnToUppercase(item.title)}
                paragraphClassName={item.titleClassName}
            />
        )
    }

    const printCaseStudiesDesktop = (item, key) => {
        return (
            <Col
                key={key}
                xs={0}
                md={8}
            >
                <CustomCard
                    cardClassName={item.containerClassName}
                    cardParagraph={turnToUppercase(item.title)}
                    paragraphClassName={item.titleClassName}
                />
            </Col>
        )
    }

    return (
        <div className='up-container'>
            <section>
                <IntroductiveSection
                    titleInColumn={'Up'}
                    titleLight={true}
                    bg1='up-bg1'
                    bg2='up-bg2'
                    intro={'La nostra Software Factory'}
                    introLight={true}
                    desc1={'Con dedizione e professionalità lavoriamo al fianco dei nostri clienti per fornire servizi di progettazione, implementazione, delivery, integration e application maintenance di sistemi software. Diamo supporto e realizziamo progetti partendo dall’analisi tecnica frontend/backend, realizzazione mockup all’implementazione del software attraverso le tecnologie innovative presenti sul mercato.'}
                    desc1Light={true}
                    desc2={'Attraverso metodologia Agile, verranno definiti step di verifica e di aggiornamento del prodotto già durante lo sviluppo, con frequenti rilasci di versioni testabili dal cliente, in modo da ottimizzare puntualmente miglioramenti o eventuali modifiche sulle attività concordate. Dall’analisi del progetto alla stesura della documentazione fino all’implementazione: vi seguiamo in ogni fase'}
                    desc2Light={true}
                />

                <Row>
                    <CustomCard
                        cardParagraph={'le tecnologie utilizzate vanno dall’ecosistema Java a quello .Net per il Backend, mentre Javascript e i principali framework per il frontend (React, Angular e Vue). Per l’infrastruttura basiamo abitualmente i progetti in cloud su servizi Amazon Web Services.'}
                        paragraphClassName={'up-intro-section-paragraph txt-light'}
                    />
                </Row>
            </section>

            <section>
                <Row>
                    <Col
                        xs={24}
                        className="up-comments-title-container"
                    >
                        <SectionSubtitle
                            title={turnToUppercase(t('Academy.comments_title'))}
                            shortLineBelow
                            classNameTitle={'up-comments-title'}
                            classNameShortLine={'up-short-line'}
                        />
                    </Col>
                    <Col
                        xs={24}
                        lg={0}
                    >
                        <Carousel
                            autoplay
                            dots={false}
                            className="academy-comments-carousel-ant"
                        >
                            {academy_comments.map(printComments)}
                        </Carousel>
                    </Col>
                    <Col
                        xs={0}
                        lg={12}
                    >
                        <Comments />
                    </Col>
                    <Col
                        xs={0}
                        lg={12}
                        className={'academy-comments-section-second-comment-col'}
                    >
                        <Comments />
                    </Col>
                </Row>
            </section>

            <section className="up-case-studies-section">
                <Row>
                    <Col
                        xs={24}
                    >
                        <SectionSubtitle
                            styleContainer={{ marginBottom: '10px' }}
                            LongLineAbove
                            classNameTitle={'up-case-studies-title'}
                            title={turnToUppercase('case studies')}
                            classNameLongLine={'up-long-line'}
                        />
                    </Col>
                    <Col
                        xs={24}
                        md={0}
                    >
                        <CustomOwlCarousel
                            objCarousel={false}
                            marginMobile={25}
                            numItemMobile={1.3}
                            numItemMore320Less768={1.3}
                        >
                            {up_case_studies.map(printCaseStudies)}
                        </CustomOwlCarousel>
                    </Col>

                    <Row className={'up-case-studies-desktop'}>
                        {up_case_studies.map(printCaseStudiesDesktop)}
                    </Row>
                    <Row className="up-case-studies-btn-container">
                        <CustomButton
                            type={'view-all-btn-light'}
                            content={<ViewAllButton
                                classNameTxt={'up-case-studies-btn'}
                            />}
                        />
                    </Row>
                </Row>
            </section>

            <section className={'academy-form-section consulting-gsap-sixth-section'}>
                <Row>
                    <Col
                        xs={24}
                    >
                        <SectionSubtitle
                            styleContainer={{ marginBottom: '10px' }}
                            classNameLongLine={'up-long-line'}
                            LongLineAbove
                            classNameTitle={'up-form-title'}
                            title={turnToUppercase(t('Academy.form_message_title'))}
                        />
                    </Col>
                    <Col
                        xs={24}
                        md={6}
                    >
                        <CustomCard
                            cardParagraph={t(`Academy.form_message_desc`)}
                            paragraphClassName={'up-form-desc'}
                        />
                    </Col>
                    <Col xs={0} md={4}></Col>
                    <Col xs={24} md={14}>
                        <CustomForm
                            moreInfo={false}
                            agreement={false}
                            positionBtn={'flex-end'}
                            classNameTextArea={'up-form-text-area'}
                            typeBtn='form-btn-light'
                        />
                    </Col>
                </Row>
            </section>

        </div >
    )
}

export default connect()(Up)