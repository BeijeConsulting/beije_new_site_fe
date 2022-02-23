import React, { useEffect, useRef, useState } from "react";

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

  const slideRef = useRef();

  const [state, setState] = useState({
    widthSlide: null
  })

  useEffect(() => {
    let widthSlide = slideRef.current.clientWidth
    setState({
      ...state,
      widthSlide: widthSlide
    })
  }, [])

  const printSwiperSlides = (item, key) => {
    return (
      <SwiperSlide
        key={key}
        className={item.pictureClassName}
        ref={slideRef}
        style={{ height: state.widthSlide }}
      >
        <p>{item.name} {item.surname}</p>
        <p>_{item.role}</p>
      </SwiperSlide>
    )
  }

  return (
    // <Swiper
    //   navigation
    //   loop={true}
    //   pagination={{ clickable: true }}
    //   effect="coverflow"
    //   coverflowEffect={{
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: false
    //   }}
    //   slidesPerView={3}
    //   centeredSlides
    //   className={'carousel-container'}
    // >
    //   {carouselProfile.map(printSwiperSlides)}
    // </Swiper>

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