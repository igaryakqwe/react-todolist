import "./styles/style.css";
import TodoForm from "./components/todo-form";
import React, {useState} from "react";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState([]);
  const counter = todos.length + 1;

  const addTodo = (text) => {
    const newTodo = { id: counter + 1, text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  return (
    <div>
      <TodoForm add={addTodo} />
      <TodoList todos={todos} remove={removeTodo} />
    </div>
  );
}

export default App;
