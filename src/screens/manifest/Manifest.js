import React, { useEffect, useRef } from "react"
import { Box, useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./Manifest.css";
import { useParams } from "react-router-dom";

//import gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { logo_written_white, manifest_values } from "../../utils/properties";

// Redux
import { initCurrentPage, setCurrentPage } from "../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Components
import Logo3d from "../../components/functional_components/logo3d/Logo3d";
import CustomLink from "../../components/functional_components/ui/customLink/CustomLink";

const Manifest = (props) => {
  const containerRef = useRef();
  const logo3d = useRef();

  const match1024 = useMediaQuery('(min-width:1024px)');
  const match1200 = useMediaQuery('(min-width:1200px)');
  gsap.registerPlugin(ScrollTrigger);
  const { t } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("manifest"));
    props.dispatch(setVisibilityNavbar(true));

    // Gsap
    const element = containerRef.current;
    const manifest_internal_ball = element.querySelector('.manifest_internal_ball_gsap');
    const manifest_text_ball_gsap = element.querySelector(".manifest_text_ball_gsap");
    const manifest_ball_container_gsap = element.querySelector(".manifest_ball_container_gsap");
    const manifest_square_container_gsap = element.querySelector(".manifest_square_container_gsap");

    const manifest_values_container_gsap = element.querySelector(".manifest_values_container_gsap");
    const manifest_values_list_single_element_gsap_1 = element.querySelector(".manifest_values_list_single_element_gsap_1");
    const manifest_values_list_single_element_gsap_2 = element.querySelector(".manifest_values_list_single_element_gsap_2");
    const manifest_values_list_single_element_gsap_3 = element.querySelector(".manifest_values_list_single_element_gsap_3");
    const manifest_values_list_single_element_gsap_4 = element.querySelector(".manifest_values_list_single_element_gsap_4");
    const manifest_values_list_single_element_gsap_5 = element.querySelector(".manifest_values_list_single_element_gsap_5");
    const manifest_values_list_single_element_gsap_6 = element.querySelector(".manifest_values_list_single_element_gsap_6");

    const t1_ball = gsap.timeline({
      scrollTrigger: {
        trigger: manifest_internal_ball,
        start: 'top 75%',
        toggleActions: "play none none none"
      }
    })

    t1_ball.to(manifest_internal_ball, 1, { width: match1024 ? 200 : 150, height: match1024 ? 200 : 150, duration: 0.3 }).to(manifest_text_ball_gsap, 1, { opacity: 1 }).to(manifest_ball_container_gsap, 1, { width: match1024 ? "50%" : "100%" }).to(manifest_square_container_gsap, 1, { display: "flex", opacity: 1 })

    const t2_list_values = gsap.timeline({
      scrollTrigger: {
        trigger: manifest_values_container_gsap,
        start: 'top 75%',
        toggleActions: "play none none none"
      }
    })

    t2_list_values.to(manifest_values_container_gsap, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_1, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_2, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_3, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_4, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_5, 1, { opacity: 1 }).to(manifest_values_list_single_element_gsap_6, 1, { opacity: 1 })



    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [match1024])


  useEffect(() => {
    lettering(document.getElementById('text'), t(`manifest.animated_ball_container.ball_sentence`));
  }, [lang, match1024])

  const lettering = (node, text) => {
    let str = typeof text == 'undefined'
      ? node.textContent
      : text;
    node.innerHTML = '';
    let openTag = '<span>';
    let closeTag = '</span>';
    let newHTML = openTag;
    let closeTags = closeTag;
    for (let i = 0, iCount = str.length; i < iCount; i++) {
      newHTML += str[i] + openTag;
      closeTags += closeTag;
    }
    node.innerHTML = newHTML + closeTags;
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
        className={"margin-top-container-screens bg-white"}
        ref={containerRef}
      >
        <section className="manifest_first_section">
          <div className="manifest_gray_intro">
            <div className="manifest_gray_intro_internal_container">
              <div className="manifest_title_page_container">
                <img
                  src={logo_written_white}
                  width={247}
                  height={98}
                />
                <div dangerouslySetInnerHTML={{ __html: t(`manifest.intro`) }} />
              </div>
              {
                match1200 &&
                <div className="manifest_logo_3d_container" ref={logo3d}>
                  <Logo3d />
                </div>
              }
            </div>
          </div>
        </section>

        {
          !match1200 &&
          <section>
            <div className="manifest_logo_3d_container_mobile" ref={logo3d}>
              <Logo3d />
            </div>
          </section>
        }


        <section>
          <div className="paddingX-container-general-pages manifest_sentence_manifest" dangerouslySetInnerHTML={{ __html: t(`manifest.starting_sentence`) }} />
        </section>

        <section className="manifest_second_section" />

        <section className="manifest_third_section paddingX-container-general-pages" dangerouslySetInnerHTML={{ __html: t(`manifest.image_text`) }} />

        <section className="manifest_section_ball_animated">
          <div className="manifest_ball_container manifest_ball_container_gsap">
            <div className="manifest_external_written">
              <p id="text" className="manifest_text_ball manifest_text_ball_gsap"></p>
              <div className="manifest_internal_ball manifest_internal_ball_gsap">

              </div>
            </div>
          </div>
          <div className="manifest_square_container manifest_square_container_gsap" dangerouslySetInnerHTML={{ __html: t(`manifest.animated_ball_container.box_sentence`) }} />
        </section>

        <section className="manifest_fifth_section">
          <div>
            <h2>
              {t(`manifest.second_image_text.p1`)}
              <CustomLink
                content={t(`manifest.second_image_text.link1`)}
                linkTo={`/${lang}/#tabValues`}
                typeLink={"simple_link"}
              />
              {t(`manifest.second_image_text.p2`)}
              <CustomLink
                content={t(`manifest.second_image_text.link2`)}
                linkTo={`/${lang}/#tabValues`}
                typeLink={"simple_link"}
              />
            </h2>
          </div>
        </section>

        <section className="manifest_sixth_section">
          <div className="paddingX-container-general-pages manifest_last_text_container">
            <h2 className="hightlight-txt">
              {t(`manifest.centered_sentences.text1.p1`)}
              <span>{t(`manifest.centered_sentences.text1.p2`)}</span>
              {t(`manifest.centered_sentences.text1.p3`)}
              <span>{t(`manifest.centered_sentences.text1.p4`)}</span>
              {t(`manifest.centered_sentences.text1.p5`)}
            </h2>
            <br />
            <h2 className="manifest_last_text_container_title2">{t(`manifest.centered_sentences.text2.p1`)}<span>{t(`manifest.centered_sentences.text2.p2`)}</span>{t(`manifest.centered_sentences.text2.p3`)}<span>{t(`manifest.centered_sentences.text2.p4`)}</span>{t(`manifest.centered_sentences.text2.p5`)}</h2>
          </div>
          <div className="manifest_values_container manifest_values_container_gsap">
            <div className="manifest_values_internal_container">
              <h3 className="h1">{t(`manifest.values.title`)}</h3>
              <div className="manifest_values_list_container" >
                {
                  manifest_values.map((item, key) => {
                    return (
                      <div key={key} className={`manifest_values_list_single_element ${"manifest_values_list_single_element_gsap_" + (key + 1)}`}>
                        <div className="manifest_values_list_title">
                          <div className="manifest_values_list_title_dot" />
                          <h4>{t(`manifest.values.${item.title}`)}</h4>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: t(`manifest.values.${item.description}`) }}
                        />
                      </div>
                    )
                  })
                }
                <div className="manifest_logo_gray_bg" />

              </div>

            </div>
          </div>


        </section>

      </Box >
    </>
  )
}

export default connect()(Manifest)