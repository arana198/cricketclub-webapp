'use strict';
/* Controllers */
var aboutControllers = angular.module(jcs.modules.about.name);

aboutControllers.controller(jcs.modules.about.controllers.about, ['$http', '$scope', jcs.modules.about.services.about, function($http, $scope, AboutService) {
    var self = this;

    $scope.committeeMembers = AboutService.getCommitteeMembers();
}]);