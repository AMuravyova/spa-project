'use strict';

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
            /******/return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 8);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__ = __webpack_require__(7);
    /**
     * Created by amurav on 23.03.2017.
     */

    var compApp = angular.module('spApp.components', []).component('listComp', __WEBPACK_IMPORTED_MODULE_3__list_comp_list_component__["a" /* listComp */]).component('headerComp', __WEBPACK_IMPORTED_MODULE_2__header_comp_header_comp_component__["a" /* headerComp */]).component('accountComp', __WEBPACK_IMPORTED_MODULE_0__account_comp_account_component__["a" /* accountComp */]).component('logoComp', __WEBPACK_IMPORTED_MODULE_4__logo_comp_logo_component__["a" /* logoComp */]).component('menuComp', __WEBPACK_IMPORTED_MODULE_5__menu_comp_menu_component__["a" /* menuComp */]).component('statisticComp', __WEBPACK_IMPORTED_MODULE_6__statistic_comp_statistic_component__["a" /* statisticComp */]).component('centralComp', __WEBPACK_IMPORTED_MODULE_1__central_comp_central_component__["a" /* centralComp */]).name;
    /* harmony export (immutable) */__webpack_exports__["a"] = compApp;

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 23.03.2017.
     */

    var accountComp = {
        templateUrl: 'components/account-comp/account.template.html',
        controller: function AccountCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = accountComp;

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 23.03.2017.
     */

    var centralComp = {
        templateUrl: 'components/central-comp/central.template.html',
        controller: function CentralCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = centralComp;

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 22.03.2017.
     */

    var headerComp = {
        templateUrl: 'components/header-comp/header-comp.template.html',
        controller: function HeaderCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = headerComp;

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 22.03.2017.
     */

    var listComp = {
        templateUrl: 'components/list-comp/list.template.html',
        controller: function DocListController() {
            this.docs = [{
                name: 'Doc 1',
                type: '.txt'
            }, {
                name: 'Doc 2',
                type: '.txt'
            }, {
                name: 'Doc 3',
                type: '.txt'
            }, {
                name: 'Doc 4',
                type: '.txt'
            }];
        }
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = listComp;

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 23.03.2017.
     */

    var logoComp = {
        templateUrl: 'components/logo-comp/logo.template.html',
        controller: function LogoCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = logoComp;

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 23.03.2017.
     */

    var menuComp = {
        templateUrl: 'components/menu-comp/menu.template.html',
        controller: function MenuCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = menuComp;

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /**
     * Created by amurav on 23.03.2017.
     */

    var statisticComp = {
        templateUrl: 'components/statistic-comp/statistic.template.html',
        controller: function StatisticCompController() {}
    };
    /* harmony export (immutable) */__webpack_exports__["a"] = statisticComp;

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_index_js__ = __webpack_require__(0);
    /**
     * Created by amurav on 23.03.2017.
     */

    angular.module('spApp', [__WEBPACK_IMPORTED_MODULE_0__components_index_js__["a" /* compApp */]]);

    /***/
}]);