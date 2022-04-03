import React from 'react';
import styles from './TodoForm.module.css';

const TodoForm = (props) => (
  <div className={styles.TodoForm}>
    TodoForm Component
    <label>Todo Title: </label><input id="titleName" type="text" className={styles.addButton} />
    <button onClick={props.add} className={styles.addButton}>Add</button>
    <button onClick={() => { props.update(props.titleName) }} className={styles.addButton}>Remove</button>
  </div>

);

export default TodoForm;
