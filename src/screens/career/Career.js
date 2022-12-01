import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

// Redux
import { connect } from "react-redux";

// MUI
import { Box, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import "./Career.css";

import { addIcon, advantagesBeije, minusIcon } from "../../utils/properties";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import JobSection from "../../components/hooks_components/jobSection/JobSection";


const Career = () => {
  const match_mobile = useMediaQuery('(max-width: 768px)');
  const [state, setState] = useState({
    paragraphs: advantagesBeije
  });
  const { t } = useTranslation();

  const handleParagraph = (key) => () => {
    let paragraphs = state.paragraphs;
    paragraphs[key].isOpen = !state.paragraphs[key].isOpen
    console.log("paragraphs: ", paragraphs);
    setState({
      paragraphs
    })
  }



  return (
    <>
      <Helmet>
        <title>{t('helmet.meta_title.career')}</title>
        <meta name="description" content={t('helmet.meta_description.career')} />
        <meta name="keywords" content={t('helmet.keywords.career')} />
        <meta name="google" content="notranslate" />
      </Helmet>

      <Box
        className={"margin-top-container-screens bg_white"}
      >
        <section className={"career_first_section paddingX-container-general-pages d-flex justify-center"}>
          <div className="max-width-1200 width-100">

            <div className="career_title_page">
              <h1>
                <span>Careers</span><span>&nbsp;@&nbsp;</span>
              </h1>
              <p>Beije</p>
            </div>
            <div className="career_intro_text">
              <p>Il nostro è un sistema People First, questo significa creare un luogo di lavoro in cui le persone si sentono appagate e percepiscono una reale crescita professionale</p>
            </div>

            {/* Buttons container */}
            <div className="career_container_starting_buttons">
              <CustomButton
                type="career_btn"
                content={"POSIZIONI APERTE"}
              />
              <CustomButton
                type="career_btn"
                content={"BEIJE MANIFESTO"}
              />
            </div>


          </div>

        </section>


        <section className={"career_second_section paddingX-container-general-pages d-flex justify-center"}>
          {/* List jobs container */}
          <div className="career_container_list">
            <JobSection />
          </div>

        </section>
        <section className={"career_third_section paddingX-container-general-pages d-flex"}>
          <h2>
            I vantaggi della Community <span className="hightlight-txt">Beije</span>
          </h2>

          <div>
            {
              state.paragraphs.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="career_single_paragraph"
                  >

                    <div className="career_single_paragraph_header">
                      <p className="hightlight-txt carrer_paragraph_title">{item.title}</p>
                      {
                        match_mobile &&
                        <CustomButton
                          content={<FontAwesomeIcon icon={item.isOpen ? minusIcon : addIcon} />}
                          callback={handleParagraph(key)}
                        />
                      }
                    </div>
                    {
                      (!match_mobile || item.isOpen) &&
                      <p>{item.paragraph}</p>
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

              alt="logo beije"
            />

          </div>

        </section>


      </Box >
    </>
  )
}

export default connect()(Career)