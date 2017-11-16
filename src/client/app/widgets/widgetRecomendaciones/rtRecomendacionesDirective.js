(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngRecomendaciones', ngRecomendaciones);


	function ngRecomendaciones(){
		var config = {
			templateUrl : 'app/widgets/widgetRecomendaciones/rtRecomendacionesTemplate.html',
			restrict : 'E'
		};

		return config;
	}
	
}());