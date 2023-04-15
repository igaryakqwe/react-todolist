import React, {useState} from 'react';
import styles from "./todo-form.module.css";

const TodoForm = ({add}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue) {
      add(trimmedValue);
      setValue("");
    }
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        type="text"
        required
      />
    </form>
  );
};

export default TodoForm;