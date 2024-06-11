import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="text-white d-flex justify-content-around align-items-center my-4"
        style={{
          padding: "10px",
          border: "1px solid white",
          flexDirection: "row",
          width:"70%",
          marginLeft:"250px",
          backgroundColor:"rgb(71, 71, 71)",
          borderRadius:"14px"
        }}
      >
        <div
          className="d-flex  align-items-center "
          style={{ flexDirection: "row" }}
        >
          <div
            className="text-white d-flex justify-content-around align-items-start"
            style={{ padding: "10px", flexDirection: "column" }}
          >
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              style={{borderRadius:"8px"}}
            />
          </div>
          <div  className="text-white d-flex justify-content-around align-items-start"
            style={{ padding: "10px", flexDirection: "column" }}>
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
            style={{borderRadius:"8px"}}
          />
          </div>
        </div>
        <button className="btn btn-success" type="submit" style={{width:"13%", borderRadius:"15px"}} >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
