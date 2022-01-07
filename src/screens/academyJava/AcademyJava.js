import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
        <div>

            <AcademyDetails
                pageTitle={turnToUppercase(t('AcademyBackend.title'))}
                pageIntro={t('AcademyBackend.intro')}
                imgSrc={academy1}
                btnContent={t('btn.apply')}
                stageDescription={t('AcademyBackend.stageDesc')}
                compensationDesc={t('AcademyBackend.compensationDesc')}
                locationDesc={t('AcademyBackend.locationDesc')}
                listToPrint={master_backend_list_intro}
                academyProgram={java_program}
            />

        </div>
    )
}

export default connect()(AcademyJava)