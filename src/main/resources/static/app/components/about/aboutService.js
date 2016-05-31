'use strict';
var aboutService = angular.module(jcs.modules.about.name);

aboutService.service(jcs.modules.about.services.about, ['$http', '$q', function($http, $q) {

    var about = {
        getCommitteeMembers : function() {
            var defer = $q.defer();
            $http.get(jcs.modules.about.endpoints.committeeMembers).success(function(data) {
                return data;
            }).error(function() {
                defer.reject('Unknown Username / Password combination');
                return;
            });
        }
    }

    return about;
}]);