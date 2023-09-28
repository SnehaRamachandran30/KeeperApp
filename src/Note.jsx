import React from "react";

const styleComponent3 = {
  width: "240px",
  border: "1px solid white",
  borderRadius: "8px",
  padding: "2px",
  marginLeft: "30px",
  marginTop: "20px",
  backgroundColor: "white",
  boxShadow: "0 3px 3px #C0C0C0"
};
const heading = {
  fontSize: "18px",
  padding: "5px 5px",
  margin: "0"
};
const para = {
  fontSize: "18px",
  paddingBottom: "14px",
  paddingLeft: "5px"
};
function note() {
  return (
    <div style={styleComponent3}>
      <h1 style={heading}>This is the note title</h1>
      <p style={para}>This is the note content</p>
    </div>
  );
}

export default note;
