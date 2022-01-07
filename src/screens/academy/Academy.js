import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Row, Col, Carousel } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import './Academy.css'
// import '../consulting/Consulting.css'

//import assets
import {
    ArrowRightOutlined
} from '@ant-design/icons';

//import functions
import { turnToUppercase } from "../../utils/utilities";

//import constants
import { consulting_carousel_client, academy2, academy_comments, ENVIRONMENT } from "../../utils/properties";

//import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import ViewAllButton from "../../components/functional_components/viewAllButton/ViewAllButton"
import CustomButton from "../../components/functional_components/Button/CustomButton";
import Comments from "../../components/functional_components/comments/Comments";
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";

const Academy = (props) => {


    const primary_bg_page_academy = '#feef87'
    const secondary_bg_page_academy = '#d6e3e5'

    const ref = useRef(null);

    const { t } = useTranslation()

    const navigate = useNavigate()

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const element = ref.current;

        const firstSection = element.querySelector('.intro-sec-gsap');
        const title = element.querySelector('.intro-sec-gsap-title');
        const intro = element.querySelector('.intro-sec-gsap-intro');
        const descDesktop = element.querySelector('.intro-sec-gsap-desc1-desktop');
        const descMobile = element.querySelector('.intro-sec-gsap-desc-mobile');
        const img1 = element.querySelector('.intro-sec-gsap-img1')

        const secondSection = element.querySelector('.academy-gsap-second-section');
        const secSectionTitle = element.querySelector('.academy-gsap-our-courses-title');
        const secSectionCourse1 = element.querySelector('.academy-gsap-our-courses-el1');
        const secSectionCourse2 = element.querySelector('.academy-gsap-our-courses-el2');

        const secondSecRow2 = element.querySelector('.academy-gsap-our-courses-row2');
        const secSectionDescDesktop = element.querySelector('.academy-gsap-our-courses-desc-desktop');
        const secSectionDescMobile = element.querySelector('.academy-gsap-our-courses-desc-mobile');
        const secSectionImg = element.querySelector('.academy-gsap-our-courses-img');
        const secSectionYouTube = element.querySelector('.academy-gsap-our-courses-youTube');

        const thirdSec = element.querySelector('.academy-gsap-third-section');
        const thirdSecTitle = element.querySelector('.academy-gsap-next-courses-title');
        const thirdSecCourse1 = element.querySelector('.academy-gsap-next-courses-el1');
        const thirdSecCourse2 = element.querySelector('.academy-gsap-next-courses-el2');
        const thirdSecBtn = element.querySelector('.academy-gsap-next-courses-btn');

        const fourthSec = element.querySelector('.academy-gsap-fourth-section');
        const percentageTitle = element.querySelector('.academy-gsap-percentage-title');
        const percentageSingleMobile = element.querySelector('.academy-gsap-percentage-single-mobile');
        const percentageSingleDesktop = element.querySelectorAll('.academy-gsap-percentage-single-desktop');

        const fifthSec = element.querySelector('.academy-gsap-fifth-section');
        const commentTitle = element.querySelector('.academy-gsap-comment-title');
        const singleComment = element.querySelector('.academy-gsap-single-comment')

        const sixthSection = element.querySelector('.consulting-gsap-sixth-section');
        const formTitle = element.querySelector('.academy-gsap-form-title')
        const formDesc = element.querySelector('.academy-gsap-form-desc')


        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: firstSection,
                markers: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t1l2 = gsap.timeline({
            scrollTrigger: {
                trigger: firstSection,
                markers: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSection,
                markers: true,
                // scrub: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSecRow2,
                markers: true,
                // scrub: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: thirdSec,
                markers: true,
                // scrub: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: fourthSec,
                markers: true,
                // scrub: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t6 = gsap.timeline({
            scrollTrigger: {
                trigger: fifthSec,
                markers: true,
                // scrub: true,
                toggleActions: "restart none none none",
                start: 'top 75%'
            }
        })

        const t7 = gsap.timeline({
            scrollTrigger: {
                trigger: sixthSection,
                markers: true,
                toggleActions: "restart none none none",
                start: 'top 75%',
                // scrub: true,
            }
        })

        t1.from(title, { y: 200, opacity: 0, duration: 1, ease: 'back' })
        t1.from(intro, { y: 200, opacity: 0, duration: 1, ease: 'baunce.in' })
        t1.from(descDesktop, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })
        t1l2.from(img1, { opacity: 0, duration: 1.5, ease: 'power2.in' })
        t1.from(descMobile, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })

        t2.from(secSectionTitle, { y: 200, opacity: 0, duration: 1, ease: 'back' })
        t2.from(secSectionCourse1, { x: -200, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t2.from(secSectionCourse2, { x: -200, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })

        t3.from(secSectionDescMobile, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })
        t3.from(secSectionImg, { opacity: 0, duration: 1, ease: 'power2.in' })
        t3.from(secSectionYouTube, { x: -200, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t3.from(secSectionDescDesktop, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })

        t4.from(thirdSecTitle, { y: 200, opacity: 0, duration: 1, ease: 'back' })
        t4.from(thirdSecCourse1, { x: -200, opacity: 0, stagger: 0.5, duration: 0.5, ease: 'power2.in' })
        t4.from(thirdSecCourse2, { x: -200, opacity: 0, stagger: 0.5, duration: 0.5, ease: 'power2.in' })
        t4.from(thirdSecBtn, { opacity: 0, duration: 1, ease: 'power2.in' })

        t5.from(percentageTitle, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t5.from(percentageSingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t5.from(percentageSingleMobile, { opacity: 0, duration: 1, ease: 'power2.in' })

        t6.from(commentTitle, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t6.from(singleComment, { opacity: 0, duration: 0.5, ease: 'power2.in' })

        t7.from(formTitle, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t7.from(formDesc, { opacity: 0, duration: 0.5, ease: 'power2.in' })

        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 2200)) {
            props.dispatch(setColorHeader(primary_bg_page_academy))
        }
        else {
            props.dispatch(setColorHeader(secondary_bg_page_academy))
        }
    }

    const goToMasterBackend = () => {
        navigate(`${ENVIRONMENT.ROUTING.BASE_URL}academy/masterBackend`)
    }

    const goToMasterFrontend = () => {
        navigate(`${ENVIRONMENT.ROUTING.BASE_URL}academy/masterFrontend`)
    }

    const printPercentage = (item, key) => {
        return (
            <Col xs={0} md={8} key={key} className={'container-column items-center padding-30 academy-gsap-percentage-single-desktop'}>
                <CustomCard
                    cardClassName={'custom-carousel-icon'}
                    imgPreview={false}
                    cardImg
                    imgSrc={item.iconSrc}
                    imgHeight={42}
                    imgWidth={56}
                />
                <div className='separator-line-vertical'></div>
                <CustomCard
                    titleLevel={1}
                    cardTitle={item.titlePenrcentage}
                />
                <CustomCard
                    cardParagraph={t(`Consulting.${item.carouselDesc}`)}
                    paragraphClassName={'custom-carousel-paragraph'}
                />
            </Col>
        )
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

    return (
        <div
            className={'academy-container'}
            ref={ref}
        >

            {/* Yellow part */}
            <div className={'academy-first-part'}>

                {/* Introductive section */}
                <section className="academy-gsap-first-section">
                    <IntroductiveSection
                        titleInColumn={'Talent Academy'}
                        bg1={'academy-bg1'}
                        intro={'Diventa il prossimo Software Ninjaneer!'}
                        desc1={'Le nostre Talent Academy sono percorsi di formazione teorico-pratici per diventare Software Developer. I Master Trainer Frontend e Backend, Roberto Brogi e Ivo Mosca ti accompagneranno durante tutto il percorso attraverso lezioni frontali, esercitazioni, valutazioni e progetti reali. I corsi hanno una durata di 3 mesi, sono retribuiti ed hanno come scopo l’inserimento in azienda con contratto a tempo indeterminato.'}
                        secondRow={false}
                    />
                </section>

                {/* Our courses section */}
                <section className={'academy-ourCourses-section academy-gsap-second-section'}>
                    <Row>
                        <Col
                            xs={24}
                            className={'academy-gsap-our-courses-title'}
                        >
                            <CustomCard
                                cardTitle={turnToUppercase(t('Academy.our_courses_title'))}
                                titleLevel={2}
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-ourCourses-section-singleCourse-container academy-ourCourses-section-java-container academy-gsap-our-courses-el1'}>
                        <Col xs={18}>
                            <CustomCard
                                cardClassName={'academy-ourCourses-section-course-title-container'}
                                cardTitle={turnToUppercase(t('Academy.title_academy_java'))}
                                titleLevel={3}
                                titleClassName={'academy-ourCourses-section-course-title'}
                            />
                        </Col>
                        <Col
                            xs={6}
                            className={'academy-courses-detail-btn'}
                        >
                            <CustomCard
                                cardButton
                                type={'primary-arrow-btn'}
                                currentIcon={
                                    <ArrowRightOutlined
                                        className='arrow-icon-btn' />
                                }
                                clickCallback={goToMasterBackend}
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-ourCourses-section-singleCourse-container academy-ourCourses-section-frontend-container academy-gsap-our-courses-el2'}>
                        <Col xs={18}>
                            <CustomCard
                                cardClassName={'academy-ourCourses-section-course-title-container'}
                                cardTitle={turnToUppercase(t('Academy.title_academy_frontend'))}
                                titleLevel={3}
                                titleClassName={'academy-ourCourses-section-course-title'}
                            />
                        </Col>
                        <Col
                            xs={6}
                            className={'academy-courses-detail-btn'}
                        >
                            <CustomCard
                                cardButton
                                type={'primary-arrow-btn'}
                                currentIcon={
                                    <ArrowRightOutlined
                                        className='arrow-icon-btn' />
                                }
                                clickCallback={goToMasterFrontend}
                            />
                        </Col>
                    </Row>
                    <Row className="academy-gsap-our-courses-row2">
                        <Col
                            xs={24}
                            md={0}
                            className="academy-gsap-our-courses-desc-desktop"
                        >
                            <CustomCard
                                cardDescription={t('Academy.course_description')}
                            />
                        </Col>
                        <Col
                            xs={24}
                            md={12}
                            className={"academy-ourCourses-section-img-container"}
                        >
                            <CustomCard
                                cardImg
                                imgPreview={false}
                                // alt={*alt*} 
                                imgClassName={'academy-ourCourses-section-img academy-gsap-our-courses-img'}
                                imgSrc={academy2}
                            />
                            <div className={'academy-ourCourses-section-youtube-container academy-gsap-our-courses-youTube'}>
                                <CustomCard
                                    cardDescription={t('Academy.send_to_youtube')}
                                    cardButton
                                    type={'secondary-arrow-btn'}
                                    currentIcon={
                                        <ArrowRightOutlined
                                            className='arrow-icon-btn' />
                                    }
                                />
                            </div>
                        </Col>
                        <Col xs={0} md={2} lg={4}></Col>
                        <Col
                            xs={0}
                            md={10}
                            lg={8}
                            className="academy-gsap-our-courses-desc-mobile"
                        >
                            <CustomCard
                                cardDescription={t('Academy.course_description')}
                            />
                        </Col>
                    </Row>
                </section>

                {/* Next Courses section */}
                <section className='academy-next-courses-section academy-gsap-third-section'>
                    <Row>
                        <Col
                            xs={24}
                            className="academy-gsap-next-courses-title"
                        >
                            <SectionSubtitle
                                title={turnToUppercase(t('Academy.next_courses_title'))}
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-next-courses-section-list academy-next-courses-section-course1-container academy-gsap-next-courses-el1'}>
                        <Col xs={18} md={0}>
                            <CustomCard
                                cardDescription={t('Academy.next_course_1')}
                                cardDescription2={t('Academy.date_next_course_1')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col xs={0} md={8}>
                            <CustomCard
                                cardDescription={t('Academy.next_course_1')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col xs={0} md={8}>
                            <CustomCard
                                cardDescription={t('Academy.date_next_course_1')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col xs={6} md={8} className={'academy-courses-detail-btn'}>
                            <CustomCard
                                cardButton
                                type={'primary-arrow-btn'}
                                currentIcon={
                                    <ArrowRightOutlined
                                        className='arrow-icon-btn' />
                                }
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-next-courses-section-list academy-next-courses-section-course2-container academy-gsap-next-courses-el2'}>
                        <Col xs={18} md={0}>
                            <CustomCard
                                cardDescription={t('Academy.next_course_2')}
                                cardDescription2={t('Academy.date_next_course_1')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col xs={0} md={8}>
                            <CustomCard
                                cardDescription={t('Academy.next_course_2')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col
                            xs={0}
                            md={8}
                        >
                            <CustomCard
                                cardDescription={t('Academy.date_next_course_1')}
                                descriptionClassName='academy-next-courses-section-course-info'
                            />
                        </Col>
                        <Col
                            xs={6}
                            md={8}
                            className={'academy-courses-detail-btn'}
                        >
                            <CustomCard
                                cardButton
                                type={'primary-arrow-btn'}
                                currentIcon={
                                    <ArrowRightOutlined
                                        className='arrow-icon-btn' />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            xs={24}
                            className={'academy-next-courses-view-all-btn academy-gsap-next-courses-btn'}
                        >
                            <CustomButton
                                type={'view-all-btn'}
                                content={<ViewAllButton />}
                            />
                        </Col>
                    </Row>
                </section>
            </div>

            {/* Second Part */}
            <div className={'academy-second-part'}>

                {/* Percentage Section */}
                <section className="academy-percentage-section academy-gsap-fourth-section">
                    <SectionSubtitle
                        title={turnToUppercase(t('Academy.percentage_client_satisfaction_title'))}
                        shortLineBelow
                        classNameContainer={'academy-gsap-percentage-title'}
                    />
                    <Row className={'academy-percentage-section-carousel academy-gsap-percentage-single-mobile'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'academy-percentage-section-card'}>
                        {consulting_carousel_client.map(printPercentage)}
                    </Row>
                </section>

                {/* Comments section */}
                <section className="academy-gsap-fifth-section">
                    <Row>
                        <Col
                            xs={24}
                            className="academy-comments-title-container academy-gsap-comment-title"
                        >
                            <SectionSubtitle
                                title={turnToUppercase(t('Academy.comments_title'))}
                                shortLineBelow
                            />
                        </Col>
                        <Col
                            xs={24}
                            lg={0}
                        >
                            <Carousel
                                autoplay
                                dots={false}
                                className="academy-comments-carousel-ant academy-gsap-single-comment"
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

                {/* Form section */}
                <section className={'academy-form-section consulting-gsap-sixth-section'}>
                    <Row>
                        <Col
                            xs={24}
                        >
                            <SectionSubtitle
                                styleContainer={{ marginBottom: '10px' }}
                                LongLineAbove
                                classNameTitle={'academy-gsap-form-title'}
                                title={turnToUppercase(t('Academy.form_message_title'))}
                            />
                        </Col>
                        <Col
                            xs={24}
                            md={6}
                            className="academy-gsap-form-desc"
                        >
                            <CustomCard
                                cardParagraph={t(`Academy.form_message_desc`)}
                                paragraphClassName={'academy-info-desc'}
                            />
                        </Col>
                        <Col xs={0} md={4}></Col>
                        <Col xs={24} md={14}>
                            <CustomForm
                                moreInfo={false}
                                agreement={false}
                                positionBtn={'flex-end'}
                            />
                        </Col>
                    </Row>
                </section>

            </div>
        </div>
    )
}

export default connect()(Academy)