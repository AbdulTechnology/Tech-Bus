const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const routeRoutes = require('./routes/route.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/routes', routeRoutes);

app.use('/api/users', userRoutes);

module.exports = app;
