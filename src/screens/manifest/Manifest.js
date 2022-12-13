import React, { useEffect, useRef } from "react"
import { Box, useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./Manifest.css";

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

const Manifest = (props) => {
  const written = "People first è Team, è Connessione, è Community.";
  const containerRef = useRef();
  const match1024 = useMediaQuery('(min-width:1024px)');
  gsap.registerPlugin(ScrollTrigger);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("manifest"));
    props.dispatch(setVisibilityNavbar(true));

    lettering(document.getElementById('text'), written);

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

    console.log("match1024: ", match1024);

    t1_ball.to(manifest_internal_ball, 1, { width: match1024 ? 200 : 150, height: match1024 ? 200 : 150 }).to(manifest_text_ball_gsap, 1, { opacity: 1 }).to(manifest_ball_container_gsap, 1, { width: match1024 ? "50%" : "100%" }).to(manifest_square_container_gsap, 1, { display: "flex", opacity: 1 })

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
                <div>
                  <h1><span>Manifesto</span></h1>
                  <p>Siamo nati con una grande ambizione: <b>mettere le persone al centro.</b></p>
                </div>
              </div>
              <div className="manifest_logo_3d_container">
                <Logo3d />
              </div>
            </div>
          </div>
          <div className="paddingX-container-general-pages manifest_sentence_manifest">
            <h2>Oggi, dopo più di 10 anni e con una Community di oltre 100 dipendenti siamo un sistema People First.</h2>
          </div>
        </section>

        <section className="manifest_second_section" />

        <section className="manifest_third_section paddingX-container-general-pages">
          <h2><b>People First è l’innovazione che parte da te</b></h2>
          <h2 >People First è la passione che abbiamo per la conoscenza e l’aggiornamento costante</h2>
        </section>

        <section className="manifest_section_ball_animated">
          <div className="manifest_ball_container manifest_ball_container_gsap">
            <div className="manifest_external_written">
              <p id="text" className="manifest_text_ball manifest_text_ball_gsap"></p>
              <div className="manifest_internal_ball manifest_internal_ball_gsap">

              </div>
            </div>
          </div>
          <div className="manifest_square_container manifest_square_container_gsap">
            <p className="h2">People First è il rispetto che abbiamo per il tuo benessere, la risposta che diamo alle tue domande.</p>
          </div>
        </section>

        <section className="manifest_fifth_section">
          <div>
            <h2>People First è il nostro headquarter, centro strategico dove integrare la <span>nostra visione</span> con la <span>nostra missione</span>.</h2>
          </div>
        </section>

        <section className="manifest_sixth_section">
          <div className="paddingX-container-general-pages manifest_last_text_container">
            <h2 className="hightlight-txt"><b>People First è la capacità di guardare oggi al futuro e di generare un impatto positivo sulla società</b></h2>
            <br />
            <h2 className="manifest_last_text_container_title2">People First è la visione d’insieme: non vogliamo solo immaginare, vogliamo innescare un cambiamento positivo che duri nel tempo.</h2>
          </div>
          <div className="manifest_values_container manifest_values_container_gsap">
            <div className="manifest_values_internal_container">
              <h3 className="h1">I valori in cui crediamo</h3>
              <div className="manifest_values_list_container" >
                {
                  manifest_values.map((item, key) => {
                    return (
                      <div key={key} className={`manifest_values_list_single_element ${"manifest_values_list_single_element_gsap_" + (key + 1)}`}>
                        <div className="manifest_values_list_title">
                          <div className="manifest_values_list_title_dot" />
                          <h4>{item.title}</h4>
                        </div>
                        <p>{item.description}</p>
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