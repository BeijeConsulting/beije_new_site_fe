import React from 'react';
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

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
    <>
      {!props.burgerMenuDuck.menuOpen &&
        <nav className={switchClassName()}>

          <NavLink
            to="beije-consulting"
          >
            Consulting
            {
              props.currentPageDuck.currentPage === "consulting" &&
              <div className="navbarTop-hightlight navbarTop-hightlight-consulting"></div>
            }
          </NavLink>

          <NavLink
            to="beije-talent-academy"
          >
            People First Talent Academy
            {
              props.currentPageDuck.currentPage === "academy" &&
              <div className="navbarTop-hightlight navbarTop-hightlight-academy"></div>
            }
          </NavLink>

          <NavLink
            to="beije-up"
          >
            Up
            {
              props.currentPageDuck.currentPage === "up" &&
              <div className="navbarTop-hightlight navbarTop-hightlight-up"></div>
            }
          </NavLink>

        </nav>
      }
    </>
  )
}

CustomNavbar.defaultProps = {
  // activeClassName: "navbar-active-links",
  // notActiveClassName: "navbar-not-active-links"
}

const mapStateToProps = state => (
  {
    currentPageDuck: state.currentPageDuck,
    burgerMenuDuck: state.burgerMenuDuck
  }
)


export default connect(mapStateToProps)(CustomNavbar)