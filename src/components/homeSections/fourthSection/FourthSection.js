import React from "react";
import { Row, Col, Layout, Typography } from "antd";

const { Title } = Typography;

import './FourthSection.css'

//import components
import CustomCard from '../../functional_components/customCard/CustomCard'
import { useTranslation } from "react-i18next";
import CustomForm from "../../hooks_components/customForm/CustomForm";

const FourthSection = () => {

    const { t } = useTranslation()

    return (
        <Layout className={'fourth-sec-container'}>
            <Row>
                <Title
                    level={1}
                >
                    {t('home.fourthSection.title')}
                </Title>
            </Row>
            <Row>
                <Col xs={0} md={8} className={'fourth-sec-col1 txt-dark'}>
                    <Row>
                        <CustomCard
                            descriptionClassName={'fourth-sec-description'}
                            cardDescription={t('home.fourthSection.location')}
                            cardDescription2={'Via Varese, 27/38'}
                            cardDescription3={'Lissone (MB)'}
                        />

                    </Row>
                    <Row>
                        <CustomCard
                            descriptionClassName={'fourth-sec-description'}
                            cardDescription={t('home.fourthSection.hours')}
                            cardDescription2={'Lunedì - Venerdì'}
                            cardDescription3={'09:00 18:00'}
                        />
                    </Row>
                    <Row>
                        <CustomCard
                            descriptionClassName={'fourth-sec-description'}
                            cardDescription={t('home.fourthSection.contacts')}
                            cardDescription2={'job@beije.it'}
                            cardDescription3={'commerciale@beije.it'}
                        />
                    </Row>
                    <Row>
                        <CustomCard
                            descriptionClassName={'fourth-sec-description'}
                            cardDescription={'039 9402904'}
                        />
                    </Row>
                </Col>
                <Col xs={0} md={2} />
                <Col xs={24} md={14} className={'fourth-sec-col2'}>
                    <CustomForm />
                </Col>
            </Row>
        </Layout>
    )
}

export default FourthSection