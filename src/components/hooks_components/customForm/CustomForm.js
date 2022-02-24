import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as yup from 'yup';

// MUI
import { Grid, Box, TextField, TextareaAutosize, FormControlLabel, Checkbox } from "@mui/material";

// Style
import "./CustomForm.css";

// Constants
import { googleReCaptchaKey } from "../../../utils/properties";

// Components
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

const CustomForm = (props) => {

  const [state, setState] = useState({
    captchaCheck: false,
    captcha: undefined,
    captchaValue: ''
  });

  const reCaptchaChange = (value) => {
    let captchaCheck = false;
    if (value !== null) {
      captchaCheck = true;
    }
    setState({
      ...state,
      captchaCheck,
      captchaValue: value,
      openModal: false
    });
  }

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
    surname: yup
      .string('Enter your name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    town: yup
      .string('Enter your name')
      .required('Name is required'),
    message: yup
      .string('Enter your name'),
    agreement: yup
      .boolean()
      .oneOf([true], "Term and condition must be accepted")
      .required("Term and condition must be accepted"),
  });

  const formikContacts = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      town: '',
      message: '',
      agreement: false
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log('Send Form', props.origin, values, state.captchaValue);
      formikContacts.resetForm();
      state.captcha.reset();
    }
  });


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
        className={props.classNameInfoColumn}
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
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formikContacts.values.name}
                error={formikContacts.touched.name && Boolean(formikContacts.errors.name)}
                helperText={formikContacts.touched.name && formikContacts.errors.name}
                onChange={formikContacts.handleChange}
                onBlur={formikContacts.handleBlur}

                variant="standard"
                size="normal"
                className="form-field"
              />
            </Grid>

            {/* Cognome */}
            <Grid
              item
              xs={12}
            >
              <TextField
                id="surname"
                name="surname"
                label="Surname"
                type="text"
                value={formikContacts.values.surname}
                error={formikContacts.touched.surname && Boolean(formikContacts.errors.surname)}
                helperText={formikContacts.touched.surname && formikContacts.errors.surname}
                onChange={formikContacts.handleChange}
                onBlur={formikContacts.handleBlur}

                variant="standard"
                size="normal"
                className="form-field"
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
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formikContacts.values.email}
                  error={formikContacts.touched.email && Boolean(formikContacts.errors.email)}
                  helperText={formikContacts.touched.email && formikContacts.errors.email}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}

                  variant="standard"
                  size="normal"
                  className="form-field"
                />
              </Grid>
              <Grid
                item
                xs={6}
              >
                <TextField
                  id="town"
                  name="town"
                  label="Town"
                  type="text"
                  value={formikContacts.values.town}
                  error={formikContacts.touched.town && Boolean(formikContacts.errors.town)}
                  helperText={formikContacts.touched.town && formikContacts.errors.town}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}

                  variant="standard"
                  size="normal"
                  className="form-field"
                />
              </Grid>
            </Grid>

            {/* Text area */}
            <Grid
              item
              xs={12}
            >
              <TextareaAutosize
                id="message"
                name="message"
                label="Message"
                type="text"
                placeholder="Write here your message"
                value={formikContacts.values.message}
                error={formikContacts.touched.message && Boolean(formikContacts.errors.message)}
                helperText={formikContacts.touched.message && formikContacts.errors.message}
                onChange={formikContacts.handleChange}
                onBlur={formikContacts.handleBlur}

                variant="standard"
                size="normal"
                className="form-field form-text-area"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormControlLabel
                label="Ho letto e accetto il trattamento dei miei dati personali"
                control={
                  <Checkbox
                    id="agreement"
                    name="agreement"
                    value={formikContacts.values.agreement}
                    checked={formikContacts.values.agreement}
                    error={formikContacts.touched.agreement && Boolean(formikContacts.errors.agreement)}
                    helperText={formikContacts.touched.agreement && formikContacts.errors.agreement}
                    // onChange={formikContacts.handleChange("agreement")}
                    // onBlur={(e) => formikContacts.handleBlur(e)}
                    onChange={formikContacts.handleChange}
                    onBlur={formikContacts.handleBlur}
                  />}
                className="form-field"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <ReCAPTCHA
                ref={e => (state.captcha = e)}
                sitekey={googleReCaptchaKey}
                onChange={reCaptchaChange}
              />
            </Grid>

            <Grid
              item
              xs={12}
              className={"form-submit-btn-container"}
            >
              <CustomButton
                type={"btn-form-primary"}
                content={"Invia"}
                callback={formikContacts.submitForm}
                disabled={!(state.captchaCheck && formikContacts.isValid && formikContacts.dirty)}
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
  classNameInfoColumn: "form-info-container-column",
  classNameInfoContainer: "form-info-container"
}

export default CustomForm 