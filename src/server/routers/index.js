var router_libro = require('../apps/libros/controller');
var router_revista = require('../apps/revistas/controller');
var router_reserva = require('../apps/reservas/controller');
var router_perfil = require('../apps/profile/controller');
var router_login = require('../apps/login/controller');

var routers  = function (server) {
	server.use('/', router_libro);
	server.use('/', router_revista);
	server.use('/',router_reserva);
	server.use('/',router_perfil);
	server.use('/',router_login);
	
};
module.exports = routers;





// module.exports =  function(app){

// 	var jsonfileservice = require('./utils/jsonfileservice')();

// 	app.get('/libros',function(req,res){

// 		var json = jsonfileservice.getJsonFromFile('/../../data/libro.json');
// 		res.send(json);
// 	});
	
// 	app.get('/revistas',function(req,res){

// 		var json = jsonfileservice.getJsonFromFile('/../../data/revistas.json');
// 		res.send(json);
// 	});

// 	app.get('/tesis',function(req,res){

// 		var json = jsonfileservice.getJsonFromFile('/../../data/tesis.json');
// 		res.send(json);
// 	});

// }