import React from "react";

// MUI
import { Grid, Box, TextField, TextareaAutosize, FormControlLabel, Checkbox } from "@mui/material";

// Style
import "./CustomForm.css";
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

const CustomForm = (props) => {
  return (
    <Grid
      container
      spacing={2}
      className={props.classNameContainer}
    >
      <Grid
        item
        xs={12}
      >
        <Box
          className={props.classNameTitleContainer}
        >
          <h2>
            Contatti
          </h2>
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        md={4}
      >
        <Box
          className={props.classNameInfoContainer}
        >
          <p>Dove siamo</p>
          <p>Via Varese, 27/38</p>
          <p>Lissone (MB)</p>

          <p>Contattaci</p>
          <p>job@beije.it</p>
          <p>commerciale@beije.it</p>

        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
      >
        <Box >
          <form>

            {/* Nome */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                className="form-field"
                size="normal"
              />
            </Grid>

            {/* Cognome */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id="standard-basic"
                label="Cognome"
                variant="standard"
                className="form-field"
                size="normal"
              />
            </Grid>

            {/* Email e città */}
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={6}
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  className="form-field"
                  size="normal"
                />
              </Grid>
              <Grid
                item
                xs={6}
              >
                <TextField
                  id="standard-basic"
                  label="Città"
                  variant="standard"
                  className="form-field"
                  size="normal"
                />
              </Grid>
            </Grid>

            {/* Text area */}
            <Grid
              item
              xs={12}
            >
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                className={"form-field form-text-area"}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControlLabel control={<Checkbox />} label="Ho letto e accetto il trattamento dei miei dati personali" />
            </Grid>

            <Grid
              item
              xs={12}
              className={"form-submit-btn-container"}
            >
              <CustomButton
                type={"btn-form-primary"}
                content={"Invia"}
              />
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

CustomForm.defaultProps = {
  classNameContainer: "form-container",
  classNameTitleContainer: "form-title-container",
  classNameInfoContainer: "form-info-container"
}

export default CustomForm 