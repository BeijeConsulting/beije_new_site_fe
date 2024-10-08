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
import "./CustomCarousel.scss";

// Constants
import { carouselProfile } from "../../../utils/properties"
import { useNavigate } from "react-router-dom";

const CustomCarousel = (props) => {

  const { t } = useTranslation();
  const slideRef = useRef();
  const navigate = useNavigate();

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
        className={(props.upCarousel || props.academyCarousel) ? "carousel-up-bg" : ""}

        ref={slideRef}
        onMouseMove={tiltEffect()}
        style={{
          backgroundColor: (props.upCarousel || props.academyCarousel) ? item.background_color : "",
          backgroundImage: props.homeCarousel ? `url(${item.picture_class_name})` : "none",
          border: props.homeCarousel ? "1px solid red" : "none"
        }}
        onClick={(props.upCarousel || props.academyCarousel) ? sendToPage(item.permalink) : null}
      >
        {props.imgCarousel &&
          <img
            className="carousel-img-container"
            src={item.logo}
          />
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
          {(props.upCarousel || props.academyCarousel) &&
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

  const sendToPage = (param1) => () => {
    let response = "";
    if (props.upCarousel) {
      response = `/up/${param1}`
    }
    else if (props.academyCarousel) {
      response = `/talent-academy/${param1}`
    }
    navigate(response)
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