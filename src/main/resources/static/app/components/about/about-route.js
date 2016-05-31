var about = angular.module(jcs.modules.about.name);

about.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl : 'app/components/about/about.html',
        controller : jcs.modules.about.controllers.about
    });
}]);