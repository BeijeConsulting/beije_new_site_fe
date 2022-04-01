import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// redux
import { connect } from "react-redux";
import { setMenu, initMenu } from "../../../redux/ducks/burgerMenuDuck";

// MUI
import { Box, IconButton } from "@mui/material";

// Style
import "./BurgerMenu.css";

// Constants
import { menu_voices } from "../../../utils/properties";

// Components
import SocialLinks from "../../functional_components/socialLinks/SocialLinks";

const BurgerMenu = (props) => {

  const { t } = useTranslation();

  const [state, setState] = useState({
    openMenu: undefined,
    stateLink: false,
    idElement: null,
    firstClick: false
  })

  const handleOpenNavMenu = () => {
    if (!state.openMenu) {
      props.dispatch(setMenu(true))
    }
    else {
      props.dispatch(initMenu())
    }

    setState({
      ...state,
      openMenu: !state.openMenu,
      firstClick: true
    });
  };


  const printMenuLinks = (item, key) => {
    return (
      <Link
        key={key}
        to={item.link_to}
        onClick={handleOpenNavMenu}
        className={"burgerMenu-links-voices titles-level3"}
        onMouseEnter={mouseOver(key, item.key_link)}
        onMouseLeave={mouseLeave(key, item.key_link)}
      >
        {t("burgerMenu." + item.name)}
      </Link>
    )
  }

  const mouseOver = (val, val2) => () => {
    setState({
      ...state,
      stateLink: true,
      idElement: val,
      keyElement: val2
    })
  }

  const mouseLeave = (val, val2) => () => {
    setState({
      ...state,
      stateLink: false,
      idElement: val,
      keyElement: val2
    })
  }

  const switchBgMenu = () => {
    let className = "burgerMenu-nav-container burgerMenu-nav-container-img"
    switch (state.keyElement) {
      case "consulting":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-consulting"
        break
      case "academy":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-academy"
        break
      case "up":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-up"
        break
      case "career":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-career"
        break
      case "contacts":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-contacts"
        break
      case "blog":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-blog"
        break
      case "focusAcademy":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-focusAcademy"
        break
      case "community":
        className = "burgerMenu-nav-container burgerMenu-nav-container-img burgerMenu-community"
        break
      default:
        break
    }
    return className
  }

  return (
    <Box>
      <IconButton
        size="large"
        // aria-label="burger-menu"
        // aria-controls="menu-appbar"
        type="button"
        onClick={handleOpenNavMenu}
        color="inherit"
        className="burgerMenu-iconButton"
      >
        <div
          className={state.openMenu ? "burgerMenu-icon-close-container" : "burgerMenu-icon-open-container"}
          onToggle={handleOpenNavMenu}
        >
          <div />
          <div />
          <div />
        </div>
      </IconButton>

      {/* Background menu */}
      {state.firstClick &&
        <div className={state.openMenu ? "burgerMenu-background" : "burgerMenu-background-reverse"} />
      }

      {
        state.openMenu &&
        <nav
          className={state.stateLink ? switchBgMenu() : "burgerMenu-nav-container"}
          role="navigation">
          <Box className="d-flex flex-column justify-around burgerMenu-nav-links-container">
            {menu_voices?.map(printMenuLinks)}
            <SocialLinks
              classNameSocialContainer={"burgerMenu-social-container"}
            />
          </Box>
        </nav>
      }
    </Box >
  )
}

export default connect()(BurgerMenu)