const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const envFilePath = path.join(__dirname, '.env');
const envFileContent = fs.readFileSync(envFilePath, 'utf8');
envFileContent.split(/\r?\n/).forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex > 0) {
      const key = trimmed.substring(0, eqIndex).trim();
      const value = trimmed.substring(eqIndex + 1).trim();
      process.env[key] = value;
    }
  }
});

console.log("ENV FILE PATH:", envFilePath);
console.log("API KEY LOADED:", process.env.OPENWEATHER_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const weatherRoutes = require('./routes/weather');
app.use('/api/weather', weatherRoutes);

app.get('/', (req, res) => {
  res.send('Weather App Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});