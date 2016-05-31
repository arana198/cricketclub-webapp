'use strict';
var homeControllers = angular.module(jcs.modules.home.name);

homeControllers.controller(jcs.modules.home.controllers.home, ['$http', jcs.modules.auth.services.authentication, function($http, Authentication) {
    var self = this;

    self.authenticated = function() {
        return Authentication.isAuthenticated();
    }
}]);