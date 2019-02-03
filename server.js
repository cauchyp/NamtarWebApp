var app = require('express')();

app.get('/', function(request,response) {
    console.log(request.url);
    response.render('index.ejs',{paramettreTransmit : 'Je suis un Licornet'});
});

app.listen(80);
console.log('Script Entièrement Chargé');