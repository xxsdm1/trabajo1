'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router.get('/libros',function(req,res){
	dataModels.getLibros(function(error,data){
		res.send(data);
	});
	
});
router.get('/libros/:idLibro',function(req,res){
	var idLibro =  req.params.idLibro;
	dataModels.getLibro(idLibro,function(error,data){
		res.send(data);
	});
});
router.post('/libros',function(req,res){
	dataModels.reservar(req.body,function(error,data){
		res.send("data");
	});
});

module.exports = router;