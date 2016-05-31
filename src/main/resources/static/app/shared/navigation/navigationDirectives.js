'use strict';
var header = angular.module(jcs.modules.header.name);

header.directive(jcs.modules.navigation.directives.navbar, function () {
    return {
        restrict: 'E', //This menas that it will be used as an element
        replace: true,
        templateUrl: "app/shared/navigation/navigation.html",
        controller: jcs.modules.navigation.controllers.default
    }
});