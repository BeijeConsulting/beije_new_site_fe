import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";

// MUI
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import "./CustomTable.css";

// Constants
import { addIcon } from "../../../utils/properties";

const tempObj = [
  {
    name: "Frontend developer",
    type: "frontend",
    mode: "Remoto",
    when: "2 settimane fa",
    linkTo: "/beije-talent-academy/academy-frontend"
  },
  {
    name: "Backend developer",
    type: "frontend",
    mode: "Remoto",
    when: "2 settimane fa",
    linkTo: "/beije-talent-academy/academy-backend"
  }
]

const CustomTable = (props) => {

  const { t } = useTranslation();

  const [state, setState] = useState({
    isMobile: window.innerWidth < 1024,
  })

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    }
  }, [])

  const updateMedia = () => {
    setState({
      ...state,
      isMobile: window.innerWidth < 1024
    });
  };

  const printTableHaed = (item, key) => {
    return (
      <TableCell
        key={key}
        align={item.align}
      >
        {item.head}
      </TableCell>
    )
  }

  const printTableRows = (item, key) => {
    if ((props.isAcademy && item.academy) || (!props.isAcademy && !item.academy)) {
      return (
        <TableRow
          key={key}
        >
          <TableCell
            component={"th"}
          >
            {props.languageDuck.currentLanguage === "it" ? item.title_it : item.title_en}
            {
              state.isMobile &&
              <>
                <p
                  className="simple-paragraph"
                >
                  {item.type}
                </p>
                <p
                  className="simple-paragraph"
                >
                  {item.mode}
                </p>
              </>
            }
          </TableCell>

          {
            !state.isMobile &&
            <>
              <TableCell
                align={"left"}
              >
                {item.type}
              </TableCell>
              <TableCell
                align={"left"}
              >
                {item.mode}
              </TableCell>
            </>
          }
          <TableCell
            align={"right"}
          >
            <Link
              to={sendToPage(item.type, item.permalink)}
            >
              {
                state.isMobile &&
                <div
                  className={props.classNameLink}
                >
                  <FontAwesomeIcon icon={addIcon} />
                </div>
              }
              {
                !state.isMobile &&
                <span
                  className={props.classNameLink}
                >{t("btn.learnMore")}</span>
              }
            </Link>
          </TableCell>

        </TableRow>
      )

    }

  }

  const sendToPage = (param1, param2) => {
    let response = "#";
    if (props.isAcademy) {
      if (param1.toLowerCase() === "front-end") {
        response = "/beije-talent-academy/academy-frontend"
      }
      if (param1.toLowerCase() === "back-end") {
        response = "/beije-talent-academy/academy-backend"
      }
    }
    else {
      response = `/career/career-detail?jobOffer=${param2}`
    }

    return response
  }

  const switchTableClassName = () => {
    let currentClassName = null;
    switch (props.typeTable) {
      case "table-career":
        currentClassName = "table-default table-career"
        break;
      default:
        currentClassName = "table-default"
        break;
    }
    return currentClassName
  }

  return (
    <TableContainer
      className={switchTableClassName()}
    >
      <Table
        aria-label="simple table"
        sx={{ width: "100%" }}
      >
        {props.tableHeader &&
          <TableHead>
            <TableRow>
              {props.obj.map(printTableHaed)}
            </TableRow>
          </TableHead>
        }

        <TableBody>
          {props.obj.map(printTableRows)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

CustomTable.defaultProps = {
  obj: tempObj,
  careerTable: false
}

const mapStateToProps = state => (
  {
    languageDuck: state.languageDuck,
  }
)

export default connect(mapStateToProps)(CustomTable)