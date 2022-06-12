import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ShowCity.module.css';

const configureReqParams = city => {
  const reqParams = new URLSearchParams();
  reqParams.append('latitude', city.latitude);
  reqParams.append('longitude', city.longitude);
  reqParams.append('temperature_unit', 'fahrenheit');
  reqParams.append('daily', 'temperature_2m_max');
  reqParams.append('daily', 'temperature_2m_min');
  reqParams.append('daily', 'precipitation_sum');
  reqParams.append('timezone', city.timezone);
  return reqParams;
};

const configureResponse = data => {
  const configuredWeather = [];
  for (const [index, time] of Object.entries(data.time)) {
    const weatherObj = {};
    weatherObj['id'] = index;
    weatherObj['day'] = time;
    weatherObj['precipitation_sum'] = data.precipitation_sum[index];
    weatherObj['temperature_2m_max'] = data.temperature_2m_max[index];
    weatherObj['temperature_2m_min'] = data.temperature_2m_min[index];
    configuredWeather.push(weatherObj);
  }
  return configuredWeather;
};

// Why is this rendering 6 times

const ShowCity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [city, setCity] = useState(location.state);
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    const getCityWeather = async () => {
      const reqParams = configureReqParams(city);
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast`,
        {
          params: reqParams,
        }
      );
      const { daily } = response.data;
      setCityWeather(configureResponse(daily));
    };
    getCityWeather();
  }, [city]);

  return (
    <>
      <button
        onClick={() => navigate('/')}
        className={styles['back-to-search-btn']}
      >
        Back to Search
      </button>
      <h2 className={styles['city-h2']}>
        {city.name}, {city.admin1}, {city.country}
      </h2>
      <div className={styles['weather-container']}>
        {cityWeather.map(day => {
          return (
            <div className={styles['day-card']} key={day.id}>
              <h4>
                Date: <span>{day.day}</span>
              </h4>
              <h4>
                Precipitation Amount: <span>{day.precipitation_sum}mm</span>
              </h4>
              <h4>
                Mininimum Temperature:{' '}
                <span>{day.temperature_2m_min} degrees</span>
              </h4>
              <h4>
                Maximum Temperature:{' '}
                <span>{day.temperature_2m_max} degrees</span>
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowCity;
