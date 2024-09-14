import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <center>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">
              <u>Todo Management App</u>
            </h5>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="task"
                placeholder="enter task here..."
                value={task}
                onChange={handleChange}
                className="form-control w-50"
              />
              <button type="submit" className="btn btn-success p-2 m-3 w-25">
                ADD
              </button>
            </form>
          </div>
          {todos.map((todo, index) => (
            <div key={index}>
              <p>
                {todo} &nbsp;{" "}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteHandler(index)}
                >
                  Remove
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </center>
  );
};

export default App;
