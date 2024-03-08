import React, { useState } from 'react';
import axios from 'axios';
import "./weather.css";

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');

  const apiKey = '1b51d9624fd77d65bcbc2277ddc51798';

  const search = async (e) => {
    if (e.key === 'Enter') {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`
        );
        setWeather(data);
        setQuery('');
        setError('');
      } catch (error) {
        setError('City not found');
        setWeather({});
      }
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className='container-main'>
    <div className="weather-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {error && <div className="error">{error}</div>}
      {weather.main && (
        <div className="weather">
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Weather;
