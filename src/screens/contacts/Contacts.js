import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container, Grid } from "@mui/material";

// Style
import "./Contacts.css";

// Constants
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import SocialLinks from "../../components/functional_components/socialLinks/SocialLinks";
import CustomForm from "../../components/hooks_components/customForm/CustomForm";

const Contacts = (props) => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("contacts"));
    props.dispatch(setVisibilityNavbar(true));

    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])


  return (
    <Box
      className={"bg-dark-grey margin-top-container-screens"}
    >
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"contacts-first-section-container paddingX-container-general-pages"}
      >

        <h1>Contatti</h1>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            className={"contacts-info-external-container"}
          >
            <Box
              className={"contacts-info-container"}
            >
              <p>{t("contactInfo.location")}</p>
              <p>Via Varese, 27/38</p>
              <p>Lissone (MB)</p>

              <p>{t("contactInfo.contact")}</p>
              <p>job@beije.it</p>
              <p>commerciale@beije.it</p>
            </Box>

            <Box
              className={"contacts-links-container"}
            >
              <CustomButton
                type={"btn-form-primary"}
                content={"Contattaci"}
              />
              <SocialLinks
              classNameSocialContainer={"contacts-socials-container"}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={"contacts-map-container"}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.0225292376213!2d9.231592751500617!3d45.61019123160779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b9a1b81342db%3A0x10fa075f2e281289!2sBeije!5e0!3m2!1sit!2sit!4v1647341464190!5m2!1sit!2sit"

              width="100%"
              height="100%"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
            />
          </Grid>

        </Grid>

      </Container>

      {/* <Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages"}
      >

        <Box>
          <CustomForm
            formTitle={t("consulting.contactFormTitle")}
          />
        </Box>
      </Container> */}
    </Box>
  )
}

export default connect()(Contacts)