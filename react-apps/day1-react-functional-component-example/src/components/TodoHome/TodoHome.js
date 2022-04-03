import React from 'react';
import styles from './TodoHome.module.css';
import TodoDataService from '../../service/todo-data-service';
import TodoGrid from '../TodoGrid/TodoGrid';
import TodoForm from '../TodoForm/TodoForm';

const TodoHome = () => (
  <div className={styles.TodoHome}>
    TodoHome Component
    <TodoForm />
    <TodoGrid />
  </div>
);

export default TodoHome;
