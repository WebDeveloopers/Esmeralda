import express from 'express';
import data from './data.js';

const app = express();
// Funcion que responde la API
//cuando es susuria vaya a esta direccion
//le mostraemos productos
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//

//Configuracion de puerto front
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
