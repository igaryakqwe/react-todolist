import React, {useState} from 'react';
import TodoList from "../todo-list/todo-list";
import "./todo-form.css"

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState();
  const counter = todos.length + 1;

  const addTodo = (e) => {
    const todoFabric = (id, text) => {
      return {id, text}
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      setTodos([...todos, todoFabric(counter, value)]);
      setValue('');
    }
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(e => e.id !== todo.id))
  }

  return (
    <div>
      <form>
        <input value={value} onChange={e => setValue(e.target.value)} onKeyDown={addTodo} type="text" />
      </form>
      <TodoList remove={removeTodo} todos={todos} />
    </div>
  );

}

export default TodoForm;