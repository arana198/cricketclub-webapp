var home = angular.module(jcs.modules.home.name);

home.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'app/components/home/home.html',
        controller : jcs.modules.home.controllers.home
    }).otherwise(jcs.modules.home.routes.home);
}]);