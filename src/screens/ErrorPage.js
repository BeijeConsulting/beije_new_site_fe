import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Style
import "./NoMatch.scss";

// Assets
import error_generic from "../assets/images/errorGeneric.svg"

// MUI
import { Box, Container } from "@mui/material";
import CustomLink from "../components/functional_components/ui/customLink/CustomLink";


const ErrorPage = (props) => {

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("noMatch"));
    props.dispatch(setVisibilityNavbar(false));

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])


  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >

      {/* First section Img + text*/}
      < Container
        component={"section"}
        maxWidth={"false"}
        className={"noMatch-container paddingX-container-general-pages"}
      >

        <Box
          className={"noMatch-mobile-img-container"}
        >
          <img
            alt="Error"
            src={error_generic}
          />
        </Box>

        <Box
          className={"noMatch-txt-container"}

        >
          <p className="h1">
            {t("errorGeneric.shortMessage")}

          </p>
          <p>
            {t("errorGeneric.longMessage")}
          </p>

          <CustomLink
            linkTo="/"
            content={t("errorGeneric.linkToHome")}
          />
        </Box>

        <Box
          className={"noMatch-desktop-img-container"}
        >
          <img
            alt="404 error page not found"
            src={error_generic}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default connect()(ErrorPage);