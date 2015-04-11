angular.module('maps.directives', [])
.directive('mapDir', function() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: function(scope, element, attrs, controllers) {
		var test = 1;
    },
    template:'<div class="mapDiv"><leaflet center="center" markers="markers" layers="layers"></leaflet></div>',
	controller:"CreateMapCtrl"
  };
});