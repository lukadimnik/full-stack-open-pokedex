const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000;

app.use(express.static('dist'));

app.get('/health', (req, res) => {
  res.send('ok'); // send ok if the app is working
});

app.get('/version', (req, res) => {
  res.send('6'); // change this string to ensure a new version deployed
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 4000');
});
