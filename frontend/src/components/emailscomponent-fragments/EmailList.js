import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const EmailList = ({ emails, onRemoveEmail }) => {
  const handleRemoveEmail = (email) => {
    onRemoveEmail(email);
  };

  return (
    <div>
      {emails.map((email, index) => (
        <div
          key={email}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              marginRight: "10px",
              borderBottom: index === emails.length - 1 ? "none" : "1px solid #a6dced",
              paddingBottom: "20px",
            }}
          >
            {email}
          </div>
          <ClearIcon
            onClick={() => handleRemoveEmail(email)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
};

export default EmailList;
