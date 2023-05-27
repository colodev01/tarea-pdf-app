import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Viewer from "./Viewer.js";
import EmailsComponent from "./EmailsComponent.js";

export default function ViewerAndEmail(props) {
  const { pdf } = props;
  /*
  -> Aquí se utilizan dos fragmentos Grid para ubicar tanto
  el componente Viewer como el de Email, que ambos formar en
  conjunto un solo componente exportable
  */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper
            style={{
              marginLeft: "10px",
              marginTop: "10px",
              maxHeight: "90vh", // Establece una altura máxima para mostrar el scrollbar
              overflowY: "auto", // Habilita el desbordamiento vertical
            }}
          >
            <Viewer pdf={pdf} />
          </Paper>
        </Grid>
        <Grid item xs={4} marginTop={2}>
          <Paper style={{ marginRight: "10px"}}>
            <EmailsComponent pdf={pdf} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
