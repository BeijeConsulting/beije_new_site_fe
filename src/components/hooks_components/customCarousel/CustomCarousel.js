import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//import style
import './CustomCarousel.css'

//import constants
import { carouselProfile } from "../../../utils/properties";

const ImageCarousel = (props) => {

    const [state, setState] = useState({
        dimensionDevice: window.innerWidth
    })

    const updateMedia = () => {
        setState({
            ...state,
            dimensionDevice: window.innerWidth
        });
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const switchMrgin = () => {
        let marginEl = 20
        let dimensionDevice = state.dimensionDevice
        if (dimensionDevice < 768) {
            marginEl = -5
        }
        return marginEl
    }

    const switchNumItems = () => {
        let numItem = 4.5
        let dimensionDevice = state.dimensionDevice

        if (dimensionDevice < 768) {
            numItem = 1.5
        }
        else if (dimensionDevice >= 768 && dimensionDevice < 1024) {
            numItem = 3.2
        }
        return numItem
    }

    const printItems = (item, key) => {
        return (
            <div
                key={key}
                className={`item ${item.classNameSingleEl}`}
            >
                <div className={'custom-carousel-lable'} role={props.roleDiv} aria-label={item.alt}>

                </div>
            </div>
        )
    }

    return (

        < OwlCarousel
            loop={props.loop}
            margin={switchMrgin()}
            mergeFit={props.mergeFit}
            items={switchNumItems()}
            dots={props.dots}
            className={`owl-theme owl-drag owl-stage ${props.classNameContainer}`
            }
        >
            {props.itemsCarousel.map(printItems)}
        </OwlCarousel >
    )

}

ImageCarousel.defaultProps = {
    loop: true,
    mergeFit: true,
    classNameContainer: 'carousel-container',
    itemsCarousel: carouselProfile,
    dots: false,
    roleDiv: 'img'
}

export default ImageCarousel