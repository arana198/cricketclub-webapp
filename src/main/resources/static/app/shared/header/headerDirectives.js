'use strict';
var header = angular.module(jcs.modules.header.name);

header.directive(jcs.modules.header.directives.header, function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute
        replace: true,
        templateUrl: "app/shared/header/header.html"
    }
});