import Todo from "../todo";
import "./todo-list.module.css"
import styles from "./todo-list.module.css"


const TodoList = ({todos, remove}) => {
  return (
    <div className={styles.todoList}>
      {todos.map(todo =>
        <Todo remove={remove} todo={todo} key={todo.id} />
      )}
    </div>
  );
};

export default TodoList;
