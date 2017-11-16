'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router.post('/login',function(req,res){
	console.log("este es el req: " + req.body.idusuario);
	dataModels.validarUsuario(req.body, function(error,data){
		console.log("se recupero el usuario ruta" + data);
		res.send(data);
	});
	
});


module.exports = router;