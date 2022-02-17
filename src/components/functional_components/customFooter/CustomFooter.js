import React from "react"
import { Row, Col } from "antd"
import { useTranslation } from 'react-i18next';

//import style and assets
import '../../../style.css'
import './CustomFooter.css'

//Import components
import CustomCard from "../customCard/CustomCard"
import SwitchLanguage from "../../hooks_components/switchLanguage/SwitchLanguage";
import SocialSection from "../socialSection/SocialSection";

const CustomFooter = (props) => {
    const { t } = useTranslation();

    return (
        <footer className={props.classNameFooter}>
            <Row className={'txt-light custom-footer-first-row'}>
                <Col span={15} className='custom-footer-left-col'>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        className='custom-footer-l-col-first-el'
                    >
                        <CustomCard
                            titleClassName={'custom-footer-title txt-light'}
                            cardTitle={t('footer.location')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'Via Varese, 27/38'}
                            cardDescription2={'Lissone (MB)'}
                        />
                    </Col>
                    <Col span={24}>
                        <CustomCard
                            titleClassName={'custom-footer-title txt-light'}
                            cardTitle={t('footer.contacts')}
                            descriptionClassName={'custom-footer-description'}
                            cardDescription={'job@beije.it'}
                            cardDescription2={'commerciale@beije.it'}
                        />
                    </Col>
                </Col>
                <Col span={9} className={'container-column footer-right-col'}>
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
                <SocialSection
                    classNameRowSocial='custom-footer-social custom-footer-social-mobile'
                />

                {/* this row is shown only when the device is bigger than 1024px */}
                <Row className={'container-row justify-end items-center custom-footer-translation-desktop'}>
                    <CustomCard>
                        <p className='txt-right txt-light'>
                            <SwitchLanguage
                                classNameSelectedLang={'custom-footer-language-span custom-footer-language-span-selected cursor-pointer'}
                                classNameUnSelectedLang={'custom-footer-language-span cursor-pointer'}
                            />
                        </p>
                    </CustomCard>
                </Row>

                <Row>
                    <Col
                        xs={24}
                        lg={20}
                    >
                        <span
                            className='custom-footer-copyright txt-light mt-10'
                        >
                            {t('footer.copyright') + ' - ' + t('footer.vatNumber') + ' 16334941008'}
                        </span>
                    </Col>
                    <Col
                        xs={0}
                        lg={4}
                    >
                        <SocialSection
                            classNameRowSocial='custom-footer-social-desktop'
                        />
                    </Col>

                </Row>
            </div>
        </footer >
    )
}

CustomFooter.defaultProps = {
    classNameFooter: 'custom-footer-container w-100 h-100'
}


export default CustomFooter