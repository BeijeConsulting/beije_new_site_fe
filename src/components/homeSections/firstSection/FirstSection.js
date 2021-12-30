import React, { useHistory } from "react"
import { Layout, Row, Col } from "antd"
import { useTranslation } from "react-i18next"

//import style
import './FirstSection.css'

// import contants
import { ENVIRONMENT } from "../../../utils/properties"

//import components
import CustomCard from "../../functional_components/customCard/CustomCard"
import Navbar from "../../functional_components/navbar/Navbar"
import ScrollButton from "../../functional_components/scrollButton/ScrollButton"


const FirstSection = (props) => {

    const { t } = useTranslation()


    return (
        <Layout className={'home-fp-container'}>
            <div>
                <Row>
                    <Col xs={0} md={4} />
                    <Col xs={24} md={16}>
                        <CustomCard
                            titleClassName={'home-fp-title'}
                            titleLevel={1}
                            cardTitle={t('home.firstSection.title')}
                        />
                    </Col>
                    <Col xs={0} md={4} />
                </Row>
                <Row>
                    <Col xs={0} md={4} />
                    <Col xs={0} md={16}>
                        <Navbar
                            classNameLink={'navbar-home-link'}
                            href_consulting={`${ENVIRONMENT.ROUTING.BASE_URL}consulting`}
                            href_academy={`${ENVIRONMENT.ROUTING.BASE_URL}academy`}
                            // href_up={}
                        />
                    </Col>
                    <Col xs={0} md={4} />
                </Row>

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