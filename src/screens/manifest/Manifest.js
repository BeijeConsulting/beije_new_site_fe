import React, { useEffect } from "react"
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./Manifest.css";

import { initCurrentPage, setCurrentPage } from "../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

const Manifest = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("manifest"));
    props.dispatch(setVisibilityNavbar(true));

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])



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

          </div>
          <div className="paddingX-container-general-pages manifest_sentence_manifest">
            <h2>Oggi, dopo più di 10 anni e con una Community di oltre 100 dipendenti siamo un sistema People First.</h2>
          </div>
        </section>

        <section className="manifest_second_section" />

      </Box >
    </>
  )
}

export default connect()(Manifest)