const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const dbConnect = require('./config/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.router');
const pacienteRoutes = require('./routes/paciente.router');
const medicoRoutes = require('./routes/medico.router');
const especialidadRoutes = require('./routes/especialidad.router');
const consultasMedicasRoutes = require('./routes/consulta.router');
const historialMedicoRoutes = require('./routes/historial.router');
const usuarioRoutes = require('./routes/usuario.router');
require('dotenv').config();

// Configurar CORS
app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

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
app.use('/api', medicoRoutes);

app.use(express.json());
app.use('/api', especialidadRoutes);

app.use(express.json());
app.use('/api', consultasMedicasRoutes);

app.use(express.json());
app.use('/api', historialMedicoRoutes);

app.use(express.json());
app.use('/api', usuarioRoutes);

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Consultorio server en express');
});

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
