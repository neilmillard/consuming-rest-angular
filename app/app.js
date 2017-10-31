'use strict';

var app = angular.module('demo',['ui.router','ngStorage']);

// TODO: need these in env variables
app.constant('urls', {
    BASE: '//', // 'http://localhost:8080/',
    USER_SERVICE_API : '//api/user/' // 'http://localhost:8080/api/user/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]
);
// Declare app level module which depends on views, and components
app.controller('Hello', function ($scope, $http, urls) {
    $http.get(urls.BASE + 'greeting').then(function (response) {
        $scope.greeting = response.data;
        })
    }
);
