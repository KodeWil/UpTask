 const express = require('express');
const routes = require('./routes');
const path = require('path');

//Crear una app de express
const app = express();

//Static files

app.use(express.static('public'));

//Use pug
app.set('view engine', 'pug');

//Views
app.set('views', path.join(__dirname, './views'));

//Routes
app.use('/', routes() );
app.listen(3000);



