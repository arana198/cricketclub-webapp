'use strict';

jcs.modules.core = {
    name: 'core',
    services: {
        eventbus: 'eventbus'
    }
};

angular.module(jcs.modules.core.name, []);