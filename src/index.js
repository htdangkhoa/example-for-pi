const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.all('/', (req, res) => res.send('Hello World!'));

app.all('/name', (req, res) => res.send(req.query));

app.listen(PORT, () => console.log('Listening on port ' + PORT));
