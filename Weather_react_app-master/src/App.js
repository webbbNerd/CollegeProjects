import React, { useState } from 'react';

const api = {
  key: "11614fb9e4814cc1eb4ff9477fc95415",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = (eve) => {
    if (eve.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className = {(typeof weather.main != "undefined") ? ((weather.weather[0].main === "Clear") ? 'app warm': ((weather.weather[0].main === 'Haze') ?'app haze' : 'app')) : 'app none'}>
      <main>
        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder = "Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (<div>
          <h1 className="editnone">Please Write a country name</h1>
        </div>)}
      </main>
    </div>
  );
}

export default App;
