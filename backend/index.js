const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const path = require('path');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Cargar los módulos de direccionamiento de rutas
app.use('/api/persona', require('./routes/persona.route.js'));
app.use('/api/dependencia', require('./routes/dependencia.route.js'));
app.use('/api/personal', require('./routes/personal.route.js'));
app.use('/api/funcionario', require('./routes/funcionario.route.js'));
app.use('/api/vigilancia', require('./routes/vigilancia.route.js'));
app.use('/api/turno', require('./routes/turno.route.js'));

// Sirve archivos estáticos desde el directorio uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Settings
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
