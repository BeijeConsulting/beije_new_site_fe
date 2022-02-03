import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Helmet from "react-helmet";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './AcademyJava.css'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import assets
import { academy1, master_backend_list_intro, java_program } from "../../utils/properties";

// import components
import AcademyDetails from "../../components/academyDetails/AcademyDetails";

const AcademyJava = (props) => {

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
                <title>{t('helmet.meta_title.academy_backend')}</title>
                <meta name="description" content={t('helmet.meta_description.academy_backend')} />
                <meta name="keywords" content={t('helmet.keywords.academy_backend')} />
            </Helmet>
            <div>

                <AcademyDetails
                    pageTitle={turnToUppercase(t('AcademyBackend.title'))}
                    pageIntro={
                        <>
                            {t('AcademyBackend.intro.part1')}
                            <strong>{t('AcademyBackend.intro.part2')}</strong>
                            {t('AcademyBackend.intro.part3')}
                        </>
                    }
                    imgSrc={academy1}
                    btnContent={t('btn.apply')}
                    stageDescription={t('AcademyBackend.stageDesc')}
                    compensationDesc={t('AcademyBackend.compensationDesc')}
                    locationDesc={t('AcademyBackend.locationDesc')}
                    listToPrint={master_backend_list_intro}
                    academyProgram={java_program}
                />

            </div>
        </>
    )
}

export default connect()(AcademyJava)