const express = require('express');

const path = require('path');

const mainRouters = require('./routes/main');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use('/', mainRouters);

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});