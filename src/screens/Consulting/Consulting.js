import React from "react";

//import ant design
import { Layout, Row, Typography, Col } from "antd";
const { Title } = Typography;

//import style
import './Consulting.css'
import { useTranslation } from "react-i18next";

//import components
import CustomCard from '../../components/functional_components/customCard/CustomCard'

//import constants
import { consulting1, consulting2 } from "../../utils/properties";


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
                    <div style={{ height: '273px', width: '100%' }}>
                        <CustomCard
                            cardDescription={t('Consulting.intro')}
                            descriptionClassName='consulting-intro grotesk-font'
                        />
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <CustomCard
                    />
                    <div style={{ height: '257px', width: '100%' }}>
                        <CustomCard
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-images'}
                            imgSrc={consulting1}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24} md={12}>
                    <div style={{ height: '400px', width: '100%', paddingTop: '40px' }}>
                        <CustomCard
                            cardDescription={t('Consulting.description')}
                            descriptionClassName='consulting-description'
                        />
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ height: '257px', width: '100%' }}>
                        <CustomCard
                            cardImg
                            // alt={*alt*} 
                            imgClassName={'consulting-images'}
                            imgSrc={consulting2}
                        />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default Consulting