var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID  = require('mongodb').ObjectID;
var db = require('./db');
var artistsController = require('./conrolers/artists');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);



app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/pas', function (err ) {
    if (err){
        return console.log(err);
    }

    app.listen(3001, function () {
        console.log('connect...')
    })
});