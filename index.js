const express = require('express');
const app = express();
const port = 3000;
const dbConnect = require('./config/db');
const pacienteRoutes = require('./routes/paciente.router');
const medicoRoutes = require('./routes/medico.router');
const especialidadRoutes = require('./routes/especialidad.router');

// Verificar la conexión a la base de datos
dbConnect
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

app.use(express.json()); // Parsear el cuerpo de las solicitudes JSON
app.use('/api', pacienteRoutes); // Prefijo para las rutas de pacientes

app.use(express.json());
app.use('/api', medicoRoutes); // Prefijo para las rutas de médicos

app.use(express.json());
app.use('/api', especialidadRoutes); // Prefijo para las rutas de especialidades

app.get('/', (req, res) => {
  res.send('Consultorio server en express');
});

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
