import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col, Layout, Typography } from "antd";
const { Title } = Typography;

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import style
import './FourthSection.css';

// import functions
import { turnToUppercase } from '../../../utils/utilities'

//import components
import CustomCard from '../../functional_components/customCard/CustomCard'
import CustomForm from "../../hooks_components/customForm/CustomForm";
import SectionForm from "../../functional_components/sectionForm/SectionForm";

const FourthSection = () => {

  const { t } = useTranslation()

  const ref = useRef(null);

  //GSAP
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    const singleEl = element.querySelectorAll('.singleEl-gsap')

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
      }
    })

    t1.from(singleEl, { y: 50, opacity: 0, stagger: 0.3, duration: 0.5, ease: 'power2.in' })


  }, [])

  // const sendEmailCommercial = () => {
  //   console.log('Send email to commercial');
  //   // *ga*
  // }

  return (
    <div
      ref={ref}
    >
      <Layout className={'fourth-sec-container'}>
        <SectionForm
          title={turnToUppercase(t('home.fourthSection.title'))}
          positionBtn={'center'}
          classNameTextArea={'fourth-sec-text-area-form'}
          titleLevel={1}
          xsColInfo={0}
          // callBack={sendEmailCommercial}
          origin="home"
        />
      </Layout>
    </div>
  )
}

export default FourthSection