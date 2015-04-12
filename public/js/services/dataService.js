angular.module('data.service', [])
.service('dataService',[ '$http','$q', function($http,$q){
    var _getData = function(){
		var deferred = $q.defer();
		
	  	$http.get('https://rocky-badlands-6969.herokuapp.com/crops').then(function(data,status,headers,config) {
			deferred.resolve(data);
	  	  }, function(err) {
	  	    //console.error('ERR', err);
	  	    // err.status will contain the status code
	  	  })
		  
		  return deferred.promise;
    }
	
	return{
		getData:_getData
	}
}]);