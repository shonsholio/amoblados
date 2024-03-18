const express = require('express');
const morgan = require('morgan')
const path = require('path');

const app = express();

//IMPORTING ROUTES
console.log(__dirname)
const mainRoutes = require('./routes/main')

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//ROUTES
app.use('/', mainRoutes);

//STATIC FILEs
app.use(express.static(path.join(__dirname, './public')));

app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT 3000')
});