import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Typography, Carousel } from "antd";
const { Title } = Typography;

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

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
import { academy1, consulting_carousel_client, academy2, academy_comments } from "../../utils/properties";

//import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import ViewAllButton from "../../components/functional_components/viewAllButton/ViewAllButton"
import CustomButton from "../../components/functional_components/Button/CustomButton";
import Comments from "../../components/functional_components/comments/Comments";

const Academy = (props) => {

    const primary_bg_page_academy = '#feef87'
    const secondary_bg_page_academy = '#d6e3e5'

    const { t } = useTranslation()

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 2200)) {
            props.dispatch(setColorHeader(primary_bg_page_academy))
            console.log('window pageYOffset: ', window.pageYOffset)
        }
        else {
            props.dispatch(setColorHeader(secondary_bg_page_academy))
            console.log('window pageYOffset: ', window.pageYOffset)
        }
    }

    const printPercentage = (item, key) => {
        return (
            <Col xs={0} md={8} key={key} className={'container-column items-center padding-30'}>
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
        <div className={'academy-container'}>

            {/* Yellow part */}
            <div className={'academy-first-part'}>

                {/* Introductive section */}
                <section>
                    <Row>
                        <Col xs={24} md={12} className={'academy-introductive-section-intro-col1'}>
                            <Row>
                                <Title
                                    level={1}
                                >{turnToUppercase('academy')}</Title>
                            </Row>
                            <Row className="academy-introductive-section-intro-container">
                                <CustomCard
                                    cardDescription={t('Academy.intro')}
                                    descriptionClassName='academy-introductive-section-academy-intro grotesk-font'
                                />
                                <CustomCard
                                    cardDescription={t('Academy.page_description')}
                                    descriptionClassName={'academy-introductive-section-desc-desktop'}
                                />
                            </Row>
                        </Col>
                        <Col xs={24} md={12} className={'academy-introductive-section-img1-container'}>
                            <CustomCard
                                cardImg
                                imgPreview={false}
                                // alt={*alt*} 
                                imgClassName={'academy-introductive-section-img1'}
                                imgSrc={academy1}
                            />
                        </Col>
                        <Col xs={24} md={0} className="academy-introductive-section-desc-mobile-container">
                            <CustomCard
                                cardDescription={t('Academy.page_description')}
                                descriptionClassName={'academy-introductive-section-desc-mobile'}
                            />
                        </Col>
                    </Row>
                </section>

                {/* Our courses section */}
                <section className={'academy-ourCourses-section'}>
                    <Row>
                        <Col xs={24}>
                            <CustomCard
                                cardTitle={turnToUppercase(t('Academy.our_courses_title'))}
                                titleLevel={2}
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-ourCourses-section-singleCourse-container academy-ourCourses-section-java-container'}>
                        <Col xs={18}>
                            <CustomCard
                                cardClassName={'academy-ourCourses-section-course-title-container'}
                                cardTitle={turnToUppercase(t('Academy.title_academy_java'))}
                                titleLevel={3}
                                titleClassName={'academy-ourCourses-section-course-title'}
                            />
                        </Col>
                        <Col xs={6} className={'academy-courses-detail-btn'}>
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
                    <Row className={'academy-ourCourses-section-singleCourse-container academy-ourCourses-section-frontend-container'}>
                        <Col xs={18}>
                            <CustomCard
                                cardClassName={'academy-ourCourses-section-course-title-container'}
                                cardTitle={turnToUppercase(t('Academy.title_academy_frontend'))}
                                titleLevel={3}
                                titleClassName={'academy-ourCourses-section-course-title'}
                            />
                        </Col>
                        <Col xs={6} className={'academy-courses-detail-btn'}>
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
                        <Col xs={24} md={0}>
                            <CustomCard
                                cardDescription={t('Academy.course_description')}
                            />
                        </Col>
                        <Col xs={24} md={12} className={"academy-ourCourses-section-img-container"}>
                            <CustomCard
                                cardImg
                                imgPreview={false}
                                // alt={*alt*} 
                                imgClassName={'academy-ourCourses-section-img'}
                                imgSrc={academy2}
                            />
                            <div className={'academy-ourCourses-section-youtube-container'}>
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
                        <Col xs={0} md={10} lg={8}>
                            <CustomCard
                                cardDescription={t('Academy.course_description')}
                            />
                        </Col>
                    </Row>
                </section>

                {/* Next Courses section */}
                <section className='academy-next-courses-section'>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                title={turnToUppercase(t('Academy.next_courses_title'))}
                            />
                        </Col>
                    </Row>
                    <Row className={'academy-next-courses-section-list academy-next-courses-section-course1-container'}>
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
                    <Row className={'academy-next-courses-section-list academy-next-courses-section-course2-container'}>
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
                    <Row>
                        <Col xs={24} className={'academy-next-courses-view-all-btn'}>
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
                <section className="academy-percentage-section">
                    <SectionSubtitle
                        title={turnToUppercase(t('Academy.percentage_client_satisfaction_title'))}
                        shortLineBelow
                    />
                    <Row className={'academy-percentage-section-carousel'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'academy-percentage-section-card'}>
                        {consulting_carousel_client.map(printPercentage)}
                    </Row>
                </section>

                {/* Comments section */}
                <section>
                    <Row>
                        <Col xs={24} className="academy-comments-title-container">
                            <SectionSubtitle
                                title={turnToUppercase(t('Academy.comments_title'))}
                                shortLineBelow
                            />
                        </Col>
                        <Col xs={24} lg={0}>
                            <Carousel
                                autoplay
                                dots={false}
                                className="academy-comments-carousel-ant"
                            >
                                {academy_comments.map(printComments)}
                            </Carousel>
                        </Col>
                        <Col xs={0} lg={12}>
                            <Comments />
                        </Col>
                        <Col xs={0} lg={12} className={'academy-comments-section-second-comment-col'}>
                            <Comments />
                        </Col>
                    </Row>
                </section>

                {/* Form section */}
                <section className={'academy-form-section'}>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                styleContainer={{ marginBottom: '10px' }}
                                LongLineAbove
                                title={turnToUppercase(t('Academy.form_message_title'))}
                            />
                        </Col>
                        <Col xs={24} md={6}>
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