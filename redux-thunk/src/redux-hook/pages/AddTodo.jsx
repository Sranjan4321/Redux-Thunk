import React, { useState } from "react";
import { Form, Subform } from "./page.styled";
import { v4 as uuid } from "uuid";
import ShowTodo from "./ShowTodo";
const AddTodo = () => {
  const [data, setData] = useState({});
  const [add, setAdd] = useState([]);
  const [newdata, setNewdata] = useState("");
  const changehandle = (e) => {
    const inputName = e.target.name;
    // console.log(e.target.checked);
    // console.log(e.target.name);
    if (
      inputName === "official" ||
      inputName === "personal" ||
      inputName === "other"
    ) {
      setData({ ...data, [inputName]: e.target.checked });
    } else {
      setData({ ...data, [inputName]: e.target.value });
    }
  };
  const handleNew = (e) => {
    e.preventDefault();
    let data = newdata;
    setAdd([...add, data]);
    setNewdata("");
    console.log(add);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, todo: [...add], id: uuid() }),
    });
  };
  const deletedata = (ind) => {
    let filterdata = add.filter((elm) => elm !== ind);
    setAdd(filterdata);
  };
  return (
    <Form>
      <Subform>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={changehandle}
        />
        <textarea
          type="textarea"
          rows={"5"}
          cols={"20"}
          name="textarea"
          style={{ resize: "none" }}
          onChange={changehandle}
        />
        <div>
          <div>
            <input type="radio" name="todos" onChange={changehandle} />
            <label>Todo</label>
          </div>
          <div>
            <input type="radio" name="progress" onChange={changehandle} />
            <label>In Progress</label>
          </div>
          <div>
            <input type="radio" name="done" onChange={changehandle} />
            <label>Done</label>
          </div>
        </div>
        <div>
          <div style={{ marginTop: "20px" }}>Tag</div>
          <div>
            <input type="checkbox" name="official" onChange={changehandle} />
            <label>Official</label>
          </div>
          <div>
            <input type="checkbox" name="personal" onChange={changehandle} />
            <label>personal</label>
          </div>
          <div>
            <input type="checkbox" name="other" onChange={changehandle} />
            <label>other</label>
          </div>
        </div>
      </Subform>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <input
              type="text"
              name="addtitle"
              value={newdata}
              onChange={(e) => setNewdata(e.target.value)}
            />
            <button onClick={handleNew}>ADD</button>
          </div>
          <div>
            {add.map((elm, ind) => (
              <ShowTodo key={ind} ranjan={elm} deletedata={deletedata} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <input type="date" name="date" onChange={changehandle} />
        </div>

        <div>
          <button onClick={handleSubmit}>create a new task </button>
        </div>
      </div>
    </Form>
  );
};

export default AddTodo;
