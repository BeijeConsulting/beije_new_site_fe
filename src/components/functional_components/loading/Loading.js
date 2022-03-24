import React from "react";

// Style
import "./Loading.css";

const Loading = (props) => {
  return (
    <div className={props.className}>
      <div className="loading-text">
        <span className={props.classNameSingleWords}>B</span>
        <span className={props.classNameSingleWords}>E</span>
        <span className={props.classNameSingleWords}>I</span>
        <span className={props.classNameSingleWords}>J</span>
        <span className={props.classNameSingleWords}>E &nbsp;</span>
        <span className={props.classNameSingleWords}>P</span>
        <span className={props.classNameSingleWords}>E</span>
        <span className={props.classNameSingleWords}>O</span>
        <span className={props.classNameSingleWords}>P</span>
        <span className={props.classNameSingleWords}>L</span>
        <span className={props.classNameSingleWords}>E &nbsp;</span>
        <span className={props.classNameSingleWords}>F</span>
        <span className={props.classNameSingleWords}>I</span>
        <span className={props.classNameSingleWords}>R</span>
        <span className={props.classNameSingleWords}>S</span>
        <span className={props.classNameSingleWords}>T</span>
      </div>
    </div>
  )
}

export default Loading