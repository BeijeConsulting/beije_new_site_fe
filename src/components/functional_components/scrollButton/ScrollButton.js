import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import './ScrollButton.css'
import scroll_icon from '../../../assets/lottie/scroll.json'

const ScrollButton = (props) => {

    const handleClick = () => {
        props.callback()
    }

    return (
        <div className={props.classNameContainer} onClick={handleClick}>
            <p className={props.classNameText}>{props.text}</p>
            <Player
                autoplay
                loop
                src={scroll_icon}
                // style={{ height: '100px', width: '100px' }}
                className={'scroll-btn-lottie cursor-pointer'}
            />
        </div>
    )
}

ScrollButton.defaultProps = {
    classNameContainer: 'scroll-btn-container',
    classNameText: 'scroll-btn-text',
    text: 'SCROLL'
}

export default ScrollButton