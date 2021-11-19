import React, { useEffect, useState } from "react"
import { Row, Col } from "antd"
import { get as __get } from 'lodash';
import { useTranslation } from 'react-i18next';

//import style and assets
import '../../../style.css'
import './CustomFooter.css'
import icon_facebook from '../../../assets/icons/social_icon/f_facebook_dark.png'
import icon_instagram from '../../../assets/icons/social_icon/in_instagram_dark.png'

//Import components
import CustomCard from "../../functional_components/customCard/CustomCard"
import CustomButton from "../../functional_components/Button/CustomButton"
import CustomSwitchLanguage from "../switchLanguage/CustomSwitchLanguage";

const CustomFooter = (props) => {
    const { t } = useTranslation();

    return (
        <footer className={props.classNameFooter}>
            <Row className={'txt-color-light custom-footer-first-row'}>
                <Col span={12} className='custom-footer-left-col'>
                    <Col xs={24} sm={24} md={12} lg={12} className='custom-footer-l-col-first-el'>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-color-light'}
                            cardTitle={t('footer.location')}
                            descriptionClassName={'footer-description'}
                            cardDescription={'Via Varese, 27/38'}
                            cardDescription2={'Lissone (MB)'}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-color-light'}
                            cardTitle={t('footer.hours')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'Lunedì - Venerdì'}
                            cardDescription2={'09:00 18:00'}
                        />
                    </Col>
                    <Col span={24}>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-color-light'}
                            cardTitle={t('footer.contacts')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'job@beije.it'}
                            cardDescription2={'commerciale@beije.it'}
                            cardDescription3={'039 9402904'}
                        />
                    </Col>
                </Col>
                <Col span={12} className={'container-flex-column footer-right-col'}>
                    <CustomCard
                        titleClassName={'custom-footer-title txt-align-r txt-color-light'}
                        cardTitle={'PRIVACY AND COOKIE POLICY'}
                    />

                    <CustomCard
                        titleClassName={'custom-footer-title txt-align-r txt-color-light'}
                        cardTitle={t('footer.legalNotes')}
                    />
                    {/* this row is shown only when the device is smaller than 1024px */}
                    <CustomCard>
                        <p className='txt-align-r txt-color-light custom-footer-translation-mobile'>
                            <CustomSwitchLanguage/>
                        </p>
                    </CustomCard>
                </Col>
            </Row >
            {/* this row is shown only when the device is smaller than 1024px */}
            <Row className={'container-flex-row jusify-content-l align-items-c custom-footer-social'}>
                <div style={{ marginRight: 20 }}>
                    <CustomButton
                        type={'primary-social'}
                        href={'https://it-it.facebook.com/'}
                        currentIcon={<img src={icon_facebook} style={{ height: 16 }} className={'icon-social'} />}
                    />
                </div>

                <CustomButton
                    type={'primary-social'}
                    href={'https://www.instagram.com/'}
                    currentIcon={<img src={icon_instagram} style={{ height: 16 }} className={'icon-social'} />}
                />
            </Row>
            {/* this row is shown only when the device is bigger than 1024px */}
            <Row className={'container-flex-row jusify-content-l align-items-c custom-footer-translation-desktop'}>
                <CustomCard>
                    <p className='txt-align-r txt-color-light'>
                        <CustomSwitchLanguage/>
                    </p>
                </CustomCard>
            </Row>
            <Row>
                <CustomCard
                    descriptionClassName={'custom-footer-copyright txt-color-light mt-10'}
                    cardDescription={'© Copyright 2019 - Beije Consulting S.r.l - ' + t('footer.vatNumber') + ' 08057530969'}
                />
            </Row>
        </footer >
    )
}

CustomFooter.defaultProps = {
    classNameFooter: 'w-100 h-100'
}

export default CustomFooter