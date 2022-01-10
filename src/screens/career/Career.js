import React from "react";

import { Tabs, Collapse } from 'antd';
const { TabPane } = Tabs;

// import style
import './Career.css'

// import components
import CustomButton from "../../components/functional_components/Button/CustomButton";
// import OpenFilterBtn from "../../components/functional_components/openFilterBtn/OpenFilterBtn";

const Career = (props) => {

    // const changeIcon = (panelProps) => {
    //     return (
    //         <OpenFilterBtn />
    //     )
    // }

    return (
        <div className="career-container">
            <div className="card-container">
                <Tabs type="card" className='career-tabs-container'>
                    <TabPane tab="Academy" key="1" className='career-academy-panel'>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Job application" key="2" className='career-job-panel'>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </div>



            <Collapse
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
            </Collapse>
        </div>
    )
}

export default Career 