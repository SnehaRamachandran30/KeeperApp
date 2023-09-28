import React from "react";
const styleComponenet2 = {
  color: "rgb(192, 192, 192)",
  textAlign: "center",
  position: "absolute",
  bottom: "0",
  width: "100vw"
};

const date = new Date();
const year = date.getFullYear();
function footer() {
  return <p style={styleComponenet2}>Copyright ⓒ {year}</p>;
}

export default footer;
