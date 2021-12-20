import React from "react"
import { Row, Col } from "antd"
import { useTranslation } from 'react-i18next';

//import style and assets
import '../../../style.css'
import './CustomFooter.css'
import { social } from '../../../utils/properties'

//Import components
import CustomCard from "../customCard/CustomCard"
import CustomButton from "../Button/CustomButton"
import SwitchLanguage from "../../hooks_components/switchLanguage/SwitchLanguage";

const CustomFooter = (props) => {
    const { t } = useTranslation();

    return (
        <footer className={props.classNameFooter}>
            <Row className={'txt-light custom-footer-first-row'}>
                <Col span={12} className='custom-footer-left-col'>
                    <Col xs={24} sm={24} md={12} lg={12} className='custom-footer-l-col-first-el'>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-light'}
                            cardTitle={t('footer.location')}
                            descriptionClassName={'footer-description'}
                            cardDescription={'Via Varese, 27/38'}
                            cardDescription2={'Lissone (MB)'}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-light'}
                            cardTitle={t('footer.hours')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'Lunedì - Venerdì'}
                            cardDescription2={'09:00 18:00'}
                        />
                    </Col>
                    <Col span={24}>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-light'}
                            cardTitle={t('footer.contacts')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'job@beije.it'}
                            cardDescription2={'commerciale@beije.it'}
                            cardDescription3={'039 9402904'}
                        />
                    </Col>
                </Col>
                <Col span={12} className={'container-column footer-right-col'}>
                    <CustomCard
                        titleClassName={'custom-footer-title txt-right txt-light'}
                        cardTitle={'PRIVACY AND COOKIE POLICY'}
                    />

                    <CustomCard
                        titleClassName={'custom-footer-title txt-right txt-light'}
                        cardTitle={t('footer.legalNotes')}
                    />
                    {/* this row is shown only when the device is smaller than 1024px */}
                    <CustomCard>
                        <p className='txt-right txt-light custom-footer-translation-mobile'>
                            <SwitchLanguage />
                        </p>
                    </CustomCard>
                </Col>
            </Row >

            <div>
                {/* this row is shown only when the device is smaller than 1024px */}
                <Row className={'container-row justify-end items-center custom-footer-social'}>
                    <CustomButton
                        type={'primary-social'}
                        href={social.url.url_linkedIn}
                        currentIcon={
                            <img
                                src={social.icon.icon_linkedIn}
                                alt={t('imgAlt.social.in')}
                                style={{ height: 16 }}
                                className={'icon-social'}
                            />}
                    />
                    <div style={{ margin: 20 }}>
                        <CustomButton
                            type={'primary-social'}
                            href={social.url.url_facebook}
                            currentIcon={
                                <img
                                    src={social.icon.icon_facebook}
                                    alt={t('imgAlt.social.fb')}
                                    style={{ height: 16 }}
                                    className={'icon-social'}
                                />}
                        />
                    </div>

                    <CustomButton
                        type={'primary-social'}
                        href={social.url.url_youTube}
                        currentIcon={
                            <img
                                src={social.icon.icon_youTube}
                                alt={t('imgAlt.social.youTube')}
                                style={{ height: 16 }}
                                className={'icon-social'}
                            />}
                    />
                </Row>

                {/* this row is shown only when the device is bigger than 1024px */}
                <Row className={'container-row justify-end items-center custom-footer-translation-desktop'}>
                    <CustomCard>
                        <p className='txt-right txt-light'>
                            <SwitchLanguage />
                        </p>
                    </CustomCard>
                </Row>

                <Row>
                    <CustomCard
                        descriptionClassName={'custom-footer-copyright txt-light mt-10'}
                        cardDescription={'© Copyright 2019 - Beije Consulting S.r.l - ' + t('footer.vatNumber') + ' 08057530969'}
                    />
                </Row>
            </div>
        </footer >
    )
}

CustomFooter.defaultProps = {
    classNameFooter: 'custom-footer-container w-100 h-100'
}


export default CustomFooter