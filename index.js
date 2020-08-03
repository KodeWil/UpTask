const express = require('express');
const { request, response } = require('express');
const routes = require('./routes');

//Crear una app de express
const app = express();

app.use('/', routes() );
app.listen(3000);



