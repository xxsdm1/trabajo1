var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var routes;

app.use(bodyparser.urlencoded({extended: true,}));
app.use(bodyparser.json());

app.use('/',express.static('./src/client/'));



// app.get('*',function(req, res){
	
// 	res.sendfile('./src/client/index.html');
// });

require('./routers')(app);

app.listen(12000);

console.log("Servidor escuchando al puerto 3000");