import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

// MUI
import { Box } from '@mui/material';

// style
import './CustomFooter.css'

// Constants and functions
import { logo_primary_light, logo_secondary_light, menu_voices } from "../../../utils/properties";

// Components
import SwitchLang from "../switchLang/SwitchLang"
import SocialLinks from "../../functional_components/socialLinks/SocialLinks";
import CustomModal from "../customModal/CustomModal";
import PrivacyPolicies from "../../functional_components/privacyPolicies/PrivacyPolicies";
import LegalNotes from "../../functional_components/legalNotes/LegalNotes";
import ParitaGenere from "../../functional_components/legalNotesGenere/ParitaGenere";

const CustomFooter = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    typeModal: "",
    modalIsOpen: false
  })

  const openModal = (param1) => () => {
    setState({
      ...state,
      modalIsOpen: true,
      typeModal: param1
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modalIsOpen: false,
      typeModal: ""
    })
  }

  return (
    <Box
      className="footer-section"
    >
      {/* First Row - lang and logo */}
      <div
        className={"footer-logo-lang d-flex footer-padding-elements"}
      >
        <div>
          <Link
            to=""
          >
            <img
              src={logo_primary_light}
              alt="Logo Beije People First"
              className="footer-container-logo-desktop" />
          </Link>
        </div>
        <div>
          <Link
            to=""
          >
            <img
              src={logo_secondary_light}
              alt="Logo Beije People First"
              className="footer-container-logo-mobile" />
          </Link>
        </div>
        <div>
          <SwitchLang />
        </div>
      </div>

      <div
        className={"footer-info-policies d-flex footer-padding-elements"}
      >
        {/* Info */}
        <div className={"footer-info d-flex"}>
          <div>
            <p><b>{t("footer.primary_pages")}</b></p>
            <div className={"footer-links-container"}>
              {menu_voices.slice(0, 3).map((singleLink, key) => {
                return (
                  <Link
                    key={key}
                    to={singleLink.link_to}
                    className={"footer-links"}
                  >
                    {t("burgerMenu." + singleLink.name)}
                  </Link>
                )
              })
              }
            </div>
          </div>
          <div>
            <p><b>{t("footer.secondary_pages")}</b></p>
            <div className={"footer-links-container"}>
              {menu_voices.map((singleLink, key) => {
                if (key !== 0 && key !== 1 && key !== 2 && key !== 6 && key !== 7) {
                  return (
                    <Link
                      key={key}
                      to={singleLink.link_to}
                      className={"footer-links"}
                    >
                      {t("burgerMenu." + singleLink.name)}
                    </Link>
                  )
                }

              })
              }
            </div>

          </div>
        </div>

        {/* Privacy policies only desktop*/}
        <div
          className={"footer-policies-desktop"}
        >
          <p><b>{t("footer.tertiary_pages")}</b></p>
          <p
            className="cursor-pointer footer-link-privacyPolicies-legalNotes"
            onClick={openModal("privacyPolicies")}
          >
            {t("footer.privacyPolicies")}
          </p>
          <p
            className="cursor-pointer footer-link-privacyPolicies-legalNotes"
            onClick={openModal("legalNotes")}
          >
            {t("footer.legalNotes")}
          </p>
          <p
            className="cursor-pointer footer-link-privacyPolicies-legalNotes"
            onClick={openModal("paritaGenere")}
          >
            {t("footer.paritaGenere")}
          </p>
        </div>

      </div>

      <div
        className={"footer-vatNumber-social d-flex footer-padding-elements"}
      >
        <hr />

        {/* Vat number and social only desktop */}
        <div
          className={"footer-social-desktop"}
        >
          <SocialLinks />
        </div>
        <div
          className={"footer-vatNumber"}
        >
          <p>{t("footer.vatNumber")}</p>
        </div>

      </div>

      <CustomModal
        stateModal={state.modalIsOpen}
        callbackClose={closeModal}
        modalTitle={state.typeModal === "privacyPolicies" ? t("footer.privacyPolicies") : t("footer.legalNotes")}
      >
        {
          state.typeModal === "privacyPolicies" &&
          <PrivacyPolicies />
        }
        {
          state.typeModal === "legalNotes" &&
          <LegalNotes />
        }{
          state.typeModal === "paritaGenere" &&
          <ParitaGenere />
        }

      </CustomModal>
    </Box >
  )
}

export default connect()(CustomFooter)