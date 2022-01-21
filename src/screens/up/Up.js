import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col } from 'antd'

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setColor } from '../../redux/ducks/colorDuck'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import constants
import { up_comments /*, up_case_studies */ } from "../../utils/properties";

// import style
import './Up.css'

// import components
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";
import CustomCard from '../../components/functional_components/customCard/CustomCard'
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import Comments from "../../components/functional_components/comments/Comments";
import CustomOwlCarousel from "../../components/hooks_components/customOwlCarousel/CustomOwlCarousel";
// import CustomButton from "../../components/functional_components/Button/CustomButton";
// import ViewAllButton from "../../components/functional_components/viewAllButton/ViewAllButton";
import SectionForm from "../../components/functional_components/sectionForm/SectionForm";
import { initPageFocus, setPageFocus } from "../../redux/ducks/pageFocusDuck";
import PolygonSection from "../../components/functional_components/polygonSection/PolygonSection";

const Up = (props) => {

  const primary_bg_page_up = '#52798e'

  const { t } = useTranslation()

  const ref = useRef(null);

  //GSAP
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setColor(true))
    props.dispatch(setPageFocus('up'))

    const element = ref.current;

    const desc3Container = element.querySelector('.up-intro-sec-desc3-row-gsap');
    const desc3 = element.querySelector('.up-intro-sec-desc3-gsap')

    const commentsSection = element.querySelector('.up-comments-gsap');
    const commentsSecTitle = element.querySelector('.up-comments-title-gsap');

    const caseStudiesSec = element.querySelector('.up-case-studies-gsap');
    const caseStudiesTitle = element.querySelector('.up-case-studies-title-gsap');
    const caseStudiesCarousel = element.querySelector('.up-case-studies-carousel-gsap');
    const caseStudiesSingleCard = element.querySelectorAll('.up-case-studies-single-card-gsap');
    const caseStudiesBtn = element.querySelector('.up-case-studies-view-all-gsap');

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: desc3Container,
        start: 'top 75%',
      }
    })

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: commentsSection,
        start: 'top 75%',
      }
    })

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: caseStudiesSec,
        start: 'top 75%',
      }
    })

    t1.from(desc3, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })

    t2.from(commentsSecTitle, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })

    t3.from(caseStudiesTitle, { y: 50, opacity: 0, duration: 0.5, ease: 'baunce.in' })
    t3.from(caseStudiesSingleCard, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
    t3.from(caseStudiesCarousel, { opacity: 0, duration: 0.5, ease: 'power2.in' })
    t3.from(caseStudiesBtn, { opacity: 0, duration: 0.5, ease: 'power2.in' })


    return () => {
      window.removeEventListener("scroll", handleScroll);
      props.dispatch(initPageFocus())
    };
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
        profilePictureImg={item.profilePictureImg}
        imgClassName={item.imgClassName}
      />
    )
  }

  // const printCaseStudies = (item, key) => {
  //     return (
  //         <CustomCard
  //             key={key}
  //             cardClassName={item.containerClassName}
  //             cardParagraph={turnToUppercase(item.title)}
  //             paragraphClassName={item.titleClassName}
  //         />
  //     )
  // }

  // const printCaseStudiesDesktop = (item, key) => {
  //     return (
  //         <Col
  //             key={key}
  //             xs={0}
  //             md={8}
  //             className="up-case-studies-single-card-gsap"
  //         >
  //             <CustomCard
  //                 cardClassName={item.containerClassName}
  //                 cardParagraph={turnToUppercase(item.title)}
  //                 paragraphClassName={item.titleClassName}
  //             />
  //         </Col>
  //     )
  // }

  return (
    <div
      className='up-container'
      ref={ref}
    >
      <section>
        <IntroductiveSection
          titleInColumn={t('Up.title')}
          titleLight={true}
          bg1='up-bg1'
          bg2='up-bg2'
          desc1={t('Up.desc1')}
          desc1Light={true}
          desc2Mobile={true}
          desc2={t('Up.desc2')}
          desc2Light={true}
        />

        <Row className="up-intro-sec-desc3-row up-intro-sec-desc3-row-gsap">
          <CustomCard
            cardParagraph={t('Up.paragraph')}
            paragraphClassName={'up-intro-section-paragraph txt-light up-intro-sec-desc3-gsap'}
          />
        </Row>
      </section>

      {/* <PolygonSection>
                <section className="up-comments-gsap">
                    <Row>
                        <Col
                            xs={24}
                            className="up-comments-title-container up-comments-title-gsap"
                        >
                            <SectionSubtitle
                                title={turnToUppercase(t('Up.comments_title'))}
                                shortLineBelow
                                classNameShortLine={'up-short-line'}
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
                                {up_comments.map(printComments)}
                            </CustomOwlCarousel>
                        </Col>
                    </Row>
                </section>

                <section className="up-case-studies-section up-case-studies-gsap">
                <Row>
                    <Col
                        xs={24}
                    >
                        <SectionSubtitle
                            styleContainer={{ marginBottom: '10px' }}
                            LongLineAbove
                            classNameTitle={'up-case-studies-title up-case-studies-title-gsap'}
                            title={turnToUppercase(t('Up.case_studies_title'))}
                            classNameLongLine={'up-long-line'}
                        />
                    </Col>
                    <Col
                        xs={24}
                        md={0}
                        className="up-case-studies-carousel-gsap"
                    >
                        <CustomOwlCarousel
                            objCarousel={false}
                            item_bigMobile={1}
                            item_mobile={1}
                            item_smallmobile={1}
                            item_extraSmallMobile={1}
                            // showArrows={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                        >
                            {up_case_studies.map(printCaseStudies)}
                        </CustomOwlCarousel>
                    </Col>

                    <Row className={'up-case-studies-desktop'}>
                        {up_case_studies.map(printCaseStudiesDesktop)}
                    </Row>
                    <Row className="up-case-studies-btn-container up-case-studies-view-all-gsap">
                        <CustomButton
                            type={'view-all-btn-light'}
                            content={<ViewAllButton
                                classNameTxt={'up-case-studies-btn'}
                            />}
                        />
                    </Row>
                </Row>
            </section>
            </PolygonSection> */}
      <PolygonSection
        polygenClipPath={'up-polygen-clip-path'}
      >
        <section className={'up-form-section consulting-gsap-sixth-section'}>
          <SectionForm
            title={turnToUppercase(t('Up.form_message_title'))}
          />
        </section>
      </PolygonSection>

      {/* settings to turn form into light color */}
      {/* <section className={'up-form-section consulting-gsap-sixth-section'}>
          <SectionForm
            descClassName={'up-form-desc'}
            classNameTitle={'up-form-title'}
            title={turnToUppercase(t('Up.form_message_title'))}
            classNameTextArea={'up-form-text-area'}
            typeBtn='form-btn-light'
            classNameCheckbox={'txt-light'}
          />
        </section> */}

    </div >


  )
}

export default connect()(Up)