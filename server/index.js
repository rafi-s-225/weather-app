const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Weather routes
const weatherRoutes = require('./routes/weather');
app.use('/api/weather', weatherRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Weather App Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});