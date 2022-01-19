import React from "react"
import { Layout, Row, Col } from "antd"

import { useTranslation } from "react-i18next"

//import style
import './FirstSection.css'

//import components
import CustomCard from "../../functional_components/customCard/CustomCard"
import Navbar from "../../functional_components/navbar/Navbar"
import ScrollButton from "../../functional_components/scrollButton/ScrollButton"


const FirstSection = () => {

    const { t } = useTranslation()

    return (
        <Layout className={'home-fp-container'}>
            <div>
                <Row>
                    <Col xs={0} md={4} />
                    <Col xs={24} md={16} className="home-fp-text-col">
                        <CustomCard
                            titleClassName={'home-fp-title animation-text-landing'}
                            titleLevel={1}
                            cardTitle={
                                <>
                                    <span>{t('home.firstSection.title.part1')}</span>
                                    <br />
                                    <span>{t('home.firstSection.title.part2')}</span>
                                </>
                            }
                        />
                    </Col>
                    <Col xs={0} md={4} />
                </Row>
                <Row>
                    <Col xs={0} md={4} />
                    <Col xs={0} md={16} className="home-fp-text-col">
                        <Navbar
                            classNameLink={'navbar-home-link animation-text-landing'}
                        />
                    </Col>
                    <Col xs={0} md={4} />
                </Row>

            </div >
            <div>

                <ScrollButton
                // callback={props.callbackScroll}
                />

            </div>
        </Layout >
    )
}

export default FirstSection