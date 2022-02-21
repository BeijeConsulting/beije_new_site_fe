import React from "react";

// MUI
import { Box, Grid, Link } from '@mui/material';

// style
import './CustomFooter.css'

// Components
import SwitchLang from "../switchLang/SwitchLang"

const CustomFooter = () => {
  return (

    <Box className="footer-section">
      <Grid container spacing={5}>
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

      </Grid>
    </Box>
    // <div className="footer-section">
    //   <p>Questo è il footer</p>
    // </div>
  )
}

export default CustomFooter