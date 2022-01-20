import React from "react";

// import style
import './PolygonSection.css'

const PolygonSection = (props) => {
    return (
        <div
            className={`polygen-section ${props.bgColor}`}
        >
            {props.children}
        </div>

    )
}

PolygonSection.defaultProps = {
    bgColor: 'polygen-section-color'
}

export default PolygonSection