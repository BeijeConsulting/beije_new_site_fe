import React from "react";

import { Row, Typography, Col, Collapse } from "antd";
const { Title } = Typography
const { Panel } = Collapse;

// import style
import './Community.css'

// import assets
import imgTest from '../../assets/images/general/general4.jpg'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// import functions 
import { turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";


const Community = (props) => {

    const obj = [
        {
            title: 'TITOLO EVENTO',
            bg: imgTest,
            descEvent: 'Questa è una lunga descrizione che serve a capire se in effetti sta funzionando correttamente tutto: evento1'
        },
        {
            title: 'TITOLO EVENTO',
            bg: imgTest,
            descEvent: 'Questa è una lunga descrizione che serve a capire se in effetti sta funzionando correttamente tutto: evento2'
        },
        {
            title: 'TITOLO EVENTO',
            bg: imgTest,
            descEvent: 'Questa è una lunga descrizione che serve a capire se in effetti sta funzionando correttamente tutto: evento3'
        },
        {
            title: 'TITOLO EVENTO',
            bg: imgTest,
            descEvent: 'Questa è una lunga descrizione che serve a capire se in effetti sta funzionando correttamente tutto: evento4'
        }
    ]

    const changeIcon = (panelProps) => {
        if (panelProps.isActive) {
            return (
                <CustomCard
                    cardClassName={'community-btn-container'}
                    cardButton
                    type={'secondary-arrow-btn'}
                    currentIcon={
                        <MinusOutlined
                            className='arrow-icon-btn' />
                    }
                />
            )
        }
        else {
            return (

                <CustomCard
                    cardClassName={'community-btn-container'}
                    cardButton
                    type={'secondary-arrow-btn'}
                    currentIcon={
                        <PlusOutlined
                            className='arrow-icon-btn' />
                    }
                />
            )
        }
    }



    const printCommunityImages = (item, key) => {
        return (
            <Col
                key={key}
                xs={24}
                md={12}
                lg={8}
                className="community-col-container"
            >
                <Collapse
                    accordion
                    className="community-collapse"
                    bordered={false}
                    ghost
                    showArrow={false}
                    expandIconPosition={"right"}
                    expandIcon={(panelProps) => changeIcon(panelProps)}
                >
                    <Panel
                        header={
                            <>
                                <CustomCard
                                    cardStyle={{ backgroundImage: "linear-gradient(360deg, rgba(50, 62, 72) 0%, rgba(214, 227, 229, -0.71) 90%), url(" + item.bg + ")" }}
                                    cardClassName={'community-img'}
                                />

                                <CustomCard
                                    cardClassName={'community-card-text-container'}
                                    cardDescription={turnToUppercase(item.title)}
                                    descriptionClassName={'community-title-card'}
                                />
                            </>
                        }
                        key={`${key + 1}`}
                    >
                        <Col>
                            <CustomCard
                                cardDescription={turnToUppercase(item.title)}
                                descriptionClassName={'community-title-card-collapse'}
                                cardParagraph={item.descEvent}
                                paragraphClassName={'community-desc-card'}
                            />
                        </Col>

                    </Panel>
                </Collapse>


            </Col>
        )
    }

    return (
        <section style={{ padding: '100px 20px 30px 20px' }}>
            <Row>
                <Title
                    level={1}
                >
                    {turnToUppercase('Community')}
                </Title>
            </Row>
            <Row className="community-imges-container">
                {obj.map(printCommunityImages)}
            </Row>
        </section>


    )
}

export default Community