import { useState } from 'react';

const Search = () => {
  const [enteredCity, setEnteredCity] = useState('');

  return (
    <form>
      <input
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
