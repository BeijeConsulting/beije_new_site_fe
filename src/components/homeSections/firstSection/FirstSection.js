import React from "react"
import { Layout, Row } from "antd"
import { useTranslation } from "react-i18next"

//import style
import './FirstSection.css'

//import components
import CustomCard from "../../functional_components/customCard/CustomCard"
import Navbar from "../../functional_components/navbar/Navbar"
import ScrollButton from "../../functional_components/scrollButton/ScrollButton"


const FirstSection = (props) => {
    const { t } = useTranslation()
    return (
        <Layout className={'home-fp-container'}>
            <div>
                <Row className={'home-fp-title-container'}>
                    <CustomCard
                        titleClassName={'home-fp-title'}
                        titleLevel={1}
                        cardTitle={t('home.firstSection.title')}
                    />
                </Row>
                <Navbar
                    classNameLink={'navbar-home-link'}
                />
            </div>
            <div>
                <ScrollButton
                    callback={props.callbackScroll}
                />
            </div>
        </Layout>
    )
}

export default FirstSection