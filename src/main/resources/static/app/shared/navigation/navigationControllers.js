'use strict';
/* Controllers */
var navigationControllers = angular.module(jcs.modules.navigation.name);

navigationControllers.controller(jcs.modules.navigation.controllers.navigation, ['$route', jcs.modules.auth.services.authentication, function($route, Authentication) {

    var self = this;

    self.tab = function(route) {
        return $route.current && route === $route.current.controller;
    };

    self.authenticated = function() {
        return Authentication.isAuthenticated();
    }

    self.login = function() {
        if(!Authentication.isAuthenticated()) {
            Authentication.login();
        }
    }

    self.logout = function() {
        Authentication.logout();
    }
}]);