const express = require('express');
const app = express();
const port = 8080;

const inicioRoute = require('./routes/inicioRoute');

app.get('/', (req, res) => {
    res.send('Hola NodeJS con Express');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}); 