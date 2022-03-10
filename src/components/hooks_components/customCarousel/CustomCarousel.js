import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// Gsap
import gsap from "gsap";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

// Style
import "./CustomCarousel.css";

// Constants
import { carouselProfile } from "../../../utils/properties"

const CustomCarousel = (props) => {

  const { t } = useTranslation();
  const slideRef = useRef();

  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    startMoving: false
  })

  useEffect(() => {
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    }
  }, [])

  const updateDimension = () => {
    console.log("Entro in updateDimension");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    setState({
      ...state,
      windowWidth: windowWidth,
      windowHeight: windowHeight
    })
  }

  const printSwiperSlides = (item, key) => {

    return (
      <SwiperSlide
        key={key}
        className={item.pictureClassName}
        ref={slideRef}
        onMouseMove={tiltEffect()}
      >
        {props.imgCarousel &&
          <img
            className="carousel-img-container"
            src={item.imgCarousel}
          >
          </img>
        }
        <div
          className={props.classNameTxtContainer}
        >
          {props.homeCarousel &&
            <>
              <p>{item.name} {item.surname}</p>
              <p>_{item.role}</p>
              <p><i>&ldquo;{t(item.description)}&rdquo;</i></p>
            </>
          }
          {props.upCarousel &&
            <>
              <p>{item.title}</p>
              <p><i>_{item.subtitle}</i></p>
            </>
          }
        </div>
      </SwiperSlide >
    )
  }

  const tiltEffect = () => (e) => {
    let windowWidth = state.windowWidth;
    let windowHeight = state.windowHeight;

    let positionX = (e.clientX / windowWidth) - 0.55;
    let positionY = (e.clientY / windowHeight) - 0.55;

    gsap.to(".swiper-slide-active", {
      rotateY: positionX * 50,
      rotateX: -positionY * 50,
      ease: "none"
    })
  }

  return (
    <Swiper
      className={props.classNameSwiperContainer}
      effect='coverflow'
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      speed={600}
      autoplay
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        560: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 3,
        }
      }}
      pagination
      navigation
    >
      {props.obj.map(printSwiperSlides)}
    </Swiper >
  )
}

CustomCarousel.defaultProps = {
  classNameTxtContainer: "swipe-txt-container",
  obj: carouselProfile
}

export default CustomCarousel