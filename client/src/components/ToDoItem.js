import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(editTodo({ id: todo._id, todo: { completed: !todo.completed } }));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo._id));
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center m-1"
      style={{
        border: "1px solid white",
        paddingTop: "10px",
        width: "1000px",
        paddingBottom: "10px",
        paddingRight: "50px",
        paddingLeft: "50px",
        
      }}
    >
      <div>
        <h4  style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</h4>
        <h6  style={{ textDecoration: todo.completed ? "line-through" : "none" }}> Description: {todo.description}</h6>
      </div>
      <div className="">
        <button
        className="btn btn-primary mx-4"
          onClick={handleToggle}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.completed ? "Completed" : "Complete"}
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
