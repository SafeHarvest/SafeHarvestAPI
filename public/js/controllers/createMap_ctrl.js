angular.module('createmap.controllers', [])
.controller("CreateMapCtrl", [ "$scope",'$http','dataService', 'leafletData','$timeout',function($scope,$http,dataService, leafletData, $timeout) {
	$scope.local = {};
	$scope.loading=undefined;
	$scope.local.data={lat:null,lng:null};
	
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
	
	dataService.getData();
	
  	$scope.changeLat = function(lat){
		$timeout(function(){
			if($scope.oldLat==lat)
				$scope.$broadcast("addMarker",$scope.local.data);
		},500)
		$scope.oldLat = angular.copy(lat);
  	}
  	$scope.changeLong = function(lng){
		
		$timeout(function(){
			if($scope.oldLng==lng)
				$scope.$broadcast("addMarker",$scope.local.data);
		},500)
		$scope.oldLng = lng;
  	}
  	/*$scope.changeAddress = function(address){
		alert(address);
  	}*/
	
	var getLoc = function(){
	    if (navigator.geolocation) {
			$scope.loading="We are seraching for your location";
	        navigator.geolocation.getCurrentPosition(_showPosition);
	    } else { 
	        alert("Geolocation is not supported by this browser.");
	    }
	}

	var _showPosition = function(position) {
		$scope.loading=undefined;
	    $scope.local.data.lat=position.coords.latitude;
	    $scope.local.data.lng = position.coords.longitude;
		$scope.$broadcast("addMarker",$scope.local.data);
	}
	
  	$scope.geoLocate = function(){
		getLoc();
  	}
}])