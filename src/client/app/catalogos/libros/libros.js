(function(){
	'use strict';
	angular.module('catalogos.libros')
		.controller('Libros', Libros);

	Libros.$inject = ['$scope','librosService'];
	function Libros($scope,librosService) {
			var vm = this;
			$scope.ids = [1,2,3,4,5,6,7,8,9];
		 	vm.tipoBuscar = "descripcion";
			$scope.carreras = [
					{ id: 9, name: "Ingenieria de sismtemas" },
					{ id: 2, name: "Ingenieria Forestal" },
					{ id: 3, name: "Ingenieria Agroindustrial" },
					{ id: 1, name: "Veterinaria" },
					{ id: 5, name: "Ecoturismo" },
					{ id: 6, name: "Derecho" },
					{ id: 7, name: "Educacion" },
					{ id: 8, name: "Administracion" },
					{ id: 4, name: "Contabilidad" }
	            ];

			$scope.buscar;
			$scope.libros = [];

			libros();
			function libros(){
				return librosService.listaLibros().$promise.then(function(data){
					$scope.libros = data;
					console.log("datos : ",data);
				});  
			}

			$scope.select = function(index){
				console.log("posicion",index);
				$scope.carrera = $scope.carreras[index].id;
			}


	}

}());

