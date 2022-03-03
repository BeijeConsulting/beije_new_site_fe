import React from "react";

// MUI
import Carousel from 'react-material-ui-carousel';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import "./SimpleCarousel.css";

// Constants
import { leftArrow, rightArrow } from "../../../utils/properties";

const SimpleCarousel = (props) => {

  // simple carousel for comments
  const printComments = (item, key) => {
    return (
      <div
        key={key}
        className="simple-carousel-content-container"
      >
        <p>{item?.content}</p>
        <p><i>{item?.name}</i></p>
        <p><i>{item?.surname}</i></p>
      </div>
    )
  }


  return (
    <Carousel
      NextIcon={<FontAwesomeIcon icon={rightArrow} />}
      PrevIcon={<FontAwesomeIcon icon={leftArrow} />}
      navButtonsAlwaysVisible
      indicators={false}
      className={"simple-carousel-container"}
    >
      {
        props.obj.map(printComments)
      }
    </Carousel>
  )
}

export default SimpleCarousel