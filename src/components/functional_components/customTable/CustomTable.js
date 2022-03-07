import React from "react";
import { Link } from "react-router-dom";

// MUI
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// Style
import "./CustomTable.css";

const tempObj = [
  {
    singleRow: [
      {
        name: "Stage Java",
        component: "th",
        align: "",
        linkTo: ""
      },
      {
        name: "Gennaio - Aprile 2022",
        component: "",
        scope: "",
        align: "",
        linkTo: ""
      },
      {
        name: "APPROFONDISCI",
        component: "",
        scope: "",
        align: "right",
        linkTo: "/"
      }
    ]
  },
  {
    singleRow: [
      {
        name: "Stage Java",
        component: "th",
        align: "",
        linkTo: ""
      },
      {
        name: "Gennaio - Aprile 2022",
        component: "",
        scope: "",
        align: "",
        linkTo: ""
      },
      {
        name: "APPROFONDISCI",
        component: "",
        scope: "",
        align: "right",
        linkTo: "/"
      }
    ]
  }
]

const CustomTable = (props) => {
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
      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >

        {item.singleRow.map(printTableColums)}
      </TableRow>
    )
  }

  const printTableColums = (internalItem, internalKey) => {
    return (
      <TableCell
        key={internalKey}
        component={internalItem.component}
        scope={internalItem.scope}
        align={internalItem.align}
      >
        {
          internalItem.linkTo !== "" &&
          <Link
            to={internalItem.linkTo}
          >
            {internalItem.name}
          </Link>
        }
        {
          internalItem.linkTo === "" &&
          internalItem.name
        }

      </TableCell>
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