import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as yup from 'yup';

// Redux
import { connect } from "react-redux";

// Api
import ApiCalls from "../../../services/api/ApiCalls";

// MUI
import { Grid, Box, TextField, TextareaAutosize, FormControlLabel, Checkbox, CircularProgress, Snackbar, Alert } from "@mui/material";

// Style
import "./CustomForm.css";

// Constants and functions
import { googleReCaptchaKey } from "../../../utils/properties";
import { toBase64, setGaEvent } from "../../../utils/utilities";

// Components
import CustomButton from "../../functional_components/ui/customButton/CustomButton";
import CustomModal from "../customModal/CustomModal";
import PrivacyPolicies from "../../functional_components/privacyPolicies/PrivacyPolicies";

const CustomForm = (props) => {
  const { t } = useTranslation();

  const uploadedFile = useRef();

  const [state, setState] = useState({
    captchaCheck: false,
    captcha: undefined,
    captchaValue: '',
    fileName: t("form.messageCv"),
    base64Value: null,
    btnLoading: false,
    toastShow: false,
    modalIsOpen: false,
    toastState: null,
    value_cv: ''
  });

  const reCaptchaChange = (value) => {
    let captchaCheck = false;
    if (value !== null) {
      captchaCheck = true;
    }
    setState(prevState => ({
      ...prevState,
      captchaCheck,
      captchaValue: value
    }));
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
    number: yup
      .number(t("form.errorMessage.numberInvalid")),
    // message: yup
    //   .string('Enter your name'),
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
      number: '',
      fileName: t("form.messageCv"),
      message: '',
      agreement: false
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      formikContacts.resetForm();
      state.captcha.reset();
      setGaEvent({ category: `Mail subject: ${props.titlePage}`, action: "send form" });
      sendDataForm(values);
    }
  });

  const sendDataForm = async (values) => {
    setState({
      ...state,
      btnLoading: true
    })
    const formData = {
      captcha: state.captchaValue,
      surname: values.surname,
      cv: state.base64Value,
      cv_name: state.fileName === "Nessun file selezionato" ? null : state.fileName,
      email: values.email,
      lang: "it",
      message: values.message,
      name: values.name,
      origin: location.href,
      mail_subject: props.titlePage,
      phone: values.number,
      privacy_check: values.agreement
    }
    let responseForm = await ApiCalls.form_sendForm(formData);

    let toastShow = false;
    let toastState = null

    if (responseForm.success) {
      toastShow = true
      toastState = "success"
    }
    else {
      toastState = "error"
    }

    setState({
      ...state,
      btnLoading: false,
      toastShow: true,
      toastState: toastState
    })
  }

  const handleCloseToast = () => {
    setState({
      ...state,
      toastShow: false
    })
  }

  const openModal = () => {
    setState({
      ...state,
      modalIsOpen: true,
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modalIsOpen: false,
    })
  }

  const uploadFile = async () => {
    const file = uploadedFile.current.files[0]

    let msg_error_cv = null
    let value_cv = uploadedFile.current.value

    if (file.size > 5000000) {
      msg_error_cv = t("form.messageCv_errorSize")
      value_cv = ''
    }
    else if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword"].includes(file.type)) {
      msg_error_cv = t("form.messageCv_errorType")
      value_cv = ''
    }
    const file_base64 = await toBase64(file);

    setState(prevState => ({
      ...prevState,
      fileName: msg_error_cv === null ? file.name : msg_error_cv,
      base64Value: file_base64,
      value_cv: value_cv
    }));
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
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            open={state.toastShow}
            autoHideDuration={6000}
          >
            <Alert onClose={handleCloseToast} severity={state.toastState} sx={{ width: '100%' }}>
              <span>
                {state.toastState === "success" ? t("form.toastMessage.success.txt1") : t("form.toastMessage.error.txt1")}
                <br />
                {state.toastState === "success" ? t("form.toastMessage.success.txt2") : t("form.toastMessage.error.txt2")}
              </span>
            </Alert>
          </Snackbar>
          <form>

            {/* Nome */}
            <Grid
              item
              xs={12}
            >
              <p
                className="form-string-required-fields"
              >
                {t("form.infoFields")}</p>
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

            {/* Email e citt?? */}
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
                  id="number"
                  name="number"
                  label={t("form.placeholder.number")}
                  type="number"
                  value={formikContacts.values.number}
                  error={formikContacts.touched.number && Boolean(formikContacts.errors.number)}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}

                  variant="standard"
                  size="normal"
                  className="form-field"
                />
              </Grid>

              {/* {!props.cvForm &&
                <Grid
                  item
                  xs={3}
                >
                  <TextField
                    id="town"
                    name="town"
                    label={t("form.placeholder.town")}
                    type="text"
                    value={formikContacts.values.town}
                    error={formikContacts.touched.town && Boolean(formikContacts.errors.town)}
                    onChange={formikContacts.handleChange}
                    onBlur={formikContacts.handleBlur}

                    variant="standard"
                    size="normal"
                    className="form-field"
                  />
                </Grid>
              } */}

            </Grid>

            {/* Text area */}
            {!props.cvForm &&
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
                  // error={formikContacts.touched.message && Boolean(formikContacts.errors.message)}
                  onChange={formikContacts.handleChange}
                  onBlur={formikContacts.handleBlur}

                  variant="standard"
                  size="normal"
                  className="form-field form-text-area"
                />
              </Grid>
            }
            {props.cvForm &&
              <Grid
                item
                xs={12}
                className="form-upload-cv"
              >
                <input
                  ref={uploadedFile}
                  accept={"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword"}
                  type="file"
                  id="uploadCV"
                  name="uploadCV"
                  hidden
                  onChange={uploadFile}
                />
                <label
                  htmlFor="uploadCV"
                  className="button-form-primary cursor-pointer"
                >{t("btn.attachCv")}</label>
                <span id="file-chosen">
                  {state.fileName}
                </span>
              </Grid>
            }

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
                      onClick={openModal}
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
                className="form-field"
              />
              <div
                className="form-agreement-helperText"
              >
                {formikContacts.touched.agreement && formikContacts.errors.agreement}
              </div>

              <CustomModal
                stateModal={state.modalIsOpen}
                callbackClose={closeModal}
                modalTitle={t("footer.privacyPolicies")}
              >
                <PrivacyPolicies />
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
              className={"form-submit-btn-container position-relative"}
            >
              <CustomButton
                type={"btn-form-primary"}
                content={state.btnLoading ? <CircularProgress size={24} /> : t("btn.send")}
                callback={formikContacts.submitForm}
                disabled={!(state.captchaCheck && formikContacts.isValid && formikContacts.dirty && state.value_cv)}
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
  classNameInfoContainer: "form-info-container",
  cvForm: false
}

export default connect()(CustomForm)