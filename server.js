const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('weather4')); // Serve your HTML file

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/weather', async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc0827f2217cb61484e7fa326dfe4d56&units=metric`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
