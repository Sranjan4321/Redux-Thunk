import React from "react";
import { useSelector } from "react-redux";
import Comp from "./Comp";
import Nodata from "./Nodata";
import { Com, Head, Main } from "./result.styled";

const Done = ({ props }) => {
  let datas;
  let data = useSelector((state) => state.todo.Ptodo);
  let data1 = useSelector((state) => state.todo.Oftodo);
  let data2 = useSelector((state) => state.todo.Othtodo);
  if (props === "personal") {
    datas = data;
  } else if (props === "official") {
    datas = data1;
  } else {
    datas = data2;
  }
  datas = datas.filter((elm) => elm.done === "on");

  return (
    <Main>
      <Head style={{ backgroundColor: "lightgray" }}>Done</Head>
      {datas.length ? (
        datas.map((elem) => <Comp key={elem.id} elem={elem} />)
      ) : (
        <Nodata />
      )}
    </Main>
  );
};

export default Done;
