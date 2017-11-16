(function(){
	'use strict';

	angular.module('app.data')
		.factory('librosService',librosService);


	function librosService($resource,$stateParams){

		var resource  =  $resource('/libros/:idLibro',{idLibro : '@id'},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});

		var service = {
			getLibro : getLibro,
			listaLibros : listaLibros,
			reservarLibros : reservarLibros
		};

		return service;
		function getLibro(){
		 	var idLibro = $stateParams.idLibro;
		 	return resource.get({idLibro},function(data){
		 		return data;
		 	});
		 }



		function listaLibros(){
			return resource.query(function(data){
				return data;
			});
		}



		function reservarLibros(reserva){
			return resource.save(reserva,function(data){
				return data;
			});
		}

	}

}());