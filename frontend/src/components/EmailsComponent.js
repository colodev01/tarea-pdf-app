import React from "react";
import EmailInput from "./emailscomponent-fragments/EmailInput";
import { Typography } from "@mui/material";

export default function EmailsComponent() {
  return (
    <div className="email_component-container">
      <div
        className="email_component-title"
        style={{
          backgroundColor: "#48c1f4",
          color: "white",
          borderTopLeftRadius: "13px",
          borderTopRightRadius: "13px",
        }}
      >
        <Typography textAlign={"center"} paddingTop={1} paddingBottom={1}>
          Firmantes
        </Typography>
      </div>
      <EmailInput />
    </div>
  );
}
