angular.module('maps.directives', [])
.directive('mapDir', function() {
  return {
    restrict: 'E',
    scope: {
      data: '=',
	  mapId:'='
    },
    link: function(scope, element, attrs, controllers) {
		var test = 1;
    },
    template:'<div class="mapDiv"><leaflet id="{{mapId}}" center="center" markers="markers" watch-markers="no" layers="layers"></leaflet></div>',
	controller:"MapCtrl"
  };
});