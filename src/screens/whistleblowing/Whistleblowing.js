import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Style
import './Whistleblowing.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { connect } from "react-redux";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import DownloadBtn from "../../components/functional_components/downloadBtn/DownloadBtn";

const Whistleblowing = (props) => {

    const { t } = useTranslation();

    return (
        <Box
            className={"bg-dark-grey whistleblowing-padding-top"}
        >
            <Container
                component={"section"}
                maxWidth={"false"}
                className={"paddingX-container-general-pages whistleblowing-first-section-container d-flex items-center flex-column"}
            >
                <Box className={"max-width-1200"}>
                    <h2>{t("whistleblowing.title")}</h2>
                    <p>{t("whistleblowing.description")}</p>
                </Box>
            </Container>

            <Divider
                className={"divider"}
            />

            <Container
                className={"paddingX-container-general-pages whistleblowing-second-section-container d-flex justify-center"}
                component={"article"}
            >
                <Box className={"max-width-1200"}>
                    <Box className={"whistleblowing-text-container"}>
                        <h1>
                            {t("whistleblowing.q&a")}
                        </h1>
                        <h3>
                            {t("whistleblowing.question1")}
                        </h3>
                        <p>
                            {t("whistleblowing.answer1")}
                        </p>
                        <ul>
                            <li>
                                {t("whistleblowing.answer1list1")}
                            </li>
                            <li>
                                {t("whistleblowing.answer1list2")}
                            </li>
                            <li>
                                {t("whistleblowing.answer1list3")}
                            </li>
                        </ul>
                        <h3>
                            {t("whistleblowing.question2")}
                        </h3>
                        <p>
                            {t("whistleblowing.answer2section1")}
                        </p>
                        <p>
                            {t("whistleblowing.answer2section2")}
                        </p>
                        <ul>
                            <li>
                                {t("whistleblowing.answer2list1")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list2")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list3")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list4")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list5")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list6")}
                            </li>
                            <li>
                                {t("whistleblowing.answer2list7")}
                            </li>
                        </ul>
                        <h3>
                            {t("whistleblowing.question3")}
                        </h3>
                        <p>
                            {t("whistleblowing.answer3section1")}
                        </p>
                        <p>
                            {t("whistleblowing.answer3section2")}
                        </p>
                        <h3>
                            {t("whistleblowing.question4")}
                        </h3>
                        <p>
                            {t("whistleblowing.answer4section1")}
                        </p>
                        <p>
                            {t("whistleblowing.answer4section2")}
                        </p>
                        <Box>
                            <DownloadBtn
                                content={t("whistleblowing.policy")}
                                bgIconDownload="download-btn-icon-consulting"
                                typeSection="consulting"
                            />
                        </Box>
                        <Box>
                            <DownloadBtn
                                content={t("whistleblowing.act")}
                                bgIconDownload="download-btn-icon-consulting"
                                typeSection="consulting"
                            />
                        </Box>
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
                        content={t("whistleblowing.document")}
                    //callback={goToListJobs}
                    />
                    <CustomButton
                        type="filter-btn"
                        content={t("whistleblowing.report")}
                    //callback={goToListJobs}
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

export default connect(mapStateToProps)(Whistleblowing)