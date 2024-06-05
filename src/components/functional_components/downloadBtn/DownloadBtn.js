import React from "react";

// Constants and assets
import downloadConsultingIcon from "../../../assets/icons/consultingDownload.svg";
import downloadUpIcon from "../../../assets/icons/upDownload.svg";
import downloadAcademyIcon from "../../../assets/icons/academyDownload.svg";

// Style
import "./DownloadBtn.scss";

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
    switch (props.typeSection) {
      case "consulting":
        currentDownload = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/beije-people-first_presentazione_consulting.pdf"
        break;
      case "up":
        currentDownload = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/beije-people-first_presentazione_up.pdf"
        break;
      case "academy":
        currentDownload = "https://beije-people-first.s3.eu-south-1.amazonaws.com/site/beije-people-first_presentazione_talent_academy.pdf"
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
        target={"_blank"}
        rel="noreferrer"
      >
        {props.content}
      </a>
    </div>
  )
}

export default DownloadBtn