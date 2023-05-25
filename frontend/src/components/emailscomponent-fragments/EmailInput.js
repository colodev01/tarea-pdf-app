import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const EmailInput = ({ onAddEmail }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setError(false); // Limpiar el estado de error al cambiar el valor del input
  };

  const handleAddEmail = () => {
    if (email.trim() !== "") {
      if (validateEmail(email)) {
        onAddEmail(email);
        setEmail("");
        setError(false);
      } else {
        setError(true); // Establecer el estado de error si el formato del correo es incorrecto
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div
      className="email_input-container"
      style={{
        marginTop: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "300px",
      }}
    >
      <TextField
        id="standard-basic"
        value={email}
        variant="standard"
        onChange={handleInputChange}
        style={{ backgroundColor: "#d6ffff", width: "100%", marginTop: "10px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddIcon
                onClick={handleAddEmail}
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          ),
        }}
        error={error} // Agregar el estado de error al TextField
        helperText={error ? "Ingrese un correo electrónico válido" : ""} // Mostrar un mensaje de error si es necesario
      />
    </div>
  );
};

export default EmailInput;
