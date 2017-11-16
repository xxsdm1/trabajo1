(function(){
	'use strict';
	angular.module('user.login')
		.controller('Login',Login);

	// Login.$inject=['reservasService'];

	function Login($scope, loginService,$location,$state){
		var vm=this;

			$scope.session = {
				idusuario: ""
			};

			init();
			function init(){
				console.log('estados',$state.get());
				
			}


			// function users(){
			// 	return librosService.usuarios().$promise.then(function(data){
			// 		$scope.session = data;
			// 		console.log("datos : ",data);
			// 	});  
			// }

		$scope.login = function(){
			return loginService.validarUsuario($scope.session).$promise.then(function(data){

				if(data.length == 0){
					alert("no hay usuario y sadam se la come");
						// $location.path('/libros');
						// $state.go('catalogos_libros');
				}else {
					alert("bienvenido: " + data[0].nombres);
					console.log($state);
				}
				console.log("se recupero el controlador : " + data.length);
		 		console.log("datos de login : ", data);
			});
		}
	}

}());