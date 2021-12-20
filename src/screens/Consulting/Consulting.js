import React from "react";
import { useTranslation } from "react-i18next";

//import ant design
import { Row, Typography, Col } from "antd";
const { Title } = Typography;

//import style
import './Consulting.css';
import '../../components/hooks_components/customCarousel/CustomCarousel.css'

//import constants
import { consulting1, consulting_carousel_client } from "../../utils/properties";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard';
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";



const Consulting = (props) => {

    const { t } = useTranslation()

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

            <div className={'consulting-section1'}>
                <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Col xs={24} md={12}>
                        <Row className="consulting-title-container">
                            <Title
                                level={1}
                            >CONSULTING</Title>
                        </Row>
                        <Row className="consulting-intro-container">
                            <CustomCard
                                cardDescription={t('Consulting.intro')}
                                descriptionClassName='consulting-intro grotesk-font txt-light'
                            />
                        </Row>
                    </Col>
                    <Col xs={24} md={12} className="consulting-images-container consulting-img1-container">
                        <CustomCard
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-images consulting-img1'}
                            imgSrc={consulting1}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={0} className="consulting-desc-container txt-light">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                        />
                    </Col>
                    <Col xs={24} md={12} className="consulting-images-container">
                        <CustomCard
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-images consulting-img2'}
                            imgSrc={consulting1}
                        />
                    </Col>
                    <Col xs={0} md={12} className="consulting-desc-container">
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                        />
                    </Col>
                </Row>
            </div>

            <div className={'consulting-section2'}>
                <Row>
                    <Col xs={24}>
                        <CustomCard
                            titleLevel={2}
                            cardTitle={t('Consulting.title_carousel_client')}
                        />
                    </Col>
                    <Col xs={24}>
                        <div className='separator-line-horizontal'></div>
                    </Col>
                </Row>
                <Row className={'consulting-carousel1-mobile'}>
                    <CustomCarousel />
                </Row>
                <Row className={'consulting-card1-desktop'}>
                    {consulting_carousel_client.map(printPercentage)}
                </Row>

                <Row>
                    <Col xs={24}>
                        <CustomCard
                            titleLevel={2}
                            cardTitle={t('Consulting.title_carousel_client')}
                        />
                    </Col>
                    <Col xs={24}>
                        <div className='separator-line-horizontal'></div>
                    </Col>
                </Row>
                <Row className={'consulting-carousel1-mobile'}>
                    <CustomCarousel />
                </Row>
                <Row className={'consulting-card1-desktop'}>
                    {consulting_carousel_client.map(printPercentage)}
                </Row>

                <Row style={{ height: '600px' }}>
                    <Col xs={24} style={{ backgroundColor: 'turquoise' }}>
                        <p>Titolo</p>
                    </Col>
                    <Col xs={24} md={12} style={{ backgroundColor: 'teal' }}>
                        <p>Testo</p>
                    </Col>
                    <Col xs={24} md={12} style={{ backgroundColor: 'steelblue' }}>
                        <p>Form</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Consulting