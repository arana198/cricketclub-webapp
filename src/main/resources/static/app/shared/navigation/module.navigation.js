'use strict';

jcs.modules.navigation = {
    name: 'navigation',
    directives: {
        navbar: 'navbar'
    },
    controllers: {
        navigation: "NavigationController"
    }
};

angular.module(jcs.modules.navigation.name, []);