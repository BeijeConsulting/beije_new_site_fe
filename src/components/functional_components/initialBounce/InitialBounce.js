import React from "react";
import './InitialBounce.css';

const InitialBounce = (props) => {
  return (<div className={`container-bounce ${!props.showBounce && 'hidden'}`}>
    <div className="bounce">
      <div className="bounce-in"></div>
    </div>
  </div>)
}

export default InitialBounce;