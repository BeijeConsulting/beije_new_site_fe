import { isEmpty } from "lodash";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initCurrentPage, setCurrentPage } from "../../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../../redux/ducks/showNavbarTopDuck";
import ApiCalls from "../../../services/api/ApiCalls";
import { career_empty_academy, career_empty_job } from "../../../utils/properties";
import CustomButton from "../../functional_components/ui/customButton/CustomButton";
import CustomSwitch from "../../functional_components/ui/customSwitch/CustomSwitch";

//style
import "./JobSection.scss";

const JobSection = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    showJobs: true,
    careerDataResponse: null,
    academyElements: false,
    jobElements: false
  })

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(setCurrentPage("career"));
    dispatch(setVisibilityNavbar(true));

    getCareerData();

    return () => {
      dispatch(initCurrentPage());
      dispatch(initVisibilityNavbar());
    };
  }, [])

  const getCareerData = async () => {
    let careerDataResponse = await ApiCalls.career_getList();

    let academyElements = careerDataResponse.find((item) => {
      return item.academy === true
    })

    let jobElements = careerDataResponse.find((item) => {
      return item.academy === false
    })

    // console.log("careerDataResponse: ", careerDataResponse);

    setState({
      ...state,
      careerDataResponse: careerDataResponse,
      academyElements: academyElements,
      jobElements: jobElements
    })
  }

  const handleSwitch = (e) => {
    setState({
      ...state,
      showJobs: e
    })
  }

  const sendToPage = (param1, param2) => () => {
    let response = "#";

    if (!state.showJobs) {
      if (param1.toLowerCase() === "frontend") {
        response = "/people-first-talent-academy/academy-frontend"
      }
      if (param1.toLowerCase() === "backend") {
        response = "/people-first-talent-academy/academy-backend"
      }
    }
    else {
      response = `/career/career-detail?jobOffer=${param2}`
    }

    // console.log("RESPONSE: ", response);

    navigate(response)
  }

  return (
    <div>
      <CustomSwitch
        eventOnChange={handleSwitch}
        value={state.showJobs}
      />
      <div className="jobSection_table">
        {
          (state.careerDataResponse && !isEmpty(state.careerDataResponse)) &&
          state.careerDataResponse.map((item, key) => {
            if ((!state.showJobs && item.academy) || (state.showJobs && !item.academy)) {
              return (
                <div
                  key={key}
                  className="jobSection_single_row_container"
                >
                  <div>
                    <p><b>{props.languageDuck.currentLanguage === "IT" ? item.title_it : item.title_en}</b></p>
                    <div className="jobSection_type_mode_container" >
                      <p> {t(`career.type.${item.type.toLowerCase()}`)}</p>
                      <p> {t(`career.modeOffert.${item.mode.toLowerCase()}`)}</p>
                    </div>
                  </div>
                  <div className="jobSection_button_container">
                    <CustomButton
                      type="career_btn"
                      content={t(`career.show_more_btn`)}
                      callback={sendToPage(item.type, item.id)}
                    />
                  </div>

                </div>
              )
            }

          })
        }
        {
          state.careerDataResponse && !state.academyElements && !state.showJobs &&
          <div
            className="jobSection-empty-message-container"
          >
            <img
              alt="icon for empty academy positions"
              src={career_empty_academy}
            />
            <p>{t("career.messageAcademy")}</p>
          </div>

        }
        {
          state.careerDataResponse && !state.jobElements && state.showJobs &&
          <div
            className="jobSection-empty-message-container"
          >
            <img
              alt="icon for empty academy positions"
              src={career_empty_job}
            />
            <p>{t("career.messageJob")}</p>
          </div>
        }
      </div>

    </div>
  )
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(JobSection)