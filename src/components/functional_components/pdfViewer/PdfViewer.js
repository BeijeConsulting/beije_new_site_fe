import React from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Style
import "./PdfViewer.css";
import '@react-pdf-viewer/core/lib/styles/index.css';


const PdfViewer = (props) => {
  return (

    <Worker workerUrl="/pdf.worker.bundle.worker.js">
      <Viewer fileUrl={props.fileUrl} />;
    </Worker>
  )
}

export default PdfViewer