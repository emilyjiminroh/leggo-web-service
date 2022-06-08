const express = require('express');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3333;
const indexRouter = require('./routes');
const engines = require('consolidate');


// set view engine
app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});