
var express = require('express');
app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Record = require('./api/models/apiModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RecordDB');

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));

});

var routes = require('./api/routes/apiRoute');
routes(app);

app.listen(port);

console.log('Node REStful API is on port :  ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});