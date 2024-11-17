const express = require('express');
const app = express();
const port = 3000;
const dbConnect = require('./config/db');
const pacienteRoutes = require('./routes/paciente.router');
const medicoRoutes = require('./routes/medico.router');
const especialidadRoutes = require('./routes/especialidad.router');
const consultasMedicasRoutes = require('./routes/consulta.router');
const historialMedicoRoutes = require('./routes/historial.router');
const usuarioRoutes = require('./routes/usuario.router');

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
app.use('/api', pacienteRoutes); // Prefijo para las rutas

app.use(express.json());
app.use('/api', medicoRoutes); // Prefijo

app.use(express.json());
app.use('/api', especialidadRoutes); // Prefijo

app.use(express.json());
app.use('/api', consultasMedicasRoutes); // Prefijo

app.use(express.json());
app.use('/api', historialMedicoRoutes); // Prefijo

app.use(express.json());
app.use('/api', usuarioRoutes); // Prefijo

app.get('/', (req, res) => {
  res.send('Consultorio server en express');
});

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
