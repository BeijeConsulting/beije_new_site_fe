import React, { useEffect, useRef } from "react";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container } from "@mui/material";

// styles
import './DetailAcademy.css'

// Components
import IntroSectionTxtInfoGraphic from "../../components/functional_components/introSections/introSectionTxtInfoGraphic/IntroSectionTxtInfoGraphic";
import CustomAccordion from "../../components/functional_components/customAccordion/CustomAccordion";

const TalentAcademy = (props) => {

  const secondContainerRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.dispatch(setCurrentPage("academy"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  const scrollToSection = () => {
    let elementTop = secondContainerRef.current.offsetTop;
    window.scrollTo({
      top: elementTop,
      left: 0,
      behavior: 'smooth'
    });
  }


  return (

    <Box
      className={"bg-dark-grey margin-top-container-screens"}
      style={{ height: "3000px" }}
    >

      {/* First section Img + text*/}
      < Container
        component={"section"}
        maxWidth={"false"}
        className={"paddingX-container-general-pages"}
      >

        <IntroSectionTxtInfoGraphic
          typeSection="academy"
          sectionName="Beije talent academy"
          sectionTitle="Academy backend"
          callback={scrollToSection}
          paragraph1Txt={"3 mesi di crescita professionale Formazione costante attraverso progetti individuali e di gruppo Utilizzo delle tecnologie più richieste dal mercato."}
        >

        </IntroSectionTxtInfoGraphic>
      </Container>
      <div
        className="bg-dark-grey position-relative"
        ref={secondContainerRef}
      >
        < Container
          component={"section"}
          maxWidth={"false"}
          className={"detail-academy-second-section paddingX-container-general-pages"}
        >
          <h2>Programma</h2>
          <CustomAccordion />
        </Container>
      </div>
    </Box>

  )
}

export default connect()(TalentAcademy)