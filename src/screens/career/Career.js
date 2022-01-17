import React from "react";

import { Tabs, Row, Typography } from 'antd';
const { Title } = Typography
const { TabPane } = Tabs;

import moment from "moment";

// import api
import { connect } from "react-redux";

// import style
import './Career.css'

// import components
// import CustomButton from "../../components/functional_components/Button/CustomButton";
import GoToDetailRow from '../../components/functional_components/goToDetailRow/GoToDetailRow'
// import OpenFilterBtn from "../../components/functional_components/openFilterBtn/OpenFilterBtn";

const Career = (props) => {

    // const objAcademy = [
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     },
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     },
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     },
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     },
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     },
    //     {
    //         title: 'React developer - Academy',
    //         type: 'frontend',
    //         location: 'remoto',
    //         time: '2 settimane fa'
    //     }
    // ]

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
                    <TabPane tab="Academy" key="1" className='career-academy-panel'>
                        {props.careerApiDuck.career_obj_api.map(printListAcademy)}
                    </TabPane>
                    <TabPane tab="Job application" key="2" className='career-job-panel'>
                        {props.careerApiDuck.career_obj_api.map(printListAcademy)}
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