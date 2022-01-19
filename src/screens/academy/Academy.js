import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setPageFocus, initPageFocus } from "../../redux/ducks/pageFocusDuck";

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
import { academy_carousel_student, academy2, academy_comments, ENVIRONMENT } from "../../utils/properties";

//import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import ViewAllButton from "../../components/functional_components/viewAllButton/ViewAllButton"
import CustomButton from "../../components/functional_components/Button/CustomButton";
import Comments from "../../components/functional_components/comments/Comments";
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";
import GoToDetailRow from "../../components/functional_components/goToDetailRow/GoToDetailRow";
import SectionForm from "../../components/functional_components/sectionForm/SectionForm";
import CustomOwlCarousel from "../../components/hooks_components/customOwlCarousel/CustomOwlCarousel";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";

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
        props.dispatch(setPageFocus('academy'));

        const element = ref.current;

        const secondSection = element.querySelector('.academy-gsap-second-section');
        const secSectionTitle = element.querySelector('.academy-gsap-our-courses-title');

        const secondSecRow2 = element.querySelector('.academy-gsap-our-courses-row2');
        const secSectionDescDesktop = element.querySelector('.academy-gsap-our-courses-desc-desktop');
        const secSectionDescMobile = element.querySelector('.academy-gsap-our-courses-desc-mobile');
        const secSectionImg = element.querySelector('.academy-gsap-our-courses-img');
        const secSectionYouTube = element.querySelector('.academy-gsap-our-courses-youTube');

        const thirdSec = element.querySelector('.academy-gsap-third-section');
        const thirdSecTitle = element.querySelector('.academy-gsap-next-courses-title');
        const thirdSecBtn = element.querySelector('.academy-gsap-next-courses-btn');

        const fourthSec = element.querySelector('.academy-gsap-fourth-section');
        const percentageTitle = element.querySelector('.academy-gsap-percentage-title');
        const percentageSingleMobile = element.querySelector('.academy-gsap-percentage-single-mobile');
        const percentageSingleDesktop = element.querySelectorAll('.academy-gsap-percentage-single-desktop');

        const fifthSec = element.querySelector('.academy-gsap-fifth-section');
        const commentTitle = element.querySelector('.academy-gsap-comment-title');
        const singleComment = element.querySelector('.academy-gsap-single-comment')

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSection,
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSecRow2,
                start: 'top 75%'
            }
        })

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: thirdSec,
                start: 'top 75%'
            }
        })

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: fourthSec,
                start: 'top 75%'
            }
        })

        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: fifthSec,
                start: 'top 75%'
            }
        })

        t1.from(secSectionTitle, { y: 20, opacity: 0, duration: 0.5, ease: 'back' })

        t2.from(secSectionDescMobile, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
        t2.from(secSectionImg, { opacity: 0, duration: 0.5, ease: 'power2.in' })
        t2.from(secSectionYouTube, { x: -50, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t2.from(secSectionDescDesktop, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })

        t3.from(thirdSecTitle, { y: 20, opacity: 0, duration: 0.5, ease: 'back' })
        t3.from(thirdSecBtn, { opacity: 0, duration: 0.5, ease: 'power2.in' })

        t4.from(percentageTitle, { y: 50, opacity: 0, duration: 0.5, ease: 'back' })
        t4.from(percentageSingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t4.from(percentageSingleMobile, { opacity: 0, duration: 0.5, ease: 'power2.in' })

        t5.from(commentTitle, { y: 20, opacity: 0, duration: 0.5, ease: 'back' })
        t5.from(singleComment, { opacity: 0, duration: 0.5, ease: 'power2.in' })

        return () => {
            window.removeEventListener("scroll", handleScroll);
            props.dispatch(initPageFocus())
        };
    });

    const handleScroll = () => {
        console.log('page scroll: ', window.pageYOffset);
        if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 2200) || window.pageYOffset > 3300) {
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
                    cardParagraph={t(`Academy.${item.carouselDesc}`)}
                    paragraphClassName={'custom-carousel-paragraph'}
                />
            </Col>
        )
    }

    const printComments = (item, key) => {
        return (
            <Comments
                key={key}
                commentsContainerClassNameAdd={key % 2 !== 0 ? 'academy-single-comments-bottom' : ''}
                commentsText={t(`Academy.${item.commentsText}`)}
                name={item.name}
                surname={item.surname}
                profilePictureImg={item.profilePictureImg}
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
                        titleInColumn={t('Academy.title')}
                        bg1={'academy-bg1'}
                        intro={t('Academy.intro')}
                        desc1={t('Academy.page_description')}
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
                    <GoToDetailRow
                        numCol={1}
                        textClassName='academy-ourCourses-section-course-title'
                        text={t('Academy.title_academy_java')}
                        clickCallback={goToMasterBackend}
                    />
                    <GoToDetailRow
                        numCol={1}
                        textClassName='academy-ourCourses-section-course-title'
                        text={t('Academy.title_academy_frontend')}
                        clickCallback={goToMasterFrontend}
                        containerClassName={'academy-ourCourses-section-lastEl'}
                    />

                    <Row className="academy-ourCourses-second-part-container academy-gsap-our-courses-row2">
                        {/* <Col
                            xs={24}
                            md={0}
                            className="academy-our-courses-desc-mobile academy-gsap-our-courses-desc-mobile"
                        >

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
                        </Col>
                        <Col xs={0} md={2} lg={4}></Col>
                        <Col
                            xs={0}
                            md={10}
                            lg={8}
                            className="academy-gsap-our-courses-desc-desktop"
                        >
                            <CustomCard
                                cardDescription={t('Academy.course_description')}
                            />

                            <CustomCard
                                cardClassName={'academy-ourCourses-section-youtube-card'}
                                cardDescription={t('Academy.send_to_youtube')}
                                cardButton
                                type={'primary-arrow-btn'}
                                currentIcon={
                                    <ArrowRightOutlined
                                        className='arrow-icon-btn' />
                                }
                            />
                        </Col> */}

                    </Row>
                </section>

                <section>
                    <IntroductiveSection
                        firstRow={false}
                        bg2='academy-bg2'
                        desc2Mobile={false}
                        desc2Light={true}
                        desc2={
                            <>
                                <CustomCard
                                    cardDescription={t('Academy.course_description')}
                                />

                                <CustomCard
                                    cardClassName={'academy-ourCourses-section-youtube-card'}
                                    cardDescription={t('Academy.send_to_youtube')}
                                    cardButton
                                    type={'primary-arrow-btn'}
                                    currentIcon={
                                        <ArrowRightOutlined
                                            className='arrow-icon-btn' />

                                    }
                                />
                            </>

                        }
                    />
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

                    <GoToDetailRow
                        numCol={2}
                        text1={t('Academy.next_course_1')}
                        text2={t('Academy.date_next_course_1')}
                    />
                    <GoToDetailRow
                        numCol={2}
                        containerClassName='academy-next-courses-section-lastEl'
                        text1={t('Academy.next_course_2')}
                        text2={t('Academy.date_next_course_2')}
                    />

                    <Row className={'academy-next-courses-view-all-btn-container'}>
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
                        title={turnToUppercase(t('Academy.title_carousel_student'))}
                        shortLineBelow
                        classNameContainer={'academy-gsap-percentage-title'}
                    />
                    <Row className={'academy-percentage-section-carousel academy-gsap-percentage-single-mobile'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'academy-percentage-section-card'}>
                        {academy_carousel_student.map(printPercentage)}
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
                            span={24}
                        >
                            <CustomOwlCarousel
                                item_superLargeDesktop={2}
                                item_mediumDesktop={2}
                                item_desktop={2}
                                item_tablet={2}
                                item_bigMobile={1}
                                item_mobile={1}
                                item_smallmobile={1}
                                item_extraSmallMobile={1}
                                objCarousel={false}
                                className="academy-gsap-single-comment"

                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                            >
                                {academy_comments.map(printComments)}
                            </CustomOwlCarousel>
                        </Col>
                    </Row>
                </section>

            </div>

            {/* Form section */}
            <section className={'academy-form-section consulting-gsap-sixth-section'}>
                <SectionForm
                    title={t('Academy.form_message_title')}
                />
            </section>
        </div >
    )
}

export default connect()(Academy)