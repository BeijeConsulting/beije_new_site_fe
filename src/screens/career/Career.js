import React from "react";

import { Tabs, Row, Typography } from 'antd';
const { Title } = Typography
const { TabPane } = Tabs;

// import style
import './Career.css'

// import components
// import CustomButton from "../../components/functional_components/Button/CustomButton";
import GoToDetailRow from '../../components/functional_components/goToDetailRow/GoToDetailRow'
// import OpenFilterBtn from "../../components/functional_components/openFilterBtn/OpenFilterBtn";

const Career = (props) => {

    const objAcademy = [
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        },
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        },
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        },
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        },
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        },
        {
            title: 'React developer - Academy',
            type: 'frontend',
            location: 'remoto',
            time: '2 settimane fa'
        }
    ]

    const printListAcademy = (item, key) => {
        return (
            <GoToDetailRow
                key={key}
                numCol={4}
                text1={item.title}
                text2={item.type}
                text3={item.location}
                text4={item.time}
            />
        )
    }

    // const changeIcon = (panelProps) => {
    //     return (
    //         <OpenFilterBtn />
    //     )
    // }

    return (
        <div className="career-container">
            <Row>
                <Title
                    level={1}
                >
                    BLOG
                </Title>
            </Row>
            <div className="card-container">
                <Tabs type="card" className='career-tabs-container'>
                    <TabPane tab="Academy" key="1" className='career-academy-panel'>
                        {objAcademy.map(printListAcademy)}
                    </TabPane>
                    <TabPane tab="Job application" key="2" className='career-job-panel'>
                        {objAcademy.map(printListAcademy)}
                    </TabPane>
                </Tabs>
            </div>



            {/* <Collapse
                bordered={false}
                ghost
                showArrow={false}
                expandIconPosition={"right"}
                // expandIcon={(panelProps) => changeIcon(panelProps)}
                style={{ width: '100%' }}
            >
                <CustomButton
                    content={'Filtro'}
                    type={'filter-btn'}
                />
                <CustomButton
                    content={'Filtro'}
                    type={'filter-btn'}
                />
                <CustomButton
                    content={'Filtro'}
                    type={'filter-btn'}
                />
            </Collapse> */}
        </div>
    )
}

export default Career 