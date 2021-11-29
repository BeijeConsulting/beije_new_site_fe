import React from "react";

import './ContainerSectionScroll.css'

const ContainerSectionScroll = (props) => {
    return (
        <div className={`container + ${props.className}`}>
            {props.children}
        </div>
    )
}

export default ContainerSectionScroll

