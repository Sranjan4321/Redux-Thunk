import React from "react";

const ShowTodo = ({ ranjan, deletedata, ind }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        margin: "auto",
      }}
    >
      <div>{ranjan}</div>
      <div onClick={() => deletedata(ranjan)} style={{ cursor: "pointer" }}>
        X
      </div>
    </div>
  );
};

export default ShowTodo;
