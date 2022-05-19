import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const data = useSelector((state) => state.todo.Ptodo);
  const data1 = useSelector((state) => state.todo.Oftodo);
  const data2 = useSelector((state) => state.todo.Othtodo);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          width: "95%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "7px",
        }}
      >
        <div>
          <div style={{ backgroundColor: "yellow", textDecoration: "none" }}>
            All
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                color: "white",
                backgroundColor: "green",
                fontWeight: "700",
                padding: "5px",
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <span> Personal</span>
              <span> {data.length}</span>
            </div>
          </Link>
          <Link to="/official" style={{ textDecoration: "none" }}>
            <div
              style={{
                color: "white",
                backgroundColor: "yellowgreen",
                fontWeight: "700",
                padding: "5px",
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <span>Official</span>
              <span>{data1.length}</span>
            </div>
          </Link>
          <Link to="/other" style={{ textDecoration: "none" }}>
            <div
              style={{
                color: "white",
                backgroundColor: "yellowgreen",
                fontWeight: "700",
                padding: "5px",
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              {" "}
              <span>Others</span>
              <span>{data2.length}</span>
            </div>
          </Link>
          <div>
            <Link
              to="/add"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "700",
                backgroundColor: "blue",
                padding: "5px",
                display: "flex",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              ADD To Do
            </Link>
          </div>
        </div>

        <div>
          <button style={{ width: "100%", padding: "5px" }}>SignOut</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
