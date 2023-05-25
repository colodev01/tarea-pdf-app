import React from "react";
import { useState } from "react";
import EmailInput from "./emailscomponent-fragments/EmailInput";
import EmailList from "./emailscomponent-fragments/EmailList";
import { Typography, Button } from "@mui/material";

export default function EmailsComponent() {
  const [emails, setEmails] = useState([]);

  const handleAddEmail = (email) => {
    setEmails([...emails, email]);
  };

  const handleRemoveEmail = (email) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los correos electrónicos
    // o realizar cualquier otra acción necesaria al hacer clic en el botón Submit
    console.log("Emails:", emails);
  };

  return (
    <div
      className="email_component-container"
      style={{
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px",
        paddingBottom: "5px",
      }}
    >
      <div
        className="email_component-title"
        style={{
          backgroundColor: "#48c1f4",
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Typography textAlign={"center"} paddingTop={1} paddingBottom={1}>
          Firmantes
        </Typography>
      </div>
      <EmailInput onAddEmail={handleAddEmail} />
      <div
        className="email_component_list-container"
        style={{
          backgroundColor: "#d6ffff",
          borderRadius: "13px",
          width: "fit-content",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "10px",
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="email_component_list-title">
          <h2>Firmantes a notificar</h2>
        </div>
        <div className="email_component_list-paragraph">
          <Typography style={{ paddingBottom: "30px" }}>
            Los siguientes contactos serán notificados para firmar el presente documento.
          </Typography>
        </div>
        <EmailList emails={emails} onRemoveEmail={handleRemoveEmail} />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit} style={{backgroundColor: "#48c1f4", borderRadius: "50px", marginBottom: "300px"}}>
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
