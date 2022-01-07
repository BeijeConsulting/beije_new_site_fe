import React, { useState, useEffect } from "react";

import { get } from "lodash";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Typography } from "antd";
const { Text } = Typography

//import functions
import { turnToUppercase } from "../../../utils/utilities";

//import style
import './CustomOwlCarousel.css'

//import constants
import { carouselProfile } from "../../../utils/properties";

const CustomOwlCarousel = (props) => {

    const [state, setState] = useState({
        dimensionDevice: window.innerWidth
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

                    <div className={item.classNameLable} role={props.roleDiv} aria-label={item.alt}>
                        <Text className='custom-carousel-lable-text custom-carousel-lable-name'>
                            {turnToUppercase(item.name)}
                        </Text>
                        <Text className='custom-carousel-lable-text custom-carousel-lable-name'>
                            {turnToUppercase(item.surname)}
                        </Text>
                        <Text className='custom-carousel-lable-text custom-carousel-lable-role'>
                            {item.role}
                        </Text>
                    </div>
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
            className={`owl-theme owl-drag owl-grab owl-stage  ${props.classNameContainer}`
            }
            mouseDrag={true}
            autoplay
            onDrag={props.isDragging}
            onDragged={props.stopDragging}
        >
            {
                props.objCarousel &&
                props.itemsCarousel.map(printItems)
            }
            {
                !props.objCarousel &&
                props.children
            }
        </OwlCarousel >
    )

}

CustomOwlCarousel.defaultProps = {
    loop: true,
    mergeFit: true,
    classNameContainer: 'carousel-container',
    itemsCarousel: carouselProfile,
    dots: false,
    roleDiv: 'img',
    marginMobile: 0,
    numItemMobile: 1.5,
    numItemMore320Less768: 2.2,
    numItemMore768: 3,
    numItemDefault: 4,
    objCarousel: true
}

export default CustomOwlCarousel