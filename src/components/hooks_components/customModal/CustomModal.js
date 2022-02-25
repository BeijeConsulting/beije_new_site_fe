import React from "react";

// Redux
import { connect } from "react-redux";

// MUI
import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";

// Style
import "./CustomModal.css";
import CustomIconButton from "../../functional_components/ui/customIconButton/CustomIconButton";

const CustomModal = (props) => {

  const heandleOpen = () => {
    props.callbackOpen();
  }

  const heandleClose = () => {
    props.callbackClose();
  }

  return (
    <>
      {props.modalDuck.modalOpen &&
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={heandleOpen}
          onClose={heandleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className={"modal-container"}
        >
          <Fade in={props.modalDuck.modalOpen}>
            <Box
              className={"modal-txt-container"}
            >
              <Box
                className={"modal-header"}
              >
                <CustomIconButton />
              </Box>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Box className="modal-content">
                {props.children}
              </Box>
            </Box>
          </Fade>
        </Modal>
      }
    </>
  )
}

const mapStateToProps = state => (
  {
    modalDuck: state.modalDuck,
  }
)

export default connect(mapStateToProps)(CustomModal)