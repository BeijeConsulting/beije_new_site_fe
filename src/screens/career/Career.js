import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// MUI
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import "./Career.css";

import { initCurrentPage, setCurrentPage } from "../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";


import { addIcon, advantagesBeije, benefitsTeam, growthPaths, logo_written_dark, minusIcon, posterVideoCareer, xIcon } from "../../utils/properties";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import JobSection from "../../components/hooks_components/jobSection/JobSection";


const Career = (props) => {
  const match_mobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
  const refListJobs = useRef(null);
  const [state, setState] = useState({
    advantages: advantagesBeije,
    benefits: benefitsTeam
  });
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("career"));
    props.dispatch(setVisibilityNavbar(true));

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const handleParagraphAdvantages = (key) => () => {
    let advantages = state.advantages;
    advantages[key].isOpen = !state.advantages[key].isOpen
    setState({
      ...state,
      advantages
    })
  }

  const handleParagraphBenefits = (key) => () => {
    let benefits = state.benefits;
    benefits[key].isOpen = !state.benefits[key].isOpen
    setState({
      ...state,
      benefits
    })
  }

  const goToManifest = () => {
    navigate("/manifest")
  }

  const goToListJobs = () => {
    refListJobs.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.career')}</title>
        <meta name="description" content={t('helmet.meta_description.career')} />
        <meta name="keywords" content={t('helmet.keywords.career')} />
        <meta name="google" content="notranslate" />
      </Helmet>

      <Box
        className={"margin-top-container-screens bg-white"}
      >
        <section className={"career_first_section paddingX-container-general-pages d-flex justify-center"}>
          <div className="max-width-1200 width-100">

            <div className="career_title_page">
              <h1>
                <span>{t("career.titlePage")}</span><span>&nbsp;@&nbsp;</span>
              </h1>
              <img
                src={logo_written_dark}
                width={200}
                height={90}
              />
            </div>
            <div className="career_intro_text" dangerouslySetInnerHTML={{ __html: t("career.description") }}>
            </div>

            {/* Buttons container */}
            <div className="career_container_starting_buttons">
              <CustomButton
                type="career_btn"
                content={t("career.open_position_btn")}
                callback={goToListJobs}
              />
              <CustomButton
                type="career_btn"
                content={t("career.manifest_btn")}
                callback={goToManifest}
              />
            </div>
          </div>

          <div className="career_video_container">
            <video
              // width="100%"
              // height="290"
              preload="metadata"
              controls={true}
              controlsList="nodownload"
              poster={posterVideoCareer}
              style={{ visibility: "visible" }}
            >
              <source
                src="https://beije-people-first.s3.eu-south-1.amazonaws.com/site/career_video.mp4"
                type="video/mp4" />

            </video>
          </div>

        </section>

        {/* <section className="career_seventh_section">
          <div className="career_video_container">
            <video
              // width="100%"
              // height="290"
              preload="metadata"
              controls={true}
              controlsList="nodownload"
              poster={posterVideoCareer}
              style={{ visibility: "visible" }}
            >
              <source
                src="https://beije-people-first.s3.eu-south-1.amazonaws.com/site/career_video.mp4"
                type="video/mp4" />

            </video>
          </div>
          <div className="paddingX-container-general-pages career_title_video_container" dangerouslySetInnerHTML={{ __html: t(`career.video_text`) }} />
        </section> */}


        <section className={"career_second_section paddingX-container-general-pages d-flex justify-center"} >
          {/* List jobs container */}
          <div className="career_container_list" ref={refListJobs}>
            <JobSection />
          </div>

        </section>
        <section className={"career_third_section paddingX-container-general-pages d-flex"} >
          <div dangerouslySetInnerHTML={{ __html: t("career.advantages.title") }} />
          <div>
            {
              state.advantages.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="career_single_paragraph"
                  >
                    <div className="career_single_paragraph_header" >
                      <div dangerouslySetInnerHTML={{ __html: t(`career.advantages.${item.title}`) }} />
                      {
                        match_mobile &&
                        <CustomButton
                          content={<FontAwesomeIcon icon={item.isOpen ? minusIcon : addIcon} />}
                          callback={handleParagraphAdvantages(key)}
                        />
                      }
                    </div>
                    {
                      (!match_mobile) &&
                      <div dangerouslySetInnerHTML={{ __html: t(`career.advantages.${item.paragraph}`) }} />
                    }
                    {
                      (match_mobile && item.isOpen) &&
                      <Drawer
                        anchor={"bottom"}
                        open={item.isOpen}
                        onClose={handleParagraphAdvantages(key)}
                      >

                        <div
                          className="career_single_paragraph_mobile_drawer"
                        >
                          <div dangerouslySetInnerHTML={{ __html: t(`career.advantages.${item.paragraph}`) }} />
                          <CustomButton
                            content={<FontAwesomeIcon icon={xIcon} />}
                            callback={handleParagraphAdvantages(key)}
                          />
                        </div>
                      </Drawer>
                    }

                  </div>
                )
              })
            }
          </div>
        </section>

        <section className="career_paths_images_container">
          <div className="career_paths_img1" />
          <div className="career_paths_img1" />
        </section>


        <section className={"career_fourth_section"}>
          <div className="paddingX-container-general-pages d-flex">

            <img
              src="https://beije-people-first.s3.eu-south-1.amazonaws.com/site/images/logos/logo_short_white.svg"
              alt="logo Beije People First"
            />
            <div dangerouslySetInnerHTML={{ __html: t(`career.growth_paths.title`) }} />

            <div className={"career_growth_paths_container"}>
              {growthPaths.map((item, key) => {
                return (
                  <fieldset key={key} className={"career_growth_paths"}>
                    <legend className="h3"><b>{t(`career.growth_paths.${item.title}`)}</b></legend>
                    <div dangerouslySetInnerHTML={{ __html: t(`career.growth_paths.${item.description}`) }} />
                  </fieldset>
                )
              })}
            </div>
          </div>

        </section>

        <section className="career_fifth_section" />

        <section className={"career_sixth_section paddingX-container-general-pages d-flex"}>
          <div dangerouslySetInnerHTML={{ __html: t("career.benefits.title") }} />
          <div>
            {
              state.benefits.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="career_single_paragraph"
                  >

                    <div className="career_single_paragraph_header">
                      <div dangerouslySetInnerHTML={{ __html: t(`career.benefits.${item.title}`) }} />
                      {
                        match_mobile &&
                        <CustomButton
                          content={<FontAwesomeIcon icon={item.isOpen ? minusIcon : addIcon} />}
                          callback={handleParagraphBenefits(key)}
                        />
                      }
                    </div>
                    {
                      (!match_mobile) &&
                      <div dangerouslySetInnerHTML={{ __html: t(`career.benefits.${item.paragraph}`) }} />
                    }
                    {
                      (match_mobile && item.isOpen) &&
                      <Drawer
                        anchor={"bottom"}
                        open={item.isOpen}
                        onClose={handleParagraphBenefits(key)}
                      >

                        <div
                          className="career_single_paragraph_mobile_drawer"
                        >
                          <div dangerouslySetInnerHTML={{ __html: t(`career.benefits.${item.paragraph}`) }} />
                          <CustomButton
                            content={<FontAwesomeIcon icon={xIcon} />}
                            callback={handleParagraphBenefits(key)}
                          />
                        </div>
                      </Drawer>
                    }

                  </div>
                )
              })
            }
          </div>
        </section>
      </Box >
    </>
  )
}

export default connect()(Career)