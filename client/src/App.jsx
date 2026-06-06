import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import "./index.css";

function App() {
  const BASE_URL = 'https://weather-app-hft3.onrender.com';
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(`${BASE_URL}/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the spelling and try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤 Weather App</h1>
      <p className="subtitle">Get real-time weather for any city</p>
      <SearchBar onSearch={fetchWeather} />
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <span>Fetching weather...</span>
        </div>
      )}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;