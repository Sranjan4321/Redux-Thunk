import React from "react";
import { Com } from "./result.styled";

const Comp = ({ elem }) => {
  //   console.log(elem);
  let val;
  if (elem.personal === true) {
    val = "personal";
  } else if (elem.other === true) {
    val = "Other";
  } else {
    val = "Official";
  }
  return (
    <div
      style={{ width: "90%", border: "1px solid black", margin: "10px auto" }}
    >
      <div>{elem.title}</div>
      <Com>
        {val} {elem.date}
      </Com>
      <div className="area">{elem.textarea}</div>
      <ul>
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          {elem.todo.map((d, ind) => (
            <div key={ind}> {d}</div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Comp;
