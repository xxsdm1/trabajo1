(function(){
	'use strict';
	angular.module('catalogos.revistas')
		.run(appRun);

	appRun.$inject = ['routehelper'];
	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'catalogos_revistas',
			config : {
				url :'/revistas',
				templateUrl : 'app/catalogos/revistas/revistas.html',
				controlle : 'Revistas as vm',
				title : 'catalogos_revistas',
				settings : {
					nav : 3.2,
					content : 'Revistas'
				}
			}
		}];
	}



}());