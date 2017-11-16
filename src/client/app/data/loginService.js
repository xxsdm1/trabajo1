(function(){
	"use strict";
	angular.module('app.data')
		.factory('loginService',loginService);
	
	function loginService($resource){
		var resource=$resource('/',{},{
			'get':    {method:'GET', isArray : true},
			'query': { method: 'GET', isArray : true},
			'login': { method: 'POST', url: '/login', isArray : true},
            'update': { method: 'PUT', isArray : true},
	        'save': { method: 'POST', isArray : true},
	        'remove': { method:'DELETE'},
		});

		var service = {
			validarUsuario : validarUsuario
		};

		return service;

		function validarUsuario(data){
			console.log("se recupero el usuario servicio : " + data.idusuario);
			return resource.login(data, function (data){
				return data;
			});
		}
	}
}());
