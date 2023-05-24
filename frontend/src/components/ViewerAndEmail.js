import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Viewer from "./Viewer.js";
import EmailsComponent from "./EmailsComponent.js";

export default function ViewerAndEmail(props) {
  const { pdf } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item xs={8}>
          <Paper>
            <Viewer pdf={pdf} />
          </Paper>
        </Grid>
        <Grid item xs={4} marginTop={2}>
          <Paper>
            <EmailsComponent pdf={pdf} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}