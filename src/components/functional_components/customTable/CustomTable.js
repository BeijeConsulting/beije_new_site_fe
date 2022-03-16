import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    name: "Stage Java",
    when: "Gennaio - Aprile 2022",
    linkTo: "/"
  },
  {
    name: "Stage Java",
    when: "Gennaio - Aprile 2022",
    linkTo: "/"
  }

]

const CustomTable = (props) => {

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
    return (
      <TableRow
        key={key}
      >
        <TableCell
          component={"th"}
        >
          {item.name}
          {
            state.isMobile && !props.careerTable &&
            <p
              className="simple-paragraph"
            >
              {item.when}
            </p>
          }

          {
            state.isMobile && props.careerTable &&
            <>
              <p
                className="simple-paragraph"
              >
                <span>{item.type} {item.mode}</span>
              </p>
              <p
                className="simple-paragraph"
              >
                {item.when}
              </p>
            </>
          }
        </TableCell>

        {
          !state.isMobile && props.careerTable &&
          <>
            <TableCell
              align={"center"}
            >
              {item.type}
            </TableCell>
            <TableCell
              align={"center"}
            >
              {item.mode}
            </TableCell>
          </>
        }

        {
          !state.isMobile &&
          <TableCell
            align={"center"}
          >
            {item.when}
          </TableCell>
        }

        <TableCell
          align={"right"}
        >
          <Link
            to={item.linkTo}
          >
            {
              state.isMobile &&
              <div>
                <FontAwesomeIcon icon={addIcon} />
              </div>
            }
            {
              !state.isMobile && !props.careerTable &&
              <span>approfondisci</span>
            }
            {
              !state.isMobile && props.careerTable &&
              <span>Scopri di più</span>
            }
          </Link>
        </TableCell>

      </TableRow>
    )
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
      component={"table"}
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

export default CustomTable