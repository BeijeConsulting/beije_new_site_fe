import React from 'react';
import { NavLink } from 'react-router-dom';

// Style
import "./CustomNavbar.css";

const CustomNavbar = (props) => {
  return (
    <nav className="navbar-container">

      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? props.activeClassName : props.notActiveClassName
        }
      >
        Beije Consulting
      </NavLink>

      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? props.activeClassName : props.notActiveClassName
        }
      >
        Beije Talent Academy
      </NavLink>

      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? props.activeClassName : props.notActiveClassName
        }
      >
        Beije Up
      </NavLink>

    </nav>
  )
}

CustomNavbar.defaultProps = {
  activeClassName: "navbar-active-links",
  notActiveClassName: "navbar-not-active-links"
}

export default CustomNavbar