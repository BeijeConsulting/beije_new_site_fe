import React, { useState } from "react"

// MUI 
import { Box, Grid, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Style
import "./CustomTab.css"
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

// Constants
const tabObj = [
  {
    labelTab: "Item 1",
    contentPanel: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
  {
    labelTab: "Item 2",
    contentPanel: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. ",
  },
  {
    labelTab: "Item 3",
    contentPanel: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  }
]

const CustomTab = (props) => {
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
      <CustomButton
        key={key}
        content={item.labelTab}
        className={props.classNameLabels}
        btnTypeContent={props.btnTypeContent}
        callback={changeContent(key)}
      >
      </CustomButton>
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
          {item.contentPanel}
        </Box >
      )
    }
  }

  return (
    <Box className={"tab-container"}>
      <Box className={"tab-labels-container"}>
        {props.obj.map(printLabels)}
      </Box>
      <Box className={"tab-panels-container"}>
        {props.obj.map(printPanelContent)}
      </Box>
    </Box>
  )
}

CustomTab.defaultProps = {
  btnTypeContent: "h3",
  classNameLabels: "tab-lables",
  typographyPanel: "p",
  classNamePanel: "tab-panels",
  obj: tabObj
}

export default CustomTab