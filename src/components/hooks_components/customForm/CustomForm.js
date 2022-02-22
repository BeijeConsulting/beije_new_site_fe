import React from "react";

// MUI
import { Grid, Box } from "@mui/material";

// Style
import "./CustomForm.css";

const CustomForm = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={4}>
        <Box >
          <p>ITEM 1</p>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box >
          <p>ITEM 1</p>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CustomForm 