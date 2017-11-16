'use strict';
var mysql = require('../../config/mysql');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'bibliotecadb',
   port: 3306
});



var dataModels ={
	getLibros : function(callback){
		 if(connection)
		{	
			var sql ='SELECT*FROM c_libro  INNER JOIN c_ejemplar  ON c_libro.id_libro = c_ejemplar.id_ejemplar INNER JOIN c_autores ON c_ejemplar.id_autor = c_autores.id_autor ';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	getLibro: function(idEjemplar,callback){
		var sql ='SELECT*FROM c_ejemplar INNER JOIN c_libro ON c_ejemplar.id_ejemplar = c_libro.id_libro INNER JOIN c_autores ON c_ejemplar.id_autor = c_autores.id_autor where c_ejemplar.id_ejemplar ='+connection.escape(idEjemplar)+'';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
	},
	reservar : function(reserva,callback){

		var sql ='INSERT INTO c_prestamo(id_usuario,id_ejemplar) VALUES('+connection.escape(reserva.id_usuario)+','+ connection.escape(reserva.id_ejemplar)+')';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
	}
};

module.exports = dataModels;
