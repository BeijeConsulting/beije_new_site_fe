import React, { useEffect } from "react";

// import redux
import { connect } from "react-redux";
import { setColorHeader } from "../../redux/ducks/colorHeaderDuck";

// import style
import './AcademyJava.css'

// import functions
import { turnToUppercase } from "../../utils/utilities";

// import assets
import { academy1 } from "../../utils/properties";

// import components
import AcademyDetails from "../../components/academyDetails/AcademyDetails";

const AcademyJava = (props) => {

    const primary_bg_page_academyJava = '#feef87'

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
                pageTitle={turnToUppercase('Academy Java')}
                pageDescription={'Permette di arricchire e consolidare le tue competenze e diventare un Java Developer Junior.'}
                imgSrc={academy1}
                btnContent={'Candidati'}
                stageDescription={'Il corso comprende uno stage finale della durata di 3 mesi'}
                compensationDesc={'è previsto rimborso spese'}
                locationDesc={'Remoto/Milano'}
            />

        </div>
    )
}

export default connect()(AcademyJava)