import React, { useState } from "react";
// import { Worker } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// Style
import "./PdfViewer.css";
import '@react-pdf-viewer/core/lib/styles/index.css';


const PdfViewer = (props) => {
  const [state, setState] = useState({
    numPages: null,
    pageNumber: 1
  })

  const onDocumentLoadSuccess = ({ numPages }) => () => {
    setState({
      numPages: numPages
    });
  }

  console.log("props pdf", props)

  return (

    // <Worker workerUrl="/pdf.worker.bundle.worker.js">
    //   <Viewer fileUrl={props.fileUrl} />;
    // </Worker>
    <div>
      <Document file={props.fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={state.pageNumber} />
      </Document>
      <p>
        Page {state.pageNumber} of {state.numPages}
      </p>
    </div>
  )
}

export default PdfViewer