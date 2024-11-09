const express = require('express');
const app = express();
const port = 3000;
const dbConnect = require('./config/db');

// Verificar la conexión a la base de datos
dbConnect
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

app.get('/', (req, res) => {
  res.send('Consultorio server en express');
});

app.listen(port, () => {
  console.log('Mi puerto' + port);
});
