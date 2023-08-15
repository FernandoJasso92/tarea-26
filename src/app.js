const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./controllers/error.controller');

//routes
const userRoutes = require('./routes/user.routes');
const repairsRoutes = require('./routes/repairs.routes');

const app = express();

app.use(express.json());
app.use(cors());

//rutas
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/repairs', repairsRoutes);

app.use(globalErrorHandler);

module.exports = app;
