import React from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";
import { initModal } from "../../../redux/ducks/modalDuck";

// MUI
import { Modal, Backdrop, Fade, Box } from "@mui/material";

// Style
import "./CustomModal.css";

// Components
import CustomButton from "../../functional_components/ui/customButton/CustomButton";

const CustomModal = (props) => {
  const { t } = useTranslation()

  const heandleOpen = () => {
    props.callbackOpen();
  }

  const heandleClose = () => {
    props.callbackClose();
  }

  const closeModal = () => {
    props.dispatch(initModal())
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
              {/* Modal header */}
              <Box
                className={"modal-header"}
              >
                <h4>{props.modalTitle}</h4>
              </Box>
              {/* Modal content */}
              <Box className="modal-content">
                {props.children}
              </Box>

              {/* Modal footer */}
              <Box className="modal-footer">
                <CustomButton
                  type={"btn-form-primary"}
                  content={t("modal.btn")}
                  callback={closeModal}
                />
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