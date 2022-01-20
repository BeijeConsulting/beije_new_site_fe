import React, { useState, useEffect } from "react";

import { get } from "lodash";

// multi carousell library
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 2001 },
            items: props.item_superLargeDesktop
        },
        mediumDesktop: {
            breakpoint: { max: 2000, min: 1440 },
            items: props.item_mediumDesktop
        },
        desktop: {
            breakpoint: { max: 1439, min: 1024 },
            items: props.item_desktop
        },
        tablet: {
            breakpoint: { max: 1023, min: 769 },
            items: props.item_tablet
        },
        bigMobile: {
            breakpoint: { max: 768, min: 501 },
            items: props.item_bigMobile
        },
        mobile: {
            breakpoint: { max: 500, min: 401 },
            items: props.item_mobile
        },
        smallmobile: {
            breakpoint: { max: 400, min: 361 },
            items: props.item_smallmobile
        },
        extraSmallMobile: {
            breakpoint: { max: 360, min: 0 },
            items: props.item_extraSmallMobile
        }
    };

    const printItems = (item, key) => {
        return (

            < div
                key={key}
                className={`${get(item, 'classNameSingleEl', '')} ${props.singleElClassName}`}
            >
                <div
                    className={`item ${item.classNameBgImg} ${props.profilePictureClassName}`}
                >

                    <div className={`${item.classNameLable} ${props.lableContainerClassName}`} role={props.roleDiv} aria-label={item.alt}>
                        <Text className={`custom-carousel-lable-text custom-carousel-lable-name ${props.lableTxtClassName}`}>
                            {turnToUppercase(item.name)}
                        </Text>
                        <Text className={`custom-carousel-lable-text custom-carousel-lable-name ${props.lableTxtClassName}`}>
                            {turnToUppercase(item.surname)}
                        </Text>
                        <Text className={`custom-carousel-lable-text custom-carousel-lable-role ${props.lableTxtDescClassName}`}>
                            {props.showRole &&
                                item.role
                            }
                            {props.showDesc &&
                                item.description
                            }
                        </Text>
                    </div>
                </div>



            </div >


        )
    }

    return (
        <Carousel
            responsive={responsive}
            draggable={props.draggable}
            showDots={props.showDots}
            arrows={props.showArrows}
            keyBoardControl={props.keyBoardControl}
            infinite={props.infinite}
            autoPlay={props.autoPlay}
            autoPlaySpeed={props.autoPlaySpeed}
            afterChange={props.dragged}
            className={props.carouselClassName}
        >
            {
                props.objCarousel &&
                props.itemsCarousel.map(printItems)
            }
            {
                !props.objCarousel &&
                props.children
            }

        </Carousel>
    )

}

CustomOwlCarousel.defaultProps = {
    loop: true,
    mergeFit: true,
    // classNameContainer: 'carousel-container',
    itemsCarousel: carouselProfile,
    dots: false,
    roleDiv: 'img',

    draggable: true,
    showDots: false,
    showArrows: false,
    keyBoardControl: false,
    infinite: true,
    item_superLargeDesktop: 4,
    item_mediumDesktop: 3,
    item_desktop: 3,
    item_tablet: 3,
    item_bigMobile: 3,
    item_mobile: 3,
    item_smallmobile: 2,
    item_extraSmallMobile: 2,
    objCarousel: true,
    autoPlay: false,

    showRole: true,
    showDesc: false
}

export default CustomOwlCarousel