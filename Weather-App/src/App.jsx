import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeatherInfo = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("⚠️ Please enter a city name");
      setWeather(null);
      return;
    }

    setError("Fetching weather...");
    setWeather(null);

    try {
      const res = await axios.get(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
      );

      if (!res.data.current || !res.data.current.feelslike_c) {
        setError(`❌ The city "${city}" does not exist.`);
        return;
      }

      setWeather(res.data.current);
      setError("");
    } catch (err) {
      setError("⚠️ Unable to fetch data. Please try again later.");
    }
  };

  return (
    <div className="weather-container">
      <h1 className="title">🌦️ Weather App</h1>

      <form onSubmit={getWeatherInfo} className="form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <div className="message">{error}</div>}

      {weather && (
        <div className="card">
          <h2>{city.toUpperCase()}</h2>
          <img src={weather.condition.icon} alt="icon" />
          <p>🌡️ Temperature: {weather.feelslike_c}°C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>🌬️ Wind Speed: {weather.wind_kph} kph</p>
          <p>🌤️ Condition: {weather.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;
