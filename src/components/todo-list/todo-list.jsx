import Todo from "../todo/todo";
import "./todo-list.css"


const TodoList = (props) => {
  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      {props.todos.map(todo =>
        <Todo remove={props.remove} todo={todo} key={todo.id} />
      )}
    </div>
  );
};

export default TodoList;
