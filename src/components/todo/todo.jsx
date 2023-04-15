import React from 'react';
import styles from './todo.module.css';
import CanIcon from "../svgs/can-icon";

const Todo = (props) => {
  const removeTodo = () => props.remove(props.todo);

  return (
    <div className={styles.todo}>
      <div className={styles.todo__section}>
        <input className={styles.checkbox} type="checkbox" name="checkbox" id="checkbox"/>
        <label className={styles.checkbox__label} htmlFor="checkbox">{props.todo.text}</label>
      </div>
      <button className={styles.button} onClick={removeTodo}>
        <CanIcon />
      </button>
    </div>
  );
};

export default Todo;
