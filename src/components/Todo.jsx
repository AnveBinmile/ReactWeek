import React from 'react';
import styles from './Todo.module.css';
import {faTrash} from '@fortawesome/free-solid-svg-icons';




const Todo = () => {
  return (
    <div>
        <p className={styles['todo']}> <faTrash/> Todo</p>
    </div>
  )
}

export default Todo;