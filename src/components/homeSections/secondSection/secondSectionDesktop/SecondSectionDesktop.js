import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import style
import '../SecondSection.css'


//import costants
import { cardWhoWeAre } from "../../../../utils/properties";

// import gaEvent set
import { setGaEvent } from "../../../../utils/utilities";

//import components
import CustomCard from "../../../functional_components/customCard/CustomCard";
import CustomButton from "../../../functional_components/Button/CustomButton";

const SecondSectionDesktop = () => {

  const { t } = useTranslation()

  const ref = useRef(null)

  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const element = ref.current;

    const container = element.querySelectorAll('.sec-section-container-gsap');
    const singleEl = element.querySelectorAll('.sec-section-singleEl-gsap');

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
      }
    })
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
      }
    })

    t1.from(container, { y: 50, opacity: 0, stagger: 0.2, duration: 0.5, ease: 'power2.in' })
    t2.from(singleEl, { y: 50, opacity: 0, stagger: 0.2, duration: 0.5, ease: 'power2.in' })
  }, [])

  const printCard = (item, key) => {
    return (
      <Col
        xs={24}
        md={12}
        lg={6}
        key={key}
        className={item.colContainerClassName}
      >
        <div className={item.cardContainerClassName}>
          <Row className="sec-section-row-title">
            <CustomCard
              cardTitle={t('home.secondSection.' + item.cardTitle)}
              titleLevel={item.titleLevel}
              cardClassName={item.colClassName}
            />

            <CustomButton
              type={item.type_btn}
              currentIcon={
                <i className={'arrow-icon-btn arrow-icon-dark'} />
              }
              href={item.href}
              clickCallback={setGaEvent({category: "Navigation", action: "Click card arrow", label: item.cardTitle})}
            />
          </Row>
        </div>
      </Col >
    )
  }

  return (
    <>
      <Row
        // id='secondSection'
        className='sec-section-row-card-container'
        ref={ref}
      >
        {cardWhoWeAre.map(printCard)}
      </Row>

    </>
  )
}

export default SecondSectionDesktop