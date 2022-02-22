import React, { useEffect, useRef, useState } from "react";

// Gsap
import gsap from "gsap";

// Style
import "./CustomCarousel.css";

// Constants
import { carouselProfile, list_images } from "../../../utils/properties"

const CustomCarousel = (props) => {
  const [state, setState] = useState({
    startMoving: false
  })

  let xPos = 0;
  const ref = useRef(null)

  const printCarousel = (item, key) => {
    return (
      <div
        key={key}
        className={`${item.pictureClassName} carousel-img`}
      >
      </div>
    )
  }
  useEffect(() => {
    const element = ref.current;

    const ringContainer = element.querySelector(".carousel-ring-container");
    const ring = element.querySelector(".carousel-ring");
    const imgContainer = element.querySelectorAll(".carousel-img");

    gsap.timeline()
      .set('.carousel-ring', { rotationY: 180, cursor: 'grab' })
      .set('.carousel-img', { // apply transform rotations to each image
        rotateY: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden'
      })
      .from('.carousel-img', {
        duration: 1.5,
        y: 200,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo'
      })

  }, [])



  const dragStart = (e) => {
    console.log("Drag Start");
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.carousel-ring', { cursor: 'grabbing' })
    setState({
      ...state,
      startMoving: true
    })
  }

  const drag = (e) => {
    console.log("Drag");

    if (e.touches) e.clientX = e.touches[0].clientX;
    gsap.to('.carousel-ring', {
      rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => { gsap.set('.carousel-img', { backgroundPosition: (i) => getBgPos(i) }) }
    });

    xPos = Math.round(e.clientX);
  }

  const dragEnd = () => {
    console.log("Drag end");
    gsap.set('.carousel-ring', { cursor: 'grab' });

    setState({
      ...state,
      startMoving: false
    })
  }

  const getBgPos = (i) => () => {
    return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.carousel-ring', 'rotationY') - 180 - i * 36) / 360 * 500) + 'px 0px';
  }

  return (
    <div
      className={"carousel-container"}
      onMouseDown={dragStart}
      onTouchStart={dragStart}
      onMouseMove={state.startMoving ? drag : null}
      onTouchMove={state.startMoving ? drag : null}
      onMouseUp={dragEnd}
      onTouchEnd={dragEnd}
      ref={ref}
    >
      <div className={"carousel-ring-container"}>
        <div className={"carousel-ring"}>
          {carouselProfile.map(printCarousel)}
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel