import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { setModal, initModal } from "../../../redux/ducks/modalDuck"

// MUI
import { Box } from '@mui/material';

// style
import './CustomFooter.css'

// Constants and functions
import { logo_primary_light, logo_secondary_light } from "../../../utils/properties";

// Components
import SwitchLang from "../switchLang/SwitchLang"
import SocialLinks from "../../functional_components/socialLinks/SocialLinks";
import CustomModal from "../customModal/CustomModal";
import PrivacyPolicies from "../../functional_components/privacyPolicies/PrivacyPolicies";
import LegalNotes from "../../functional_components/legalNotes/LegalNotes";

const CustomFooter = (props) => {
  const { t } = useTranslation();

  const openModal = (param1) => () => {
    props.dispatch(setModal(true, param1))
  }

  const closeModal = () => {
    props.dispatch(initModal())
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
            <p>{t("contactInfo.location")}</p>
            <p>Via Varese, 27/38</p>
            <p>Lissone (MB)</p>
          </div>
          <div>
            <p>{t("contactInfo.contact")}</p>
            <p>job@beije.it</p>
            <p>commerciale@beije.it</p>
          </div>
        </div>

        {/* Privacy policies only desktop*/}
        <div
          className={"footer-policies-desktop"}
        >
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
        </div>

        <div
          className={"footer-social-mobile"}
        >
          <SocialLinks />
        </div>
      </div>

      <div
        className={"footer-vatNumber-social d-flex footer-padding-elements"}
      >
        {/* Privacy policies only mobile */}
        <div
          className={"footer-policies-mobile"}
        >
          <span
            className="cursor-pointer footer-link-privacyPolicies-legalNotes"
            onClick={openModal("privacyPolicies")}
          >
            {t("footer.privacyPolicies")} </span>
          <span> | </span>
          <span
            className="cursor-pointer footer-link-privacyPolicies-legalNotes"
            onClick={openModal("legalNotes")}
          >
            {t("footer.legalNotes")}</span>
        </div>

        {/* Vat number and social only desktop */}
        <div
          className={"footer-vatNumber"}
        >
          <p>{t("footer.vatNumber")}</p>
        </div>
        <div
          className={"footer-social-desktop"}
        >
          <SocialLinks />
        </div>
      </div>

      <CustomModal
        callbackClose={closeModal}
        modalTitle={props.modalDuck.typeModal === "privacyPolicies" ? t("footer.privacyPolicies") : t("footer.legalNotes")}
      >
        {
          props.modalDuck.typeModal === "privacyPolicies" &&
          <PrivacyPolicies />
        }
        {
          props.modalDuck.typeModal === "legalNotes" &&
          <LegalNotes />
        }

      </CustomModal>
    </Box >
    // <div className="footer-section">
    //   <p>Questo è il footer</p>
    // </div>
  )
}

const mapStateToProps = state => (
  {
    modalDuck: state.modalDuck,
  }
)

export default connect(mapStateToProps)(CustomFooter)