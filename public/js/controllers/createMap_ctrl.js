angular.module('createmap.controllers', [])
.controller("CreateMapCtrl", [ "$scope",'$http','dataService', 'leafletData', function($scope,$http,dataService, leafletData) {

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
    
       
    leafletData.getMap().then(function(map){

        function testObject(lat, lng, message, marker) {
            this.lat = lat,
            this.lng = lng,
            this.message = message,
            this.marker = marker;
        }
        var testObjects = [
        new testObject(41.4822, -81.6697, 'objet1', L.marker([]))
        ,        
        new testObject(41.485, -81.664, 'object2', L.marker([]))
        ,        
        new testObject(41.483, -81.662, 'object3', L.marker([]))
        ];

        // function onMarkerClick(e){
        //     var marker = e.target;
        //     var latlng = marker.getLatLng();
        //     $scope.lat = latlng.lat;
        //     $scope.lng = latlng.lng;
        // }

        function addMarkerToMap(testObjects){
            for(var i = 0; i < testObjects.length; i++){
                var marker = testObjects[i].marker;
                marker.setLatLng(L.latLng(testObjects[i].lat, testObjects[i].lng));
                marker.objectId = testObjects[i].message;
                marker.addTo(map);


                testObjects[i].marker.on("click", onMarkerClick);
                // var marker = L.marker([testObjects[i].lat, testObjects[i].lng])
                // marker.bindPopup(testObjects[i].message);
                // marker.addTo(map);
            }
        }

        var popup = L.popup();
        var marker = L.marker([],{
            draggable: true
        });       

        function onDragMarker(e){
          var latlng = e.target.getLatLng();
          $scope.lat = latlng.lat.toFixed(4);
          $scope.lng = latlng.lng.toFixed(4); 
        }

        function onMapClickAddMarker(e){
            var test = dataService.getData();
            marker.setLatLng(e.latlng)
            .addTo(map);

            $scope.lat = e.latlng.lat.toFixed(4);
            $scope.lng = e.latlng.lng.toFixed(4);
        }




        map.on("click", onMapClickMarker);
        addMarkerToMap(testObjects);
    });

        //marker.on('drag', onDragMarker);
       // map.on("click", onMapClickAddMarker);
        //addMarkerToMap(testObjects);
    //})


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