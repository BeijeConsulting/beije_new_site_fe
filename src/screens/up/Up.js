import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";

// MUI
import { Box, Container } from "@mui/material";

// Style
import "./Up.css";

// Components
import IntroSectionImgTxt from "../../components/functional_components/introSectionImgTxt/IntroSectionImgTxt";

const Up = (props) => {

  useEffect(() => {
    props.dispatch(setCurrentPage("up"));
    props.dispatch(setVisibilityNavbar(true));
    return () => {
      props.dispatch(initCurrentPage());
      props.dispatch(initVisibilityNavbar());
    };
  }, [])

  return (
    <Box>

      <Box
        className={"bg-dark-grey bottom-oblique-line"}
        style={{ height: "1000px", marginTop: props.heightHeaderDuck.heightHeader + 10 }}
      >

        {/* First section */}
        <Container
          component={"section"}
          maxWidth={"false"}
          className={"padding-0"}
        >
          <IntroSectionImgTxt
            classNameBgImgDesktop="intro-section-img-up"
            classNameBgImgMobile="intro-section-img-up"
          >
            <div>
              <p>BEIJE UP</p>
              <h1>La nostra software factory</h1>
              <p>Lavoriamo con dedizione al fianco dei nostri clienti.<br />
                Realizziamo progetti partendo dall’analisi tecnica frontend / backend, realizzazione mockup fino all’implementazione del software attraverso le tecnologie presenti sul mercato.
              </p>
              <div>
                <p>PROGETTAZIONE</p>
                <p>IMPLEMENTAZIONE</p>
                <p>DELIVERY</p>
                <p>INTEGRATION SOFTWARE</p>
                <p>APPLICATION MAINTENACE</p>
              </div>
            </div>
          </IntroSectionImgTxt>

        </Container>

      </Box>

    </Box >
  )
}

const mapStateToProps = state => (
  {
    heightHeaderDuck: state.heightHeaderDuck
  }
)

export default connect(mapStateToProps)(Up)