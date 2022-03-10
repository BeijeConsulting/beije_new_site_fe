import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Tabs, Box } from "@mui/material";

// Style
import "./CustomScrollTab.css";

// Constants
import { quotationMark } from "../../../utils/properties";


const trialObj = [
  {
    contentPanel: "Testo lungo"
  },
  {
    contentPanel: "Testo lungo"
  },
  {
    contentPanel: "Testo lungo"
  },
  {
    contentPanel: "Testo lungo"
  },
  {
    contentPanel: "Testo lungo"
  }
]

const CustomScrollTab = (props) => {

  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const printPanelContent = (item, key) => {
    if (key === value) {
      return (
        < Box
          key={key}
          component={props.typographyPanel}
          className={props.classNamePanel}
        >
          <Box
            className="scroll-tab-content-quotation-marks"
          >
            <img
              alt="Quotation mark icon"
              src={quotationMark}
            />
          </Box>
          <p
            className="scroll-tab-content-txt"
          >{t(item?.contentPanel)}</p>
          <p
            className="scroll-tab-content-sign"
          >
            <i>{item?.name} {item?.surname}</i>
          </p>
        </Box >
      )
    }
  }

  return (
    <Box
      className={"scroll-tab-container"}
      sx={{ maxWidth: { xs: 320, sm: 480 } }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs"
        className="scroll-tab-labels-container"
      >
        {props.children}

      </Tabs>
      <Box
        className={"scroll-tab-panels-container"}
      >
        {props.obj.map(printPanelContent)}
      </Box>
    </Box>
  )

}

CustomScrollTab.defaultProps = {
  obj: trialObj
}


export default CustomScrollTab