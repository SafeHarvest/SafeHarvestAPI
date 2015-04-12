// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 
'leaflet-directive',
'ui.router',
'signin.controllers',
'app.controllers',
'createmap.controllers',
'createissue.controllers',
'searchMap.controllers',
'profile.controllers',
'maps.directives',
'reports.controllers',
'map.controllers',
'data.service'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	
 //note let's add teh controlers for the Menucontent via ng-controller
	 .state('app', {
	     url: "/app",
	     abstract: true,
	     templateUrl: "templates/menu.html",
		 controller:'AppCtrl'
	   })
	   .state('signin', {
	     url: "/sign-in",
	      templateUrl: "templates/sign-in.html",
	      controller: 'SignInCtrl'
	    })
   	 .state('app.menu', {
   	     url: "/menu",
   	     templateUrl: "templates/menu.html",
		 controller:'AppCtrl'
   	   })
	   
	   //note let's add teh controlers for the Menucontent via ng-controller
     	 .state('app.profile', {
     	     url: "/profile",
		     views: {
		       'menuContent': {
     	     	  	templateUrl: "templates/profile.html",
		       },
			   controller:'ProfileCtrl'
		     }
     	     
     	   })
       	 .state('app.createissue', {
       	     url: "/createissue",
  		     views: {
  		       'menuContent': {
       	     	  	templateUrl: "templates/createIssue.html",
  		       },
  			   controller:'CreateIssueCtrl'
  		     }
     	     
       	   })
         	 .state('app.createmap', {
         	     url: "/createmap",
    		     views: {
    		       'menuContent': {
         	     	  	templateUrl: "templates/createMap.html",
    		       }
    		     }
     	     
         	   })
           	 .state('app.searchmap', {
           	     url: "/searchmap",
      		     views: {
      		       'menuContent': {
           	     	  	templateUrl: "templates/searchMap.html",
      		       }
				  
      		     }
     	     
           	   })
			   .state('app.reports', {
         	     url: "/reports",
    		     views: {
    		       'menuContent': {
         	     	  	templateUrl: "templates/reports.html",
    		       }
    		     }
   	     
         	   });
 
  
    /*.state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('sign-in');
});