'use strict';

// Declare app level module which depends on views, and components
angular.module('demo', [])
    .controller('Hello', function ($scope, $http) {
        $http.get('http://localhost:8080/greeting').then(function (response) {
            $scope.greeting = response.data;
        })
    })