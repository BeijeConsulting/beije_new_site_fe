import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as yup from 'yup';

// Style
import './Whistleblowing.css';

// MUI
import { Box, Container, Grid, TextField, TextareaAutosize, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Select, FormHelperText, MenuItem, InputLabel } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import FileUpload from "../../components/functional_components/ui/fileUpload/FileUpload";

const NewReport = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [type, setType] = useState('confidential');

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
        nameSurname: yup
            .string('Enter your name and surname')
            .required(t("form.errorMessage.nameSurname")),
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
            nameSurname: '',
            phone: '',
            email: '',
            file: '',
        },
        validationSchema: type === 'confidential' ? confidentialValidationSchema : anonymousValidationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            formikReport.resetForm();
            sendData(values);
        }
    });

    const sendData = async (values) => {
        console.log(values)
        setType('confidential');
    }

    const handleTypeChange = (event) => {
        formikReport.handleChange(event);
        setType(event.target.value);
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

                            <form>
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
                                                id="nameSurname"
                                                name="nameSurname"
                                                label={t("whistleblowing.new.nameSurname")}
                                                type="text"
                                                value={formikReport.values.nameSurname}
                                                error={formikReport.touched.nameSurname && Boolean(formikReport.errors.nameSurname)}
                                                helperText={formikReport.touched.nameSurname && formikReport.errors.nameSurname}
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
                                        <Grid item xs={12}>
                                            <FileUpload 
                                               containerStyle={{marginTop: '15px'}}
                                            />
                                        </Grid>
                                    </>
                                }

                                <Grid
                                    item
                                    xs={12}
                                    className={"form-submit-btn-container position-relative"}
                                >
                                    <CustomButton
                                        type={"btn-form-primary"}
                                        content={t("btn.send")}
                                        callback={formikReport.submitForm}
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