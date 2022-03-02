import React from "react";

// MUI
import Carousel from 'react-material-ui-carousel';


// Style
import "./SimpleCarousel.css";

const SimpleCarousel = (props) => {

  const printItems = (item, key) => {
    return (
      <div
        key={key}
      >
      </div>
    )
  }

  return (
    <Carousel>
      {
        items.map(printItems)
      }
    </Carousel>
  )
}

export default SimpleCarousel