import React, { useEffect, useState } from "react";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// MUI
import { Box, Container, Divider } from "@mui/material";

// Style
import "./Career.css";

// Components
import CustomTable from "../../components/functional_components/customTable/CustomTable";
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";

const Career = (props) => {

  const [state, setState] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.dispatch(setCurrentPage("career"));
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
        className={"career-first-section paddingX-container-general-pages"}
      >
        <h1>Career</h1>
        <p
          className="career-first-section-description"
        >
          Lorem ipsum dolor sit amet. Aut impedit totam ut consequuntur earum qui quis neque quo sint labore et sapiente dignissimos. In unde perferendis a internos sit expedita deserunt et quibusdam obcaecati est voluptatem sapiente.</p>
        <Box
          className="career-first-section-button-container"
        >
          <CustomButton
            type={"filter-btn"}
            content={"Academy"}
          />
          <CustomButton
            type={"filter-btn"}
            content={"Job Opportunities"}
          />
        </Box>
      </Container>
      <Divider
        className={"divider"}
      />
      <Container
        component={"section"}
        maxWidth={"false"}
        className={"career-second-section paddingX-container-general-pages"}
      >
        <h3>Posizioni aperte</h3>
        <CustomTable
          careerTable={true}
        />
      </Container>
    </Box>
  )
}

export default connect()(Career)