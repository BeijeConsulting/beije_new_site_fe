import React, { useState } from "react"
import { useTranslation } from "react-i18next";

// MUI 
import { Box } from '@mui/material';

// Style
import "./CustomTab.css"
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

// Constants
const tabObj = [
  {
    labelTab: "Item 1",
    contentPanel: [
      {
        spanContent: "ciccio ",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "bello",
        classNameSpan: ""
      }
    ]
  },
  {
    labelTab: "Item 2",
    contentPanel: [
      {
        spanContent: "casa ",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "blanca",
        classNameSpan: ""
      }
    ]
  },
  {
    labelTab: "Item 3",
    contentPanel: [
      {
        spanContent: "ciccio",
        classNameSpan: "hightlight-txt-white"
      },
      {
        spanContent: "bello",
        classNameSpan: ""
      }
    ]
  }
]

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
        className={key === state.value ? props.classNameLabelBoxActive : props.classNameLabelBox}
      >
        <CustomButton
          content={item.labelTab}
          className={key === state.value ? props.classNameLabelActive : props.classNameLabels}
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
    return (
      <span
        key={interalKey}
        className={interItem.classNameSpan}
      >
        {t(interItem.spanContent)}
      </span>
    )
  }

  const switchClassName = () => {
    let currentClassName = null;
    switch (props.bgPanel) {
      case "vision":
        currentClassName = "tab-panels-container tab-panel-vision-bg"
        break;
      case "mission":
        currentClassName = "tab-panels-container tab-panel-mission-bg"
        break;
      case "history":
        currentClassName = "tab-panels-container tab-panel-history-bg"
        break;
      case "value":
        currentClassName = "tab-panels-container tab-panel-vision-bg"
        break;
      default:
        currentClassName = "tab-panels-container"
        break;
    }
    return currentClassName;
  }

  return (
    <Box className={"tab-container"}>
      <Box className={"tab-labels-container"}>
        {props.obj.map(printLabels)}
      </Box>
      <Box
        className={switchClassName()}
      >
        {props.obj.map(printPanelContent)}
      </Box>
    </Box>
  )
}

CustomTab.defaultProps = {
  btnTypeContent: "h3",
  classNameLabelBoxActive: "tab-lables-box tab-lables-box-active",
  classNameLabelBox: "tab-lables-box",
  classNameLabels: "tab-lables",
  classNameLabelActive: "tab-lables tab-lables-active",
  typographyPanel: "p",
  classNamePanel: "tab-panels",
  obj: tabObj,
  bgPanel: "vision"
}

export default CustomTab