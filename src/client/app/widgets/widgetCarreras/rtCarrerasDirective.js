(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngCarreras',ngCarreras);

	function ngCarreras(){

		var config = {
			templateUrl : 'app/widgets/widgetCarreras/rtCarrerasTemplate.html',
			restrict : 'E'
		};
		return config;
	}

}());