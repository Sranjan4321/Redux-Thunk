import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Result from "../components/Result";
import { Others } from "../redux/personal/action";
const Other = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(" http://localhost:8080/data")
      .then((res) => res.json())
      .then((d) => dispatch(Others(d)));
  }, []);
  return (
    <div>
      <Result props="other" />
    </div>
  );
};

export default Other;
