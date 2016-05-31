'use strict';
jcs.modules.about = {
    name: 'about',
    controllers: {
        about: 'AboutController'
    },
    services: {
        about: "AboutService"
    },
    routes: {
        about: "/about"
    },
    endpoints: {
        committeeMembers : "/api/v1.0/committees"
    }
};

angular.module(jcs.modules.about.name, []);