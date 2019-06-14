/**
 * Created by amurav on 23.03.2017.
 */
import uiRouter from 'angular-ui-router';
import {compApp} from './components/index';
import {pageApp} from './pages/index';
import {Routes} from './routers.config';
import uiBootstrap from 'angular-ui-bootstrap';
import restangular from 'restangular';


export const spApp = angular.module('spApp', [compApp, pageApp, uiRouter, 'ngResource', restangular, uiBootstrap])
    .config(['$stateProvider', '$urlRouterProvider', Routes])
    .run(
        (Restangular) => {
            Restangular.setBaseUrl('http://localhost:3000/appDB/');

            Restangular.setRequestInterceptor(
                (elem, operation, what) => {

                    if (operation === 'put') {
                        elem._id = undefined;
                        return elem;
                    }
                    return elem;
                })
        }
    )
    .run(['$rootScope', '$state', '$stateParams', 'authService',
        ($rootScope, $state, $stateParams, authService) => {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeStart', (event, toState) => {
                authService.checkAccess(event, toState);
            })
        }]);




























// .$controller('spController', function ($scope, Restangular) {
//     Restangular.all('tasks').getList().then(function(result) {
//         $scope.tasks = result;
//     });


// Standardize data format (extract from meta-data where needed)
/*app.config(function(RestangularProvider) {
 // add a response intereceptor
 RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
 var extractedData;
 // .. to look for getList operations
 if (operation === "getList") {
 // .. and handle the data and meta data
 extractedData = data.tasks;
 } else {
 extractedData = data;
 }
 return extractedData;
 });
 });
 */
// In this file we do the following:
//
// we define the application name and the dependency on restangular,
//     we configure the application by setting the base-url such that restangular can take care of the url-constructions (define once, use everywhere),
// we define the controller functionality (which is called from the html controller (mainCtrl), and
// we ensure that we always get the data in the same format (as a list)
