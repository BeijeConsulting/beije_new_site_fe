import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";
import { setModal, initModal } from "../../../redux/ducks/modalDuck"

// MUI
import { Box } from '@mui/material';

// style
import './CustomFooter.css'

// Constants
import { logo_primary_light, logo_secondary_light, pdf_legalNotes_en, pdf_legalNotes_it, pdf_privacyPolicies_en, pdf_privacyPolicies_it } from "../../../utils/properties";

// Components
import SwitchLang from "../switchLang/SwitchLang"
import SocialLinks from "../../functional_components/socialLinks/SocialLinks";
import CustomModal from "../customModal/CustomModal";

const CustomFooter = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    typeModal: 2
  })

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
          <img src={logo_primary_light} alt="Logo Beije People First" className="footer-container-logo-desktop" />
        </div>
        <div>
          <img src={logo_secondary_light} alt="Logo Beije People First" className="footer-container-logo-mobile" />
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
      >
        {
          props.modalDuck.typeModal === "privacyPolicies" &&
          < object
            data={t("modal.doc_lang") === "doc_it" ? pdf_privacyPolicies_it : pdf_privacyPolicies_en}
            type="application/pdf"
            width="100%"
            height="100%">
            <p>Alternative text - include a link <a href={pdf_privacyPolicies_en}>to the PDF!</a></p>
          </object>
        }

        {
          props.modalDuck.typeModal === "legalNotes" &&
          < object
            data={t("modal.doc_lang") === "doc_it" ? pdf_legalNotes_it : pdf_legalNotes_en}
            type="application/pdf"
            width="100%"
            height="100%">
            <p>Alternative text - include a link <a href={pdf_legalNotes_en}>to the PDF!</a></p>
          </object>
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