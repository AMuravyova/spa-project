'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compApp = undefined;

var _account = require('./account-comp/account.component');

var _central = require('./central-comp/central.component');

var _headerComp = require('./header-comp/header-comp.component');

var _list = require('./list-comp/list.component');

var _logo = require('./logo-comp/logo.component');

var _menu = require('./menu-comp/menu.component');

var _statistic = require('./statistic-comp/statistic.component');

var compApp = exports.compApp = angular.module('spApp.components', []).component('listComp', _list.listComp).component('headerComp', _headerComp.headerComp).component('accountComp', _account.accountComp).component('logoComp', _logo.logoComp).component('menuComp', _menu.menuComp).component('statisticComp', _statistic.statisticComp).component('centralComp', _central.centralComp).name; /**
                                                                                                                                                                                                                                                                                                                                                                                                   * Created by amurav on 23.03.2017.
                                                                                                                                                                                                                                                                                                                                                                                                   */