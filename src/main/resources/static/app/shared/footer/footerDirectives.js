'use strict';
var footer = angular.module(jcs.modules.footer.name);

footer.directive(jcs.modules.footer.directives.footer, function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute
        replace: true,
        templateUrl: "app/shared/footer/footer.html"
    }
});