import React, { useEffect } from "react";

import { Tabs, Row, Typography } from 'antd';
const { Title } = Typography
const { TabPane } = Tabs;

import moment from "moment";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './Career.css'

// import components
// import CustomButton from "../../components/functional_components/Button/CustomButton";
import GoToDetailRow from '../../components/functional_components/goToDetailRow/GoToDetailRow'
import FilterAccordion from "../../components/functional_components/filterAccordion/FilterAccordion";

const Career = (props) => {

    const primary_bg_page_career = '#d6e3e5'

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_career))
        }
    }

    const printListAcademy = (item, key) => {
        return (
            <GoToDetailRow
                key={key}
                numCol={4}
                text1={item.title_it}
                text2={item.type}
                text3={item.mode}
                text4={moment(item.date_creation, "YYYY-MM-DD").fromNow()}
            />
        )
    }

    return (
        <div className="career-container">
            <Row>
                <Title
                    level={1}
                    className="career-title"
                >
                    Career
                </Title>
            </Row>
            <div className="card-container">
                <Tabs type="card" className='career-tabs-container'>
                    <TabPane tab="Job application" key="2" className='career-job-panel'>
                        <FilterAccordion />
                        <div className='career-list-item-container'>
                            {props.careerApiDuck.career_obj_api.map(printListAcademy)}
                        </div>
                    </TabPane>
                    <TabPane tab="Talent Academy" key="1" className='career-academy-panel'>
                        <FilterAccordion />
                        <div className='career-list-item-container'>
                            {props.careerApiDuck.career_obj_api.map(printListAcademy)}
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    careerApiDuck: state.careerApiDuck
})

export default connect(mapStateToProps)(Career)