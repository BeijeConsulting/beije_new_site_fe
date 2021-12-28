import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Layout } from "antd";

//import style
import './ThirdSection.css'

//import functions
import { turnToUppercase, divideText } from "../../../utils/utilities";

//import components
import CustomCard from "../../functional_components/customCard/CustomCard";
import CustomOwlCarousel from "../../hooks_components/customOwlCarousel/CustomOwlCarousel";
import CustomButton from "../../functional_components/Button/CustomButton";
import ViewAllButton from "../../functional_components/viewAllButton/ViewAllButton";

const ThirdSection = () => {

    const [state, setState] = useState({
        showDragBtn: true
    })

    const { t } = useTranslation()

    const dragStartOwlCarousel = () => {
        console.log('drag start')
        // setState({
        //     ...state,
        //     showDragBtn: false
        // })
    }

    const dragEndOwlCarousel = () => {
        console.log('drag end')
        // setState({
        //     ...state,
        //     showDragBtn: true
        // })
    }


    return (
        <Layout className={'third-sec-container'}>
            <Row className={'third-sec-row'}>
                <Col xs={24} md={8} lg={6} className={'third-sec-col1'}>
                    <CustomCard
                        cardTitle={t('home.thirdSection.title')}
                        cardDescription={t('home.thirdSection.description')}
                        descriptionClassName={'third-sec-description'}
                    />
                </Col>
                <Col md={1} lg={2} />
                <Col
                    xs={24} md={15} lg={16}
                    className={'third-sec-col2'}
                // onDrag={dragStartOwlCarousel}
                // onMouseLeave={dragEndOwlCarousel}
                >
                    {/* {state.showDragBtn && */}
                    <CustomButton
                        type='drag-more-btn'
                        content={divideText(turnToUppercase(t('btn.drag')), '-BR-')}
                    />
                    {/* } */}
                    <CustomOwlCarousel
                        isDragging={dragStartOwlCarousel}
                        stopDragging={dragEndOwlCarousel}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={24} className={'third-sec-col3'}>
                    <CustomButton
                        type={'view-all-btn'}
                        content={<ViewAllButton />}
                    />
                </Col>
            </Row>
        </Layout>
    )
}

export default ThirdSection