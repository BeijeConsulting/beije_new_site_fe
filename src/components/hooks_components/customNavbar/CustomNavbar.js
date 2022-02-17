import React from 'react';
import { NavLink } from 'react-router-dom';

// Style
import "./CustomNavbar.css";

const CustomNavbar = (props) => {

  const switchClassName = () => {
    let currentClassName = null;
    switch (props.type) {
      case "home-navbar":
        currentClassName = "navbar-container-secondary"
        break;
      default:
        currentClassName = "navbar-container"
        break;
    }
    return currentClassName;
  }

  return (
    <nav className={switchClassName()}>

      <NavLink
        to="/test"
      // className={switchClassName}
      // className={({ isActive }) =>
      //   isActive ? props.activeClassName : props.notActiveClassName
      // }
      >
        Beije Consulting
      </NavLink>

      <NavLink
        to=""
      // className={switchClassName}
      // className={({ isActive }) =>
      //   isActive ? props.activeClassName : props.notActiveClassName
      // }
      >
        Beije Up
      </NavLink>

      <NavLink
        to=""
      // className={switchClassName}
      // className={({ isActive }) =>
      //   isActive ? props.activeClassName : props.notActiveClassName
      // }
      >
        Beije Talent Academy
      </NavLink>

    </nav>
  )
}

CustomNavbar.defaultProps = {
  // activeClassName: "navbar-active-links",
  // notActiveClassName: "navbar-not-active-links"
}

export default CustomNavbar