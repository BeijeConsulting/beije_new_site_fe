import React from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./CustomSwitch.css";

const CustomSwitch = (props) => {

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 165,
    height: 38,
    padding: "0 7px",
    overflow: "unset",
    "& .MuiSwitch-switchBase": {
      margin: -2,
      padding: 0,
      transform: "translateX(0px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(130px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#b12009",
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: "#ffffff",
          boxShadow: `inset -3px 0px 15px -6px #323E48`
        }
      }
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#b12009",
      width: 40,
      height: 40,
      boxShadow: `inset -3px 0px 15px -6px #323E48`,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#fff",
      borderRadius: 29,
    },
  }));

  const handleChange = (e) => {
    props.eventOnChange(e.target.checked)
  }

  return (
    <div className="switch_container">
      <div className="switch_label_container">
        <span className={!props.value ? "bold_switch" : ""}>ACADEMY</span>
        <span className={props.value ? "bold_switch" : ""}>JOBS</span>
      </div>
      <MaterialUISwitch
        className="switch_input"
        size="lg"
        onChange={handleChange}
        checked={props.value}
      // defaultValue={false}
      />
    </div>
  )
}

export default CustomSwitch