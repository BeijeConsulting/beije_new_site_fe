import React from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Row, Col } from "antd"

//import style
import './FirstSection.css'

// import constants
import { ENVIRONMENT } from "../../../utils/properties"

//import components
import CustomCard from "../../functional_components/customCard/CustomCard"
import Navbar from "../../functional_components/navbar/Navbar"
import ScrollButton from "../../functional_components/scrollButton/ScrollButton"


const FirstSection = () => {

  const { t } = useTranslation()

  const navigate = useNavigate()

  const callbackScroll = () => {
    navigate(`${ENVIRONMENT.ROUTING.BASE_URL}#secondSection`)
  }

  return (
    <div className={'home-fp-container'}>
      <div>
        <Row>
          <Col xs={0} md={5} />
          <Col xs={24} md={15} className="home-fp-text-col">
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
          <Col xs={0} md={5} />
          <Col xs={0} md={15} className="home-fp-text-col">
            <Navbar
              classNameLink={'navbar-home-link animation-text-landing'}
              classNameRow={'navbar-row'}
            />
          </Col>
          <Col xs={0} md={4} />
        </Row>

      </div >
      <div>

        <ScrollButton
          callback={callbackScroll}
        />

      </div>
    </div >
  )
}

export default FirstSection