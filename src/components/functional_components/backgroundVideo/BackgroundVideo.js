import { PROPERTY_TYPES } from "@babel/types";
import React from "react";

import './BackgroundVideo.css'

const BackgroundVideo = (props) => {

    return (
        <div className={props.classNameVideoContainer}>
            <video autoPlay={props.autoPlay} muted={props.muted} loop={props.loop} className={props.classNameVideo}>
                <source src={props.src} type={props.type} />
                {props.substituteContent}
            </video>
        </div>
    )
}

BackgroundVideo.defaultProps = {
    classNameVideo: "bg-video",
    type: "video/mp4",
    substituteContent: "Your browser does not support HTML5 video."
}

export default BackgroundVideo