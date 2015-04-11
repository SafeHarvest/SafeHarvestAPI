/*angular.module('starter.controllers', [])



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('AppCtrl',['$scope','$ionicModal','$state', '$timeout','$location', function($scope, $ionicModal,$state, $timeout,$location) {
	$scope.logout=function(){
		$location.url('sign-in');
	}
}])

.controller("mapsCtrl", [ "$scope",'$http',function($scope,$http) {

	
    angular.extend($scope, {
        center: {
            lat: 38.857,
            lng: -107.886,
            zoom: 2
        },
        
        layers: {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                mapbox_terrain: {
                    name: 'Mapbox Terrain',
                     url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    layerOptions: {
                        apikey: 'pk.eyJ1IjoidGFzaGE0bSIsImEiOiJHeFpiRVNjIn0.135C1-ww2KNenVJzuEDO_w',
                        mapid: 'tasha4m.lkam1h8e'
                    }
                }
            }
        }
    });
	
  	// Simple POST request example (passing data) :
  	$http.post('/someUrl', {msg:'hello word!'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
	
	$http.get('http://echo.jsontest.com/conditions/frightful').then(function(resp) {
	    $scope.conditions = resp.data.conditions;
	  }, function(err) {
	    console.error('ERR', err);
	    // err.status will contain the status code
	  })
}]).controller('SignInCtrl',['$scope','$state','$timeout',function($scope, $state,$timeout) {
  
  $scope.signIn = function(user) {
	
    console.log('Sign-In', user);
	$timeout(function(){
    	$state.go('app.menu');
	},1000);
  };
  
}])*/

