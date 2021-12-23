import React from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Typography } from "antd";
const { Title } = Typography;

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
import { consulting1, consulting_carousel_client } from "../../utils/properties";

//import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import SectionSubtitle from "../../components/functional_components/sectionSubtitle/SectionSubtitle";
import CustomCarousel from "../../components/hooks_components/customCarousel/CustomCarousel";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";

const Academy = (props) => {

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
        <div className={'academy-container'}>

            <div className={'academy-section1'}>

                <section>
                    <Row>
                        <Col xs={24} md={12}>
                            <Row className="academy-title-container">
                                <Title
                                    level={1}
                                >{turnToUppercase('academy')}</Title>
                            </Row>
                            <Row className="academy-intro-container">
                                <CustomCard
                                    cardDescription={t('Consulting.intro')}
                                    descriptionClassName='academy-intro grotesk-font'
                                />
                                <CustomCard
                                    cardDescription={'Si vede solo su desktop'}
                                // descriptionClassName='consulting-intro grotesk-font'
                                />
                            </Row>
                        </Col>
                        <Col xs={24} md={12} className="academy-images-container academy-img1-container">
                            <CustomCard
                                cardImg
                                // alt={*alt*} 
                                imgClassName={'academy-images academy-img1'}
                                imgSrc={consulting1}
                            />
                        </Col>
                        <Col xs={24} md={0}>
                            <CustomCard
                                cardDescription={'si vede solo su mobile'}
                            />
                        </Col>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                title={'I NOSTRI CORSI'}
                            />
                        </Col>
                    </Row>
                    <Row style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                        <Col xs={18}>
                            <SectionSubtitle
                                title={turnToUppercase('Academy Java')}
                                level={1}
                            />
                        </Col>
                        <Col xs={6}>
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
                    <Row style={{ borderBottom: '1px solid black' }}>
                        <Col xs={18}>
                            <SectionSubtitle
                                title={turnToUppercase('Academy sviluppo web - front end')}
                                level={1}
                            />
                        </Col>
                        <Col xs={6}>
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
                        <Col xs={24} md={0} className="academy-desc-container txt-light">
                            <CustomCard
                                cardDescription={t('Consulting.description')}
                            />
                        </Col>
                        <Col xs={24} md={12} className="academy-images-container">
                            <CustomCard
                                cardImg
                                // alt={*alt*} 
                                imgClassName={'academy-images academy-img2'}
                                imgSrc={consulting1}
                            />
                            <div>
                                <p>Div con freccetta</p>
                            </div>
                        </Col>
                        <Col xs={0} md={12} className="academy-desc-container">
                            <CustomCard
                                cardDescription={t('Consulting.description')}
                            />
                        </Col>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                title={'I PROSSIMI CORSI'}
                            />
                        </Col>
                    </Row>
                    <Row style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                        <Col xs={18} md={8}>
                            <div>
                                <CustomCard
                                    cardDescription={'Stage java'}
                                />
                            </div>
                            <div style={{ display: 'none' }}>
                                <CustomCard
                                    cardDescription={'Data mostrata solo su mobile'}
                                />
                            </div>
                        </Col>
                        <Col xs={0} md={8}>
                            <CustomCard
                                cardDescription={'Data mostrata solo su mobile'}
                            />
                        </Col>
                        <Col xs={6} md={8}>
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
                    <Row style={{ borderBottom: '1px solid black' }}>
                        <Col xs={18} md={8}>
                            <div>
                                <CustomCard
                                    cardDescription={'Stage java'}
                                />
                            </div>
                            <div style={{ display: 'none' }}>
                                <CustomCard
                                    cardDescription={'Data mostrata solo su mobile'}
                                />
                            </div>
                        </Col>
                        <Col xs={0} md={8}>
                            <CustomCard
                                cardDescription={'Data mostrata solo su mobile'}
                            />
                        </Col>
                        <Col xs={6} md={8}>
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
                        <Col xs={24}>
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
                </section>
            </div>
            <div className={'academy-section2'}>
                <section>
                    <SectionSubtitle
                        title={t('Consulting.title_carousel_client')}
                        shortLineBelow
                    />
                    <Row className={'academy-carousel-mobile'}>
                        <CustomCarousel />
                    </Row>
                    <Row className={'academy-card-desktop'}>
                        {consulting_carousel_client.map(printPercentage)}
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                title={'Dicono di noi'}
                                shortLineBelow
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <p>Inserire commento</p>
                        </Col>
                        <Col xs={0} md={12}>
                            <p>Inserire commento</p>
                        </Col>
                    </Row>
                </section>

                <section>
                    <Row>
                        <Col xs={24}>
                            <SectionSubtitle
                                styleContainer={{ marginBottom: '10px' }}
                                LongLineAbove
                                title={t('Consulting.title_add_info')}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <CustomCard
                                cardParagraph={t(`Consulting.description_add_info`)}
                                paragraphClassName={'academy-info-desc'}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <CustomForm
                                moreInfo={false}
                                agreement={false}
                            />
                        </Col>
                    </Row>
                </section>

            </div>
        </div>
    )
}

export default Academy