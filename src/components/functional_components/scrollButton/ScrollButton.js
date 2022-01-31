import React from "react";

//import style
import './ScrollButton.css'

const ScrollButton = (props) => {

    const handleClick = () => {
        props.callback()
    }

    return (

        <div
            className={props.classNameContainer}
            onClick={handleClick}
        >
            <p className={props.classNameText}>{props.text}</p>
            <i className={'arrow-icon-btn arrow-icon-white scroll-btn-icon cursor-pointer'} />

        </div>
    )
}

ScrollButton.defaultProps = {
    classNameContainer: 'scroll-btn-container',
    classNameText: 'scroll-btn-text',
    text: 'SCROLL'
}

export default ScrollButton