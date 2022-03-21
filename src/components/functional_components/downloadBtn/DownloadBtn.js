import React from "react";

// Constants and assets
import { pdf_presentation_consulting, pdf_presentation_up } from "../../../utils/properties";
import downloadConsultingIcon from "../../../assets/icons/consultingDownload.svg";
import downloadUpIcon from "../../../assets/icons/upDownload.svg";
import downloadAcademyIcon from "../../../assets/icons/academyDownload.svg";

// Style
import "./DownloadBtn.css";

const DownloadBtn = (props) => {

  const switchClassNameDownloadBtn = () => {
    let currentClassName = null;
    switch (props.typeSection) {
      case "consulting":
        currentClassName = "download-btn-container download-btn-consulting-download"
        break;
      case "up":
        currentClassName = "download-btn-container download-btn-up-download"
        break;
      case "academy":
        currentClassName = "download-btn-container download-btn-academy-download"
        break;
      default:
        currentClassName = ""
        break;
    }
    return currentClassName;
  }

  const switchDownload = () => {
    let currentDownload = null;
    switch (props.download) {
      case "consulting":
        currentDownload = pdf_presentation_consulting
        break;
      case "up":
        currentDownload = pdf_presentation_up
        break;
      case "academy":
        currentDownload = pdf_presentation_up
        break;
      default:
        currentDownload = ""
        break;
    }
    return currentDownload;
  }

  const switchIcon = () => {
    let currentIcon = null;
    switch (props.typeSection) {
      case "consulting":
        currentIcon = downloadConsultingIcon
        break;
      case "up":
        currentIcon = downloadUpIcon
        break;
      case "academy":
        currentIcon = downloadAcademyIcon
        break;
      default:
        currentIcon = ""
        break;
    }
    return currentIcon;
  }

  return (
    <div
      className={switchClassNameDownloadBtn()}
    >
      <img
        alt="download icon"
        src={switchIcon()}
        className={"download-btn-icon"}
      />

      <a
        href={switchDownload()}
        download={true}
      >
        {props.content}
      </a>
    </div>
  )
}

export default DownloadBtn