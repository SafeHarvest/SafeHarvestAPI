angular.module('signin.controllers', [])
.controller('SignInCtrl',['$scope','$state','$timeout',function($scope, $state,$timeout) {
  
  $scope.signIn = function(user) {
	
    console.log('Sign-In', user);
	$timeout(function(){
    	$state.go('app.createmap');
	},1000);
  };
  
}])