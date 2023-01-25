const express = require('express');

const mainRouters = require('./routes/main');

const app = express();

app.use(express.static('public'));

app.use('/', mainRouters);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});