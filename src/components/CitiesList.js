import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CitiesList.module.css';

const CitiesList = () => {
  const location = useLocation();
  const { cities } = location.state;

  console.log(cities);
  if (cities.length === 0) {
    return <div>No Cities Found</div>;
  }

  return (
    <div>
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
                  <button>Select</button>
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
