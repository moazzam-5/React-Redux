import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ addTodo }) {
  let [todo, setTodo] = useState({ name: "", date: "" });
  let [error, setError] = useState("");

  const todoName = (event) => {
    setTodo({ ...todo, name: event.target.value });
  };

  const todoDate = (event) => {
    setTodo({ ...todo, date: event.target.value });
  };

  const handleAddTodo = () => {
    if (!todo.name || !todo.date) {
      setError("Please fill out all fields");
    } else {
      addTodo(todo);
      setTodo({ name: "", date: "" });
      setError("");
    }
  };

  return (
    <>
      <div className="row">
        <input
          type="text"
          placeholder="Enter Name"
          className="col-6"
          value={todo.name}
          onChange={todoName}
        />
        <input
          type="date"
          className="col-4"
          value={todo.date}
          onChange={todoDate}
        />
        <button className="col-2 btn btn-success " onClick={handleAddTodo}>
          <MdAddBox />
        </button>
      </div>
      <div>{error && <p className="text-danger">{error}</p>}</div>
    </>
  );
}
export default AddTodo;
