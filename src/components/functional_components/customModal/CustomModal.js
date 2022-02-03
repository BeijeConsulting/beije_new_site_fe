import React, { useState } from "react";
import { Modal } from "antd";

// import constants
import {
  DownloadOutlined
} from '@ant-design/icons';

// import redux
import { connect } from "react-redux";

// import style
import './CustomModal.css'

// import components
import CustomButton from "../Button/CustomButton";

const CustomModal = (props) => {

  const [state, setState] = useState({
    modalVisible: false
  })

  console.log('openModal: ', props.openModalDuck.openModal)

  const handleOk = () => {
    props.callBackOkModal()
  }

  const handleCancel = () => {
    props.callBackCancelModal()
  }


  return (
    <Modal
      title={props.modalTitle}
      visible={props.openModalDuck.openModal}
      footer={props.newFooter ?
        <div className={'modal-footer'}>
          <CustomButton
            type="modal-btn"
            currentIcon={<DownloadOutlined />}
            content={'Download'}
          />
          <CustomButton
            type="modal-btn"
            content={'Close'}
            clickCallback={handleCancel}
          />
        </div> :
        props.footer
      }
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{ overflowY: 'scroll', height: '50vh' }}
      // bodyStyle={props.bodyStyle}
      className={props.modalClassname}
    >
      {props.children}
    </Modal>
  )
}

CustomModal.defaultProps = {
  modalClassname: 'modal-container',
  bodyStyle: 'modal-body'
}

const mapStateToProps = state => ({
  openModalDuck: state.openModalDuck
})

export default connect(mapStateToProps)(CustomModal)