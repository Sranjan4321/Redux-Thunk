import React from "react";
import Todo from "./result/Todo";
import Done from "./result/Done";
import Progress from "./result/Progress";
import { Resul } from "./result/result.styled";
// import Personal from "../pages/Personal";

const Result = ({ props }) => {
  // console.log(props);
  return (
    <Resul>
      <Todo props={props} />
      <Progress props={props} />
      <Done props={props} />
    </Resul>
  );
};

export default Result;
