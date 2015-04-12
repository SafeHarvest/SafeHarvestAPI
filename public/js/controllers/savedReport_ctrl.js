angular.module('savedreport.controllers', [])
.controller('savedreportCtrl',['$scope','$ionicModal','$state', '$timeout','$location', function($scope, $ionicModal,$state, $timeout,$location) {
	$scope.logout=function(){
		$location.url('sign-in');
	}
}])