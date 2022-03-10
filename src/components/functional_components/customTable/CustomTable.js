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
            state.isMobile &&
            <p
              className="simple-paragraph"
            >
              {item.when}
            </p>
          }
        </TableCell>

        {
          !state.isMobile &&
          <TableCell>
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
              !state.isMobile &&
              <span>approfondisci</span>
            }
          </Link>
        </TableCell>

      </TableRow>
    )
  }

  const switchTableClassName = () => {
    let currentClassName = null;
    switch (props.typeTable) {
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
  obj: tempObj
}

export default CustomTable