import React, { useEffect, useRef } from "react"
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./Manifest.css";

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import logo_3d from "../../assets/3d/logo-beije.glb";

import { initCurrentPage, setCurrentPage } from "../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";
import { manifest_values } from "../../utils/properties";

const Manifest = (props) => {
  const written = "People first è Team, è Connessione, è Community.";
  // const loader = new GLTFLoader();
  // const scene = new THREE.Scene();

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("manifest"));
    props.dispatch(setVisibilityNavbar(true));

    lettering(document.getElementById('text'), written);

    // loader.load(logo_3d, function (gltf) {
    //   scene.add(gltf.scene);
    // }, undefined, function (error) {
    //   console.error(error);
    // });

    // document.getElementById('container', loader);


    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

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
      >
        <section className="manifest_first_section">
          <div className="manifest_gray_intro">

            {/* 3D ELEMENT */}
            {/* <div id="container" style={{ width: "50%", height: "500px", border: "1px solid red" }}>

            </div> */}

          </div>
          <div className="paddingX-container-general-pages manifest_sentence_manifest">
            <h2>Oggi, dopo più di 10 anni e con una Community di oltre 100 dipendenti siamo un sistema People First.</h2>
          </div>
        </section>

        <section className="manifest_second_section" />

        <section className="manifest_third_section paddingX-container-general-pages">
          <h2>People First è l’innovazione che parte da te</h2>
          <h2>People First è la passione che abbiamo per la conoscenza e l’aggiornamento costante</h2>
        </section>

        <section className="manifest_section_ball_animated">
          <div className="manifest_ball_container">
            <div className="manifest_external_written">
              <p id="text"></p>
              <div className="manifest_internal_ball">

              </div>
            </div>
          </div>
          <div className="manifest_square_container titles-level-1-2">
            <p>People First è il rispetto che abbiamo per il tuo benessere, la risposta che diamo alle tue domande.</p>
          </div>
        </section>

        <section className="manifest_fifth_section">
          <div>
            <h2>People First è il nostro headquarter, centro strategico dove integrare la <span>nostra visione</span> con la <span>nostra missione</span>.</h2>
          </div>
        </section>

        <section className="manifest_sixth_section">
          <div className="paddingX-container-general-pages manifest_last_text_container">
            <h2>People First è la capacità di guardare oggi al futuro e di generare un impatto positivo sulla società</h2>
            <br />
            <h2 className="hightlight-txt">People First è la visione d’insieme: non vogliamo solo immaginare, vogliamo innescare un cambiamento positivo che duri nel tempo.</h2>
          </div>

          <div className="manifest_values_container">
            <h3 className="titles-level-1-2">I valori in cui crediamo</h3>
            <div className="manifest_values_list_container" >
              {
                manifest_values.map((item, key) => {
                  return (
                    <div key={key} className="manifest_values_list_single_element">
                      <div className="manifest_values_list_title">
                        <div className="manifest_values_list_title_dot" />
                        <h4>{item.title}</h4>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="manifest_logo_gray_bg" />
          </div>
        </section>

      </Box >
    </>
  )
}

export default connect()(Manifest)