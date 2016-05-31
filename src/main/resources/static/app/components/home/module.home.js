'use strict';
jcs.modules.home = {
    name: 'home',
    controllers: {
        home: 'HomeController'
    },
    routes: {
        home: "/"
    }
};

angular.module(jcs.modules.home.name, []);