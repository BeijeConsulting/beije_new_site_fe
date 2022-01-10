import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import ant design
import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

//import style
import './Consulting.css';
import '../../components/hooks_components/customCarousel/CustomCarousel.css'

//import constants
import { consulting_carousel_client } from "../../utils/properties";

//import functions
import { turnToUppercase } from "../../utils/utilities";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard';
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";
import IntroductiveSection from "../../components/functional_components/introductiveSection/IntroductiveSection";


const Consulting = (props) => {

    const primary_bg_page_consulting = '#9ec1db'
    const secondary_bg_page_consulting = '#d6e3e5'

    const { t } = useTranslation()

    const ref = useRef(null);

    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        const element = ref.current;

        const firstRow = element.querySelector('.intro-sec-gsap');
        const title = element.querySelector('.intro-sec-gsap-title');
        const intro = element.querySelector('.intro-sec-gsap-intro');
        const img1 = element.querySelector('.intro-sec-gsap-img1')

        // const secondRow = element.querySelector('.consulting-gsap-second-row');
        // const descMobile = element.querySelector('.consulting-gsap-desc-mobile');
        // const descDesktop = element.querySelector('.consulting-gsap-desc-desktop');
        // const img2 = element.querySelector('.consulting-gsap-img2')

        const secondSection = element.querySelector('.consulting-gsap-second-section');
        const percentage1Title = element.querySelector('.consulting-gsap-percentage1-title')
        const percentage1SingleMobile = element.querySelector('.consulting-gsap-percentage1-single-mobile')
        const percentage1SingleDesktop = element.querySelectorAll('.consulting-gsap-percentage1-single-desktop')

        const thirdSection = element.querySelector('.consulting-gsap-third-section');
        const percentage2Title = element.querySelector('.consulting-gsap-percentage2-title')
        const percentage2SingleMobile = element.querySelector('.consulting-gsap-percentage2-single-mobile')
        const percentage2SingleDesktop = element.querySelectorAll('.consulting-gsap-percentage2-single-desktop')
        const percentage2DataSurvey = element.querySelectorAll('.consulting-gsap-percentage2-data-survey')

        const fourthSection = element.querySelector('.consulting-gsap-fourth-section');
        const formTitle = element.querySelector('.consulting-gsap-form-title')
        const formDesc = element.querySelector('.consulting-gsap-form-desc')


        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                markers: true,
                // scrub: true,
                toggleActions: "restart none restart none",
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                markers: true,
                // scrub: true,
                toggleActions: "restart none restart none",
                start: 'top 75%'
            }
        })

        // const t3 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: secondRow,
        //         markers: true,
        //         // scrub: true,
        //         toggleActions: "restart none restart none",
        //         start: 'top 75%',
        //         // scrub: true,
        //         end: '70%'
        //     }
        // })

        // const t4 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: secondRow,
        //         markers: true,
        //         toggleActions: "restart none restart none",
        //         start: 'top 75%',
        //         // scrub: true,
        //         end: '70%'
        //     }
        // })

        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSection,
                markers: true,
                toggleActions: "restart none restart none",
                start: 'top 75%',
                // scrub: true,
            }
        })

        const t6 = gsap.timeline({
            scrollTrigger: {
                trigger: thirdSection,
                markers: true,
                toggleActions: "restart none restart none",
                start: 'top 75%',
                // scrub: true,
            }
        })

        const t7 = gsap.timeline({
            scrollTrigger: {
                trigger: fourthSection,
                markers: true,
                toggleActions: "restart none restart none",
                start: 'top 75%',
                // scrub: true,
            }
        })


        t1.from(title, { y: 200, opacity: 0, duration: 1, ease: 'back' })
        t1.from(intro, { y: 200, opacity: 0, duration: 1, ease: 'baunce.in' })
        t2.from(img1, { opacity: 0, duration: 1.5, ease: 'power2.in' })

        // t3.from(descMobile, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })
        // t3.from(descDesktop, { y: 500, opacity: 0, duration: 1, ease: 'baunce.in' })
        // t4.from(img2, { opacity: 0, duration: 2, ease: 'power2.in' })

        t5.from(percentage1Title, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t5.from(percentage1SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t5.from(percentage1SingleMobile, { opacity: 0, duration: 1, ease: 'power2.in' })

        t6.from(percentage2Title, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t6.from(percentage2SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t6.from(percentage2SingleMobile, { opacity: 0, duration: 1, ease: 'power2.in' })
        t6.from(percentage2DataSurvey, { opacity: 0, duration: 1, ease: 'power2.in' })

        t7.from(formTitle, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t7.from(formDesc, { opacity: 0, duration: 0.5, ease: 'power2.in' })


        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 1297)) {
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
                />
                <CustomCard
                    cardParagraph={t(`Consulting.${item.carouselDesc}`)}
                    paragraphClassName={'custom-carousel-paragraph '}
                />
            </Col>
        )
    }

    const printPercentage2 = (item, key) => {
        return (
            <Col xs={0} md={8} key={key} className={'container-column items-center padding-30 consulting-gsap-percentage2-single-desktop'}>
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
                />
                <CustomCard
                    cardParagraph={t(`Consulting.${item.carouselDesc}`)}
                    paragraphClassName={'custom-carousel-paragraph '}
                />
            </Col>
        )
    }

    return (
        /* *he* */
        <div className={'consulting-container'} ref={ref}>

            <section className={'consulting-introductive-section'}>
                <IntroductiveSection
                    titleInColumn={'Consulting'}
                    desc1Desktop={false}
                    bg1='consulting-bg1'
                    bg2='consulting-bg2'
                    introLight={true}
                    intro={'In ottica people first aiutiamo le aziende a costruire Team di Valore attraverso figure altamente formate per fornire servizi di consulenza informatica specializzati.'}
                    desc1Light={true}
                    desc1={'Qualità e best efficiency si fondono per la costruzione di progetti innovativi. '}
                    desc2Mobile={false}
                    desc2Light={true}
                    desc2={'Qualità e best efficiency si fondono per la costruzione di progetti innovativi. '}
                />
            </section>

            <div className={'consulting-percentage1-section'}>
                <section className={'consulting-gsap-second-section'}>
                    <SectionSubtitle
                        title={turnToUppercase(t('Consulting.title_carousel_client'))}
                        shortLineBelow
                        classNameContainer={'consulting-gsap-percentage1-title'}
                    />
                    <Row className={'consulting-percentage-section-carousel consulting-gsap-percentage1-single-mobile'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'consulting-percentage-section-card'}>
                        {consulting_carousel_client.map(printPercentage1)}
                    </Row>
                </section>

                <section className="consulting-percentage2-section consulting-gsap-third-section">
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
                    <Row className="consulting-gsap-percentage2-data-survey">
                        <SectionSubtitle
                            styleContainer={{ marginBottom: 0 }}
                            shortLineAbove
                            description={t('Consulting.data_survey')}
                        />
                    </Row>
                </section>

                <section className={'consulting-gsap-fourth-section'}>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                styleContainer={{ marginBottom: '10px' }}
                                LongLineAbove
                                title={turnToUppercase(t('Consulting.title_add_info'))}
                                classNameContainer={'consulting-gsap-form-title'}
                            />
                        </Col>
                        <Col xs={24} md={6}>
                            <CustomCard
                                cardParagraph={t(`Consulting.description_add_info`)}
                                cardClassName={'consulting-gsap-form-desc'}
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

export default connect()(Consulting)