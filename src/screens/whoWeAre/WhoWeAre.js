import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Row, Col } from "antd";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './WhoWeAre.css'

// import functions
import { divideText, turnToUppercase } from "../../utils/utilities";

// import components
import CustomCard from "../../components/functional_components/customCard/CustomCard";
import CustomOwlCarousel from "../../components/hooks_components/customOwlCarousel/CustomOwlCarousel";
import SubsectionTitleImg from "../../components/hooks_components/subsectionTitleImg/SubsectionTitleImg";
import CustomButton from "../../components/functional_components/Button/CustomButton";

const WhoWeAre = (props) => {
  const [state, setState] = useState({
    showDragBtn: true
  })

  const { t } = useTranslation()

  const primary_bg_page_academy = '#d6e3e5'

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      props.dispatch(setColorHeader(primary_bg_page_academy))
    }
  }

  const draggedCarousel = () => {
    setState({
      ...state,
      showDragBtn: false
    })
  }

  return (
    <div className="whoWeAre-container">

      {/* profile picture section */}
      <section className="whoWeAre-profile-sec">
        <Row>
          <Col span={24}>
            <CustomCard
              cardTitle={t('WhoWeAre.title')}
              titleClassName={'whoWeAre-profile-sec-title'}
            />
          </Col>
          <Col span={24}>
            {state.showDragBtn &&

              <CustomButton
                type='drag-more-btn'
                content={divideText(turnToUppercase(t('btn.drag')), '-BR-')}
              />
            }
            <CustomOwlCarousel
              item_superLargeDesktop={4}
              item_mediumDesktop={3}
              item_desktop={3}
              item_tablet={4}
              item_bigMobile={4}
              item_mobile={3}
              item_smallmobile={2}
              item_extraSmallMobile={2}
              infinite={true}
              showRole={false}
              showDesc={true}
              // showArrows={true}
              dragged={draggedCarousel}

              carouselClassName='whoWeAre-carousel-container'
              singleElClassName='whoWeAre-single-el-carousel'
              profilePictureClassName='whoWeAre-profile-picture-carousel'
              lableContainerClassName='whoWeAre-carousel-lable-container'
              lableTxtDescClassName='whoWeAre-carousel-lable-desc'
            />
          </Col>
        </Row>
      </section>

      {/* value */}
      <section
        id='value'
      >
        <SubsectionTitleImg
          subTitle={t('WhoWeAre.value_title')}
          desc={false}
          list={true}
          createList={
            <>
              <li>
                {t('WhoWeAre.value_list.el1.part1')}
                <span className="highlight-txt">
                  <strong>{t('WhoWeAre.value_list.el1.part2')}
                  </strong>
                </span>
                {t('WhoWeAre.value_list.el1.part3')}
              </li>
              <li>
                {t('WhoWeAre.value_list.el2.part1')}
                <span className="highlight-txt">
                  <strong>{t('WhoWeAre.value_list.el2.part2')}
                  </strong>
                </span>
                {t('WhoWeAre.value_list.el2.part3')}
              </li>
              <li>
                {t('WhoWeAre.value_list.el3.part1')}
                <span className="highlight-txt">
                  <strong>{t('WhoWeAre.value_list.el3.part2')}
                  </strong>
                </span>
                {t('WhoWeAre.value_list.el3.part3')}
              </li>
              <li>
                {t('WhoWeAre.value_list.el4.part1')}
                <span className="highlight-txt">
                  <strong>{t('WhoWeAre.value_list.el4.part2')}
                  </strong>
                </span>
                {t('WhoWeAre.value_list.el4.part3')}
              </li>
            </>
          }
          bg={'whoWeAre-value-img'}
        />
      </section>

      {/* history */}
      <section
        id='history'
      >
        <SubsectionTitleImg
          subTitle={t('WhoWeAre.history_title')}
          desc={
            <>
              {t('WhoWeAre.history_desc.part1')}
              <strong>
                <span className="highlight-txt">
                  {t('WhoWeAre.history_desc.part2')}
                </span>
              </strong>
              {t('WhoWeAre.history_desc.part3')}
            </>
          }
          bg={'whoWeAre-history-img'}
          imgRight={true}
          imgRightDescLeft={false}
          imgLeftDescRight={true}
          classNameTitle={'whoWeAre-sub-section-title'}
          descDesktopContainer={'whoWeAre-sub-section-desc-container'}
        />
      </section>

      {/* vision */}
      <section
        id='vision'
      >
        <SubsectionTitleImg
          subTitle={t('WhoWeAre.vision_title')}
          desc={
            <>
              {t('WhoWeAre.vision_desc.part1')}
              <strong>
                <span className="highlight-txt">
                  {t('WhoWeAre.vision_desc.part2')}
                </span>
              </strong>
              {t('WhoWeAre.vision_desc.part3')}
              <strong>
                <span className="highlight-txt">
                  {t('WhoWeAre.vision_desc.part4')}
                </span>
              </strong>
              {t('WhoWeAre.vision_desc.part5')}
            </>
          }
          bg={'whoWeAre-vision-img'}
        />
      </section>

      {/* mission */}
      <section
        id='mission'
      >
        <SubsectionTitleImg
          subTitle={t('WhoWeAre.mission_title')}
          desc={
            <>
              {t('WhoWeAre.mission_desc.part1')}
              <strong>
                <span className="highlight-txt">
                  {t('WhoWeAre.mission_desc.part2')}
                </span>
              </strong>
              {t('WhoWeAre.mission_desc.part3')}
            </>
          }

          bg={'whoWeAre-mission-img'}
          imgRightDescLeft={false}
          imgLeftDescRight={true}
          imgRight={true}
          classNameTitle={'whoWeAre-sub-section-title'}
          descDesktopContainer={'whoWeAre-sub-section-desc-container'}
        />
      </section>
    </div>
  )
}

export default connect()(WhoWeAre)