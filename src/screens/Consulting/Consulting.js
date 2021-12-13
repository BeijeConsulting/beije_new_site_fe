import React from "react";

//import ant design
import { Layout, Row, Typography, Col } from "antd";
const { Title } = Typography;

//import style
import './Consulting.css'
import { useTranslation } from "react-i18next";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard'

const Consulting = (props) => {

    const { t } = useTranslation()

    return (
        /* *he* */
        <Layout className={'consulting-container'}>
            <Row>
                <Title
                    level={1}
                >CONSULTING</Title>
            </Row>
            <Row>
                <Col xs={24} md={12}>
                    <div style={{ backgroundColor: 'red', height: '273px', width: '100%' }}>
                        <CustomCard
                            cardDescription={t('Consulting.intro')}
                            descriptionClassName='consulting-intro grotesk-font'
                        />
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <CustomCard
                    />
                    <div style={{ backgroundColor: 'pink', height: '257px', width: '100%' }}>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24} md={12}>
                    <div style={{ backgroundColor: 'blue', height: '100px', width: '100%' }}>

                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ backgroundColor: 'lightBlue', height: '257px', width: '100%' }}>

                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default Consulting