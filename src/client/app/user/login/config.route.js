(function(){
	'use strict';
	angular.module('user.login')
		.run(appRun);
	appRun.$inject = ['routehelper'];
	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'login',
			config : {
				url:'/login',
				controller : 'Login as vm',
				templateUrl : 'app/user/login/login.html',
				settings : {
					nav :6,
					content :'Login'
				}
			}
		}];
	}

}());