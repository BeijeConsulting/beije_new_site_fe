import React from "react";

// import style
import './PolygonSection.css'

const PolygonSection = (props) => {
    return (
        <div
            className={`${props.polygenStyle} ${props.bgColor} ${props.polygenClipPath}`}
        >
            {props.children}
        </div>

    )
}

PolygonSection.defaultProps = {
    polygenStyle: 'polygen-section',
    bgColor: 'polygen-section-color',
    polygenClipPath: 'polygen-section-clipPath'
}

export default PolygonSection