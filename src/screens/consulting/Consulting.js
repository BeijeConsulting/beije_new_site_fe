import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import ant design
import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";
import { setPageFocus, initPageFocus } from "../../redux/ducks/pageFocusDuck";
import { initVisibility } from "../../redux/ducks/visibilityDuck";

//import style
import './Consulting.css';
import '../../components/hooks_components/customCarousel/CustomCarousel.css'

//import constants
import { consulting_carousel_client, consulting_carousel_employee } from "../../utils/properties";

//import functions
import { turnToUppercase } from "../../utils/utilities";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard';
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";
import SectionForm from "../../components/functional_components/sectionForm/SectionForm";
import PolygonSection from "../../components/functional_components/polygonSection/PolygonSection";
import PercentageSection from "../../components/functional_components/percentageSection/PercentageSection";


const Consulting = (props) => {

  const primary_bg_page_consulting = '#9ec1db'
  const secondary_bg_page_consulting = '#d6e3e5'

  const { t } = useTranslation()

  const ref = useRef(null);

  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    props.dispatch(setPageFocus('consulting'));
    props.dispatch(initVisibility())
    props.dispatch(setColorHeader(primary_bg_page_consulting))

    const element = ref.current;

    const secondSection = element.querySelector('.consulting-gsap-second-section');
    const percentage1Title = element.querySelector('.consulting-gsap-percentage1-title')
    const percentage1SingleMobile = element.querySelector('.consulting-gsap-percentage1-single-mobile')
    const percentage1SingleDesktop = element.querySelectorAll('.consulting-gsap-percentage1-single-desktop')
    const numberPercentageDesktop = element.querySelectorAll('.consulting-gsap-number-percentage')
    const numberPercentageMobile = element.querySelectorAll('.consulting-gsap-number-percentage-mobile')
    const percentage1DataSurvey = element.querySelector('.consulting-gsap-percentage1-data-survey')

    // const thirdSection = element.querySelector('.consulting-gsap-third-section');
    // const percentage2Title = element.querySelector('.consulting-gsap-percentage2-title')
    // const percentage2SingleMobile = element.querySelector('.consulting-gsap-percentage2-single-mobile')
    // const percentage2SingleDesktop = element.querySelectorAll('.consulting-gsap-percentage2-single-desktop')

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: secondSection,
        start: 'top 75%',
      }
    })

    const t1_2 = gsap.timeline({
      scrollTrigger: {
        trigger: secondSection,
        start: 'top 75%',
      }
    })

    const t1_3 = gsap.timeline({
      scrollTrigger: {
        trigger: secondSection,
        start: 'top 75%',
      }
    })

    // const t2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: thirdSection,
    //         start: 'top 75%',
    //     }
    // })

    t1.from(percentage1Title, { y: 100, opacity: 0, duration: 0.5, ease: 'back' })
    t1.from(percentage1SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
    t1_2.from(numberPercentageDesktop, { textContent: 0, duration: 3, ease: 'Power1.easeIn', snap: { textContent: 1 } })
    t1_3.from(percentage1SingleMobile, { opacity: 0, duration: 0.5, ease: 'power2.in' })
    t1_3.from(numberPercentageMobile, { textContent: 0, duration: 3, ease: 'Power1.easeIn', snap: { textContent: 1 } })
    t1.from(percentage1DataSurvey, { opacity: 0, duration: 0.5, ease: 'power2.in' })

    // t2.from(percentage2Title, { y: 100, opacity: 0, duration: 0.5, ease: 'back' })
    // t2.from(percentage2SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
    // t2.from(percentage2SingleMobile, { opacity: 0, duration: 0.5, ease: 'power2.in' })

    return () => {
      window.removeEventListener("scroll", handleScroll);
      props.dispatch(initPageFocus())
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 1297) || window.pageYOffset > 2300) {
      props.dispatch(setColorHeader(primary_bg_page_consulting))
    }
    else {
      props.dispatch(setColorHeader(secondary_bg_page_consulting))
    }
  }

  const printPercentage1 = (item, key) => {
    return (
      <Col xs={0} md={8} key={key} className={'container-column items-center padding-30 consulting-gsap-percentage1-single-desktop'}>
        <CustomCard
          cardClassName={'custom-carousel-icon '}
          imgPreview={false}
          cardImg
          imgSrc={item.iconSrc}
          imgHeight={42}
          imgWidth={56}
        />
        <div className='separator-line-vertical '></div>
        <CustomCard
          titleLevel={1}
          cardTitle={item.titlePenrcentage}
          titleClassName={'consulting-gsap-number-percentage'}
        />
        <CustomCard
          cardParagraph={t(`Consulting.${item.carouselDesc}`)}
          paragraphClassName={'custom-carousel-paragraph '}
        />
      </Col>
    )
  }

  // const printPercentage2 = (item, key) => {
  //     return (
  //         <Col xs={0} md={8} key={key} className={'container-column items-center padding-30 consulting-gsap-percentage2-single-desktop'}>
  //             <CustomCard
  //                 cardClassName={'custom-carousel-icon '}
  //                 imgPreview={false}
  //                 cardImg
  //                 imgSrc={item.iconSrc}
  //                 imgHeight={42}
  //                 imgWidth={56}
  //             />
  //             <div className='separator-line-vertical '></div>
  //             <CustomCard
  //                 titleLevel={1}
  //                 cardTitle={item.titlePenrcentage}
  //             />
  //             <CustomCard
  //                 cardParagraph={t(`Consulting.${item.carouselDesc}`)}
  //                 paragraphClassName={'custom-carousel-paragraph '}
  //             />
  //         </Col>
  //     )
  // }

  // const sendEmailCommercial = () => {
  //   console.log('Send email to commercial');
  //   // *ga*
  // }

  return (
    /* *he* */
    <>
      <Helmet>
        <title>{t('helmet.meta_title.consulting')}</title>
        <meta name="description" content={t('helmet.meta_description.consulting')} />
        <meta name="keywords" content={t('helmet.keywords.consulting')} />
      </Helmet>

      <div className={'consulting-container'} ref={ref}>

        <section className={'consulting-introductive-section'}>
          <IntroductiveSection
            titleInColumn={'Consulting'}
            desc1Desktop={false}
            bg1='consulting-bg1'
            bg2='consulting-bg2'
            introLight={true}
            intro={t('Consulting.intro')}
            desc1Light={true}
            // desc1={'Qualità e best efficiency si fondono per la costruzione di progetti innovativi. '}
            desc1={
              <>
                {t('Consulting.description.part1')}
                <strong>
                  {t('Consulting.description.part2')}
                </strong>
                {t('Consulting.description.part3')}
              </>}
            desc2Mobile={false}
            desc2Light={true}
            desc2={
              <>
                {t('Consulting.description.part1')}
                <strong>
                  {t('Consulting.description.part2')}
                </strong>
                {t('Consulting.description.part3')}
              </>}
          />
        </section>

        <PolygonSection>
          <section className={'consulting-gsap-second-section'}>
            <SectionSubtitle
              title={turnToUppercase(t('Consulting.title_carousel_employee'))}
              shortLineBelow
              classNameContainer={'consulting-gsap-percentage1-title'}
            />

            {/* <PercentageSection /> */}
            <Row className={'consulting-percentage-section-carousel consulting-gsap-percentage1-single-mobile'}>
              <CustomCarousel
                titleObjClassName={'consulting-gsap-number-percentage-mobile'}
              />
            </Row>
            <Row className={'consulting-percentage-section-card'}>
              {consulting_carousel_employee.map(printPercentage1)}
            </Row>
            <Row className="consulting-gsap-percentage1-data-survey">
              <SectionSubtitle
                styleContainer={{ marginBottom: 0 }}
                shortLineAbove
                description={t('Consulting.data_survey')}
              />
            </Row>
          </section>

          {/* <section className="consulting-percentage2-section consulting-gsap-third-section">
                    <SectionSubtitle
                        title={turnToUppercase(t('Consulting.title_carousel_client'))}
                        shortLineBelow
                        classNameContainer={'consulting-gsap-percentage2-title'}
                    />
                    <Row className={'consulting-percentage-section-carousel consulting-gsap-percentage2-single-mobile'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'consulting-percentage-section-card'}>
                        {consulting_carousel_client.map(printPercentage2)}
                    </Row>
                </section> */}
        </PolygonSection>

        <section className={'consulting-gsap-fourth-section consulting-form-section'}>
          <SectionForm
            title={turnToUppercase(t('Consulting.title_add_info'))}
            // callBack={sendEmailCommercial}
            origin="consulting"
          />
        </section>
      </div>
    </>
  )
}

export default connect()(Consulting)