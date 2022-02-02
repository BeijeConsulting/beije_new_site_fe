import React, { useState } from "react";
import { Modal } from "antd";

// import redux
import { connect } from "react-redux";
import { setModal, initModal } from "../../../redux/ducks/openModalDuck";

// import style
import './CustomModal.css'

const CustomModal = (props) => {

  const [state, setState] = useState({
    modalVisible: false
  })

  console.log('openModal: ', props.openModalDuck.openModal)

  const handleOk = () => {
    props.callBackOkModal
  }

  const handleCancel = () => {
    props.callBackCancelModal
  }


  return (
    <Modal
      title={props.modalTitle}
      visible={props.openModalDuck.openModal}
      footer={props.footer}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {props.children}
    </Modal>
  )
}

const mapStateToProps = state => ({
  openModalDuck: state.openModalDuck
})

export default connect(mapStateToProps)(CustomModal)