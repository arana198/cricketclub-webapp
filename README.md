cricketclub-webapp
================

cricketclub-webapp (CCW) is a front-end service that provides UI for cricket club management api. The service is written in Angular 1.5.5 using Spring as client-side backend with support of Spring Oauth2 SSO for Authorization and Authentication.

Dependencies
------------

This section lists all of the external dependencies of cricketclub-webapp.
The address, port and other information required to connect to each dependency can be found in the environment-specific external configuration
(i.e. application.properties in the application-configuration repository).

### Data Store
* Redis - for cookies caching

Endpoints
--------

The UI endpoint lives under the root directory and can be accessed locally in browser via localhost:8002/

Installation
------------

The project requires Java 8

To create the jars for the web service run ``gradlew build``.

Running
-------

The service can be started using spring-boot gradle tasks i.e ``gradlew bootRun``,
manually running the .jar file ``java -jar cricketclub-webapp.jar``
or by using the deployment process scripts.

Contributing
------------

**Owners**

arana198
