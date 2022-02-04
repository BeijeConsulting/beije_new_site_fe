import React from "react";
import { Modal } from "antd";

// import constants and docs
import {
  DownloadOutlined
} from '@ant-design/icons';
import privacyPoliciesPDF from '../../../assets/PrivacyPolicies_BeijePeopleFirst.pdf'

// import redux
import { connect } from "react-redux";

// import style
import './CustomModal.css'

// import components
import CustomButton from "../Button/CustomButton";

const CustomModal = (props) => {

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
          {
            props.downloadPDF &&
            <a href={props.pdfHref} download={true}>
              <CustomButton
                type="modal-btn"
                currentIcon={<DownloadOutlined />}
                content={'Download pdf'}
              />
            </a>
          }
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
  bodyStyle: 'modal-body',
  downloadPDF: false,
  pdfHref: privacyPoliciesPDF
}

const mapStateToProps = state => ({
  openModalDuck: state.openModalDuck
})

export default connect(mapStateToProps)(CustomModal)