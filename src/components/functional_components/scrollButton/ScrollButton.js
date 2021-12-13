import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

//import style
import './ScrollButton.css'

//import assets
import scroll_icon from '../../../assets/lottie/scroll.json'

const ScrollButton = (props) => {

    const handleClick = () => {
        // *ga*
        props.callback()
    }

    return (
        <div className={props.classNameContainer} onClick={handleClick}>
            <p className={props.classNameText}>{props.text}</p>
            <Player
                autoplay
                loop
                src={scroll_icon}
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