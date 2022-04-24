const pureHttp = require('pure-http');

const PORT = process.env.PORT || 3000;

const app = pureHttp();

app.all('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log('Listening on port ' + PORT));
