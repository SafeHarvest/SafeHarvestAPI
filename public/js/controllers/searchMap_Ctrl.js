angular.module('searchMap.controllers',[])
.controller('SearchMapCtrl',[ "$scope",'$http','dataService', function($scope,$http,dataService)  {
		
	$scope.values = [{
	  id: 1,
	  label: 'aLabel',
	  subItem: { name: 'aSubItem' }
	}, {
	  id: 2,
	  label: 'bLabel',
	  subItem: { name: 'bSubItem' }
	}];

	$scope.selected = { name: 'aSubItem' };
	
  	$scope.changeLat = function(lat){
		alert(lat);
  	}
  	$scope.changeLong = function(Long){
		alert(Long);
  	}
  	$scope.changeAddress = function(address){
		alert(address);
  	}
	
  	$scope.geoLocate = function(){
		alert("geoLocate");
  	}

}]);