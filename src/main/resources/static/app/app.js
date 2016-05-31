'use strict';

// Declare app level module which depends on views, and components
var app = angular.module(jcs.modules.app.name, [
    'ngRoute',
    jcs.modules.core.name,
    jcs.modules.auth.name,
    jcs.modules.header.name,
    jcs.modules.navigation.name,
    jcs.modules.footer.name,
    jcs.modules.home.name,
    jcs.modules.about.name
]);

var permissionList;

angular.element(document).ready(function() {
    $.get('/api/v1.0/roles', function(data) {
        permissionList = data;
        angular.bootstrap(document, [jcs.modules.app.name]);
    });
});

app.config([
    '$locationProvider',
    '$httpProvider',
    function($locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }]);

app.run([
    jcs.modules.auth.services.authorization,
    jcs.modules.auth.services.authentication,
    function(Authorization, Authentication) {
        Authorization.init(permissionList);
        Authentication.init();
    }]);