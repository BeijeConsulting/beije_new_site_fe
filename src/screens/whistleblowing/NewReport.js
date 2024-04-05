import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from 'yup';

// Style
import './Whistleblowing.css';

// MUI
import { Box, Container, Grid, TextField, CircularProgress, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Select, FormHelperText, MenuItem, InputLabel } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { setToastMessage, initToastMessage } from "../../redux/ducks/toastMessageDuck";
import { connect } from "react-redux";

// API
import ApiCalls from "../../services/api/ApiCalls";

// Constants and functions
import { googleReCaptchaKey } from "../../utils/properties";
import { toBase64 } from "../../utils/utilities";
import { cloneDeep } from "lodash";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import FileUpload from "../../components/functional_components/ui/fileUpload/FileUpload";

const NewReport = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [type, setType] = useState('confidential');
    const [resetFile, setResetFile] = useState(false);
    const [captchaCheck, setCaptchaCheck] = useState(false);
    const [captcha, setCaptcha] = useState(undefined);
    const [captchaValue, setCaptchaValue] = useState('');
    const [btnLoading, setBtnLoading] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        props.dispatch(setCurrentPage("whistleblowing/report/new"));
        props.dispatch(setVisibilityNavbar(true));

        return () => {
            props.dispatch(initCurrentPage());
            props.dispatch(initVisibilityNavbar());
        };
    }, [props.languageDuck.currentLanguage])

    const confidentialValidationSchema = yup.object({
        subject: yup
            .string('Enter your subject')
            .required(t("form.errorMessage.subject")),
        description: yup
            .string('Enter description')
            .required(t("form.errorMessage.description")),
        category: yup
            .string('Enter category')
            .required(t("form.errorMessage.category")),
        name: yup
            .string('Enter your name')
            .required(t("form.errorMessage.name")),
        surname: yup
            .string('Enter your surname')
            .required(t("form.errorMessage.surname")),
    });

    const anonymousValidationSchema = yup.object({
        subject: yup
            .string('Enter your subject')
            .required(t("form.errorMessage.subject")),
        description: yup
            .string('Enter description')
            .required(t("form.errorMessage.description")),
        category: yup
            .string('Enter category')
            .required(t("form.errorMessage.category")),
    });

    const formikReport = useFormik({
        initialValues: {
            subject: '',
            typeReportRadio: 'confidential',
            description: '',
            category: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            file: [],
        },
        validationSchema: type === 'confidential' ? confidentialValidationSchema : anonymousValidationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            formikReport.resetForm();
            captcha.reset();
            sendData(values);
        }
    });

    const sendData = async (values) => {
        console.log(values)

        setBtnLoading(true);

        const formData = {
            captcha: captchaValue,
            mail_subject: values.subject,
            description: values.description,
            category: values.category,
            name: values.name,
            surname: values.surname,
            phone: values.phone,
            email: values.email,
            fileBase64: values.file,
            lang: 'it',
            origin: location.href,
        }

        let responseForm = await ApiCalls.form_sendForm(formData);

        props.dispatch(initToastMessage())

        if (responseForm.success) {
            props.dispatch(setToastMessage(true, 'success'))
        }
        else {
            props.dispatch(setToastMessage(true, 'error'))
        }

        setBtnLoading(false);
        setType('confidential');
        setResetFile(true);
    }

    const handleTypeChange = (event) => {
        formikReport.handleChange(event);
        setType(event.target.value);
    }

    const handleFileChange = (event) => {
        formikReport.setFieldValue("file", event);
    }

    const reCaptchaChange = (value) => {
        let captchaCheck = false;
        if (value !== null) {
            captchaCheck = true;
        }

        setCaptchaCheck(captchaCheck);
        setCaptchaValue(value);
    }

    return (
        <>
            <Helmet>
                <title>{t('helmet.meta_title.whistleblowing')}</title>
            </Helmet>

            <Box
                className={"bg-dark-grey whistleblowing-padding-top"}
            >

                <Container
                    className={"paddingX-container-general-pages whistleblowing-second-section-container d-flex justify-center"}
                    component={"article"}
                >
                    <Box className={"max-width-1200"}>
                        <Box className={"whistleblowing-text-container"}>
                            <h2>
                                {t("whistleblowing.new.title")}
                            </h2>

                            <form className="whistleblowing-form-field">
                                <Grid item xs={12}>
                                    <TextField
                                        id="subject"
                                        name="subject"
                                        label={t("whistleblowing.new.subject")}
                                        type="text"
                                        value={formikReport.values.subject}
                                        error={formikReport.touched.subject && Boolean(formikReport.errors.subject)}
                                        helperText={formikReport.touched.subject && formikReport.errors.subject}
                                        onChange={formikReport.handleChange}
                                        onBlur={formikReport.handleBlur}

                                        variant="standard"
                                        size="normal"
                                        className="form-field"
                                    />
                                </Grid>

                                <FormControl className="form-radiobox-container">
                                    <FormLabel sx={{ color: 'var(--grey-tone-1)' }} id="demo-row-radio-buttons-group-label">{t("whistleblowing.new.reportType")}</FormLabel>
                                    <RadioGroup
                                        row
                                        //aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="typeReportRadio"
                                        value={formikReport.values.typeReportRadio}
                                        onChange={handleTypeChange}
                                    >
                                        <FormControlLabel value="confidential" control={<Radio />} label={t("whistleblowing.new.confidential.label")} />
                                        <FormControlLabel value="anonymous" control={<Radio />} label={t("whistleblowing.new.anonymous.label")} />
                                    </RadioGroup>
                                </FormControl>

                                <Grid item xs={12}>
                                    <TextField
                                        id="description"
                                        name="description"
                                        type="text"
                                        multiline
                                        label={t("whistleblowing.new.description")}
                                        value={formikReport.values.description}
                                        error={formikReport.touched.description && Boolean(formikReport.errors.description)}
                                        helperText={formikReport.touched.description && formikReport.errors.description}
                                        onChange={formikReport.handleChange}
                                        onBlur={formikReport.handleBlur}

                                        variant="standard"
                                        size="normal"
                                        className="form-field"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl
                                        sx={{ marginTop: '20px', minWidth: 613.91 }}
                                        error={formikReport.touched.category && Boolean(formikReport.errors.category)}
                                    >
                                        <InputLabel sx={{ color: 'var(--grey-tone-1)' }}>{t("whistleblowing.new.category")}</InputLabel>
                                        <Select
                                            id="category"
                                            name="category"
                                            value={formikReport.values.category}
                                            label={t("whistleblowing.new.category")}
                                            onChange={formikReport.handleChange}
                                            onBlur={formikReport.handleBlur}

                                            variant="standard"
                                            size="normal"
                                            className="form-field"
                                        >
                                            <MenuItem value={'officeAbuse'}>{t("whistleblowing.new.categoryType.officeAbuse")}</MenuItem>
                                            <MenuItem value={'powerAbuse'}>{t("whistleblowing.new.categoryType.powerAbuse")}</MenuItem>
                                            <MenuItem value={'behavior'}>{t("whistleblowing.new.categoryType.behavior")}</MenuItem>
                                            <MenuItem value={'interest'}>{t("whistleblowing.new.categoryType.interest")}</MenuItem>
                                            <MenuItem value={'corruption'}>{t("whistleblowing.new.categoryType.corruption")}</MenuItem>
                                            <MenuItem value={'rights'}>{t("whistleblowing.new.categoryType.rights")}</MenuItem>
                                            <MenuItem value={'fraud'}>{t("whistleblowing.new.categoryType.fraud")}</MenuItem>
                                            <MenuItem value={'procurement'}>{t("whistleblowing.new.categoryType.procurement")}</MenuItem>
                                            <MenuItem value={'auditors'}>{t("whistleblowing.new.categoryType.auditors")}</MenuItem>
                                            <MenuItem value={'competition'}>{t("whistleblowing.new.categoryType.competition")}</MenuItem>
                                            <MenuItem value={'children'}>{t("whistleblowing.new.categoryType.children")}</MenuItem>
                                            <MenuItem value={'laundering'}>{t("whistleblowing.new.categoryType.laundering")}</MenuItem>
                                            <MenuItem value={'exploitation'}>{t("whistleblowing.new.categoryType.exploitation")}</MenuItem>
                                            <MenuItem value={'terrorism'}>{t("whistleblowing.new.categoryType.terrorism")}</MenuItem>
                                            <MenuItem value={'other'}>{t("whistleblowing.new.categoryType.other")}</MenuItem>
                                        </Select>
                                        <FormHelperText>{formikReport.touched.category && formikReport.errors.category}</FormHelperText>
                                    </FormControl>
                                </Grid>

                                {type === 'confidential' &&
                                    <>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="name"
                                                name="name"
                                                label={t("whistleblowing.new.name")}
                                                type="text"
                                                value={formikReport.values.name}
                                                error={formikReport.touched.name && Boolean(formikReport.errors.name)}
                                                helperText={formikReport.touched.name && formikReport.errors.name}
                                                onChange={formikReport.handleChange}
                                                onBlur={formikReport.handleBlur}

                                                variant="standard"
                                                size="normal"
                                                className="form-field" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                id="surname"
                                                name="surname"
                                                label={t("whistleblowing.new.surname")}
                                                type="text"
                                                value={formikReport.values.surname}
                                                error={formikReport.touched.surname && Boolean(formikReport.errors.surname)}
                                                helperText={formikReport.touched.surname && formikReport.errors.surname}
                                                onChange={formikReport.handleChange}
                                                onBlur={formikReport.handleBlur}

                                                variant="standard"
                                                size="normal"
                                                className="form-field" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                id="phone"
                                                name="phone"
                                                label={t("whistleblowing.new.phone")}
                                                type="text"
                                                value={formikReport.values.phone}
                                                onChange={formikReport.handleChange}
                                                onBlur={formikReport.handleBlur}

                                                variant="standard"
                                                size="normal"
                                                className="form-field" />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                id="email"
                                                name="email"
                                                label={t("whistleblowing.new.email")}
                                                type="text"
                                                value={formikReport.values.email}
                                                onChange={formikReport.handleChange}
                                                onBlur={formikReport.handleBlur}

                                                variant="standard"
                                                size="normal"
                                                className="form-field" />
                                        </Grid>
                                    </>
                                }

                                <Grid item xs={12}>
                                    <FileUpload
                                        containerStyle={{ marginTop: '15px' }}
                                        onFileChange={handleFileChange}
                                        resetAll={resetFile}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ marginTop: '20px' }}>
                                    <ReCAPTCHA
                                        ref={e => setCaptcha(e)}
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
                                        type={"whistleblowing-btn"}
                                        content={btnLoading ? <CircularProgress size={24} /> : t("btn.send")}
                                        callback={formikReport.submitForm}
                                        disabled={!(captchaCheck && formikReport.isValid && formikReport.dirty)}
                                    />
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </Container>

            </Box>
        </>
    )
}

const mapStateToProps = state => (
    {
        languageDuck: state.languageDuck,
    }
)

export default connect(mapStateToProps)(NewReport)