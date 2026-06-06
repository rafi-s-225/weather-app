const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/weather?city=London
router.get('/', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("API KEY BEING USED:", apiKey);
    console.log("URL:", url);

    const response = await axios.get(url);
    const data = response.data;

    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      wind_speed: data.wind.speed,
    });

  } catch (error) {
    console.log("FULL ERROR:", error.message);
    console.log("RESPONSE ERROR:", error.response?.data);
    console.log("API KEY BEING USED:", process.env.OPENWEATHER_API_KEY);

    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
});                  
module.exports = router;