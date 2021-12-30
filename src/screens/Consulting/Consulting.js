import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import ant design
import { Row, Typography, Col } from "antd";
const { Title } = Typography;

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

//import style
import './Consulting.css';
import '../../components/hooks_components/customCarousel/CustomCarousel.css'

//import constants
import { consulting1, consulting_carousel_client } from "../../utils/properties";

//import functions
import { turnToUppercase } from "../../utils/utilities";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard';
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";


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
        const firstRow = element.querySelector('.consulting-gsap-first-row');
        const title = element.querySelector('.consulting-gsap-title');
        const intro = element.querySelector('.consulting-gsap-intro');
        const img1 = element.querySelector('.consulting-gsap-img1')

        const secondRow = element.querySelector('.consulting-gsap-second-row');
        const desc = element.querySelector('.consulting-gsap-desc');
        const img2 = element.querySelector('.consulting-gsap-img2')

        const secondSection = element.querySelector('.consulting-gsap-second-section');
        const percentage1Title = element.querySelector('.consulting-gsap-percentage1-title')
        const percentage1Single = element.querySelector('.consulting-gsap-percentage1-single')
        const percentage1SingleDesktop = element.querySelectorAll('.consulting-gsap-percentage1-single-desktop')


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                markers: true,
                start: 'top 75%'
            }
        })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: firstRow,
                markers: true,
                start: 'top 75%'
            }
        })

        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: secondRow,
                markers: true,
                start: 'top 75%',
                // scrub: true,
                end: '70%'
            }
        })

        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: secondRow,
                markers: true,
                start: 'top 75%',
                // scrub: true,
                end: '70%'
            }
        })

        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSection,
                markers: true,
                start: 'top 75%',
                // scrub: true,
            }
        })

        const t6 = gsap.timeline({
            scrollTrigger: {
                trigger: secondSection,
                markers: true,
                start: 'top 75%',
                // scrub: true,
            }
        })


        tl.from(title, { y: 200, opacity: 0, duration: 1.5, ease: 'back' })
        tl.from(intro, { y: 200, opacity: 0, duration: 1.5, ease: 'back' })
        t2.from(img1, { opacity: 0, duration: 1.5, ease: 'power2.in' })

        t3.from(desc, { y: 500, opacity: 0, duration: 2, ease: 'back' })
        t4.from(img2, { opacity: 0, duration: 2, ease: 'power2.in' })

        t5.from(percentage1Title, { y: 500, opacity: 0, duration: 1, ease: 'back' })
        t5.from(percentage1SingleDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })
        t6.from(percentage1Single, { opacity: 0, duration: 1, ease: 'power2.in' })


        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset == 0 || (window.pageYOffset > 0 && window.pageYOffset < 1297)) {
            props.dispatch(setColorHeader(primary_bg_page_consulting))
            console.log('window pageYOffset: ', window.pageYOffset)
        }
        else {
            props.dispatch(setColorHeader(secondary_bg_page_consulting))
        }
    }

    const printPercentage = (item, key) => {
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

    return (
        /* *he* */
        <div className={'consulting-container'} ref={ref}>

            <section className={'consulting-introductive-section'}>
                <Row className='consulting-introductive-section-first-row  consulting-gsap-first-row'>
                    <Col
                        xs={24}
                        md={12}
                        lg={14}
                        className="consulting-introductive-section-container1"
                    >
                        <Row className="consulting-introductive-section-title-container consulting-gsap-title">
                            <Title
                                level={1}
                            >{turnToUppercase('Consulting')}</Title>
                        </Row>
                        <Row className="consulting-introductive-section-intro-container consulting-gsap-intro">
                            <CustomCard
                                cardDescription={t('Consulting.intro')}
                                descriptionClassName='consulting-introductive-section-intro grotesk-font txt-light'
                            />
                        </Row>
                    </Col>
                    <Col xs={24} md={12} lg={10} className="consulting-introductive-section-images-container consulting-introductive-section-img1-container consulting-gsap-img1">
                        <CustomCard
                            imgPreview={false}
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-introductive-section-images consulting-introductive-section-img1'}
                            imgSrc={consulting1}
                        />
                    </Col>
                </Row>
                <Row className='consulting-gsap-second-row'>
                    <Col xs={24} md={0} className="consulting-introductive-section-desc-container">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                            descriptionClassName={'txt-light'}
                        />
                    </Col>
                    <Col xs={24} md={12} lg={12} className="consulting-introductive-section-images-container consulting-gsap-img2">
                        <CustomCard
                            imgPreview={false}
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-introductive-section-images consulting-introductive-section-img2'}
                            imgSrc={consulting1}
                        />
                    </Col>
                    <Col xs={0} md={12} lg={8} className="consulting-introductive-section-desc-container consulting-gsap-desc">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                            descriptionClassName={'txt-light'}
                        />
                    </Col>
                    <Col xs={0} lg={4}></Col>
                </Row>
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
                        {consulting_carousel_client.map(printPercentage)}
                    </Row>
                </section>

                <section className="consulting-percentage2-section">
                    <SectionSubtitle
                        title={turnToUppercase(t('Consulting.title_carousel_client'))}
                        shortLineBelow
                    />
                    <Row className={'consulting-percentage-section-carousel'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'consulting-percentage-section-card'}>
                        {consulting_carousel_client.map(printPercentage)}
                    </Row>
                    <Row>
                        <SectionSubtitle
                            styleContainer={{ marginBottom: 0 }}
                            shortLineAbove
                            description={t('Consulting.data_survey')}
                        />
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                styleContainer={{ marginBottom: '10px' }}
                                LongLineAbove
                                title={turnToUppercase(t('Consulting.title_add_info'))}
                            />
                        </Col>
                        <Col xs={24} md={6}>
                            <CustomCard
                                cardParagraph={t(`Consulting.description_add_info`)}
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