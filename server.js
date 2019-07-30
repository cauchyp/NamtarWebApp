var express= require('express');
var app = express();
const sqlite3 = require('sqlite3').verbose();


app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/view'));

app.get('/', function (request, response) {
    console.log(request.url);
    response.render('intro.ejs');

});

app.get('/histoire', function (request, response) {
    console.log(request.url);
    response.render('histoire.ejs', { paramettreTransmit: 'Je suis un Licornet' });

});

app.get('/reglesChap1', function (request, response) {
    console.log(request.url);
    response.render('reglesChap1.ejs', { paramettreTransmit: 'Je suis un Licornet' });

});

app.get('/reglesChap2', function (request, response) {
    console.log(request.url);
    response.render('reglesChap1.ejs', { paramettreTransmit: 'Je suis un Licornet' });

});

app.get('/testDataBase', function(request, response){
    // open database in memorys
    var db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });

    // close the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
})

app.listen(80);
console.log("application accessible ici : http://localhost:80/");
console.log('Script Entièrement Chargé');