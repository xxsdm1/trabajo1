(function(){
	'use strict';
	angular.module('libros.detalle')
		.controller('Detalle',Detalle);

	Detalle.$inject = ['librosService'];

	function Detalle(librosService){
		var vm = this;
		vm.libro;
		init();
		function init(){
			return librosService.getLibro().$promise.then(function(data){
				vm.libro = data;
				console.log("detalles s:",	vm.libro);
				return vm.libro;
			});
		}
		vm.reservar =  function(){
			var reserva = {id_usuario : 41452095 ,id_ejemplar : vm.libro[0].id_ejemplar};
			return librosService.reservarLibros(reserva).$promise.then(function(data){
				return data;
			});
		}
	}


}());