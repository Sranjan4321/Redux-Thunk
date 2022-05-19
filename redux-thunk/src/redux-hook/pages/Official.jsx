import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Result from "../components/Result";
import { Officials } from "../redux/personal/action";
const Official = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(" http://localhost:8080/data")
      .then((res) => res.json())
      .then((d) => dispatch(Officials(d)));
  }, []);
  return (
    <div>
      <Result props="official" />
    </div>
  );
};

export default Official;
