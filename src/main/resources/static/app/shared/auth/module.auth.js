'use strict';

jcs.modules.auth = {
    name: 'auth',
    enums: {
        authorised: {
            authorised: 0,
            loginRequired: 1,
            notAuthorised: 2
        },
        permissionCheckType: {
            atLeastOne: 0,
            combinationRequired: 1
        }
    },
    events: {
        userLoggedIn: 'auth:user:loggedIn',
        userLoggedOut: 'auth:user:loggedOut'
    },
    controllers: {
        login: 'loginController'
    },
    services: {
        authentication: 'Authentication',
        authorization: 'Authorization'
    },
    routes: {
        login: '/login',
        logout: '/logout',
        notAuthorised: '/not-authorised'
    },
    endpoints: {
        me: '/api/me'
    }
};

var auth = angular.module(jcs.modules.auth.name, [
    'ngRoute',
    jcs.modules.core.name
]);

auth.run([
    '$rootScope',
    '$location',
    jcs.modules.auth.services.authorization,
    function ($rootScope, $location, Authorization) {
        var routeChangeRequiredAfterLogin = false, loginRedirectUrl;
        $rootScope.$on('$routeChangeStart', function (event, next) {
            var authorised;
            if (routeChangeRequiredAfterLogin && next.originalPath !== jcs.modules.auth.routes.login) {
                routeChangeRequiredAfterLogin = false;
                $location.path(loginRedirectUrl).replace();
            } else if (next.access !== undefined) {
                authorised = Authorization.authorize(next.access.requiredPermissions);
                if (authorised === jcs.modules.auth.enums.authorised.loginRequired) {
                    routeChangeRequiredAfterLogin = true;
                    loginRedirectUrl = next.originalPath;
                    //$location.path(jcs.modules.auth.routes.login);
                    window.location = jcs.modules.auth.routes.login;
                } else if (authorised === jcs.modules.auth.enums.authorised.notAuthorised) {
                    $location.path(jcs.modules.auth.routes.notAuthorised).replace();
                }
            }
        });
    }]);