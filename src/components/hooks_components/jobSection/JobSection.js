import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initCurrentPage, setCurrentPage } from "../../../redux/ducks/currentPageDuck";
import { initVisibilityNavbar, setVisibilityNavbar } from "../../../redux/ducks/showNavbarTopDuck";
import ApiCalls from "../../../services/api/ApiCalls";
import CustomTable from "../../functional_components/customTable/CustomTable";
import CustomSwitch from "../../functional_components/ui/customSwitch/CustomSwitch"
import "./JobSection.css";

const JobSection = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    showAcademy: false,
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

    setState({
      ...state,
      careerDataResponse: careerDataResponse,
      academyElements: academyElements,
      jobElements: jobElements
    })
  }

  const handleSwitch = (e) => {
    console.log("E: ", e);
    setState({
      ...state,
      showAcademy: e
    })
  }
  return (
    <div>
      <CustomSwitch
        eventOnChange={(e) => handleSwitch(e)}
        value={state.showAcademy}
      />
      <div className="jobSection_table">
        {
          state.careerDataResponse &&
          <CustomTable
            // isAcademy={state.buttonSelected === "academy"}
            obj={state.careerDataResponse}
          // classNameLink={state.buttonSelected === "academy" ? "career-table-academy-link" : "career-table-job-link"}
          />
        }
      </div>

    </div>
  )
}

export default JobSection