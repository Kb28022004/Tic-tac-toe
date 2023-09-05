import React from "react";

function Square(props) {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{
  boxSizing:"border-box",
        height: "120px",
        width: "100%",
        border: "3px solid blue",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>{props.value}</h5>
    </div>
  );
}

export default Square;
