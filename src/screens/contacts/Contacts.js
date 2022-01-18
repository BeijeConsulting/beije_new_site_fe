import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Row, Typography, Col } from 'antd';
const { Title } = Typography

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './Contacts.css'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomButton from "../../components/functional_components/Button/CustomButton";
import CustomCard from "../../components/functional_components/customCard/CustomCard";

const Contacts = (props) => {

    const primary_bg_page_contacts = '#d6e3e5'

    const { t } = useTranslation();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_contacts))
        }
    }

    return (
        <section className="contacts-container">

            <Row>
                <Title
                    level={1}
                >
                    {turnToUppercase(t('Contacts.title'))}
                </Title>
            </Row>

            <Row>
                <Col
                    xs={0}
                    md={12}
                    className="contacts-info-container-desktop"
                >

                    <Row className={'contacts-row-info contacts-row-info-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.location')}
                            cardDescription2={'Via Varese, 27/38'}
                            cardDescription3={'Lissone (MB)'}
                        />

                    </Row>
                    <Row className={'contacts-row-info contacts-row-info-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.contacts')}
                            cardDescription2={'job@beije.it'}
                            cardDescription3={'commerciale@beije.it'}
                        />
                    </Row>

                    <CustomButton
                        content={t('btn.apply')}
                        htmlType='submit'
                        type={'form-btn'}
                    />

                </Col>

                <Col
                    xs={24}
                    md={12}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715852.3267017029!2d9.259201849618995!3d45.50407641281022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b9a1b81342db%3A0x10fa075f2e281289!2sBeije!5e0!3m2!1sit!2sit!4v1642432000769!5m2!1sit!2sit"
                        className={'contacts-map-iframe'}
                        loading="lazy">
                    </iframe>
                </Col>

                <Col
                    xs={24}
                    md={0}
                >

                    <Row className={'contacts-row-info contacts-row-info-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.location')}
                            cardDescription2={'Via Varese, 27/38'}
                            cardDescription3={'Lissone (MB)'}
                        />

                    </Row>
                    <Row className={'contacts-row-info contacts-row-info-gsap'}>
                        <CustomCard
                            descriptionClassName={props.descClassName}
                            cardDescription={t('home.fourthSection.contacts')}
                            cardDescription2={'job@beije.it'}
                            cardDescription3={'commerciale@beije.it'}
                        />
                    </Row>

                    <CustomButton
                        content={t('btn.apply')}
                        htmlType='submit'
                        type={'form-btn'}
                    />

                </Col>

            </Row>
        </section>
    )
}

export default connect()(Contacts)