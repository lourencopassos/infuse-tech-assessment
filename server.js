const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
  if (!req.body.string) {
    res.status(400).json({ error: 'Missing string to reverse' });
    return;
  }

  res.send({
    original: req.body.string,
    reversed: req.body.string.split('').reverse().join(''),
  });
});

app.use('/app', express.static(__dirname + '/app'));

app.listen(port, () => {
  console.log(`Server running @ http://localhost:${port}`);
});
