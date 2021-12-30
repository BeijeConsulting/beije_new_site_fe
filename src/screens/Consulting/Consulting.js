import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

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

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
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

    return (
        /* *he* */
        <div className={'consulting-container'}>

            <section className={'consulting-introductive-section'}>
                <Row>
                    <Col
                        xs={24}
                        md={12}
                        className="consulting-introductive-section-container1"
                    >
                        <Row className="consulting-introductive-section-title-container">
                            <Title
                                level={1}
                            >{turnToUppercase('Consulting')}</Title>
                        </Row>
                        <Row className="consulting-introductive-section-intro-container">
                            <CustomCard
                                cardDescription={t('Consulting.intro')}
                                descriptionClassName='consulting-introductive-section-intro grotesk-font txt-light'
                            />
                        </Row>
                    </Col>
                    <Col xs={24} md={12} className="consulting-introductive-section-images-container consulting-introductive-section-img1-container">
                        <CustomCard
                            imgPreview={false}
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-introductive-section-images consulting-introductive-section-img1'}
                            imgSrc={consulting1}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={0} className="consulting-introductive-section-desc-container">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                            descriptionClassName={'txt-light'}
                        />
                    </Col>
                    <Col xs={24} md={12} className="consulting-introductive-section-images-container">
                        <CustomCard
                            imgPreview={false}
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-introductive-section-images consulting-introductive-section-img2'}
                            imgSrc={consulting1}
                        />
                    </Col>
                    <Col xs={0} md={8} className="consulting-introductive-section-desc-container">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                            descriptionClassName={'txt-light'}
                        />
                    </Col>
                    <Col xs={0} md={16}></Col>
                </Row>
            </section>

            <div className={'consulting-percentage1-section'}>
                <section>
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