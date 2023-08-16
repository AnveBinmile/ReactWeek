import React from 'react';
import TodoList from './TodoList';
import Search from './Search';
import styles from './TodoApp.module.css'

const TodoApp = () => {
  return (
    <div className={styles['todoApp']}>
        <Search/>
        <TodoList/>
    </div>
  )
}

export default TodoApp;