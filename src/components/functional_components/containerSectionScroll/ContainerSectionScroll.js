import React from "react";
import { get } from "lodash";

//import style
import './ContainerSectionScroll.css'

const ContainerSectionScroll = (props) => {
    return (
        <div className={`content-container-scroll ${get(props, 'className', '')}`}>
            {props.children}
        </div>
    )
}

export default ContainerSectionScroll

