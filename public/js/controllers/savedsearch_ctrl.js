angular.module('savedsearch.controllers', [])
.controller('savedsearchCtrl',['$scope','$ionicModal','$state', '$timeout','$location', function($scope, $ionicModal,$state, $timeout,$location) {
	$scope.logout=function(){
		$location.url('sign-in');
	}
}])