import React, { useState, useEffect } from "react";

import { get } from "lodash";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Typography } from "antd";
const { Text } = Typography

//import style
import './CustomOwlCarousel.css'

//import constants
import { carouselProfile } from "../../../utils/properties";

const ImageCarousel = (props) => {

    const [state, setState] = useState({
        dimensionDevice: window.innerWidth,
    })

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const updateMedia = () => {
        setState({
            ...state,
            dimensionDevice: window.innerWidth
        });
    };

    const switchMrgin = () => {
        let marginEl = 20
        let dimensionDevice = state.dimensionDevice
        if (dimensionDevice < 768) {
            marginEl = props.marginMobile
        }
        return marginEl
    }

    const switchNumItems = () => {
        let numItem = props.numItemDefault
        let dimensionDevice = state.dimensionDevice

        if (dimensionDevice <= 320) {
            numItem = props.numItemMobile
        }
        else if (dimensionDevice > 320 && dimensionDevice < 768) {
            numItem = props.numItemMore320Less768
        }
        else if (dimensionDevice >= 768 && dimensionDevice < 1024) {
            numItem = props.numItemMore768
        }
        return numItem
    }

    const printItems = (item, key) => {
        return (

            < div
                key={key}
                className={get(item, 'classNameSingleEl', '')}
            >
                <div
                    className={`item ${item.classNameBgImg}`}
                >
                </div>

                <div className={'custom-carousel-lable'} role={props.roleDiv} aria-label={item.alt}>
                    <Text strong className='custom-carousel-lable-text'>
                        {item.name}
                    </Text>
                    <Text strong className='custom-carousel-lable-text'>
                        {item.surname}
                    </Text>
                </div>

            </div >


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
    roleDiv: 'img',
    marginMobile: 0,
    numItemMobile: 1.5,
    numItemMore320Less768: 2.3,
    numItemMore768: 3.2,
    numItemDefault: 4.5
}

export default ImageCarousel