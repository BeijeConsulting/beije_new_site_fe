import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as yup from 'yup';

// Redux
import { connect } from "react-redux";
import { setModal, initModal } from "../../../redux/ducks/modalDuck"

// MUI
import { Grid, Box, TextField, TextareaAutosize, FormControlLabel, Checkbox } from "@mui/material";

// Style
import "./CustomForm.css";

// Constants
import { googleReCaptchaKey, privacyPolicies_en, privacyPolicies_it } from "../../../utils/properties";

// Components
import CustomButton from "../../functional_components/ui/customButton/CustomButton";
import CustomModal from "../customModal/CustomModal";

const CustomForm = (props) => {
  const { t } = useTranslation();

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
    });
  }

  const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required(t("form.errorMessage.name")),
    surname: yup
      .string('Enter your name')
      .required(t("form.errorMessage.surname")),
    email: yup
      .string('Enter your email')
      .email(t("form.errorMessage.emailInvalid"))
      .required(t("form.errorMessage.email")),
    town: yup
      .string('Enter your name')
      .required(t("form.errorMessage.town")),
    message: yup
      .string('Enter your name'),
    agreement: yup
      .boolean()
      .oneOf([true], t("form.errorMessage.agreement"))
      .required(t("form.errorMessage.agreement")),
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

  const openModal = (param) => () => {
    props.dispatch(setModal(true, param))
  }

  const closeModal = () => {
    props.dispatch(initModal())
  }


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
            {props.formTitle}
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
          <p>{t("contactInfo.location")}</p>
          <p>Via Varese, 27/38</p>
          <p>Lissone (MB)</p>

          <p>{t("contactInfo.contact")}</p>
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
                label={t("form.placeholder.name")}
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
                label={t("form.placeholder.surname")}
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
                  label={t("form.placeholder.email")}
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
                  label={t("form.placeholder.town")}
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
                type="text"
                placeholder={t("form.placeholder.message")}
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
              className="form-agreement-container"
            >
              <FormControlLabel
                label={
                  <>
                    <span>
                      {t("form.placeholder.agreement.part1")} &nbsp;
                    </span>
                    <span
                      className="form-agreement-link-modal"
                      onClick={openModal("privacyPolicies")}
                    >
                      {t("form.placeholder.agreement.part2")}
                    </span>
                  </>
                }
                control={
                  <Checkbox
                    id="agreement"
                    name="agreement"
                    value={formikContacts.values.agreement}
                    checked={formikContacts.values.agreement}
                    error={formikContacts.touched.agreement && Boolean(formikContacts.errors.agreement)}
                    onChange={formikContacts.handleChange}
                    onBlur={formikContacts.handleBlur}

                    classes={{ checked: 'form-ckeckbox-checked' }}
                  />
                }
                helperText={formikContacts.touched.agreement && formikContacts.errors.agreement}
                className="form-field"
              />
              <div
                className="form-agreement-helperText"
              >
                {formikContacts.touched.agreement && formikContacts.errors.agreement}
              </div>

              <CustomModal
                callbackClose={closeModal}
                modalTitle={t("footer.privacyPolicies")}
              >
                {/* <img
                  modalTitle="Privacy Policy"
                  src={t("modal.doc_lang") === "doc_it" ? privacyPolicies_it : privacyPolicies_en}
                  alt={t("altImages.privacyPolicies")}
                  className="width-100"
                /> */}
              </CustomModal>
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
                content={t("form.btn")}
                callback={formikContacts.submitForm}
              // disabled={!(state.captchaCheck && formikContacts.isValid && formikContacts.dirty)}
              />
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid >
  )
}

CustomForm.defaultProps = {
  classNameContainer: "form-container",
  classNameTitleContainer: "form-title-container",
  classNameInfoColumn: "form-info-container-column",
  classNameInfoContainer: "form-info-container"
}

export default connect()(CustomForm)