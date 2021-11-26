import React from "react"
import { Layout, Row } from "antd"


//import style
import './HomeFirstPage.css'

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard"
import Navbar from "../../../functional_components/navbar/Navbar"
import CustomButton from "../../../functional_components/Button/CustomButton"
import ScrollButton from "../../../functional_components/scrollButton/ScrollButton"
import { OmitProps } from "antd/lib/transfer/ListBody"


const HomeFirstPage = (props) => {
    return (
        <Layout className={'home-fp-container'}>
            <div>
                <Row className={'home-fp-title-container'}>
                    <CustomCard
                        titleClassName={'home-fp-title'}
                        titleLevel={1}
                        cardTitle={'Aiutiamo le aziende nella digital transformation costruendo Team di Valore'}
                    />
                </Row>
                <Navbar />
            </div>
            <div>
                <ScrollButton
                    callback={props.callbackScroll}
                />
            </div>
        </Layout>
    )
}

export default HomeFirstPage