import React from "react";

import { Tabs } from 'antd';
const { TabPane } = Tabs;

// import style
import './Career.css'

const Career = (props) => {
    return (
        // <div className="career-container">
        //     <div className="card-container">
        //         <Tabs type="card" className='career-tabs-container'>
        //             <TabPane tab="Tab Title 1" key="1" className='career-academy-panel'>
        //                 <p>Content of Tab Pane 1</p>
        //                 <p>Content of Tab Pane 1</p>
        //                 <p>Content of Tab Pane 1</p>
        //             </TabPane>
        //             <TabPane tab="Tab Title 2" key="2" className='career-job-panel'>
        //                 <p>Content of Tab Pane 2</p>
        //                 <p>Content of Tab Pane 2</p>
        //                 <p>Content of Tab Pane 2</p>
        //             </TabPane>
        //         </Tabs>
        //     </div>

        // </div>

        <div className="career-container">
            <div className="card-container">
                <Tabs type="card" className='career-tabs-container'>
                    <TabPane tab="Tab Title 1" key="1" className='career-academy-panel'>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                </Tabs>
            </div>
            <div className="card-container">
                <Tabs type="card" className='career-tabs-container'>
                    <TabPane tab="Tab Title 2" key="2" className='career-job-panel'>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Career 