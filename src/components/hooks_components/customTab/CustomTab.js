import React, { useState } from "react"
import { useTranslation } from "react-i18next";

// MUI 
import { Box } from '@mui/material';

// Style
import "./CustomTab.scss"
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

const CustomTab = (props) => {
  const { t } = useTranslation()
  const [state, setState] = useState({
    value: 0
  })

  const changeContent = (el) => () => {
    setState({
      ...state,
      value: el
    })
  }

  const printLabels = (item, key) => {
    return (
      <Box
        key={key}
        className={key === state.value ? item.classNameLabelBoxActive : item.classNameLabelBox}
      >
        <CustomButton
          content={t(item.labelTab)}
          className={key === state.value ? item.classNameLabelActive : item.classNameLabels}
          btnTypeContent={props.btnTypeContent}
          callback={changeContent(key)}
        >
        </CustomButton>
      </Box>

    )
  }
  const printPanelContent = (item, key) => {
    if (key === state.value) {
      return (
        < Box
          key={key === state.value}
          component={props.typographyPanel}
          className={props.classNamePanel}
        >
          {item.contentPanel.map(printAllSpan)}
        </Box >
      )
    }
  }

  const printAllSpan = (interItem, interalKey) => {
    if (interItem.addHtml === "" || interItem.addHtml === "two-break") {
      return (
        <span
          key={interalKey}
          className={interItem.classNameSpan}
        >
          {t(interItem.spanContent)} {interItem.addHtml === "two-break" ? <><br /><br /></> : <></>}

        </span>
      )
    }
    else {
      return (
        <p
          key={interalKey}
          className={interItem.classNameSpan}
        >
          {t(interItem.spanContent)}

        </p>
      )
    }
  }

  return (
    <Box className={props.classNameContainer}>
      <Box className={"tab-labels-container"}>
        {props.obj.map(printLabels)}
      </Box>
      <Box
        className={"tab-panels-container"}
      >
        {props.obj.map(printPanelContent)}
      </Box>
    </Box>
  )
}

CustomTab.defaultProps = {
  classNameContainer: "tab-container",
  btnTypeContent: "h2",
  // classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
  // classNameLabelBox: "tab-lables-box",
  // classNameLabels: "tab-lables",
  // classNameLabelActive: "tab-lables tab-lables-active",
  typographyPanel: "p",
  classNamePanel: "tab-panels",
}

export default CustomTab