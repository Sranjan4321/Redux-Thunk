import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Result from "../components/Result";
import { Persnols } from "../redux/personal/action";
import AddTodo from "./AddTodo";

const Personal = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    fetch(" http://localhost:8080/data")
      .then((res) => res.json())
      .then((d) => dispatch(Persnols(d)));
  }, []);
  return (
    <div>
      <Result props="personal" />
    </div>
  );
};

export default Personal;
