function WeatherCard({ data }) {
  const getDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="weather-card">
      <div className="city-name">
        {data.city}, {data.country}
      </div>
      <div className="date-time">{getDate()}</div>

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
          <span className="detail-icon">🌡️</span>
          <span className="label">Feels Like</span>
          <span className="value">{Math.round(data.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <span className="label">Humidity</span>
          <span className="value">{data.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <span className="label">Wind</span>
          <span className="value">{data.wind_speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;