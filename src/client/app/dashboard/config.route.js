(function(){
	'use strict';

	angular.module('app.dashboard')
		.run(appRun);

	appRun.$inject  = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'dashboard',
			config : {
				url :'/',
				templateUrl : 'app/dashboard/dashboard.html',
				title : 'dashboard',
				settings : {
					nav : 1 ,
					content : 'Dashboard'
				}
			}
		}];
	}

}());