angular.module('map.controllers', [])
.controller("MapCtrl", [ "$scope",'$http','dataService', 'leafletData', function($scope,$http,dataService, leafletData) {
	
	angular.extend($scope, {
		center: {
			lat: 49.34637449999999,
			lng: -88.70785409999999,
			zoom: 2
		},
		events: {
		    map: {
		      enable: ['dblclick', 'drag', 'blur', 'touchstart'],
		      logic: 'emit'
		   }
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
	
if($scope.mapId==="create"){
	
	$scope.$on('leafletDirectiveMap.dblclick', function(event, args){
		$scope.markers=[];
		var marker = event.target;
		var latlng = args.leafletEvent.latlng;
		$scope.data.lat = latlng.lat;
		$scope.data.lng = latlng.lng;
		
		$scope.markers.push({
			lat: latlng.lat,
			lng: latlng.lng,
		    message: "A Message"
		});
	});
	
	/*$scope.$watchCollection('[data.lat,data.lng]', function(data) {
		if(angular.isDefined(data[0]) && angular.isDefined(data[1])){
			$scope.markers=[];
		
			$scope.markers.push({
				lat: data[0],
				lng: data[1],
		    	message: "A Message"
			});
			
			$scope.center={
				lat: data[0],
				lng: data[1],
				zoom: 8
			}
		}
	},true);*/
	
	$scope.$on("addMarker",function(event,data){
			if(angular.isDefined(data.lat) && angular.isDefined(data.lng)){
				$scope.markers=[];
		
				$scope.markers.push({
					lat: data.lat,
					lng: data.lng,
			    	message: "A Message"
				});
			
				$scope.center={
					lat: data.lat,
					lng: data.lng,
					zoom: 8
				}
			}

		
		});
}else{
	
	$scope.$on('leafletDirectiveMap.load', function(event, args){
		$scope.markers=[];
		for(var i = 0 ; i<100; i++){
			$scope.markers.push({
				lat: 42+i,
				lng: 81+i,
	    		message: "A Message"
			});
		}
	
		$scope.center={
			lat: 42,
			lng: 81,
			zoom: 2
		}
	});
	
	
}
	
	/*$scope.$on('leafletDirectiveMap.click', function(event){
		_addMarkerToMap();

	});*/
	// Simple POST request example (passing data) :
	/*$http.post('https://rocky-badlands-6969.herokuapp.com/').
	success(function(data, status, headers, config) {
	$scope.test = data;
	// this callback will be called asynchronously
	// when the response is available
	}).
	error(function(data, status, headers, config) {
	// called asynchronously if an error occurs
	// or server returns response with an error status.
	});*/
	/*$http.get('http://echo.jsontest.com/conditions/frightful').then(function(resp) {
		$scope.conditions = resp.data.conditions;
		}, function(err) {
		console.error('ERR', err);
		// err.status will contain the status code
		})*/

		/*var promise = dataService.getData();
		promise.then(function(result) {
		//alert('Success: ' + result);
		$scope.conditions2 = result;
		}, function(reason) {
		//alert('Failed: ' + reason);
		}, function(update) {
		//alert('Got notification: ' + update);
		});*/

	}])