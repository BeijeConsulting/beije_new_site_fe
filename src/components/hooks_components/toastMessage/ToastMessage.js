import React from 'react'

// Mui
import { Snackbar, Alert } from "@mui/material";

// Redux
import { connect } from "react-redux";
import { initToastMessage } from '../../../redux/ducks/toastMessageDuck';

const ToastMessage = (props) => {

  const handleCloseToast = () => {
    // props.close()
    props.dispatch(initToastMessage())
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: props.anchorvertical,
        horizontal: props.anchorHorizontal
      }}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
    >
      <Alert onClose={handleCloseToast} severity={props.severity} sx={{ width: '100%' }}>
        <span>
          {props.severity === "success" ? props.successMessage1 : props.errorMessage1}
          <br />
          {props.severity === "success" ? props.successMessage2 : props.errorMessage2}
        </span>
      </Alert>
    </Snackbar>
  )
}

export default connect()(ToastMessage)