angular.module('app.controllers', [])
.controller('AppCtrl',['$scope','$ionicModal','$state', '$timeout','$location', function($scope, $ionicModal,$state, $timeout,$location) {
	$scope.logout=function(){
		$location.url('sign-in');
	}
}])