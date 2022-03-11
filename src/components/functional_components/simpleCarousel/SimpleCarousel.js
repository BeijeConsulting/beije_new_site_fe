import React, { useState, useEffect } from "react";

// MUI
import Carousel from 'react-material-ui-carousel';
import { Box } from "@mui/material";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import "./SimpleCarousel.css";

// Constants
import { leftArrow, rightArrow, quotationMark } from "../../../utils/properties";

const SimpleCarousel = (props) => {

  const [state, setState] = useState({
    isDesktop: window.innerWidth > 768,
  })

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    }
  }, [])

  const updateMedia = () => {
    setState({
      ...state,
      isDesktop: window.innerWidth > 768
    });
  };

  // simple carousel for comments
  const printComments = (item, key) => {
    return (
      <div
        key={key}
        className="simple-carousel-content-container"
      >
        <Box
          className="simple-carousel-content-quotation-marks"
        >
          <img
            alt="Quotation mark icon"
            src={quotationMark}
          />
        </Box>
        <p
          className="simple-carousel-content-txt"
        >
          {item?.content}
        </p>
        <p
          className="simple-carousel-content-sign"
        >
          <i>{item?.name} {item?.surname}</i>
        </p>
      </div>
    )
  }


  return (
    <Carousel
      NextIcon={<FontAwesomeIcon icon={rightArrow} />}
      PrevIcon={<FontAwesomeIcon icon={leftArrow} />}
      navButtonsAlwaysVisible={state.isDesktop ? true : false}
      navButtonsAlwaysInvisible={state.isDesktop ? false : true}
      indicators={state.isDesktop ? false : true}
      className={"simple-carousel-container"}
      autoPlay={false}
      style={{ height: "500px" }}
      cycleNavigation
    >
      {
        props.obj.map(printComments)
      }
    </Carousel>
  )
}

export default SimpleCarousel