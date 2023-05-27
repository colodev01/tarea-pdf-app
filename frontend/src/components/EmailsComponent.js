import React from "react";
import { useState } from "react";
import EmailInput from "./emailscomponent-fragments/EmailInput";
import EmailList from "./emailscomponent-fragments/EmailList";
import { Typography, Button } from "@mui/material";
import axios from "axios";

export default function EmailsComponent(props) {
  const { pdf } = props;
  const [emails, setEmails] = useState([]);
  const [componentVisible, setComponentVisible] = useState(true);

  const handleAddEmail = (email) => {
    setEmails([...emails, email]);
  };

  const handleRemoveEmail = (email) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSubmit = () => {
    // Primero creamos el objeto que se va a añadir al POST
    const data = {
      docname: pdf[0].docname, // Nombre del documento
      documento: pdf[0].documento.split(",")[1], // Valor del documento PDF codificado en Base64
      metadata: {
        cargo: "tester",
        razon: "prueba de desarrollo",
        localidad: "Mendoza",
      },
      /*
      -> reduce() es un método iterativo que retorna un valor determinado por cada
      elemento del array
      */
      lista_emails: emails.reduce((acc, email, index) => {
        acc[`email(${index + 1})`] = email;
        return acc;
      }, {}),
      fecha: new Date().toUTCString(),
      url_callback: "url_callback_ejemplo", // Aquí se coloca la URL de respuesta del backend
    };
    console.log(data)
    axios
      .post("https://tarea-pdf-react/civisign/serviciofirma", data)
      .then((response) => {
        console.log("Respuesta:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  const toggleComponentVisibility = () => {
    setComponentVisible(!componentVisible);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleComponentVisibility}
        style={{ marginBottom: "10px" }}
      >
        {componentVisible ? "Ocultar firmantes" : "Mostrar firmantes"}
      </Button>
      {componentVisible && (
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
          <div className="email_component-input" style={{marginLeft: "10px", marginRight: "10px"}}>
            <EmailInput onAddEmail={handleAddEmail} />
          </div>
          <div
            className="email_component_list-container"
            style={{
              backgroundColor: "#d6ffff",
              borderRadius: "13px",
              width: "auto",
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
                Los siguientes contactos serán notificados para firmar el
                presente documento.
              </Typography>
            </div>
            <div
              className="email_list-scroll-container"
              style={{
                maxHeight: "300px", // Establece una altura máxima para mostrar el scrollbar
                overflowY: "auto", // Habilita el desbordamiento vertical
              }}
            >
              <EmailList emails={emails} onRemoveEmail={handleRemoveEmail} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                disabled={emails.length === 0}
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#48c1f4",
                  borderRadius: "50px",
                  marginBottom: "30px",
                }}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
