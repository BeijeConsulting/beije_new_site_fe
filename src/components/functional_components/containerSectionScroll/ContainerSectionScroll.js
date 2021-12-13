import React from "react";
import { get } from "lodash";

//import style
import './ContainerSectionScroll.css'

const ContainerSectionScroll = (props) => {
    return (
        <div className={`container ${get(props, 'className', '')}`}>
            {props.children}
        </div>
    )
}

export default ContainerSectionScroll

