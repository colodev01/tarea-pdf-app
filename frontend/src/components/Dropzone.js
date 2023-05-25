import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function PdfDropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onload = () => {
        let arr = [];
        let base64 = reader.result;
        arr = base64.split(",");
        handleAddItem({
          docname: acceptedFiles[0].name,
          documento: base64,
          fecha: acceptedFiles[0].lastModifiedDate,
        });
      };
    }
  });

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      onDrop,
      accept: { "application/pdf": [] },
      maxFiles: 1,
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  const { handleAddItem } = props;

  return (
    <div
      className="dropzone-container"
      style={{
        marginTop: "15px",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      {fileRejectionItems.length !== 0 ? (
        <div>Solo se permiten archivos PDF</div>
      ) : null}
      <div className="dropzone-container">
        <div
          className="dropzone-title"
          style={{
            backgroundColor: "#48c1f4",
            color: "white",
            borderTopLeftRadius: "13px",
            borderTopRightRadius: "13px",
          }}
        >
          <Typography align="left" marginLeft={2} paddingTop={1} paddingBottom={1}>Visor de PDF</Typography>
        </div>
      </div>
      <div
        {...getRootProps()}
        style={{
          height: "200px",
          border: "2px solid #d1ebf7",
          borderBottomLeftRadius: "13px",
          borderBottomRightRadius: "13px",
          backgroundColor: "#d6ffff",
        }}
      >
        <input {...getInputProps()} />
        <div
          className="dropbox-text"
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <CloudUploadIcon sx={{ color: "#808080", fontSize: "60px" }} />
          <Typography style={{ color: "#808080" }}>
            Arrastra y suelta un archivo PDF aquí, o haz clic para seleccionar
            uno.
          </Typography>
        </div>
      </div>
    </div>
  );
}
