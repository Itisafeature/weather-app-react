import { useState } from 'react';
import styles from './Search.module.css';

const Search = () => {
  const [enteredCity, setEnteredCity] = useState('');

  return (
    <form class={styles.form}>
      <input
        className={styles.input}
        onChange={e => setEnteredCity(e.target.value)}
        id="city-input"
        type="text"
        value={enteredCity}
      />
      <button>Search for City</button>
    </form>
  );
};

export default Search;
