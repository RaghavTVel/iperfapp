'use strict';

var myApp = angular.module('iperfApp', ['ngRoute',]);

myApp.config(['$routeProvider',function($routeProvider) {
         $routeProvider.
             when('/', {
            	 templateUrl: '/template/index.html',
             }).
             when('/history', {
                 templateUrl: '/template/history.html',
             }).
             otherwise({
                 redirectTo: '/'
             });
    }]);


	myApp.controller('sendIPs', function($scope,$http) {
    $scope.sendingIPs = function(){
    	$http({
	        method: 'POST',
	        url: '/ipsender',
	        data: {serverIP: $scope.serverIP,serverPORT: $scope.serverPORT}
    		}).then(function(response) {
    			$scope.output = response.data;
    			console.log('Iperf Output',$scope.output);
            }, function(error) {
                console.log(error);
            });
		    }   
			});
	
	myApp.controller('getHistory', function($scope,$http) {
	    $scope.gettingHistory = function(){
	    	$http({
		        method: 'GET',
		        url: '/historygetter',
		        data: {}
	    		}).then(function(response) {
	    			$scope.historylist = response.data;
	    			console.log('History Data',$scope.historylist);
	            }, function(error) {
	                console.log(error);
	            });
			    }   
				});