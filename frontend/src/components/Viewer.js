import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  defaultLayoutPlugin
} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";

export default function PdfViewer(props) {
  const { pdf } = props;
  const [file, setFile] = useState();

  /*
  Se crea una barra de tareas personalizada para adjuntarla junto
  al visor renderizado.
  */
  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ZoomIn,
          ZoomOut,
        } = slots;

        return (
          <div style={{ alignItems: "center", display: "flex" }}>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#c0c0c0",
                      border: "none",
                      borderRadius: "20px",
                      color: "#000000",
                      cursor: "pointer",
                      padding: "3px",
                      marginLeft: "5px",
                    }}
                    onClick={props.onClick}
                  >
                    <RemoveIcon />
                  </button>
                )}
              </ZoomOut>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#c0c0c0",
                      border: "none",
                      borderRadius: "20px",
                      color: "#000000",
                      cursor: "pointer",
                      padding: "3px",
                    }}
                    onClick={props.onClick}
                  >
                    <AddIcon />
                  </button>
                )}
              </ZoomIn>
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                      padding: "3px",
                      marginLeft: "10px"
                    }}
                    disabled={props.isDisabled}
                    onClick={props.onClick}
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
              </GoToPreviousPage>
            </div>
            <div style={{ padding: "0px 2px", width: "4rem" }}>
              <CurrentPageInput />
            </div>
            <div style={{ padding: "0px 2px" }}>
              {" "}
              de <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                      padding: "3px",
                    }}
                    disabled={props.isDisabled}
                    onClick={props.onClick}
                  >
                    <ChevronRightIcon />
                  </button>
                )}
              </GoToNextPage>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  return (
      <div
        className="pdf-viewer-container"
        style={{
          backgroundColor: "#48c1f4",
          color: "white",
          borderTopLeftRadius: "13px",
          borderTopRightRadius: "13px",
        }}
      >
        <Typography marginLeft={2} paddingTop={1} paddingBottom={1}>
          {pdf[0].docname}
        </Typography>
        {pdf && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" >
          <Viewer
            fileUrl={pdf[0].documento}
            plugins={[defaultLayoutPluginInstance]}
          >
          </Viewer>
        </Worker>
      )}
      </div>    
  );
}
