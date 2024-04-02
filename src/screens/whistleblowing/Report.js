import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Style
import './Whistleblowing.css';

// MUI
import { Box, Container } from "@mui/material";

// Redux
import { connect } from "react-redux";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";

const Report = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const goToNewReport = () => {
        navigate("/whistleblowing/report/new")
    }

    return (
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
                            {t("whistleblowing.report.title")}
                        </h2>
                        <p>
                            {t("whistleblowing.report.description1")}
                        </p>
                        <p>
                            {t("whistleblowing.report.description2")}
                        </p>
                        <h4>
                            {t("whistleblowing.report.title2")}
                        </h4>
                        <p>
                            {t("whistleblowing.report.title2section1")}
                        </p>
                        <p>
                            {t("whistleblowing.report.title2section2")}
                        </p>
                        <p>
                            {t("whistleblowing.report.title2section3")}
                        </p>
                        <h4>
                            {t("whistleblowing.report.title3")}
                        </h4>
                        <p>
                            {t("whistleblowing.report.title3section1")}
                        </p>
                        <p>
                            {t("whistleblowing.report.title3section2")}
                        </p>
                        <p>
                            {t("whistleblowing.report.title3section3")}
                        </p>
                        <h4>
                            {t("whistleblowing.report.title4")}
                        </h4>
                        <ul>
                            <li>
                                {t("whistleblowing.report.title4list1")}
                            </li>
                            <li>
                                {t("whistleblowing.report.title4list2")}
                            </li>
                            <li>
                                {t("whistleblowing.report.title4list3")}
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Container>

            <Container
                className={"paddingX-container-general-pages whistleblowing-third-section-container d-flex justify-center"}
                component={"article"}
            >
                <Box className={"whistleblowing-buttons-container width-100 max-width-1200"}>
                    <CustomButton
                        type="filter-btn"
                        content={t("whistleblowing.report.newReport")}
                        callback={goToNewReport}
                    />
                </Box>
            </Container>
        </Box>
    )
}

const mapStateToProps = state => (
    {
        languageDuck: state.languageDuck,
    }
)

export default connect(mapStateToProps)(Report)