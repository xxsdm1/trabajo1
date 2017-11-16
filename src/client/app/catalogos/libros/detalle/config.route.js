(function(){
	'use strict';
	angular.module('libros.detalle')
		.run(appRun);
	appRun.$inject = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'catalogos_libros_detalle',
			config : {
				url : '/libro/:idLibro',
				templateUrl : 'app/catalogos/libros/detalle/detalle.html',
				controller : 'Detalle as vm',
				title : 'catalogos_libros_detalle',
			}
		}];
	}

}());