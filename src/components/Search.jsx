import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div >
        <div  className={styles['search']}>
           <input type="text" placeholder='search' />
        </div>
    </div>
  )
}

export default Search;