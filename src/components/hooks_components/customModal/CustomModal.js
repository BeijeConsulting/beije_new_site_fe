import React from "react";
import { useTranslation } from "react-i18next";

// Redux
import { connect } from "react-redux";

// MUI
import { Modal, Backdrop, Fade, Box } from "@mui/material";

// Style
import "./CustomModal.scss";

// Constants and assets
import { xIcon } from "../../../utils/properties";

// Components
import CustomButton from "../../functional_components/ui/customButton/CustomButton";
import CustomIconButton from "../../functional_components/ui/customIconButton/CustomIconButton";

//props types
import PropTypes from 'prop-types';

const propTypes = {
  callbackOpen: PropTypes.func,
  callbackClose: PropTypes.func,
  stateModal: PropTypes.bool,
  classNameTxtContainer: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameHeader: PropTypes.string,
  modalTitle: PropTypes.string,
  closingX: PropTypes.bool,
  classNameChildrenContainer: PropTypes.string,
  children: PropTypes.element,
  footer: PropTypes.bool,
};

const CustomModal = (props) => {
  const { t } = useTranslation()

  const handleOpen = () => {
    props.callbackOpen();
  }

  const handleClose = () => {
    props.callbackClose();
  }

  return (
    <>
      {/* {props.modalDuck.modalOpen && */}
      {props.stateModal &&
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={handleOpen}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          className={props.classNameContainer}
        >
          {/* <Fade in={props.modalDuck.modalOpen}> */}
          <Fade in={props.stateModal}>
            <Box
              className={props.classNameTxtContainer}
            >
              {/* Modal header */}
              <Box
                className={props.classNameHeader}
              >
                <h4>{props.modalTitle}</h4>
                {
                  props.closingX &&
                  <CustomIconButton
                    aria-label={"closing-button"}
                    callback={handleClose}
                    iconFontAwsome={xIcon}
                  />
                }
              </Box>
              {/* Modal content */}
              <Box className={props.classNameChildrenContainer}>
                {props.children}
              </Box>

              {/* Modal footer */}
              {props.footer &&
                <Box className="modal-footer">
                  <CustomButton
                    type={"btn-form-primary"}
                    content={t("modal.btn")}
                    // callback={closeModal}
                    callback={handleClose}
                  />
                </Box>
              }
            </Box>
          </Fade>
        </Modal>
      }
    </>
  )
}

CustomModal.defaultProps = {
  classNameContainer: "modal-container",
  classNameTxtContainer: "modal-txt-container",
  footer: true,
  closingX: false,
  classNameHeader: "modal-header",
  classNameChildrenContainer: "modal-content"
}

CustomModal.propTypes = propTypes;

const mapStateToProps = state => (
  {
    modalDuck: state.modalDuck,
  }
)

export default connect(mapStateToProps)(CustomModal)