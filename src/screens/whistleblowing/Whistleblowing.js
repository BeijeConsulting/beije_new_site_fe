import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Style
import './Whistleblowing.css';

// MUI
import { Box, Container, Divider, Skeleton } from "@mui/material";

// Redux
import { setCurrentPage, initCurrentPage } from "../../redux/ducks/currentPageDuck";
import { setVisibilityNavbar, initVisibilityNavbar } from "../../redux/ducks/showNavbarTopDuck";
import { connect } from "react-redux";

// Components
import CustomButton from "../../components/functional_components/ui/customButton/CustomButton";
import CustomModal from "../../components/hooks_components/customModal/CustomModal";
import PrivacyPolicies from "../../components/functional_components/privacyPolicies/PrivacyPolicies";
import DownloadBtn from "../../components/functional_components/downloadBtn/DownloadBtn";

const Whistleblowing = (props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        props.dispatch(setCurrentPage("whistleblowing"));
        props.dispatch(setVisibilityNavbar(true));

        return () => {
            props.dispatch(initCurrentPage());
            props.dispatch(initVisibilityNavbar());
        };
    }, [props.languageDuck.currentLanguage])

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const goToReport = () => {
        navigate("/whistleblowing/report")
    }

    return (
        <>
            <Helmet>
                <title>{t('helmet.meta_title.whistleblowing')}</title>
            </Helmet>

            <Box
                className={"bg-dark-grey margin-top-container-screens"}
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
                                <p
                                    className="cursor-pointer footer-link-privacyPolicies-legalNotes whistleblowing-policy-text"
                                    onClick={openModal}
                                >
                                    {t("footer.privacyPolicies")}
                                </p>
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
                            type="whistleblowing-btn"
                            content={t("whistleblowing.openReport")}
                            callback={goToReport}
                        />
                    </Box>
                </Container>

                <CustomModal
                    stateModal={modalIsOpen}
                    callbackClose={closeModal}
                    modalTitle={t("footer.privacyPolicies")}
                >
                    <PrivacyPolicies />
                </CustomModal>
            </Box>
        </>
    )
}

const mapStateToProps = state => (
    {
        languageDuck: state.languageDuck,
    }
)

export default connect(mapStateToProps)(Whistleblowing)