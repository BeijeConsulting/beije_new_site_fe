import React from "react";

// MUI
import { Box, Grid, Link } from '@mui/material';

// style
import './CustomFooter.css'

// Constants
import { logo_primary_light } from "../../../utils/properties";

// Components
import SwitchLang from "../switchLang/SwitchLang"
import SocialLinks from "../../functional_components/socialLinks/SocialLinks";

const CustomFooter = () => {
  return (

    <Box
      className="footer-section"
    >
      {/* <Grid
        container
        spacing={5}
        className="footer-section-grid-container"
      >
        <Grid item xs={12} sm={4}>
          <Box>
            <SwitchLang />
          </Box>
          <Box>
            <Link href={"/"}>
              Support
            </Link >
          </Box>
          <Box>
            <Link href={"/"}>
              Privicy
            </Link >
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box>
            <Link href={"/"}>
              Contact
            </Link >
          </Box>
          <Box>
            <Link href={"/"}>
              Support
            </Link >
          </Box>
          <Box>
            <Link href={"/"}>
              Privicy
            </Link >
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box>
            <SwitchLang />
          </Box>
          <Box>
            <Link href={"/"}>
              Support
            </Link >
          </Box>
          <Box>
            <Link href={"/"}>
              Privicy
            </Link >
          </Box>
        </Grid>

      </Grid> */}

      {/* First Row - lang and logo */}
      <div
        className={"footer-logo-lang d-flex footer-padding-elements"}
      >
        <div>
          <img src={logo_primary_light} alt="Logo Beije People First" className="footer-container-logo" />
        </div>
        <div>
          <SwitchLang />
        </div>
      </div>


      <div
        className={"footer-info-policies d-flex footer-padding-elements"}
      >
        {/* Info */}
        <div className={"footer-info d-flex"}>
          <div>
            <p>Dove siamo</p>
            <p>Via Varese, 27/38</p>
            <p>Lissone (MB)</p>
          </div>
          <div>
            <p>Contattaci</p>
            <p>job@beije.it</p>
            <p>commerciale@beije.it</p>
          </div>
        </div>

        {/* Privacy policies only desktop*/}
        <div
          className={"footer-policies-desktop"}
        >
          <p>PRIVACY AND COOKIE POLICY </p>
          <p>NOTE LEGALI</p>
        </div>

        <div
          className={"footer-social-mobile"}
        >
          <SocialLinks />
        </div>
      </div>

      <div
        className={"footer-vatNumber-social d-flex footer-padding-elements"}
      >
        {/* Privacy policies only mobile */}
        <div
          className={"footer-policies-mobile"}
        >
          <span>PRIVACY AND COOKIE POLICY</span>
          <span> | </span>
          <span>NOTE LEGALI</span>
        </div>

        {/* Vat number and social only desktop */}
        <div
          className={"footer-vatNumber-desktop"}
        >
          <p>Beije è un marchio di People First Srl - Partita IVA 16334941008</p>
        </div>
        <div
          className={"footer-social-desktop"}
        >
          <SocialLinks />
        </div>
      </div>
    </Box>
    // <div className="footer-section">
    //   <p>Questo è il footer</p>
    // </div>
  )
}

export default CustomFooter