import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './PercentageSection.css'

// import constants
import { consulting_carousel_employee } from '../../../utils/properties';

// import components
import CustomMultiCarousel from '../../hooks_components/customMultiCarousel/CustomMultiCarousel';
import CustomCard from '../customCard/CustomCard';

const PercentageSection = (props) => {

  const [state, setState] = useState({
    isMobile: window.innerWidth <= 500,
  })
  const { t } = useTranslation()

  const ref = useRef(null);

  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    const element = ref.current;

    // const container = element.querySelector('.percentage-sec-container-gsap');
    const singleElementDesktop = element.querySelectorAll('.percentage-sec-single-el-desktop-gsap');
    const singleElementMobile = element.querySelector('.percentage-sec-single-el-mobile-gsap');

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        markers: true,
        start: 'top 75%',
      }
    })

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        markers: true,
        start: 'top 75%',
      }
    })

    t1.from(singleElementDesktop, { opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' });
    t2.from(singleElementMobile, { opacity: 0, duration: 0.5, ease: 'power2.in' });


    return () => {
      window.removeEventListener("resize", updateMedia);
    }
  }, [])

  const updateMedia = () => {
    setState({
      ...state,
      isMobile: window.innerWidth <= 500,
    });
  };

  const printPercentage = (item, key) => {
    return (
      <div
        key={key}
        className={`container-column items-center padding-30 ${state.isMobile ? 'percentage-sec-single-el-mobile-gsap' : 'percentage-sec-single-el-desktop-gsap'}`}
      >
        <CustomCard
          cardClassName={'custom-carousel-icon '}
          imgPreview={false}
          cardImg
          imgSrc={item.iconSrc}
          imgHeight={42}
          imgWidth={56}
        />
        <div className='separator-line-vertical '></div>
        <CustomCard
          titleLevel={1}
          cardTitle={item.titlePenrcentage}
        />
        <CustomCard
          cardParagraph={t(`Consulting.${item.carouselDesc}`)}
          paragraphClassName={'custom-carousel-paragraph '}
        />
      </div>
    )
  }

  // const CustomRight = () => ({ onClick }) => (
  //   <button className="percentage-sec-arrow percentage-sec-arrow-right" onClick={onClick}>
  //     <i className={'arrow-icon-btn arrow-icon-dark'} />
  //   </button>
  // );
  // const CustomLeft = () => ({ onClick }) => (
  //   <button className="percentage-sec-arrow percentage-sec-arrow-left" onClick={onClick}>
  //     <i className={'arrow-icon-btn arrow-icon-dark'} />
  //   </button>
  // );

  return (
    <div
      ref={ref}
    >

      <CustomMultiCarousel
        item_superLargeDesktop={3}
        item_mediumDesktop={3}
        item_desktop={3}
        item_tablet={3}
        item_bigMobile={3}
        item_mobile={1}
        item_smallmobile={1}
        item_extraSmallMobile={1}
        objCarousel={false}
        className="percentage-sec-container-gsap"

        infinite={state.isMobile ? true : false}
        autoPlay={state.isMobile ? true : false}
        draggable={state.isMobile ? true : false}
        grab={state.isMobile ? true : false}
        showArrows={state.isMobile ? true : false}
      // customRightArrow={<CustomRight />}
      // customLeftArrow={<CustomLeft />}
      >
        {props.objPercentage.map(printPercentage)}
      </CustomMultiCarousel>
    </div>

  )
}

PercentageSection.defaultProps = {
  objPercentage: consulting_carousel_employee
}

export default PercentageSection