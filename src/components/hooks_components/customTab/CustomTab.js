import React, { useState } from "react"

// MUI 
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Style
import "./CustomTab.css"

// Constants
const tabObj = [
  {
    labelTab: "Item 1",
    valueTab: "1",
    wrappedTab: false,
    contentTabPanel: "Item 1",
    valueTabPanel: "1"
  },
  {
    labelTab: "Item 2",
    valueTab: "2",
    wrappedTab: false,
    contentTabPanel: "Item 1",
    valueTabPanel: "2"
  },
  {
    labelTab: "Item 3",
    valueTab: "3",
    wrappedTab: false,
    contentTabPanel: "Item 1",
    valueTabPanel: "3"
  }
]

const CustomTab = (props) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const printTabs = (item, key) => {
    return (
      <Tab
        key={key}
        label={item.labelTab}
        value={item.valueTab} /* value connected to the corresponding TabPanel */
        wrapped={item.wrappedTab}
      />
    )
  }

  const printTabPanel = (item, key) => {
    return (
      <TabPanel
        key={key}
        value={item.valueTabPanel} /* value connected to the corresponding Tab */
        className={props.classNameTabPanel}
      >
        {item.contentTabPanel}
      </TabPanel>
    )
  }

  return (
    <TabContext value={value}>
      <Box className={props.classNameTabContainer}>
        <TabList
          onChange={handleChange}
          aria-label={props.ariaLableTabList}
          orientation={props.orientation}
        >
          {props.objTab.map(printTabs)}
        </TabList>
      </Box>
      {props.objTab.map(printTabPanel)}
    </TabContext>
  )
}

CustomTab.defaultProps = {
  classNameTabContainer: "tab-tabs-container",
  classNameTabPanel: "tab-tabPanel-container",
  ariaLableTabList: "lab API tabs example",
  objTab: tabObj,
  orientation: "vertical"
}

export default CustomTab