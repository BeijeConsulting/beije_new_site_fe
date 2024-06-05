import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import { Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import "./CustomAccordion.scss";

// Constants
import { addIcon, minusIcon } from "../../../utils/properties";

const tempObj = [
  {
    sectionTitle: "Accordion 1",
    description: [
      {
        p: "Primo elemento del programma"
      },
      {
        p: "Secondo elemento del programma"
      },
      {
        p: "Terzo elemento del programma"
      }
    ]
  },
  {
    sectionTitle: "Accordion 2",
    description: [
      {
        p: "Primo elemento del programma"
      },
      {
        p: "Secondo elemento del programma"
      },
      {
        p: "Terzo elemento del programma"
      }
    ]
  }
]

const CustomAccordion = (props) => {

  const { t } = useTranslation();

  const printAccordion = (item, key) => {
    return (
      <Accordion
        key={key + Date.now()}
        className={"accordion-container"}
      >
        <AccordionSummary
          expandIcon={customExpandIcon()}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordion-header"
        >
          <h3>{t(item.sectionTitle)}</h3>
        </AccordionSummary>
        <AccordionDetails
          className="accordion-content"
        >
          {item.description.map(printSingleParagraph)}
        </AccordionDetails>
      </Accordion>
    )
  }

  const printSingleParagraph = (internalItem, internalKey) => {
    return (
      <p
        key={internalKey}
      >
        {t(internalItem.p)}
      </p>
    )
  }

  const customExpandIcon = () => {
    return (
      <Box
        className={"accordion-icons-container"}
      >
        <div
          className="expandIconWrapperMobile"
        >
          <FontAwesomeIcon icon={minusIcon} />
        </div>
        <div
          className="collapsIconWrapperMobile"
        >
          <FontAwesomeIcon icon={addIcon} />
        </div>

        <div
          className="expandIconWrapperDesktop"
        >
          <p>{t("btn.close")}</p>
        </div>
        <div
          className="collapsIconWrapperDesktop"
        >
          <p>{t("btn.learnMore")}</p>
        </div>
      </Box>
    )
  }

  return (
    <Box>
      {props.obj.map(printAccordion)}
    </Box>

  )
}

CustomAccordion.defaultProps = {
  obj: tempObj
}

export default CustomAccordion