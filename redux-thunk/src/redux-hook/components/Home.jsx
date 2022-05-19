import React from "react";
import { Main } from "../Home.styed";
import AddTodo from "../pages/AddTodo";
import Personal from "../pages/Personal";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Official from "../pages/Official";
import Other from "../pages/Other";
const Home = () => {
  return (
    <Main>
      <div>
        <Navbar />
      </div>
      <div>
        {/* <AddTodo /> */}
        <Routes>
          <Route path="" element={<Personal />} />
          <Route path="official" element={<Official />} />
          <Route path="other" element={<Other />} />
          <Route path="add" element={<AddTodo />} />
        </Routes>
      </div>
    </Main>
  );
};

export default Home;
