const express = require('express');
const app = express();
const port = 8080;

const inicioRoute = require('./routes/inicioRoute');
const productosRoute = require('./routes/productosRoute');
app.use('/', inicioRoute);
app.use('/productos', productosRoute);



app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}); 