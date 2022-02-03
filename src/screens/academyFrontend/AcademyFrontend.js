import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './AcademyFrontend.css'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import assets
import { academy1, master_frontend_list_intro, frontend_program } from "../../utils/properties";

// import components
import AcademyDetails from "../../components/academyDetails/AcademyDetails";

const AcademyFrontend = (props) => {

    const primary_bg_page_academyJava = '#feef87'

    const { t } = useTranslation()

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            props.dispatch(setColorHeader(primary_bg_page_academyJava))
        }
    }

    return (
        <>
            <Helmet>
                <title>{t('helmet.meta_title.academy_frontend')}</title>
                <meta name="description" content={t('helmet.meta_description.academy_frontend')} />
                <meta name="keywords" content={t('helmet.keywords.academy_frontend')} />
            </Helmet>
            <div>

                <AcademyDetails
                    pageTitle={turnToUppercase(t('AcademyFrontend.title'))}
                    pageIntro={
                        <>
                            {t('AcademyFrontend.intro.part1')}
                            <strong>{t('AcademyFrontend.intro.part2')}</strong>
                            {t('AcademyFrontend.intro.part3')}
                        </>
                    }
                    imgSrc={academy1}
                    btnContent={t('btn.apply')}
                    stageDescription={t('AcademyFrontend.stageDesc')}
                    compensationDesc={t('AcademyFrontend.compensationDesc')}
                    locationDesc={t('AcademyFrontend.locationDesc')}
                    listToPrint={master_frontend_list_intro}
                    academyProgram={frontend_program}
                />

            </div>
        </>
    )
}

export default connect()(AcademyFrontend)