'use strict';
var authz = angular.module(jcs.modules.auth.name);
var permissionList;

authz.factory(jcs.modules.auth.services.authorization, [jcs.modules.auth.services.authentication, function (Authentication) {
    var authz = {
        init: function (permissions) {
            permissionList = permissions;
        },
        authorize: function (requiredPermissions) {
            var result = jcs.modules.auth.enums.authorised.authorised,
                user = Authentication.getCurrentLoginUser(),
                hasPermission = false;

            if (user === undefined && requiredPermissions !== undefined) {
                // Login required as no specific permissions are specified.
                result = jcs.modules.auth.enums.authorised.loginRequired;
            } else if (user !== undefined && requiredPermissions === undefined) {
                // Login not required as no specific permissions are specified.
                result = jcs.modules.auth.enums.authorised.authorised;
            } else if (requiredPermissions) {
                var requiredPerm;
                for (var i = 0; i < permissionList.roles.length; i += 1) {
                    if(angular.lowercase(permissionList.roles[i].name) === angular.lowercase(requiredPermissions)) {
                        requiredPerm = permissionList.roles[i];
                    }
                }

                if(requiredPerm === undefined) {
                    hasPermission = false;
                } else {
                    for(var i = 0; i < user.permissions.length; i += 1) {
                        if(user.permissions[i].presedenceOrder <= requiredPerm.presedenceOrder) {
                            hasPermission = true;
                            break;
                        }
                    }
                }

                result = hasPermission ? jcs.modules.auth.enums.authorised.authorised : jcs.modules.auth.enums.authorised.notAuthorised;
            }

            return result;
        }
    }
    
    return authz;
}]);