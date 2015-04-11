angular.module('createissue.controllers', [])
.controller('CreateIssueCtrl',['$scope','$ionicModal','$state', '$timeout','$location', function($scope, $ionicModal,$state, $timeout,$location) {
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
}])