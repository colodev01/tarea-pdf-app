import React, { useState } from "react";
import Viewer from "react-viewer";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";
import cloudImg from "../images/image_processing20210621-18852-kr2kez.png";
import { PDFViewer } from "@react-pdf/renderer";

export default function PdfDropzone() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewerVisible, setViewerVisible] = useState(false);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setPdfFile(URL.createObjectURL(file));
      setViewerVisible(true);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop,accept: { "application/pdf": [] } });

  if (pdfFile) {
    return (
      <div className="viewer-container">
        <div className="viewer-title"></div>
      </div>
    );
  }

  return (
    <div
      className="dropzone-container"
      style={{
        marginTop: "15px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Typography
        align="left"
        style={{
          backgroundColor: "#48c1f4",
          color: "white",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      >
        Visor de PDF
      </Typography>
      <div
        {...getRootProps()}
        style={{
          height: "200px",
          border: "2px solid #a6dced",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          backgroundColor: "#00ffff",
        }}
      >
        <input {...getInputProps()} />
        <div
          classname="dropbox-text"
          style={{
            marginTop: "30px",
          }}
        >
          <img src={cloudImg} width={45} height={45} color="#646464" />
          <Typography style={{ color: "#808080" }}>
            Arrastra y suelta un archivo PDF aquí, o haz clic para seleccionar
            uno.
          </Typography>
        </div>
      </div>
    </div>
  );
}
