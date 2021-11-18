import React from "react"
import { Row, Col } from "antd"

//import style and assets
import '../../../style.css'
import './CustomFooter.css'
import icon_facebook from '../../../assets/icons/social_icon/f_facebook_dark.png'
import icon_instagram from '../../../assets/icons/social_icon/in_instagram_dark.png'

//Import components
import CustomCard from "../customCard/CustomCard"
import CustomButton from "../Button/CustomButton"

const CustomFooter = (props) => {

    return (
        <footer className={props.classNameFooter}>
            <Row className={'txt-color-light'}>
                <Col span={12} className={'custom-footer-col'}>
                    <CustomCard
                        titleClassName={'custom-footer-title txt-color-light'}
                        cardTitle={'DOVE SIAMO'}
                        descriptionClassName={'footer-description'}
                        cardDescription={'Via Varese, 27/38 Lissone (MB)'}
                    />
                    <CustomCard
                        titleClassName={'custom-footer-title txt-color-light'}
                        cardTitle={'ORARI'}
                        descriptionClassName={'custom-footer-description'}
                        cardDescription={'Lunedì - Venerdì 09:00 18:00'}
                    />
                    <CustomCard
                        titleClassName={'custom-footer-title txt-color-light'}
                        cardTitle={'CONTATTACI'}
                        descriptionClassName={'custom-footer-description'}
                        cardDescription={'job@beije.it commerciale@beije.it 039 9402904'}
                    />
                </Col>
                <Col span={12} className={'container-flex-column footer-right-col'}>
                    <CustomCard
                        titleClassName={'custom-footer-title txt-align-r txt-color-light'}
                        cardTitle={'PRIVACY AND COOKIE POLICY'}
                    />

                    <CustomCard
                        titleClassName={'custom-footer-title txt-align-r txt-color-light'}
                        cardTitle={'NOTE LEGALI'}
                    />
                    <CustomCard
                        titleClassName={'custom-footer-title txt-align-r txt-color-light'}
                        cardTitle={'IT | EN'}
                    />
                </Col>
            </Row >
            <Row className={'container-flex-row jusify-content-l align-items-c'}>
                <div style={{marginRight: 20}}>
                <CustomButton
                    type={'social'}
                    href={'https://it-it.facebook.com/'}
                    currentIcon={<img src={icon_facebook} style={{ height: 16 }} />}
                />
                </div>

                <CustomButton
                    type={'social'}
                    currentIcon={<img src={icon_instagram} style={{ height: 16 }} />}
                />
            </Row>
            <Row>
                <CustomCard
                    descriptionClassName={'custom-footer-copyright txt-color-light mt-10'}
                    cardDescription={'© Copyright 2019 - Beije Consulting S.r.l - Partita IVA 08057530969'}
                />
            </Row>
        </footer >
    )
}

CustomFooter.defaultProps = {
    classNameFooter: 'w-100 h-100'
}

export default CustomFooter