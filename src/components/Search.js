import { useState } from 'react';
import axios from 'axios';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [enteredCity, setEnteredCity] = useState('');

  const searchCityHandler = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${enteredCity}`
    );
    navigate('/found-cities', { state: { cities: response.data.results } });
  };

  return (
    <form onSubmit={searchCityHandler} className={styles.form}>
      <input
        className={styles.input}
        onChange={e => setEnteredCity(e.target.value)}
        id="city-input"
        type="text"
        value={enteredCity}
      />
      <button type="submit" className={styles.btn}>
        Search for City
      </button>
    </form>
  );
};

export default Search;
