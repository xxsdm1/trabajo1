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
	validarUsuario : function(data, callback){
		console.log("se recupero el usuario modelo : " +  data)
		 if(connection)
		{	
			var sql ='SELECT * FROM c_usuario WHERE id_usuario = ' + connection.escape(data.idusuario);
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
	}
};

module.exports = dataModels;
