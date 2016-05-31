'use strict';
var auth = angular.module(jcs.modules.auth.name);

auth.factory(jcs.modules.auth.services.authentication, [
    '$q',
    '$timeout',
    '$http',
    '$location',
    'eventbus',
    function ($q, $timeout, $http, $location, eventbus) {
        var currentUser;
        var auth = {
            createUser : function(name, permissions) {
                return {
                    username: name,
                    permissions: permissions
                };
            },
            authenticate : function(callback) {
                var defer = $q.defer();
                // only here to simulate a network call!!!!!
                $timeout(function () {
                    $http.get(jcs.modules.auth.endpoints.me).success(function(data) {
                        if(data.username) {
                            currentUser = auth.createUser(data.username, data.roles);
                        }
                    }).error(function() {
                        defer.reject('Unknown Username / Password combination');
                        callback && callback(undefined);
                        return;
                    });

                    defer.resolve(currentUser);
                    eventbus.broadcast(jcs.modules.auth.events.userLoggedIn, currentUser);
                }, 1000);

                return defer.promise;
            },
            login : function () {
                window.location = jcs.modules.auth.routes.login;
            },
            logout : function () {
                // we should only remove the current user.
                // routing back to login login page is something we shouldn't
                // do here as we are mixing responsibilities if we do.
                currentUser = undefined;
                eventbus.broadcast(jcs.modules.auth.events.userLoggedOut);
                $location.path(jcs.modules.home.routes.home);
                $http.post(jcs.modules.auth.routes.logout, {});
            },
            getCurrentLoginUser : function () {
                return currentUser;
            },
            isAuthenticated : function() {
                return currentUser !== undefined
            },
            init : function () {
                auth.authenticate(function(currentUser) {
                    if (currentUser) {
                        $location.path(auth.path);
                    }
                });
            }
        }
        
        return auth;
    }
]);