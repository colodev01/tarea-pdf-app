import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50%" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        sx={{ backgroundColor: "#d1ebf7" }}
        id="standard-required"
        defaultValue=""
        variant="standard"
        type="email"
      />
      <IconButton color="primary" aria-label="Agregar">
        <AddIcon />
      </IconButton>
    </Box>
  );
}
