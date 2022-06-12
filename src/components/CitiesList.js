import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CitiesList.module.css';

const CitiesList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cities } = location.state;

  const getCity = e => {
    const city = cities.find(city => city.id === parseInt(e.target.value));
    navigate('/city-weather', { state: city });
  };

  if (cities.length === 0) {
    return (
      <div className={styles['not-found']}>
        <h2 className={styles.h2}>No Cities Found</h2>
        <button
          onClick={() => navigate('/')}
          className={styles['back-button-not-found']}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles['cities-container']}>
      <button className={styles['back-button']} onClick={() => navigate('/')}>
        Go Back
      </button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Location</th>
            <th>Country</th>
            <th>Population</th>
            <th>Select this City</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => {
            return (
              <tr key={city.id}>
                <td>{city.name}</td>
                <td>{city.admin1}</td>
                <td>{city.country}</td>
                <td>{city.population || 'Not Available'}</td>
                <td>
                  <button type="button" onClick={getCity} value={city.id}>
                    Select
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesList;
