import React from "react"
import { Row, Col } from "antd"

import '../../../style.css'
import './CustomFooter.css'

//Import components
import CustomCard from "../customCard/CustomCard"

const CustomFooter = (props) => {

    return (
        <div className={props.classNameFooter}>
            <Row>
                <Col span={12}>
                    <CustomCard
                        cardTitle={'DOVE SIAMO'}
                        cardDescription={'Via Varese, 27/38 Lissone (MB)'}
                    >
                    </CustomCard>
                    <CustomCard
                        cardTitle={'ORARI'}
                        cardDescription={'Lunedì - Venerdì 09:00 18:00'}
                    >
                    </CustomCard>
                    <CustomCard
                        cardTitle={'CONTATTACI'}
                        cardDescription={'job@beije.it commerciale@beije.it 039 9402904'}
                    >
                    </CustomCard>
                </Col>
                <Col span={12}>
                    <CustomCard
                        cardTitle={'PRIVACY AND COOKIE POLICY'}
                    >
                    </CustomCard>
                    <CustomCard
                        cardTitle={'NOTE LEGALI'}
                    >
                    </CustomCard>
                    <CustomCard
                        cardTitle={'IT | EN'}
                    >
                    </CustomCard>
                </Col>
            </Row >
            <Row>
                <CustomCard
                    cardButton={true}
                    
                    currentSize="small"
                    floatRight
                />


            </Row>
            <Row>


            </Row>
        </div >
    )
}

CustomFooter.defaultProps = {
    classNameFooter: 'custom-footer-container w-100 h-100'
}

export default CustomFooter