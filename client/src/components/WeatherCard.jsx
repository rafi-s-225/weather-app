function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <div className="city-name">
        {data.city}, {data.country}
      </div>

      <div className="weather-icon">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
      </div>

      <div className="temperature">{Math.round(data.temperature)}°C</div>

      <div className="description">{data.description}</div>

      <div className="details">
        <div className="detail-item">
          <span className="label">Feels Like</span>
          <span className="value">{Math.round(data.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{data.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed</span>
          <span className="value">{data.wind_speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;