import React, { useEffect, useRef, useState } from "react";

// Gsap
import gsap from "gsap";

// Swiper
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
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

  const slideRef = useRef();
  const usingSwiperSlide = useSwiperSlide();
  const usingSwiper = useSwiper()

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
        <p>{item.name} {item.surname}</p>
        <p>_{item.role}</p>
      </SwiperSlide>
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

    // let positionXp = (e.clientX / windowWidth) + 100;
    // let positionYp = (e.clientY / windowHeight) + 100;
    gsap.to(".swiper-slide-active p", {
      // rotateY: positionXp * 10,
      // rotateX: positionYp * 10,
      // ease: "none"
      stagger: 0.1
    })
  }

  return (
    <Swiper
      effect='coverflow'
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      speed={600}
      autoplay={{
        delay: 3000
      }}
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
      pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}

      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
    >
      {carouselProfile.map(printSwiperSlides)}
    </Swiper >
  )
}

export default CustomCarousel